import "./editProfilePage.scss";
import TopNav from "../../components/TopNav";
import { Link, useNavigate } from "react-router-dom";

import api from "../../core/api";

import { ChangeEvent, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

const EditProfilePage = () => {

  const { addToast } = useToasts();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [photoBase64Image, setPhotoBase64Image] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false)

  const [imageData, setImageData] = useState<any>(null);

  const { isPending, data, isSuccess } = useQuery({
    queryKey: ["userData"],
    queryFn: api.getUserProfile,
    staleTime: Infinity,
  });
  
  useEffect(() => {
    if(isSuccess){
      setName(data.name);
      setBio(data.bio);
      setPhone(data.phone);
      setImageData(data.photo);
      setPhotoBase64Image('');
    }
  }, [data, isSuccess]);

  const updateUserProfile = useMutation({
    mutationFn: (user: {
      name: string;
      bio: string;
      phone: string;
      photo: any;
      base64Image:string;
    }) => {
      setLoading(true)
      return api.putUserProfile(user.name, user.bio, user.phone, user.photo)},
    onMutate: async(newUser)=>{
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      

      await queryClient.cancelQueries({ queryKey: ['userData'] })

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData(['userData'])
      // Optimistically update to the new value
      queryClient.setQueryData(['userData'],{...newUser, email:previousUser.email, createdAt: previousUser.createdAt})
      
      navigate("/profile");
      
      // Return a context with the previous and new todo
      return { previousUser, newUser }
    },
    onError: (error, variables, context) => {
      // An error happened!
      const msg = error.response?.data.message
        ? error.response.data.message
        : error.message;

      addToast(`${msg}`, { appearance: "error" });

      // undo the optimistic update if the request fail
      queryClient.setQueryData(
        ['todos'],
        context?.previousUser,
      )
      setLoading(false)
    },
    onSuccess:(data, variables, context)=> {
      addToast(`${data.data.message}`, { appearance: "success" });
      queryClient.invalidateQueries({ queryKey: ["userData"] }),
      setLoading(false)
      navigate("/profile");

    },
    onSettled: (newUser)=>{
      queryClient.invalidateQueries({ queryKey: ['userData'] })
     
      setLoading(false)
      navigate("/profile");
    }
  });
  
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    
    if (!file) {
      return; // Handle potential error or no file selected
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      setPhotoBase64Image(base64Image);
    };

    reader.readAsDataURL(file);
    setImageData(file)
  };

  if (isPending) {
    return <Loading loading = {true}/>;
  }


  return (
    <>
      <TopNav />
      <div className="editProfilePage">
        <Link to="/profile" className="editProfilePage__back">
          <i className="material-symbols-outlined">arrow_back_ios</i>
          Back
        </Link>
        <div className="editProfilePage__edit">
          <Loading loading={loading}/>
          <div className="editProfilePage__edit__titles">
            <h1 className="editProfilePage__edit__title">Change Info</h1>
            <h2 className="editProfilePage__edit__subtitle">
              Changes will be reflected to every services
            </h2>
          </div>

          <label className="editProfilePage__edit__photoInput">
            <div className="editProfilePage__edit__photoInput__photo">
              <img
                alt=""
                src={photoBase64Image}
                style={{ width: "7.2rem", height: "7.2rem" }}
              />
              <input 
              data-test-id="edit-photo"
              type="file"
              onChange={handleFileChange} />
              <i className="material-icons">photo_camera</i>
            </div>
            <p className="editProfilePage__edit__photoInput__text">
              CHANGE PHOTO
            </p>
          </label>

          <div className="editProfilePage__edit__textInputs">
            <label className="editProfilePage__edit__input">
              <div className="editProfilePage__edit__inputName">Name</div>
              <input
                className="editProfilePage__edit__inputValue"
                data-test-id="edit-name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Enter your name..."
              />
            </label>

            <label className="editProfilePage__edit__input">
              <div className="editProfilePage__edit__inputName">Bio</div>
              <textarea
                data-test-id="edit-bio"
                className="editProfilePage__edit__inputValue"
                onChange={(e) => setBio(e.target.value)}
                defaultValue={bio}
                id=""
                cols={30}
                rows={10}
                placeholder="Enter your bio..."
              ></textarea>
            </label>

            <label 
            className="editProfilePage__edit__input">
              <div className="editProfilePage__edit__inputName">Phone</div>
              <input
                data-test-id="edit-phone"
                className="editProfilePage__edit__inputValue"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={phone}
                type="tel"
                name=""
                id=""
                placeholder="Enter your phone..."
              />
            </label>

            <button
              className="editProfilePage__edit__button"
              data-test-id="edit-button"
              onClick={() =>
                updateUserProfile.mutate({ name, bio, phone, photo: imageData, base64Image:photoBase64Image})
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditProfilePage };
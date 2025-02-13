import './editProfilePage.scss'
import TopNav from '../../components/TopNav';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../core/api';

import { useAppSelector } from '../../core/hooks';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useQueryClient,useMutation, useQuery } from '@tanstack/react-query';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

const EditProfilePage = ()=> {
    const user = useAppSelector(state=> state.user)
   
    const { addToast } = useToasts();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const imgRef = useRef<HTMLImageElement>(null)
    const [photo, setPhoto] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [bio, setBio] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const [imageData, setImageData] = useState<Uint8Array | null>(null);


    const { isPending, isError, data, error , isSuccess} = useQuery({
        queryKey: ['userData'],
        queryFn: api.getUserProfile,
    })

    if(isPending){
        return (
            <>
                <div>Loading ...</div>
            </>
        );
    }

    useEffect(()=>{
        setName(data.name)
        setBio(data.bio)
        setPhone(data.phone)
    },[data])


    const updateUserProfile = useMutation({
        mutationFn: (user: { name: String; bio: String, phone:String, photo:Uint8Array|null }) =>
          api.putUserProfile(user.name, user.bio, user.phone, user.photo),
        onError: (error, variables, context) => {
          // An error happened!
          const msg = error.response?.data.message
            ? error.response.data.message
            : error.message;

          addToast(`${msg}`, { appearance: "error" });
        },
        onSuccess(data, variables, context) {
          addToast(`${data.data.message}`, { appearance: "success" });
          queryClient.setQueryData(['userData'], data.data)
          navigate("/profile");
        },
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        if (!file) {
          return; // Handle potential error or no file selected
        }

        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result as string;
            
            if(imgRef.current){
                imgRef.current.src = base64Image;
                setPhoto(base64Image)
            }
        };

        reader.readAsDataURL(file);    

        const reader2 = new FileReader();

        reader2.onload = () => {
            if (reader2.result instanceof ArrayBuffer) {
                const arrayBuffer = reader2.result;
                const uint8Array = new Uint8Array(arrayBuffer);
                setImageData(uint8Array); // Update the useState variable
            } else {
            console.error("Unexpected file reading result:", reader2.result);
            }
        };

        reader2.onerror = (error) => {
            console.error("Error reading file:", error);
        };

        reader2.readAsArrayBuffer(file);
      };

    return(
        <>
            <TopNav/>
            <div className='editProfilePage'>
                <Link to='/profile' className='editProfilePage__back'>
                    <i className="material-symbols-outlined">
                        arrow_back_ios
                    </i>
                    Back
                </Link>
                <div className="editProfilePage__edit">
                    <div className='editProfilePage__edit__titles'>
                        <h1 className="editProfilePage__edit__title">
                            Change Info
                        </h1>
                        <h2 className='editProfilePage__edit__subtitle'>
                            Changes will be reflected to every services
                        </h2>
                    </div>

                    <label className='editProfilePage__edit__photoInput'>
                        <div className='editProfilePage__edit__photoInput__photo' >
                            <img alt="" src={data.base64Image} style={{width:'7.2rem', height:'7.2rem'}}/>
                            <input type="file" onChange={handleFileChange}/>
                            <i className="material-icons">
                                photo_camera
                            </i>
                        </div>
                        <p className='editProfilePage__edit__photoInput__text'>CHANGE PHOTO</p>
                    </label>

                    <div className='editProfilePage__edit__textInputs'>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <input className='editProfilePage__edit__inputValue'
                            defaultValue={name}
                            onChange={(e)=>setName(e.target.value)}
                            type="text" name="" id="" placeholder='Enter your name...' 

                            />
                        </label> 

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Bio</div>
                            <textarea className='editProfilePage__edit__inputValue' 
                            onChange={(e)=>setBio(e.target.value)}
                            defaultValue={bio}
                            id="" cols={30} rows={10} placeholder='Enter your bio...' 
                            ></textarea>
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Phone</div>
                            <input className='editProfilePage__edit__inputValue' 
                            onChange={(e)=>setPhone(e.target.value)}
                            defaultValue={phone}
                            type='tel' name="" id="" placeholder='Enter your phone...' 
                            />
                        </label>

                        <button 
                            className='editProfilePage__edit__button'
                            onClick={()=>updateUserProfile.mutate({name, bio, phone, photo:imageData})}
                            >
                                Save
                        </button>


                    </div>

                </div>
            </div>
        </>
    );
}


export {EditProfilePage}
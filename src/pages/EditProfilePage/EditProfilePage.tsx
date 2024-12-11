import './editProfilePage.scss'
import TopNav from '../../components/TopNav';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../core/api';

import { useAppSelector } from '../../core/hooks';
import { ChangeEvent, useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useQueryClient,useMutation, useQuery } from '@tanstack/react-query';

const EditProfilePage = ()=> {
    const user = useAppSelector(state=> state.user)
 
/*     const user  = useQuery({queryKey:['userDA']})
 */    

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['userData'],
        queryFn: api.getUserProfile,
    })

    const { addToast } = useToasts();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const imgRef = useRef()
    const [photo, setPhoto] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [bio, setBio] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const updateUserProfile = useMutation({
        mutationFn: (user: { name: String; bio: String, phone:String, photo:Uint8Array }) =>
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
            }
        };

        reader.readAsDataURL(file);    
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
                            <img alt="" src={data.imageUrl} ref={imgRef} style={{width:'7.2rem', height:'7.2rem'}}/>
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
                            onChange={(e)=>setName(e.target.value)}
                            type="text" name="" id="" placeholder='Enter your name...' 
                            
                            defaultValue={data.name}
                            />
                        </label> 

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Bio</div>
                            <textarea className='editProfilePage__edit__inputValue' 
                            onChange={(e)=>setBio(e.target.value)}

                            id="" cols={30} rows={10} placeholder='Enter your bio...' 
                            defaultValue={data.bio}></textarea>
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Phone</div>
                            <input className='editProfilePage__edit__inputValue' 
                            onChange={(e)=>setPhone(e.target.value)}
                            type="text" name="" id="" placeholder='Enter your phone...' 
                            defaultValue={data.phone}/>
                        </label>

                        <button 
                            className='editProfilePage__edit__button'
                            onClick={()=>updateUserProfile.mutate({name, bio, phone, photo})}
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
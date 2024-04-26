import './editProfilePage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';


import { useAppSelector } from '../../core/hooks';
import { ChangeEvent, useState } from 'react';

const EditProfilePage = ()=> {

    const user = useAppSelector(state=> state.user)

    const [base64Img, setBase64Img] = useState<string>(user.photo)


  const handleFileChange = (event:ChangeEvent<HTMLInputElement>) => {   
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as string;
      setBase64Img(base64);
    };

    // Read the image file as a data URL
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
                            <img src={base64Img} alt="" style={{width:'7.2rem', height:'7.2rem'}}/>
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
                            type="text" name="" id="" placeholder='Enter your name...' 
                            defaultValue={user.name}/>
                        </label> 

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Bio</div>
                            <textarea className='editProfilePage__edit__inputValue' 
                            id="" cols={30} rows={10} placeholder='Enter your bio...' 
                            defaultValue={user.bio}></textarea>
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Phone</div>
                            <input className='editProfilePage__edit__inputValue' 
                            type="text" name="" id="" placeholder='Enter your phone...' 
                            defaultValue={user.phone}/>
                        </label>

                        <button className='editProfilePage__edit__button'>Save</button>

                    </div>

                </div>
            </div>
        </>
    );
}


export {EditProfilePage}
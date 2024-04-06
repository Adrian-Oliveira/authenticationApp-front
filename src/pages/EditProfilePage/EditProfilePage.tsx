import './editProfilePage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';

import profile from '../../assets/imageProfile.png'

const EditProfilePage = ()=> {

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
                            <img src={profile} alt="" />
                            <input type="file" />
                            <i className="material-icons">
                                photo_camera
                            </i>
                        </div>
                        <p className='editProfilePage__edit__photoInput__text'>CHANGE PHOTO</p>
                    </label>

                    <div className='editProfilePage__edit__textInputs'>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <div className='editProfilePage__edit__inputName'>Name</div>
                            <input className='editProfilePage__edit__inputValue'
                            type="text" name="" id="" placeholder='Enter your name...' />
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Bio</div>
                            <textarea className='editProfilePage__edit__inputValue' 
                            id="" cols={30} rows={10} placeholder='Enter your bio...'></textarea>
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>Phone</div>
                            <input className='editProfilePage__edit__inputValue' 
                            type="text" name="" id="" placeholder='Enter your phone...' />
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>email</div>
                            <input className='editProfilePage__edit__inputValue' 
                            type="email" name="" id="" placeholder='Enter your email...' />
                        </label>

                        <label className='editProfilePage__edit__input'>
                            <div className='editProfilePage__edit__inputName'>password</div>
                            <input className='editProfilePage__edit__inputValue' 
                            type='password' name="" id="" placeholder='Enter your password...' />
                        </label>

                        <button>Save</button>
                    </div>

                </div>
            </div>
        </>
    );
}


export {EditProfilePage}
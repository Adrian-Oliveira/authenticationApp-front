import './profilePage.scss'
import TopNav from '../../components/TopNav';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../core/hooks';
import { useState } from 'react';





const ProfilePage = ()=> {

    const navigate = useNavigate();
    
    const user = useAppSelector(state=>state.user)


    return(
        <>
            <TopNav/>
            <div className='profilePage'>
                <h1 className='profilePage__title'>Personal info</h1>            
                <p className='profilePage__subtitle'>Basic info, like your name and photo</p>   
                <div className="profilePage__profile"> 
                    <div className="profilePage__profile__header">
                        <div className='profilePage__profile__header__text'>
                            <h2 className="profilePage__profile__header__title">
                                Profile
                            </h2>
                            <p className="profilePage__profile__header__subtitle">
                                Some info may be visible to other people
                            </p>
                        </div>

                        <button className="profilePage__profile__header__editButton"
                                onClick={()=>{navigate("/editProfile")}}>Edit</button>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PHOTO
                        </div>

                        <img src={user.photo} alt="" className='image' 
                            style={{width:'7.2rem', height:'7.2rem'}}
                        />

                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            NAME
                        </div>
                        <p className="data">
                            {user.name}
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            BIO
                        </div>
                        <p className="data">
                            {user.bio}

                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PHONE
                        </div>
                        <p className="data">
                            {user.phone}
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            EMAIL
                        </div>
                        <p className="data">
                            {user.email}
                        </p>
                    </div>

                </div>         
            </div>
        </>
    );
}


export {ProfilePage}
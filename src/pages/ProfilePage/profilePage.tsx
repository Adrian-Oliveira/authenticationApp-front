import './profilePage.scss'
import TopNav from '../../components/TopNav';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../core/hooks';
import { useState } from 'react';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import api from '../../core/api';
import { setLogged,setUser } from '../../redux/user/userSlice';
import Loading from '../../components/Loading';


const ProfilePage = ()=> {

    const navigate = useNavigate();
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['userData'],
        queryFn: api.getUserProfile,
        staleTime: Infinity    
    })

   if(isPending){
    return <Loading loading={isPending}/>
   }
   if(error){
    return <div>error</div>
   }

   
   
    
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

                        <button 
                            data-test-id="profile-edit-button"
                            className="profilePage__profile__header__editButton"
                            onClick={()=>{navigate("/editProfile")}}>Edit</button>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PHOTO
                        </div>

                        <img data-test-id="profile-image" alt="" className='image' src={data.base64Photo}
                            style={{width:'7.2rem', height:'7.2rem'}}
                        />

                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            NAME
                        </div>
                        <p 
                        data-test-id="profile-name"
                        className="data">
                            {data.name ? data.name: ''}
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div 
                        className="label">
                            BIO
                        </div>
                        <p 
                        data-test-id="profile-bio" 
                        
                        className="data">
                            {data.bio}

                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div 
                        className="label">
                            PHONE
                        </div>
                        <p 
                        data-test-id="profile-phone"
                        className="data">
                            {data.phone}
                        </p>
                    </div>
                    <div 
                    className="profilePage__profile__item">
                        <div className="label">
                            EMAIL
                        </div>
                        <p 
                        data-test-id="profile-email"
                        className="data">
                            {data.email}
                        </p>
                    </div>
                    <div 
                    className="profilePage__profile__item">
                        <div className="label">
                            CREATED AT
                        </div>
                        <p 
                        data-test-id="profile-createAt"
                        className="data">
                            {new Date(data.createdAt).toLocaleString()}
                        </p>
                    </div>
                </div>         
            </div>
        </>
    );
}


export {ProfilePage}
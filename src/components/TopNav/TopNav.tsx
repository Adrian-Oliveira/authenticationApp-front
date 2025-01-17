import './topNav.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'

import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { setLogged, setUser, removeUser } from '../../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../core/api';


const TopNav = ()=> {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ['userData'],
        queryFn: api.getUserProfile,
        
    })

    const user =  useAppSelector(store=>store.user)
    const [openPopup, setOpenPopup] = useState(false)
    let popupRef = useRef<HTMLDivElement>(null)
    let menuRef = useRef<HTMLDivElement>(null)

    const logOut = ()=>{
        dispatch(removeUser())
    }

    useEffect(()=>{
        const handler = (e:any)=>{
            if(openPopup && (!popupRef.current?.contains(e.target) || menuRef.current?.contains(e.target))){
                setOpenPopup(false)

            }
            else if(!openPopup && menuRef.current?.contains(e.target)){
                setOpenPopup(true)
            }
        }
        document.addEventListener('mousedown', handler)

        return()=>{
            document.removeEventListener('mousedown', handler)
        }
    })


    return(
        <div className='topNav'>
            <img className='topNav__logo' src={devChallengeLogoAndName}/>

            <div className="topNav__menu" ref={menuRef} >
                <div className='topNav__profile'>
                    <img src={data.base64Image} alt=""  className='topNav__profile__image' style={{width:'3.2rem', height:'3.2rem'}} />
                    <p className='topNav__profile__name'>{user.name}</p>

                    {openPopup? 
                    <i className='topNav__profile__icon' >
                        <span className="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </i>
                    : 
                    <i className='topNav__profile__icon' >
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </i>
                    }
                </div>

                <div className={`topNav__popup topNav__popup--${openPopup?'active':'inactive'}`} ref={popupRef}>
                    <button className='topNav__popup__button'>
                        <i className="material-icons">
                            account_circle
                        </i>
                        <span>My Profile</span>
                    </button>  

                    <button className='topNav__popup__button' onClick={()=>navigate('/changePassword')}>
                        <i className="material-icons">
                            lock
                        </i>    
                        <span>Change Password</span>
                    </button>

                    <hr/>
                    
                    <button className='topNav__popup__button topNav__popup__button--logout' onClick={logOut}>
                        <i className="material-icons">
                            logout
                        </i> 
                        <span>Logout</span>
                    </button>          
                </div>
            </div>
        </div>
    );
}


export {TopNav}
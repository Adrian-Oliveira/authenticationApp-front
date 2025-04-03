import './topNav.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'

import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from '../../core/api';
import { useToasts } from 'react-toast-notifications';

import twoFAicon from '../../assets/mdi--two-factor-authentication.svg'

const TopNav = ()=> {
    const navigate = useNavigate();


    const { data } = useQuery({
        queryKey: ['userData'],
        queryFn: api.getUserProfile,
        
    })

    const [openPopup, setOpenPopup] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)


    const { addToast } = useToasts();

    const getLogout = useMutation({
        mutationFn: () =>
          api.getLogout(),
        onError: (error, variables, context) => {
          // An error happened!
          const msg = error.response?.data.message
            ? error.response.data.message
            : error.message;

          addToast(`${msg}`, { appearance: "error" });
          addToast(`We can't logout you`, { appearance: "error" });
        },
        onSuccess(data, variables, context) {
          addToast(`You have logged out successfully`, { appearance: "success" });
          navigate("/login");
        },
    });


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
        <div 
        data-test-id="profile-navbar"
        className='topNav'>
            <img className='topNav__logo' src={devChallengeLogoAndName}/>

            <div className="topNav__menu" ref={menuRef} >
                <div className='topNav__profile'>
                    <img src={data?.base64Photo} alt=""  className='topNav__profile__image' style={{width:'3.2rem', height:'3.2rem'}} />
                    <p className='topNav__profile__name'>{data.name}</p>

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

                    <button className='topNav__popup__button' onClick={()=>navigate('/registerTwoFA')}>
                        <img src={twoFAicon} alt="Two factor authentication icon" />    
                        <span>Two factor authentication</span>
                    </button>
                    <hr/>
                    
                    <button className='topNav__popup__button topNav__popup__button--logout' onClick={()=>getLogout.mutate()}>
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
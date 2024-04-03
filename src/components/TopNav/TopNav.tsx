import './topNav.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'

import { useAppDispatch } from '../../core/hooks';
import { setLogged } from '../../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const TopNav = ()=> {
    const [openPopup, setOpenPopup] = useState(false)
    let popupRef = useRef<HTMLDivElement>(null)
    let closeRef = useRef<HTMLElement>(null)

    useEffect(()=>{
        const handler = (e:any)=>{
            if(!popupRef.current?.contains(e.target) && !closeRef.current?.contains(e.target) ){
                setOpenPopup(false)

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

            <div className="topNav__menu">
                <div className='topNav__profile'>
                    <img src="" alt=""  className='topNav__profile__image'/>
                    <p className='topNav__profile__name'>Xanthe Neal</p>

                    {openPopup? 
                    <i className='topNav__profile__icon' onClick={()=>setOpenPopup(!openPopup)} ref={closeRef}>
                        <span className="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </i>
                    : 
                    <i className='topNav__profile__icon' onClick={()=>{setOpenPopup(!openPopup)}} >
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

                    <button className='topNav__popup__button'>
                        <i className="material-icons">
                            group
                        </i>    
                        <span>Group Chat</span>
                    </button>

                    <hr/>
                    
                    <button className='topNav__popup__button topNav__popup__button--logout'>
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
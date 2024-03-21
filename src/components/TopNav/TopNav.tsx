import './topNav.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'

import { useAppDispatch } from '../../core/hooks';
import { setLogged } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TopNav = ()=> {
    const [openPopup, setOpenPopup] = useState(false)

    return(
        <div className='topNav'>
            <img className='topNav__logo' src={devChallengeLogoAndName}/>

            <div className="topNav__menu">
                <div className='topNav__profile'>
                    <img src="" alt=""  className='topNav__profile__image'/>
                    <p className='topNav__profile__name'>Xanthe Neal</p>

                    {openPopup? 
                    <i className='topNav__profile__icon' onClick={()=>setOpenPopup(!openPopup)}>
                        <span className="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </i>
                    : 
                    <i className='topNav__profile__icon' onClick={()=>setOpenPopup(!openPopup)}>
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span>
                    </i>
                    }
                </div>

                <div className={`topNav__popup topNav__popup--${openPopup?'active':'inactive'}`}>
                    
                </div>
            </div>
        </div>
    );
}


export {TopNav}
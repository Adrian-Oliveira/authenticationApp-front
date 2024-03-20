import './topNav.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'

import { useAppDispatch } from '../../core/hooks';
import { setLogged } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const TopNav = ()=> {

    return(
        <div className='topNav'>
            <img className='topNav__logo' src={devChallengeLogoAndName}/>

            <div className='topNav__profile'>
                <img src="" alt=""  className='topNav__profile__image'/>
                <p className='topNav__profile__name'>Xanthe Neal</p>
                <i className='topNav__profile__icon'>
                    <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </i>

            </div>
        </div>
    );
}


export {TopNav}
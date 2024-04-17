import './changePasswordPage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';


import { useAppSelector } from '../../core/hooks';

const ChangePasswordPage = ()=> {


    return(
        <>
            <TopNav/>
            <div className='changePassword'>
                <Link to='/profile' className='changePassword__back'>
                    <i className="material-symbols-outlined">
                        arrow_back_ios
                    </i>
                    Back
                </Link>
                <div className="changePassword__edit">

                    <div className='changePassword__edit__textInputs'>

                        <label className='changePassword__edit__input'>
                            <div className='changePassword__edit__inputName'>Old Password</div>
                            <input className='changePassword__edit__inputValue'
                            type="password" name="" id="" placeholder='Enter your old password...'/>
                        </label> 

                        <label className='changePassword__edit__input'>
                            <div className='changePassword__edit__inputName'>New Password</div>
                            <input className='changePassword__edit__inputValue'
                            type="password" name="" id="" placeholder='Enter your new password...'/>
                        </label>

                        <label className='changePassword__edit__input'>
                            <div className='changePassword__edit__inputName'>Repeat New Password</div>
                            <input className='changePassword__edit__inputValue'
                            type="password" name="" id="" placeholder='Enter your new password...' />
                        </label>

                        <button className='changePassword__edit__button'>Change Password</button>

                    </div>

                </div>
            </div>
        </>
    );
}


export {ChangePasswordPage}
import './changePasswordPage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';


import { useAppSelector} from '../../core/hooks';
import { useState } from 'react';

const ChangePasswordPage = ()=> {

    const [oldPssWrd ,setOldPssWrd]= useState<string>('')
    const [newPssWrd ,setNewPssWrd]= useState<string>('')
    const [repeatNewPssWrd ,setRepeatNewPssWrd]= useState<string>('')

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
                            type="password" 
                            name="OldPassword"  
                            placeholder='Enter your old password...'
                            onChange={(e)=>setOldPssWrd(e.target.value)}
                            value={oldPssWrd}/>
                        </label> 

                        <label className='changePassword__edit__input'>
                            <div className='changePassword__edit__inputName'>New Password</div>
                            <input className='changePassword__edit__inputValue'
                            type="password" 
                            name="NewPassword"
                            placeholder='Enter your new password...'
                            onChange={(e)=>setNewPssWrd(e.target.value)}
                            value={newPssWrd} />
                        </label>

                        <label className='changePassword__edit__input'>
                            <div className='changePassword__edit__inputName'>Confirm New Password</div>
                            <input 
                            className={`changePassword__edit__inputValue 
                            ${(newPssWrd === repeatNewPssWrd)?null:'changePassword__edit__inputValue--notEqual'}`}
                            type="password" 
                            name="Repeat New Password" 
                            placeholder='Enter your confirm new password...' 
                            onChange={(e)=>setRepeatNewPssWrd(e.target.value)}
                            value={repeatNewPssWrd}/>
                            
                            <p 
                            className={`changePassword__edit__error 
                            ${(newPssWrd === repeatNewPssWrd)?
                                '':
                                'changePassword__edit__error--active'}`}>
                            The new password and the confirmation need to be equal</p>
                        </label>

                        <button className='changePassword__edit__button'>Change Password</button>

                    </div>

                </div>
            </div>
        </>
    );
}


export {ChangePasswordPage}
import './changePasswordPage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import api from '../../core/api';

import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const ChangePasswordPage = ()=> {

    const [newPssWrd ,setNewPssWrd]= useState<string>('')
    const [repeatNewPssWrd ,setRepeatNewPssWrd]= useState<string>('')

    const {addToast} = useToasts();

    const navigate = useNavigate()

    const updatePassword = useMutation({
        mutationFn: (user: { newPassword: String; repeatNewPassword: String }) =>
            api.postNewPasswordWithJwtToken(user.newPassword),
        onError: (error, variables, context) => {
          // An error happened!
          const msg = error.response?.data.message
            ? error.response.data.message
            : error.message;

          addToast(`${msg}`, { appearance: "error" });
        },
        onSuccess(data, variables, context) {
          addToast(`${data.data.message}`, { appearance: "success" });
          navigate("/profile");
        },
    });


    const isValid = (inputString:string)=>{
        return /^.{10,}$/.test(inputString)
    }

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
                            <div className='changePassword__edit__inputName'>New Password</div>
                            <input className='changePassword__edit__inputValue'
                            type="password" 
                            name="NewPassword"
                            placeholder='Enter your new password...'
                            onChange={(e)=>setNewPssWrd(e.target.value)}
                            value={newPssWrd} />

                            <p 
                            className={`changePassword__edit__error 
                            ${(isValid(newPssWrd))?
                                '':
                                'changePassword__edit__error--active'}`}>
                            Your new password need to have at least 10 characters</p>
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

                        <button 
                        className='changePassword__edit__button'
                        onClick={()=>updatePassword.mutate({newPassword:newPssWrd,repeatNewPassword: repeatNewPssWrd})}
                        >Change Password</button>

                    </div>

                </div>
            </div>
        </>
    );
}


export {ChangePasswordPage}
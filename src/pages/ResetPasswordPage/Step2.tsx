import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import api from "../../core/api";

export  const Step2 = ()=>{
    const navigate = useNavigate();


    const { addToast } = useToasts();


    const [token, setToken] = useState<String>('')
    const [newPassword, setNewPassword] = useState<String>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<String>('')

    const changePassword = useMutation({
        mutationFn: (user:{token: String, newPassword:String})=> api.postNewPasswordWithToken(user.token, user.newPassword),
        onError: (error, variables, context) => {
            // An error happened!
            const msg = error.response?.data.message ? error.response.data.message: error.message ;
            addToast(`${msg}`, { appearance: 'error' });
        },
        onSuccess(data, variables, context) {
            addToast(`${data.data.message}`, { appearance: 'success' });
            navigate('../login')
        },

    })

    const handleAttemptToChangePassword = ()=>{
        if(newPassword !== confirmNewPassword){
            addToast('New Password and Confirm New Password does not match', { appearance: 'error' });
        }
        else{
            changePassword.mutate({token, newPassword})
        }
    }

    return(
        <>
        <label 
            className='resetPasswordPage__resetPasswordContainer__email'>
            <i className="material-symbols-outlined">
                token
            </i>
            <input  
                type="password" name="" id="resetPasswordPage__resetPasswordContainer__code"
                onChange={(e)=>setToken(e.target.value)}
                defaultValue=''
                placeholder='Code' 
                />
        </label>

        <label 
            className='resetPasswordPage__resetPasswordContainer__email'>
            <i className="material-symbols-outlined">
                lock
            </i>
            <input  
                type="password" name="" id=""
                onChange={(e)=>setNewPassword(e.target.value)}
                defaultValue=''
                placeholder='New Password' 
                />
        </label>


        <label 
            className='resetPasswordPage__resetPasswordContainer__email'>
            <i className="material-symbols-outlined">
                lock
            </i>
            <input  
                type="password" name="" id=""
                onChange={(e)=>setConfirmNewPassword(e.target.value)}
                defaultValue=''
                placeholder='Confirm New Password' 
                />
        </label>

            
        <button
            className='resetPasswordPage__resetPasswordContainer__loginButton'
            onClick={()=>handleAttemptToChangePassword()}
            >Change the password 
        </button>

        <button
            className='resetPasswordPage__resetPasswordContainer__loginButton'
            onClick={()=>navigate('../step1')}
            >Select another email
        </button>

        </>
    );

}
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import api from "../../core/api";

export  const Step2 = ()=>{
    const navigate = useNavigate();


    const { addToast } = useToasts();


    const [token, setToken] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')

    const changePassword = useMutation({
        mutationFn: (user:{token:string, newPassword:string,confirmNewPassword:string })=> 
            api.postNewPasswordWithEmailToken(user.token,user.newPassword, user.confirmNewPassword),
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
            onClick={()=>changePassword.mutate({token,newPassword,confirmNewPassword})}
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
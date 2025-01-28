import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useToasts } from "react-toast-notifications";
import api from "../../core/api";
import { useState } from "react";

export const Step1 = ()=>{
    const navigate = useNavigate();

    const { addToast } = useToasts();

    const [email, setEmail] = useState<String>('')

    const generateToken2ResetPassword = useMutation({
        mutationFn: (user:{email: String})=> api.postGenerateTokenToResetPassword(user.email),
        onError: (error, variables, context) => {
            // An error happened!
            const msg = error.response?.data.message ? error.response.data.message: error.message ;
            addToast(`${msg}`, { appearance: 'error' });
        },
        onSuccess(data, variables, context) {
            addToast(`${data.data.message}`, { appearance: 'success' });
            navigate('../step2')
        },

    })

    return(
        <>
            <label 
                className='resetPasswordPage__resetPasswordContainer__email'>
                <i className="material-symbols-outlined">
                    mail
                </i>
                <input  
                    type="email" name="" id="resetPasswordPage__resetPasswordContainer__email"
                    defaultValue={''}
                    placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </label>

            <button
                className='resetPasswordPage__resetPasswordContainer__loginButton'
                onClick={()=>generateToken2ResetPassword.mutate({email})}
                >Send the code to my email
            </button>
            <button
                className='resetPasswordPage__resetPasswordContainer__loginButton'
                onClick={()=>navigate('../step2')}
                >Already have a code
            </button>
        </>
    );

}
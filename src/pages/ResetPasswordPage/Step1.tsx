import { useNavigate } from "react-router-dom";

export const Step1 = ()=>{
    const navigate = useNavigate();

    const getToken2ResetPassword = 

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
                    />
            </label>

            <button
                className='resetPasswordPage__resetPasswordContainer__loginButton'
                onClick={()=>navigate('../step2')}
                >Send the code to my email
            </button>
        </>
    );

}
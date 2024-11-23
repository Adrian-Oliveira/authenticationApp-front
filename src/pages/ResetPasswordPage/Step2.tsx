import { useNavigate } from "react-router-dom";

export  const Step2 = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <label 
                className='resetPasswordPage__resetPasswordContainer__email'>
                <i className="material-symbols-outlined">
                    lock
                </i>
                <input  
                    type="password" name="" id="resetPasswordPage__resetPasswordContainer__code"
                    defaultValue=''
                    placeholder='Code' 
                    />
            </label>

                    <label 
            className='resetPasswordPage__resetPasswordContainer__email'>
            <i className="material-symbols-outlined">
                mail
            </i>
            <input  
                type="password" name="" id=""
                defaultValue=''
                placeholder='Password' 
                />
        </label>


        <label 
            className='resetPasswordPage__resetPasswordContainer__email'>
            <i className="material-symbols-outlined">
                mail
            </i>
            <input  
                type="password" name="" id=""
                defaultValue=''
                placeholder='Confirm the password' 
                />
        </label>

            
        <button
            className='resetPasswordPage__resetPasswordContainer__loginButton'
            onClick={()=>navigate('../login')}
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
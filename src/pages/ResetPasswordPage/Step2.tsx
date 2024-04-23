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

            <button
                className='resetPasswordPage__resetPasswordContainer__loginButton'
                onClick={()=>navigate('../step3')}
                >Confirm the code 
            </button>
        </>
    );

}
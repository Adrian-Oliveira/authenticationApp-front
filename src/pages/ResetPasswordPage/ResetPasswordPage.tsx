import './resetPasswordPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import { useState } from 'react';


const Input = ()=>{

    const [emailSend, setEmailSend] = useState(false);
    const [rightResetCode, setRightResetCode] = useState(false);

    
    if(emailSend && rightResetCode){
        return(
            <>
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
                    onClick={()=>{}}
                    >Change the password 
                </button>
            </>
        )
    }

    else if(emailSend){
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
                    onClick={()=>{setRightResetCode(true)}}
                    >Confirm the code 
                </button>
            </>
        )
    }

    else{
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
                    onClick={()=>{setEmailSend(true)}}
                    >Send the code to my email
                </button>
            </>
        )
    }


    
    
}


const ResetPasswordPage = ()=> {



    return(
        <div className='resetPasswordPage'>
            <div className='resetPasswordPage__resetPasswordContainer'>
                
                <img 
                    className='resetPasswordPage__resetPasswordContainer__LogoAndName' 
                    src={devChallengeLogoAndName} 
                    alt="" 
                />
                
                <h1 className="resetPasswordPage__resetPasswordContainer__title">Find your account</h1>
                
                <Input/>

                <span className='resetPasswordPage__resetPasswordContainer__login'>
                    Already a member? 
                    <a href="#">Register</a>
                </span>
            </div>
        </div>
    );
}


export {ResetPasswordPage}
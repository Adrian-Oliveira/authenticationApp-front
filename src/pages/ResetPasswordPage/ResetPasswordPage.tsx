import './resetPasswordPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

/* 

export const Step1 = ()=>{
    const navigate = useNavigate();

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
                onClick={()=>navigate('/step2')}
                >Send the code to my email
            </button>
        </>
    );

}


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
                onClick={()=>navigate('/step2')}
                >Confirm the code 
            </button>
        </>
    );

}

export const Step3 = ()=>{
    const navigate = useNavigate();

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
            onClick={()=>navigate('login')}
            >Change the password 
        </button>
    </>
    );

}
 */

const ResetPasswordPage = ()=> {

    return(
        <div className='resetPasswordPage'>
            <div className='resetPasswordPage__resetPasswordContainer'>
                
                <img 
                    className='resetPasswordPage__resetPasswordContainer__LogoAndName' 
                    src={devChallengeLogoAndName} 
                    alt="" 
                />
                
                <h1 className="resetPasswordPage__resetPasswordContainer__title">Recover Password</h1>

                <Outlet/>


                <span className='resetPasswordPage__resetPasswordContainer__login'>
                    Already a member? 
                    <a href="#">Register</a>
                </span>
            </div>
        </div>
    );
}


export {ResetPasswordPage}
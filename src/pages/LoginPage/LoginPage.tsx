import image from '../../assets/image.svg';
import './loginPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import facebookLogo from '../../assets/Facebook.svg'
import githubLogo from '../../assets/Gihub.svg'
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {uploadImage} from '../../redux/image/imageSlice'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import {  useToasts } from 'react-toast-notifications';


const LoginPage = ()=> {

/*     const dispatch = useAppDispatch();
    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading); 
    */
    

    return(
        <div className='loginPage'>
            <div className='loginPage__loginContainer'>
                
                <img 
                    className='loginPage__loginContainer__LogoAndName' 
                    src={devChallengeLogoAndName} 
                    alt="" 
                />
                
                <h1 className="loginPage__loginContainer__title">Login</h1>
                
                <label 
                    className='loginPage__loginContainer__email'>
                    <i className="material-symbols-outlined">
                        mail
                    </i>
                    <input  
                        type="email" name="" id=""
                        placeholder='Email' 
                        />
                </label>

                <label 
                    className='loginPage__loginContainer__password'>

                    <i className="material-symbols-outlined">
                        lock
                    </i>
            
                    <input 
                        type="password" name="" id=""
                        placeholder='Password' 
                    />
                </label>

                <button
                    className='loginPage__loginContainer__loginButton'
                    >Start coding now
                </button>


                <span className='loginPage__loginContainer__oAuthText'>or continue with these social profile</span>

                <div className='loginPage__loginContainer__oAuthOptions'>
                    <img src={facebookLogo} alt="" />
                    <img src={githubLogo} alt="" />
                </div>

                <span className='loginPage__loginContainer__login'>
                    Already a member? 
                    <a href="">Register</a>
                </span>
            </div>
        </div>
    );
}


export {LoginPage}
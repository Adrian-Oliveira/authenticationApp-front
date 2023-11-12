import image from '../../assets/image.svg';
import './registerPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import googleLogo from '../../assets/Google.svg'
import githubLogo from '../../assets/Github.svg'
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {uploadImage} from '../../redux/image/imageSlice'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import {  useToasts } from 'react-toast-notifications';


const RegisterPage = ()=> {

/*     const dispatch = useAppDispatch();
    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading); */
    

    return(
        <div className='registerPage'>
            <div className='registerPage__registerContainer'>
                
                <img 
                    className='registerPage__registerContainer__LogoAndName' 
                    src={devChallengeLogoAndName} 
                    alt="" 
                />
                
                <h1 className='registerPage__registerContainer__title'>Join thousands of learners from around the world</h1>
                <p className='registerPage__registerContainer__text'>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                
                <label 
                    className='registerPage__registerContainer__email'>
                    <i className="material-symbols-outlined">
                        mail
                    </i>
                    <input  
                        type="email" name="" id=""
                        placeholder='Email' 
                        />
                </label>

                <label 
                    className='registerPage__registerContainer__password'>

                    <i className="material-symbols-outlined">
                        lock
                    </i>
            
                    <input 
                        type="password" name="" id=""
                        placeholder='Password' 
                    />
                </label>

                <button
                    className='registerPage__registerContainer__registerButton'
                    >Start coding now
                </button>


                <span className='registerPage__registerContainer__oAuthText'>or continue with these social profile</span>

                <div className='registerPage__registerContainer__oAuthOptions'>
                    <img src={googleLogo} alt="" />
                    <img src={githubLogo} alt="" />
                </div>

                <span className='registerPage__registerContainer__login'>
                    Already a member? 
                    <a href="">Login</a>
                </span>
            </div>
        </div>
    );
}


export {RegisterPage}
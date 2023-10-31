import image from '../../assets/image.svg';
import './registerPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import facebookLogo from '../../assets/Facebook.svg'
import githubLogo from '../../assets/Gihub.svg'
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {uploadImage} from '../../redux/image/imageSlice'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import {  useToasts } from 'react-toast-notifications';


const UploadFile = ()=> {

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
                
                <input  
                    className='registerPage__registerContainer__email'
                    type="email" name="" id="" 
                />

                <input 
                    className='registerPage__registerContainer__password'
                    type="password" name="" id="" 
                />

                <button
                    className='registerPage__registerContainer__registerButton'
                    >Start coding now
                </button>


                <span className='registerPage__registerContainer__oAuthText'>or continue with these social profile</span>

                <div className='registerPage__registerContainer__oAuthOptions'>
                    <img src={facebookLogo} alt="" />
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


export {UploadFile}
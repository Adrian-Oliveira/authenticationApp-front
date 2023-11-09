import image from '../../assets/image.svg';
import './resetPasswordPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import facebookLogo from '../../assets/Facebook.svg'
import githubLogo from '../../assets/Gihub.svg'
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {uploadImage} from '../../redux/image/imageSlice'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import {  useToasts } from 'react-toast-notifications';


const ResetPasswordPage = ()=> {

/*     const dispatch = useAppDispatch();
    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading); 
    */
    

    return(
        <div className='resetPasswordPage'>
            <div className='resetPasswordPage__resetPasswordContainer'>
                
                <img 
                    className='resetPasswordPage__resetPasswordContainer__LogoAndName' 
                    src={devChallengeLogoAndName} 
                    alt="" 
                />
                
                <h1 className="resetPasswordPage__resetPasswordContainer__title">Find your account</h1>
                
                <label 
                    className='resetPasswordPage__resetPasswordContainer__email'>
                    <i className="material-symbols-outlined">
                        mail
                    </i>
                    <input  
                        type="email" name="" id=""
                        placeholder='Email' 
                        />
                </label>

                <button
                    className='resetPasswordPage__resetPasswordContainer__loginButton'
                    >Send the code to my email
                </button>

                <span className='resetPasswordPage__resetPasswordContainer__login'>
                    Already a member? 
                    <a href="#">Register</a>
                </span>
            </div>
        </div>
    );
}


export {ResetPasswordPage}
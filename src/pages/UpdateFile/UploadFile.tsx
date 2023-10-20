import image from '../../assets/image.svg';
import './registerPage.scss'
import devChallengeLogo from '../../assets/devchallenges-light.svg'
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
                <div>
                    <img src={devChallengeLogo} alt="" />
                    <h2>devchallenges</h2>
                </div>
                <h1 className=''>Join thousands of learners from around the world</h1>
                <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <button>Start coding now</button>

                <span>or continue with these social profile</span>

                <div>
                    <img src={facebookLogo} alt="" />
                    <img src={githubLogo} alt="" />
                </div>


                <span>Already a member? <a href="">Login</a></span>
            </div>
        </div>
    );
}


export {UploadFile}
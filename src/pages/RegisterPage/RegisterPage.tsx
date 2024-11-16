import './registerPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import googleLogo from '../../assets/Google.svg'
import githubLogo from '../../assets/Github.svg'
import { Link } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../../core/api';
import { useState } from 'react';

const RegisterPage = ()=> {

    /*     
    const dispatch = useAppDispatch();
    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading);
    */

    const registerUserMutation = useMutation({
        mutationFn: (user:{email: String, password: String})=> api.postRegister(user.email, user.password)
    })
    
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')

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
                        onChange={(e)=>setEmail(e.target.value)} 
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
                        onChange={(e)=>setPassword(e.target.value)} 

                    />
                </label>

                <button
                    onClick={()=>{
                        registerUserMutation.mutate({email, password})
                    }}
                    className='registerPage__registerContainer__registerButton'
                    >Start coding now
                </button>


                <span className='registerPage__registerContainer__oAuthText'>or continue with these social profile</span>

                <div className='registerPage__registerContainer__oAuthOptions'>
                    <img src={googleLogo} alt="google"  className='registerPage__registerContainer__oAuthOptions__img'/>
                    <img src={githubLogo} alt="github" className='registerPage__registerContainer__oAuthOptions__img'/>
                </div>

                <span className='registerPage__registerContainer__login'>
                    Already a member? 
                    <Link to='/login'>Login</Link>

                </span>
            </div>
        </div>
    );
}


export {RegisterPage}
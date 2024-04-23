import './loginPage.scss'
import devChallengeLogoAndName from '../../assets/devChallengeLogoAndName.svg'
import googleLogo from '../../assets/Google.svg'
import githubLogo from '../../assets/Github.svg'
import { Link } from "react-router-dom";

import { useAppDispatch } from '../../core/hooks';
import { setLogged } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = ()=> {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    /*     const dispatch = useAppDispatch();

    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading); 
    */
    const clickHandler = ()=>{
        dispatch(setLogged())
        navigate("/profile")
    }

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
                    <i className="material-symbols-outlined loginPage__loginContainer__email__icon"  >
                        mail
                    </i>
                    <input  
                        type="email" name="" id=""
                        placeholder='Email' 
                        />
                </label>

                <label 
                    className='loginPage__loginContainer__password'>

                    <i className="material-symbols-outlined loginPage__loginContainer__password__icon">
                        lock
                    </i>
            
                    <input 
                        type="password" name="" id=""
                        placeholder='Password' 
                    />
                </label>

                <button
                    className='loginPage__loginContainer__loginButton'
                    onClick={clickHandler}
                    >Start coding now
                </button>


                <span className='loginPage__loginContainer__oAuthText'>or continue with these social profile</span>

                <div className='loginPage__loginContainer__oAuthOptions'>
                    <img src={googleLogo} alt="" />
                    <img src={githubLogo} alt="" />
                </div>

                <span className='loginPage__loginContainer__reset'>
                    Forgot your password? 
                    <Link to='/reset/step1'>Recover</Link>
                </span>

                <span className='loginPage__loginContainer__login'>
                    Already a member? 
                    <Link to='/register'>Register</Link>
                </span>
            </div>
        </div>
    );
}


export {LoginPage}
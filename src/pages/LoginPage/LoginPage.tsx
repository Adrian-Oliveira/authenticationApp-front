import "./loginPage.scss";
import devChallengeLogoAndName from "../../assets/devChallengeLogoAndName.svg";
import googleLogo from "../../assets/Google.svg";
import githubLogo from "../../assets/Github.svg";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../core/hooks";
import { setLogged } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import api from "../../core/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import twoFAicon from '../../assets/mdi--two-factor-authentication.svg'
import Loading from "../../components/Loading";

const baseUrl = import.meta.env.VITE_BACKEND_API_URL;

const LoginPage = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [email, setEmail] = useState<String>("");
  const [pass, setPass] = useState<String>("");
  const [totp, setTotp] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false)

  const loginWithEmailAndPass = useMutation({
    mutationFn: (user: { email: String; pass: String, totp:String }) =>{
      setLoading(true)
      return api.postUserLoginWithEmail(user.email, user.pass, user.totp)
    },
    onError: (error, variables, context) => {
      setLoading(false)
      // An error happened!
      const msg = error.response?.data.message
        ? error.response.data.message
        : error.message;
      addToast(`${msg}`, { appearance: "error" });

    },
    onSuccess(data, variables, context) {
      setLoading(false)
      addToast(`${data.data.message}`, { appearance: "success" });
      navigate("/profile");
    },
  });

  return (
    <div className="loginPage">
      <div className="loginPage__loginContainer">
       <Loading loading={loading}/>
        <img
          className="loginPage__loginContainer__LogoAndName"
          src={devChallengeLogoAndName}
          alt=""
        />

        <h1 className="loginPage__loginContainer__title">Login</h1>

        <label className="loginPage__loginContainer__email">
          <i className="material-symbols-outlined loginPage__loginContainer__email__icon">
            mail
          </i>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" placeholder="Email" />
        </label>

        <label className="loginPage__loginContainer__password">
          <i className="material-symbols-outlined loginPage__loginContainer__password__icon">
            lock
          </i>

          <input onChange={(e)=>setPass(e.target.value)} type="password" name="" id="" placeholder="Password" />
        </label>
        
        <label className="loginPage__loginContainer__password">
          <img src={twoFAicon} alt="Two factor authentication icon" />    

          <input onChange={(e)=>setTotp(e.target.value)} type="text" name="" id="" placeholder="Totp" />
        </label>

        <button
          className="loginPage__loginContainer__loginButton"
          onClick={() => {
            loginWithEmailAndPass.mutate({ email, pass, totp });
          }}
        >
          Start coding now
        </button>

        <span className="loginPage__loginContainer__oAuthText">
          or continue with these social profile
        </span>

        <div className="loginPage__loginContainer__oAuthOptions">
          <a href={`${baseUrl}/user/login/google`}>
            <img src={googleLogo} alt="" />
          </a>
          <a href={`${baseUrl}/user/login/github`}>
            <img src={githubLogo} alt="" />
          </a>        
        </div>

        <span className="loginPage__loginContainer__reset">
          Forgot your password?
          <Link to="/reset/step1">Recover</Link>
        </span>

        <span className="loginPage__loginContainer__login">
          Already a member?
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export { LoginPage };

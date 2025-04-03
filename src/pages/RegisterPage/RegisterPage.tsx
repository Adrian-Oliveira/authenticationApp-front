import "./registerPage.scss";
import devChallengeLogoAndName from "../../assets/devChallengeLogoAndName.svg";
import googleLogo from "../../assets/Google.svg";
import githubLogo from "../../assets/Github.svg";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "../../core/api";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const RegisterPage = () => {
  const { addToast } = useToasts();

  const registerUserMutation = useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      api.postRegister(user.email, user.password),
    onError: (error, variables, context) => {
      // An error happened!
      const msg = error.response?.data.message
        ? error.response.data.message
        : error.message;
      addToast(`${msg}`, { appearance: "error" });
    },
    onSuccess(data, variables, context) {
      addToast(`${data.data.message}`, { appearance: "success" });
    },
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="registerPage">
      <div className="registerPage__registerContainer">
        <img
          className="registerPage__registerContainer__LogoAndName"
          src={devChallengeLogoAndName}
          alt=""
        />

        <h1 className="registerPage__registerContainer__title">
          Join thousands of learners from around the world
        </h1>
        <p className="registerPage__registerContainer__text">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>

        <label className="registerPage__registerContainer__email">
          <i className="material-symbols-outlined">mail</i>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="registerPage__registerContainer__password">
          <i className="material-symbols-outlined">lock</i>

          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          onClick={() => {
            registerUserMutation.mutate({ email, password });
          }}
          className="registerPage__registerContainer__registerButton"
        >
          Start coding now
        </button>

        <span className="registerPage__registerContainer__oAuthText">
          or continue with these social profile
        </span>

        <div className="registerPage__registerContainer__oAuthOptions">
          <img
            src={googleLogo}
            alt="google"
            className="registerPage__registerContainer__oAuthOptions__img"
          />
          <img
            src={githubLogo}
            alt="github"
            className="registerPage__registerContainer__oAuthOptions__img"
          />
        </div>

        <span className="registerPage__registerContainer__login">
          Already a member?
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export { RegisterPage };

import "./resetPasswordPage.scss";
import devChallengeLogoAndName from "../../assets/devChallengeLogoAndName.svg";
import { Outlet, Link } from "react-router-dom";

const ResetPasswordPage = () => {
  return (
    <div className="resetPasswordPage">
      <div className="resetPasswordPage__resetPasswordContainer">
        <img
          className="resetPasswordPage__resetPasswordContainer__LogoAndName"
          src={devChallengeLogoAndName}
          alt=""
        />

        <h1 className="resetPasswordPage__resetPasswordContainer__title">
          Recover Password
        </h1>

        <Outlet />

        <span className="resetPasswordPage__resetPasswordContainer__login">
          Not a member yet?
          <Link to="/register"> Register</Link>
        </span>

        <span className="resetPasswordPage__resetPasswordContainer__login">
          Already has a profile?
          <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
};

export { ResetPasswordPage };

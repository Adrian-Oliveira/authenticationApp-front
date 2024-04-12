import './profilePage.scss'
import TopNav from '../../components/TopNav';
import { useNavigate } from 'react-router-dom';


import imageProfile from '../../assets/imageProfile.png'




const ProfilePage = ()=> {

    const navigate = useNavigate();

    

    return(
        <>
            <TopNav/>
            <div className='profilePage'>
                <h1 className='profilePage__title'>Personal info</h1>            
                <p className='profilePage__subtitle'>Basic info, like your name and photo</p>   
                <div className="profilePage__profile"> 
                    <div className="profilePage__profile__header">
                        <div className='profilePage__profile__header__text'>
                            <h2 className="profilePage__profile__header__title">
                                Profile
                            </h2>
                            <p className="profilePage__profile__header__subtitle">
                                Some info may be visible to other people
                            </p>
                        </div>

                        <button className="profilePage__profile__header__editButton"
                                onClick={()=>{navigate("/editProfile")}}>Edit</button>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PHOTO
                        </div>

                        <img src={imageProfile} alt="" className='image' 
                            style={{width:'7.2rem', height:'7.2rem'}}
                        />

                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            NAME
                        </div>
                        <p className="data">
                            Xanthe Neal
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            BIO
                        </div>
                        <p className="data">
                            I am a software developer and a big fan of devchallenges...
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PHONE
                        </div>
                        <p className="data">
                        908249274292
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            EMAIL
                        </div>
                        <p className="data">
                        xanthe.neal@gmail.com
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="label">
                            PASSWORD
                        </div>
                        <p className="data">
                        ************
                        </p>
                    </div>
                </div>         
            </div>
        </>
    );
}


export {ProfilePage}
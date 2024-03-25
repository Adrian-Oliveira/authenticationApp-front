import './profilePage.scss'
import TopNav from '../../components/TopNav';
const ProfilePage = ()=> {

    return(
        <>
            <TopNav/>
            <div className='profilePage'>
                <h1 className='profilePage__title'>Personal info</h1>            
                <p className='profilePage__subtitle'>Basic info, like your name and photo</p>   
                <div className="profilePage__profile"> 
                    <div className="profilePage__profile__item">
                        <h2 className="first">
                        Profile
                        </h2>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        PHOTO
                        </div>
                        <p>
                        Xanthe Neal
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        NAME
                        </div>
                        <p>
                        Xanthe Neal
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        BIO
                        </div>
                        <p>
                        I am a software developer and a big fan of devchallenges...
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        PHONE
                        </div>
                        <p>
                        908249274292
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        EMAIL
                        </div>
                        <p>
                        xanthe.neal@gmail.com
                        </p>
                    </div>
                    <div className="profilePage__profile__item">
                        <div className="first">
                        PASSWORD
                        </div>
                        <p>
                        ************
                        </p>
                    </div>
                </div>         
            </div>
        </>
    );
}


export {ProfilePage}
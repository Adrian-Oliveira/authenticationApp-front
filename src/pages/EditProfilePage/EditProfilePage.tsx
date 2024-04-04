import './editProfilePage.scss'
import TopNav from '../../components/TopNav';
import { Link } from 'react-router-dom';
const EditProfilePage = ()=> {

    return(
        <>
            <TopNav/>
            <div className='editProfilePage'>
                <Link to='/profile' className='editProfilePage__back'>
                    <i className="material-symbols-outlined">
                        arrow_back_ios
                    </i>
                    Back
                </Link>
                <div className="editProfilePage__edit">
                    <div className='editProfilePage__edit__titles'>
                        <h1 className="editProfilePage__edit__title">
                            Change Info
                        </h1>
                        <h2 className='editProfilePage__edit__subtitle'>
                            Changes will be reflected to every services
                        </h2>
                    </div>

                    <label>
                        <img src="" alt="" />
                        <p>CHANGE PHOTO</p>
                    </label>

                    <div>
                        <label htmlFor="">
                            <div>Name</div>
                            <input type="text" name="" id="" />
                        </label>

                        <label htmlFor="">
                            <div>Bio</div>
                            <textarea name="" id="" cols={30} rows={10}></textarea>
                        </label>

                        <label htmlFor="">
                            <div>Phone</div>
                            <input type="number" name="" id="" />
                        </label>

                        <label htmlFor="">
                            <div>email</div>
                            <input type="email" name="" id="" />
                        </label>

                        <label htmlFor="">
                            <div>password</div>
                            <input type='password' name="" id="" />
                        </label>

                        <button>Save</button>
                    </div>

                </div>
            </div>
        </>
    );
}


export {EditProfilePage}
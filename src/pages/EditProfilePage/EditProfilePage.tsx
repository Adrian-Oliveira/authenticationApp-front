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
                <div className="editProfilePage__edit"></div>
            </div>
        </>
    );
}


export {EditProfilePage}
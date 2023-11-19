import { Outlet, Navigate } from "react-router-dom";

const useAuth=()=>{
    const user=localStorage.getItem('user');

    if(user){
    return true
    } else {
    return false
    }
}


const PrivateRoutes=() =>{

    const auth=useAuth();

    if(auth){
        return <Outlet />;
    }
    else{
        return <Navigate to={'login'} />
    }

}

export default PrivateRoutes;
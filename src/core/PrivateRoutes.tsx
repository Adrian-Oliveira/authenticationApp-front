import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
const useAuth=()=>{
    const user=localStorage.getItem('user');

    if(user){
    return true
    } else {
    return false
    }
}


const PrivateRoutes=() =>{

    const auth = useAuth();
    const user = useAppSelector(state=>state.user.isLogged)

    if(user){
        return <Outlet />;
    }
    else{
        return <Navigate to={'login'} />
    }

}

export default PrivateRoutes;
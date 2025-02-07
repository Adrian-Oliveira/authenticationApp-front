import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { useQuery } from "@tanstack/react-query";
import api from "./api";

const useAuth= async()=>{
    try{

        const isLogged = await api.getIsLogged()
        return isLogged

    }
    catch(e){
        return false
    }
}


const PrivateRoutes=() =>{
    

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['isLogged'],
        queryFn: api.getIsLogged,
        
    })

    if(isPending){
        return <span>loading</span>
    }

    if(isError){
        return <Navigate to={'login'} />
    }
    else{
        return <Outlet />;
    }

}

export default PrivateRoutes;
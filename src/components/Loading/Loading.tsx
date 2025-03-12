import './loading.scss'

import { BarLoader } from "react-spinners";
import { CSSProperties } from "react";



const Loading = ({loading}:{loading:boolean})=> {
    if(!loading){
        return (<></>)
    }
    else{

        return(
            <div className='loading'>
            <BarLoader
                loading={loading}
                color={"white"}
                data-testid="loader"
                />
        </div>
    );
    } 
}


export {Loading}
import './loading.scss'

import { BarLoader } from "react-spinners";



const Loading = ({loading}:{loading:boolean})=> {
    if(!loading){
        return (<></>)
    }
    else{

        return(
            <div 
            data-test-id="loading-element"
            className='loading'>
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
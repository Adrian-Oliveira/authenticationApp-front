import './register2FAPage.scss'
import TopNav from '../../components/TopNav';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../core/api';

import { useAppSelector } from '../../core/hooks';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useQueryClient,useMutation, useQuery } from '@tanstack/react-query';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { QRCode } from 'qrcode';



const Register2FAPage = ()=> {
   
    const { addToast } = useToasts();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const [totp, setTotp] = useState<string>('');

    const { isPending, isError, data, error , isSuccess} = useQuery({
        queryKey: ['2fa'],
        queryFn: api.getUserTwoFactor,
    })

    
    const disable2FA = useMutation({
        mutationFn: (user:{totp:String}) =>
          api.delUserTwoFactor(user.totp),
        onError: (error, variables, context) => {
            // An error happened!
            const msg = error.response?.data.message
            ? error.response.data.message
            : error.message;

          addToast(`${msg}`, { appearance: "error" });
        },
        onSuccess:(data, variables, context)=> {

            addToast(`${data?.data.message}`, { appearance: "success" });
            navigate("/profile");  
            
        },
    });

    
    const enable2FA = useMutation({
        mutationFn: (user: { totp: String}) =>
          api.postUserTwoFactor(user.totp),
        onError: (error, variables, context) => {
            // An error happened!
            const msg = error.response?.data.message
            ? error.response.data.message
            : error.message;

          addToast(`${msg}`, { appearance: "error" });
        },
        onSuccess:(data, variables, context)=> {

            addToast(`${data?.data.message}`, { appearance: "success" });
            queryClient.invalidateQueries({ queryKey: ['userData'] }),

/*             queryClient.setQueryData(['userData'], data?.data)
 */
            navigate("/profile");  
            
        },
    });


    if(isPending){
        return (
            <>
                <div>Loading ...</div>
            </>
        );
    }

    if(isError){
        return (
            <>
                <div>Error</div>
            </>
        );
    }

    if(data.alreadyHave2FA){
        return(
            <>
                <TopNav/>
                <div className='register2FA'>
                    <Link to='/profile' className='register2FA__back'>
                        <i className="material-symbols-outlined">
                            arrow_back_ios
                        </i>
                        Back
                    </Link>
                    <div className="register2FA__edit">
    
                        <div className='register2FA__edit__textInputs'>
    
                            <label className='register2FA__edit__input'>
                                <input className='register2FA__edit__inputValue'
                                defaultValue={totp}
                                onChange={(e)=>setTotp(e.target.value)}
                                type="text" name="" id="" placeholder='Enter the code...' 
    
                                />
                            </label>                             
    
                            <button className='register2FA__edit__button--red' onClick={()=>disable2FA.mutate({totp})}>Disable 2FA</button>
                        </div>
    
                    </div>
                </div>
            </>
        );
    }


    return(
        <>
            <TopNav/>
            <div className='register2FA'>
                <Link to='/profile' className='register2FA__back'>
                    <i className="material-symbols-outlined">
                        arrow_back_ios
                    </i>
                    Back
                </Link>
                <div className="register2FA__edit">

                    <h3>Scan the QR code</h3>
                    <img src={data?.qrCodeDataUrl} className="register2FA__edit__qrcode" alt="Qr code" />
                    <h3>Or use the secret in your authentication app:</h3>
                    <p>{data?.secret32}</p>
                    <div className='register2FA__edit__textInputs'>

                        <label className='register2FA__edit__input'>
                            <div className='register2FA__edit__inputName'>Scan the QR Code</div>
                            <input className='register2FA__edit__inputValue'
                            defaultValue={totp}
                            onChange={(e)=>setTotp(e.target.value)}
                            type="text" name="" id="" placeholder='Enter the code...' 

                            />
                        </label> 
                        

                        <button 
                            className='register2FA__edit__button'
                            onClick={()=>enable2FA.mutate({totp})}
                            >
                                Register
                        </button>


                    </div>

                </div>
            </div>
        </>
    );
}


export {Register2FAPage}
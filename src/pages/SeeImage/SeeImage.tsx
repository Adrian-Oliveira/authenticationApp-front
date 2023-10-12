
import './seeImagePage.scss';
import { useToasts } from 'react-toast-notifications';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../core/api';


const SeeImage = ()=> {

  const {addToast} = useToasts();

    let { imageID } = useParams();
    const [image, setImage] = useState<string>('');
    const url = window.location.href;

    const copyUrlToTransferArea = async () => {
        try {
          await navigator.clipboard.writeText(url);
          addToast("Url copied to the clipboard", {
            appearance: 'success',
            autoDismiss: true,
          })
        } catch (error) {
            addToast("Unable to copy text", {
                appearance: 'success',
                autoDismiss: true,
            })
        }
      };

      useEffect(()=>{
        const fetchImg = async()=>{
            const IMG = await api.getImage(imageID!)
            setImage(IMG);
        }
        fetchImg();
      },[])


    return(
        <div className='seeImagePage'>
           <div className='seeImagePage__card'>
                <h1 className='seeImagePage__card__title'>
                    Uploaded Successfully!
                </h1>
                <img className='seeImagePage__card__img' src={image} alt="" />
                <span className='seeImagePage__card__copyLink'>
                    <span
                      className='seeImagePage__card__copyLink__link'
                      >{url}</span>
                    <button 
                      className='seeImagePage__card__copyLink__button'
                      onClick={copyUrlToTransferArea}>Copy Link</button>
                </span>
           </div>
        </div>
    );
}


export {SeeImage}
import image from '../../assets/image.svg';
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {uploadImage} from '../../redux/image/imageSlice'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import {  useToasts } from 'react-toast-notifications';


const UploadFile = ()=> {

/*     const dispatch = useAppDispatch();
    const {addToast} = useToasts();
    const navigate = useNavigate();

    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const uploading = useAppSelector((state)=>state.image.uploading); */
    

    return(
        <div className='grid-cols-1 h-3/6'>
            <div className='w-48 h-64 self-center justify-self-center'>
                <h1 className='text-3xl font-bold '>Upload your image</h1>
                <h2 className=''>File should be Jpeg, Png,...</h2>

                <div className=' '>                     
                    <img  className='' src={image} alt="" />
                    <p className=''>Drag & Drop your image here</p>
                    </div>

                <p className=''>or</p>
                <label className='' >
                    <input type="file" />
                    Choose a file
                </label>
            </div>
        </div>
    );
}


export {UploadFile}
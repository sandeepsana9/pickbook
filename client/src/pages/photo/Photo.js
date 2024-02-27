import './Photo.css';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import '../../Style.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import axios from 'axios';



export default function Photo() {
    const [addPhotoPopup, setAddPhotoPopup] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            data.photo.forEach(async p => {
                if(p.type === 'image/png' || p.type === 'image/jpeg' || p.type === 'image/jpg'){
                    const formData = new FormData()
                    formData.append("file", p);
                    const response = await axios.post('http://localhost:3002/api/photo/upload', formData);

                    
                }else{
                    toast.error('Please upload a valid file format');
                    return;
                }
                
            });

        } catch (error) {

        }
    }
    return (
        <>
            <Navigation />
            <div>Photo</div>
            <div className='position-absolute right-10'>
                <button onClick={() => setAddPhotoPopup(true)}>Add Photo</button>
            </div>

            {/* add photo popup */}
            {addPhotoPopup && (
                <div className="popup" id='popup'>
                    <div className="popup-content">
                        <span className='close' onClick={() => setAddPhotoPopup(false)}>&times;</span>
                        <h2>Add Photo Popup</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="photo">Upload Photo:<span>*</span></label>
                                <input type='file' name='photo' id='photo' {...register("photo", {
                                    required: "You must specify a photo",
                                })} placeholder='Select Photo' className={`form-control ${errors.photo ? 'error-border' : ''}`} />
                                {errors.photo && <span className='error'>{errors.photo.message}</span>}
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

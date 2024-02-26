import './Photo.css';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import '../../Style.css';

export default function Photo() {
    const [addPhotoPopup, setAddPhotoPopup] = useState(false);

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
                        <form>
                            <label htmlFor="photo">Upload Photo:</label>
                            <input type='file' name='photo' />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

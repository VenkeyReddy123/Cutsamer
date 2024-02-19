import React from 'react';
import Img1 from './Assets/img1.jpg';
import Img2 from './Assets/img2.jpeg';
import Img3 from './Assets/img3.jpeg';

import './Home.css';
import { useNavigate } from 'react-router-dom';

const Images = () => {
    const navigate=useNavigate()
    return (
        <>

            <div className="ml-3" style={{ position: 'relative', maxHeight: '300px', overflow: 'hidden', marginTop: '10px' }}>
                <img src={Img1} alt="" className="d-block shadow-lg col-10 mx-auto" style={{ maxWidth: '90%', height: 'auto', maxHeight: '300px' }} />
                <button className="btn btn-primary shadow-lg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}  onClick={()=>{
                      navigate("/Dis")
                    }}>Buy Now</button>
            </div>

        </>
    );


}

export default Images;

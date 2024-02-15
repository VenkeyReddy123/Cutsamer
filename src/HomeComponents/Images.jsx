import React from 'react';
import Img1 from './Assets/img1.jpg';
import Img2 from './Assets/img2.jpeg';
import Img3 from './Assets/img3.jpeg';

import './Home.css';

const Images = () => {
    return (
        <>

            <div className="ml-3" style={{ position: 'relative', maxHeight: '300px', overflow: 'hidden', marginTop: '10px' }}>
                <img src={Img1} alt="" className="d-block shadow-lg col-10 mx-auto" style={{ maxWidth: '90%', height: 'auto', maxHeight: '300px' }} />
                <button className="btn btn-primary shadow-lg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Buy Now</button>
            </div>

            <div className="d-sm-flex flex-sm-column d-md-flex flex-md-column d-lg-flex flex-lg-row mt-5">
                <div className="card col-md-11 col-lg-6 mb-3 mb-lg-0 ml-2 mr-2" style={{ position: 'relative' }}>
                    <img src={Img2} alt="" className="card-img-top shadow-lg" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <button className="btn btn-primary" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Buy Now</button>
                </div>
                <div className="card col-md-12 col-lg-6" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={Img3} alt="" className="card-img-top shadow-lg" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <button className="btn btn-primary" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Buy Now</button>
                </div>
            </div>


        </>
    );


}

export default Images;

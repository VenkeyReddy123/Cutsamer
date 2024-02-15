import React from 'react'
import Images from './Images'
import Products from './Products'
import Product2 from './Product2'
import Img1 from './Assets/img6.png'

const HomePage2 = () => {
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Images />
      </div>
      <div className='vw-100 mt-3 mb-5'>
        <Products />
      </div>
      <div className='vw-100 mt-3 mb-5' >
        <Product2 />
      </div>

        <div className='' style={{overflowX:'hidden'}}>
        <div className="row justify-content-center">
          <div className="col-sm-12 d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
            <img src={Img1} alt="" height="250px" className="mb-3 mb-sm-0 me-sm-3" />
            <div>
              <p className="h4">Want to have the ultimate customer experience?</p>
              <p className="h1">Become a <span className="text-primary">member</span> today!</p>
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </div>
        </div>
        </div>  
   

    </>
  )
}

export default HomePage2
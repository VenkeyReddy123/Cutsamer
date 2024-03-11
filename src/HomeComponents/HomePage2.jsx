import React from 'react'
import Images from './Images'
import Products from './Products'
import Product2 from './Product2'

import Carosels from './Carosels'
import Suggest from './Suggest'

const HomePage2 = () => {
  return (
    <>
    <div style={{ overflowX: 'hidden',marginTop:'10px',background: '#F5F7FA'}}  >
        <Carosels/>
      </div>
      
      <div style={{ overflowX: 'hidden',marginTop:'10px',background: '#F5F7FA'}}  >
        <Images />
      </div>
      <div className='vw-100 mt-3 mb-5' style={{background: '#F5F7FA'}}>
        <Products />
      </div>
      <div className='vw-100 mt-3 mb-5' style={{}}>
        <h3>Suggested for You</h3>
        <Suggest/>
      </div>
      
      <div className='vw-100 mt-3 mb-5' style={{background: '#F5F7FA'}} >
        <Product2 />
      </div>


       
   

    </>
  )
}

export default HomePage2
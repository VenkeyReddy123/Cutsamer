import React from 'react'
import Section from './HomeComponents/Section'
import './HomeComponents/Home.css'
import Images from './HomeComponents/Images'
import Products from './HomeComponents/Products'
import Img1 from './HomeComponents/Assets/img6.png'
import Product2 from './HomeComponents/Product2'
import HomePage2 from './HomeComponents/HomePage2'
import ProductDisplay from './ProductDisplay'
import AddCard from './HomeComponents/AddCard'
import Product_Filters from './Product_Filters'
import { Route, Routes } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <nav>
                <div className='d-flex flex-row justify-content-between col-12 flex-wrap' style={{ background: '#F5F7FA',overflowX:'hidden'}}>
                    <div className='d-md-col-1'>
                        <h5 className='p-3'>ECommer</h5>
                    </div>
                    <div className='p-2 d-col-7'>
                        <input type="text" className='form-control' placeholder='Search.....' style={{ borderRadius: '50px' }} />
                    </div>
                    <div className='flex flex-row justify-content-between p-2 d-md-2 '>
                        <i style={{ fontSize: '25px' }} className="fa-solid fa-magnifying-glass mr-2 p-2 text-dark"></i>
                        <i className="fa-solid fa-cart-shopping p-2 text=dark" style={{ fontSize: '25px' }}></i>
                    </div>
                </div>
            </nav>
            <div className='mt-2 d-flex flex-column justify-content-start' style={{background:'#F5F7FA'}}  >
                  <Routes>
                    <Route path='/' element={<HomePage2/>}></Route>
                  </Routes>
                  {/* <ProductDisplay/> */}
                  {/* <AddCard/> */}
                  {/* <Product_Filters/> */}
                
            </div>
            
        </>
    )
}

export default HomePage

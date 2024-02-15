import React, { useState } from 'react'
import { Mobile_Data } from './Data/Mobile_Data'

const ProductDisplay = () => {
    const Data = Mobile_Data[6]
    const [count,SetCount]=useState(1)
    console.log(Data)
    return (
        <>
            

                <h6 className='text-center m text-primary mt-5'>Your's Product Details</h6>
                <div>
                    <div className='d-md-flex d-xl-flex  flex-md-column  flex-xl-row mt-5 ml-2 mr-2 ' style={{ overflowX: 'hidden' }}>
                         
                          <div className='col-md-11 col-lg-6 card border border-success mt-2  '>
                             <img src={Data.imageURL} alt="" className='' />
                            <div className='d-flex flex-row justify-content-center mb-3  '>
                            <button className='col-5 ml-auto p-2 border-danger text-danger d-flex flex-row justify-content-around ' style={{borderRadius:'50px'}}> <i class="fa-solid fa-heart-circle-check mt-1"></i><span>Add To Card</span></button>
                             <button className='col-5 ml-auto border-danger text-danger d-flex flex-row justify-content-around  ' style={{borderRadius:'50px'}}><i className="fa-solid fa-cart-shopping mt-2  "></i><span className='mt-1'>Buy Now</span></button>
                            </div>
                          </div>
                          <div className=' col-md-12 col-lg-6 border border-info mt-2 '>
                                <h6 className='text-warning'>Rating is <span className='text-dark'>{Data.rating}</span> Out of 5</h6>
                                <h6>Product Name:-<span className='h4 text-danger'>{Data.title}</span></h6>
                                <h6>Description:-<span className='text-primary'>{Data.description}</span></h6>
                                {/* <h6>Price:-{(Data.price*75)-(Data.price*(8.5/100))}<p><del>{Data.price*75}</del></p> </h6> */}
                                <div className='d-flex flex-row align-center'>
                                       <h6>Price:-</h6>
                                       <p className='h5 text-danger'>{(Data.price*75)-(Data.price*(8.5/100))}ind</p>
                                       <p className='ml-2'><del>{Data.price*75}ind</del></p>
                                </div>
                                <h5 className='text-primary'>Special offer ends in 23:00:45 hours</h5>
                                <div className='mt-2'>
                                    <h5>Quantity</h5>
                                    <div className='d-flex flex-row text-center mt-2 mb-2'>
                                    <button className='btn border-primary mr-2' onClick={() => SetCount(count + 1)}><i class="fa-solid fa-plus text-primary p-2"></i></button>
                                        <span className='h4 mt-2'>{count}</span>
                                        <button className='btn border-primary ml-2' onClick={() => {if(count>1){SetCount(count - 1)}}}><i class="fa-solid fa-minus text-primary p-2"></i></button>
                                    </div>
                                </div>

                          </div>
                    </div>  

                </div>

          
        </>
    )
}

export default ProductDisplay

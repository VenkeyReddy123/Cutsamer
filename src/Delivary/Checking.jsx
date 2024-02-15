import React, { useState } from 'react'
import Card_Details from '../HomeComponents/Card_Details'
import { Mobile_Data } from '../Data/Mobile_Data'

const Checking = () => {
    const Data = Mobile_Data
    const [quantity, SetQuantity] = useState(1)
    return (
        <>

            <div className='d-flex flex-column ml-auto mt-3' >
                <h6 className='text-center text-danger' style={{fontWeight:'bold'}}>Order-Summery</h6>
                <div className='col-md-11 col-sm-12 card-body ml-auto mr-auto' style={{ background: '#F5F7FA' }} >
                    <div className='d-flex flex-row justify-content-between '>
                        <h6>Delivary to:</h6>
                    </div>
                    <div className='d-flex flex-column flex-wrap' style={{ overflowX: 'hidden' }}>
                        <span style={{ fontWeight: 'bold' }} className='text-primary'>L.VenkateswarluReddy</span>
                        <span style={{ fontWeight: 'bold' }} className='text-dark'>D-30,parvathonagr,medelli,ganesh  templeparvathinager,medahalli,Bengalore,<br></br>Bengaluru Devision 560049</span>
                    </div>
                </div>
                <div className='card-body mt-3  col-md-11 mr-auto col-sm-12 ml-auto' style={{ background: '#F5F7FA' }}>
                    {Data.slice(5, 6).map((e) => {
                        return (
                            <>
                                <div className='row' style={{ overflowX: 'hidden' }}>
                                    <div className='col-4 card-body' style={{ overflowX: 'hidden' }}>
                                        <img className='col-12' src={e.imageURL} height={'130px'} alt="" />
                                        <div className='col-12 d-flex flex-row mt-3'>
                                            <button className='col-6 mr-2 btn btn-primary' onClick={() => { SetQuantity(quantity + 1) }}>+</button>

                                            {quantity}
                                            <button className='col-6 ml-2 btn btn-primary ' onClick={() => { if (quantity > 1) { SetQuantity(quantity - 1) } }}>-</button>
                                        </div>
                                    </div>
                                    <div className='col-8 d-flex flex-column mt-3 ' >
                                        <div className='d-flex flex-row'>
                                            <span style={{ fontWeight: 'bold' }}>{e.title}</span>
                                        </div>
                                        <div className='d-flex flex-row'>

                                            <span>{e.description}</span>
                                        </div>
                                        <div className='d-flex flex-row mt-1'>
                                            <span className='text-success' style={{ fontWeight: 'bold' }}>{e.rating}Out Of 5</span>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <h6 className='text-success' style={{ fontWeight: 'bold' }}>{e.discountPercentage}</h6><del className='text-dark mr-2'>{e.price * 84}ind</del><span className='ml-1'><i class="fa-solid fa-indian-rupee-sign mt-1 ml-2" style={{ color: 'black' }}></i>{((e.price) * 84 - (e.price * e.discountPercentage / 100) * 84)}</span>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className='col-md-7 mt-5 col-sm-12  mt-5 ml-auto mr-auto' style={{ background: '#F5F7FA' }} >
                    <div className='card shadow-lg'>
                        <div className='card-footer'>
                            <h6>Price Details</h6>
                        </div>
                        <div className='card-body'>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6>Price(1 Item)</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{Data[0].price * 84}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-4'>
                                <h6>Delivery Charges</h6>
                                <div className='d-flex flex-row'>
                                    <del><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>50</del>
                                    <h6 className='text-success ml-3'>Free</h6>
                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Quantities</h6>
                                <h4>{quantity}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Total</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity*Data[0].price*84}</h4>
                            </div>
                        </div>
                        <div className='card-footer'>
                        <div className='d-flex flex-row justify-content-center mt-3'>
                                
                                <span className='text-success' style={{fontWeight:'bold'}}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity*((Data[0].price*84)*(Data[0].discountPercentage/100) )}</span>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='container  d-flex flex-row justify-content-center mt-4 mb-5'>
               
                   <button className='btn btn-warning col-sm-7 col-lg-3 '>Continue</button>
            </div>
            </div>
            
        </>
    )
}

export default Checking
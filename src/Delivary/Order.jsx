import React from 'react'
import { Mobile_Data } from '../Data/Mobile_Data'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const Data=Mobile_Data
    const navigate=useNavigate()
    const Data2=['Arriving Today','Delivered Today,Feb 15','Delivered on Aug 04,2923','Delivered on June 23,2023']
    return (
        <> 
        {/* Home */}
        <nav>
                <div className='d-flex flex-row justify-content-between col-12 flex-wrap' style={{ background: '#F5F7FA', overflowX: 'hidden' }}>
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
            {/*  */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Home Page</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" onClick={()=>{navigate('/Home')}}>Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onClick={()=>{navigate('/Product')}} >Products</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link " onClick={()=>{navigate('/Addcard')}}>Addcards</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link " onClick={()=>{navigate('/Orders')}}>Orders</a>
                        </li>
                    </ul>
                </div>
            </nav>
        {/* Home */}
           
                <div className='d-flex flex-column flex-sm-row flex-lg-row'>
                    <div className='d-none d-lg-block col-3 mt-3'>
                        <div className='card-footer '>
                               <h3>Filters</h3>
                        </div>
                        <div className='card-body'>
                           <form>
                           <h5>Order Status</h5>
                                 <div className='d-flex flex-column'>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>On The Way</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>Delivered</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>Cancelled</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>Retuned</span>
                                       </div>
                                 </div>
                                 <h6>Order Time</h6>
                                 <div className='d-flex flex-column'>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>Last 30 Days</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>2023</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>2022</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>2021</span>
                                       </div>
                                       <div className='d-flex flex-row'>
                                       <input type="checkbox" /><span className='ml-3'>older</span>
                                       </div>
                                 </div>
                           </form>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-8'>
                        <div className='d-flex flex-column'>
                                 <div className='d-flex flex-row card-body'>
                                      <input type="text" placeholder='Search Your Order' className='col-lg-9' />
                                      <button className=' d-none d-md-block btn btn-primary col-2 ml-2'>Search Order</button>
                                      <button className='d-block d-lg-none btn btn-primary ml-2'>Filters</button>
                                 </div>
                                 {Data.slice(3,7).map((e,ind)=>{
                                    return(
                                        <>
                                          <div className='card-footer mt-2 d-flex flex-row' style={{background:'F1F3F6'}}>
                                                <div className='col-3'>
                                                      <img src={e.imageURL} alt="" srcset="" width={'100px'} height={'110px'} />
                                                </div>
                                                <div className='d-flex-flex-column ml-5'>
                                                      <h6>{Data2[ind]}</h6>
                                                      <span>{e.title}</span><br></br>
                                                      <span className='text-success' style={{fontWeight:'bold'}}>{e.rating} Out of 5</span>
                                                </div>
                                          </div>
                                        </>
                                    )
                                    
                                 })}
                                 <span className='text-center'>No More Orders</span>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Order
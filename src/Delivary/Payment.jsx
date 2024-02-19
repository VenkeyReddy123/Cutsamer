import React, { useState } from 'react'
import { Mobile_Data } from '../Data/Mobile_Data'
import axios, { Axios } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Payment = () => {
    const email=localStorage.getItem('email')
    const navigate=useNavigate()
    const Location=useLocation()
    const { Product, Add,quantity } = Location.state;
    let PayOp=null
    console.log(Product)
    const handleOptionChange = (event) => {
        PayOp=event.target.value
    };
    const BookOder = () => {
        if(PayOp){

        }
        else{
            alert('Select Payment Option')
            return
        }
        let Status=null
        if(PayOp=='Cash On Delevary'){
               Status='Pending'
        }  
        else{
            Status='Compleate'
        }
        console.log(PayOp,Status)


        const Data = {
            "username":Product.Product_Name.username,
            "Product_Name":Product.Product_Name.id,
            "Payment_Status":Status,
            "Custamer_Name":email,
            "Delivary_Type":PayOp,

        }
        axios.post("http://127.0.0.1:8000/OrderDetails/",Data).then((d)=>{
                console.log(d.data)
                navigate('/Book')
            }).then((e)=>{
                console.log('error')
            })
    //     const Data2={
    //         "Product_Name": "Realme 10",
    //         "Custamer_Name": "Venkey_Reddy",
    //         "Full_Name":"Venkateswarlu Reddy",
    //         "City":"Bengalur",
    //         "Adress":"D-30,parvathonagr,medelli,ganesh templeparvathinager,medahalli,Bengaluru Devision 560049",
    //         "Total_Amount":15000
            
    //     }
            
            // axios.post("http://127.0.0.1:8000/CustamerDetails/",Data2).then((d)=>{
            //     console.log(d.data)
            // }).then((e)=>{
            //     console.log('error')
            // })

     }

    return (
        <>
            <div className='d-flex  flex-column d-lg-flex flex-lg-row col-12'>
                <div className='col-sm-12 col-lg-8 d-flex flex-column'>
                    {/* Indise column */}
                    <div className='card col-12 mt-2' style={{ maxHeight: '100px' }}>
                        <div className='d-flex flex-column'>
                            <h2>Login<i class="fa-solid fa-check ml-2 text-success"></i></h2>
                            <span className='mb-2 text-danger' style={{ fontWeight: 'bold' }}>Flipcard Custemer <span className='text-primary' style={{ fontWeight: 'bold' }}>+91{Add.Number}</span></span>
                        </div>
                    </div>
                    {/* n side */}
                    <div className='card col-12 mt-2  ' style={{ maxHeight: '200px' }}>
                        <div className='d-flex flex-row justify-content-between '>
                            <h2>Delivery Adress<i class="fa-solid fa-check ml-2 text-success"></i></h2>
                        </div>
                        <div className='d-flex flex-column flex-wrap' style={{ overflowX: 'hidden' }}>
                            <span style={{ fontWeight: 'bold' }} className='text-primary'>{Add.Name}</span>
                            <span style={{ fontWeight: 'bold' }} className='text-dark'>{Add.House}{Add.Road}<br></br>{Add.State}{Add.City},Pin:-{Add.Pin}</span>
                        </div>
                    </div>
                    {/* insied Payment */}
                    <div className='card col-12 mt-2 ' style={{ maxHeight: '300px', background: '#F5F7FA' }} >
                        <h2 className='text-center'>Payment Options</h2>
                        <div className='d-flex flex-column flex-wrap card-body' style={{ overflowX: 'hidden', }}>
                            <form>
                                <div className='d-flex flex-row justify-content-bteween card mt-2'>
                                    <input type="radio" value="Upi"onChange={handleOptionChange} />
                                    <label htmlFor="">Upi</label>
                                </div>
                                <div className='d-flex flex-row justify-content-bteween card mt-2'>
                                    <input type="radio" name="py" value="Wallets" onChange={handleOptionChange} />
                                    <label htmlFor="">Wallets</label>
                                </div>
                                <div className='d-flex flex-row justify-content-bteween card mt-2'>
                                    <input type="radio" name='py' value="Credit/Debit" onChange={handleOptionChange} />
                                    <label htmlFor="">Credet/Debit Card</label>
                                </div>
                                <div className='d-flex flex-row justify-content-bteween card mt-2'>
                                    <input type="radio" name="py" value="Net Banking" onChange={handleOptionChange} />
                                    <label htmlFor="">Net Banking</label>
                                </div>
                                <div className='d-flex flex-row justify-content-bteween card mt-2 '>
                                    <input type="radio" name="py" value="Cash On Delevary" onChange={handleOptionChange} />
                                    <label htmlFor="">Cash On Deleivary</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* ROww */}
                <div className='col-sm-12 col-lg-4 mt-3'>
                    <div className='card shadow-lg'>
                        <div className='card-footer'>
                            <h6>Price Details</h6>
                        </div>
                        <div className='card-body'>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6>Price(1 Item)</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{quantity*Product.Product_Name.Price}</h4>
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
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity*Product.Product_Name.Price}</h4>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='d-flex flex-row justify-content-center mt-3'>

                                <span className='text-success' style={{ fontWeight: 'bold' }}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity*Product.Product_Name.Price}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10 col-lg-6 mt-3 text-center ml-2'>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            BookOder()
                        }}>
                            <button type='submit' className='btn btn-danger ml-3'   >Click To Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
import React, { useState } from 'react'
// import { Mobile_Data } from '../Data/Mobile_Data'
import axios, { Axios } from 'axios'
import { json, useLocation, useNavigate } from 'react-router-dom'
import Cupon from '../Cupon'

const Payment = () => {
    const email = localStorage.getItem('email')
    const navigate = useNavigate()
    const Location = useLocation()
    const [CChek,setCChek]=useState(false)
    const [Off,setOff]=useState(null)

    const storedAddress = localStorage.getItem('Address2');
    const Add = JSON.parse(storedAddress)
   
     const quantity=1
    // const { Product, quantity } = Location.state;
    const ArrList=Location.state.ArrList
    let PayOp = null

    const handleOptionChange = (event) => {
        PayOp = event.target.value
    };
    const BookOder = async() => {
        if (PayOp) {

        }
        else {
            alert('Select Payment Option')
            return
        }
        let Status = null
        if (PayOp == 'Cash On Delevary') {
            Status = 'Pending'
        }
        else {
            Status = 'Compleate'
        }

        ArrList.map(async(Product)=>{
            console.log(1)
            const Data = {
                "username": Product.Product_Name.username,
                "Product_Name": Product.Product_Name.id,
                "Payment_Status": Status,
                "Custamer_Name": email,
                "Delivary_Type": PayOp,
    
            }
           await axios.post("http://127.0.0.1:8000/OrderDetails/", Data).then(async(d) => {
                const Data2 = {
                    "ImageUrl":Product.ImageUrl,
                    "username":d.data.username,
                    "Product_Name": Product.Product_Name.id,
                    "City": Add.City,
                    "Full_Name": Add.Name,
                    "Quantity":Product.quantity,
                    "Total_Amount": quantity * Product.Product_Name.Price,
                    "Adress": JSON.stringify(Add),
                    "Custamer_Name": d.data.Custamer_Name
                    
                }
                console.log(Data2)
               await axios.post("http://127.0.0.1:8000/CustamerDetails/", Data2).then((d) => {
                 console.log(d.data)
                      
                })
    
            }).catch((e)=>{
                alert("please Try AGian Later")
            })
    
    
        })
        alert('Done')
        navigate('/Book')
        

          
    }
        const UpdateOff=(off)=>{
            if(quantity*Product.Product_Name.Price>1000){
                 alert('succes')
                 setOff(off)
            }
            else{
                alert("Plase Primce Amount is Greater Than 1000")
            }
            //  
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
                        {/*  */}
                        <div >
                              <div style={{textAlign:'end'}}>
                              <i class="fa-solid fa-plus mt-2" style={{fontSize:'25px'}} onClick={()=>{setCChek(!CChek)}}></i>Enter Coupon Code
                              </div>
                              {CChek&&<>
                               <Cupon UpdateOff={UpdateOff} />
                              </>}

                        </div>
                        {/*  */}
                              {Off&&<span className='ml-3 text-success'>Congrats Lations You Won {Off}<i class="fa-solid fa-indian-rupee-sign ml-1 mr-1"></i>Cash</span>}
                        {/* insied Payment */}
                        <div className='card col-12 mt-2 ' style={{ maxHeight: '300px', background: '#F5F7FA' }} >
                            <h2 className='text-center'>Payment Options</h2>
                            <div className='d-flex flex-column flex-wrap card-body' style={{ overflowX: 'hidden', }}>
                                <form>
                                    <div className='d-flex flex-row justify-content-bteween card mt-2'>
                                        <input type="radio" value="Upi" onChange={handleOptionChange} />
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
                        {/* <div className='card shadow-lg'>
                            <div className='card-footer'>
                                <span  >Price Details</span  >
                            </div>
                            <div className='card-body'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <span  >Price(1 Item)</span  >
                                    <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{quantity * Product.Product_Name.Price}</h4>
                                </div>
                                <div className='d-flex flex-row justify-content-between mt-4'>
                                    <span  >Delivery Charges</span  >
                                    <div className='d-flex flex-row'>
                                        <del><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>50</del>
                                        <span   className='text-success ml-3'>Free</span  >
                                    </div>
                                </div>
                                <div className='d-flex flex-row justify-content-between mt-3'>
                                    <span  >Quantities</span  >
                                    <h4>{quantity}</h4>
                                </div>
                                {Off&&<>
                                    <div className='d-flex flex-row justify-content-between mt-3'>
                                    <span  >CashBack</span  >
                                    <h4>{Off}</h4>
                                </div>
                                </>}
                                <div className='d-flex flex-row justify-content-between mt-3'>
                                    <span  >Total</span  >
                                    <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{Off ? (
    <>
        {quantity * (Product.Product_Name.Price - Off)}
    </>
) : (
    <>
        {quantity * Product.Product_Name.Price}
    </>
)}
</h4>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='d-flex flex-row justify-content-center mt-3'>

                                    <span className='text-success' style={{ fontWeight: 'bold' }}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity * Product.Product_Name.Price}</span>
                                </div>
                            </div>
                        </div> */}
                        <div className='col-sm-10 col-lg-6 mt-3 text-center ml-2'>
                            <form onSubmit={(e) => {
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
import React, { useEffect, useState } from 'react'
import Card_Details from '../HomeComponents/Card_Details'
import { Mobile_Data } from '../Data/Mobile_Data'
import { json, useLocation, useNavigate } from 'react-router-dom'
import Adress from '../Delivary/Adress'

const Checking = () => {

    const Data = Mobile_Data
    const Prices = [0]
    const Location = useLocation()
    const [List, setList] = useState([])
    const [quantity, SetQuantity] = useState(1)
    const navigate = useNavigate()
    const [Even, SetEven] = useState(false)
    const [Chnage, setChange] = useState(true)
    const Discount=[0]
    const storedAddress = localStorage.getItem('Address2');
    // const[editindex,setindex]=useState(null)
    let Add = storedAddress ? JSON.parse(storedAddress) : null;
    const [setAdd, SetAddres] = useState([])
    useEffect(() => {
        if (Location.state.Product ? true : false) {
            setList([Location.state.Product])

        }
        else {
            setList(Location.state.Arr)
        }

        if (!Add) {

            SetEven(!Even)

        }
        SetAddres([Add])

    }, [])


    const Dissplay = () => {
        const storedAddress = localStorage.getItem('Address2');
        const Add = storedAddress ? JSON.parse(storedAddress) : null;
        if (Add) {
            SetAddres([Add])
            setChange(!Chnage)
            SetEven(!Even)
        }
        else {
            alert('Please Enter Adress')
        }
    }
    const [quantities, setQuantities] = useState(Array(List.length).fill(1)); // Initialize quantities to 1 for each product
    const [editIndex, setEditIndex] = useState(null); // Keep track of the index of the product being edited

    const handleQuantityChange = (index, quan, type) => {
        if (type == 'inc') {
            const updatedList = List.map((e, ind) => {
                if (ind === index) {
                    const Quan = quan + 1
                    console.log(Quan)
                    return { ...e, quantity: Quan };
                } else {
                    return e;
                }
            });

            setList(updatedList);
            return
        }
        else {
            const updatedList = List.map((e, ind) => {
                if (quan > 1) {
                    if (ind === index) {
                        const Quan = quan - 1
                        console.log(Quan)
                        return { ...e, quantity: Quan };
                    } else {
                        return e;
                    }
                }
                else {
                    return e
                }
            });

            setList(updatedList);
            return
        }



    };
    function sum(arr) {

        if (arr.length > 0) {
            let Sum = 0
            for (let va of arr) {
                Sum += Number(va)
            }
            return Sum
        }
    }

    return (
        <>
            {/* Adrsss */}
            {/* {List&&List.map((e)=>{
    console.log(e)
   })} */}
            <h6 className='text-center text-danger' style={{ fontWeight: 'bold' }}>Order-Summery</h6>
            <div className='col-md-12 col-sm-12 card-body ml-auto mr-auto' style={{ background: '#F5F7FA' }} >
                <div className='d-flex flex-row justify-content-between '>
                    <h6>Delivary to:</h6>
                    <button className='btn btn-success' onClick={() => {
                        setChange(!Chnage)
                        Dissplay()
                    }} >Change</button>
                </div>
                <div style={{ overflowX: 'hidden' }}>
                    {Chnage && setAdd && setAdd.map((Add) => {
                        return (
                            <>
                                <span style={{ fontWeight: 'bold' }} className='text-primary'>{Add.Name}</span><br></br>
                                <span style={{ fontWeight: 'bold' }} className='text-dark'>{Add.House}<br></br>{Add.Road}<br></br>{Add.State}{Add.City},Pin:-{Add.Pin}</span>

                            </>
                        )
                    })}
                </div>
                {Even && Even &&
                    <div style={{ height: '100%' }}>
                        <Adress Display={Dissplay} />
                    </div>
                }
            </div>

            {/*  */}
           <div className='d-sm-flex flex-sm-column d-lg-flex flex-lg-row'>
            <div className='col-sm-12 col-lg-8'>
                  {List && List.map((Product, index) => {
                    // {Math.trunc((Data2.Product_Name.Price*(Data2.Product_Name.Discount/100)))}
                Discount.push(Math.trunc((Product.Product_Name.Price*(Product.Product_Name.Discount/100))))
                Prices.push(Product.quantity * Product.Product_Name.Price)
                return (
                    <React.Fragment key={index}>
                        <div key={index} className='card-body col-md-12 mr-auto col-sm-12' style={{ background: '#F5F7FA' }}>
                            <div className='col-sm-12 mt-3 d-flex flex-row' style={{ overflowX: 'hidden' }}>
                                <div className='col-6 ' style={{ overflow: 'hidden' }}>
                                    <img src={Product.ImageUrl} alt="" height={'130px'} />
                                </div>
                                <div className='col-6'>
                                    <h6>{Product.Product_Name.Product_Name}</h6>
                                    <h6><i className="fa-solid fa-indian-rupee-sign"></i>{Product.Product_Name.Price}</h6>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-4 mt-2'>
                                <div className='col-12 d-flex flex-row'>
                                    <button className='btn btn-primary col-4' onClick={() => handleQuantityChange(index, Product.quantity, 'inc')}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    {editIndex === index ? <h2>{Product.quantity}</h2> : <h2>{Product.quantity}</h2>}
                                    <button className='btn btn-danger col-4' onClick={() => handleQuantityChange(index, Product.quantity, 'dec')}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Additional JSX elements can be added here */}
                    </React.Fragment>
                );
            })}
          
            </div>
                 
            <div className='col-sm-12 col-lg-4 mt-3'>
                <div className='card shadow-lg'>
                    <div className='card-footer'>
                        <h6>Price Details</h6>
                    </div>
                    <div className='card-body'>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6>Price(Total Items)</h6>
                            <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{sum(Prices)}</h4>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-4'>
                            <h6>Delivery Charges</h6>
                            <div className='d-flex flex-row'>
                                <del><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>50</del>
                                <h6 className='text-success ml-3'>Free</h6>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <h6>Total Items</h6>
                            <h4>{Prices.length - 1}</h4>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <h6>Total</h6>
                            <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{sum(Prices)}</h4>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div className='d-flex flex-row justify-content-center mt-3'>

                            <span className='text-success' style={{ fontWeight: 'bold' }}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{sum(Discount)}</span>
                        </div>
                    </div>
                </div>
            </div>

           </div>
            {/* </div> */}
            <div className='container  d-flex flex-row justify-content-center mt-4 mb-5'>

                <button className='btn btn-warning col-sm-7 col-lg-3' onClick={() => { navigate('/Pay', { state: {ArrList:List} }) }} >Continue</button>
            </div>


        </>
    )
}

export default Checking
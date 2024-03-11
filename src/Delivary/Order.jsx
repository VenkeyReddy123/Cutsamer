import React, { useEffect, useState } from 'react'
import { Mobile_Data } from '../Data/Mobile_Data'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../HomeComponents/Navbar'
import DSidebar from '../DSidebar'
import RandomNumberGenerator from '../RandomRating'

const Order = () => {
    const Data = Mobile_Data
    const navigate = useNavigate()
    const Data2 = ['Arriving Today', 'Delivered Today,Feb 15', 'Delivered on Aug 04,2923', 'Delivered on June 23,2023']
    const Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health&Beauty', 'Books&Media', 'Sports&OutDors', 'Toys&Games', 'Automotive', 'Jewelry&Accessories']
    const [OnClick, setOnClick] = useState(false);
    const Callback = () => {
        setOnClick(!OnClick)

    }
    // Retrieve the random value using the random index
    const [Data3, setData3] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/LCODetails/").then((d) => {
            const FilterData = d.data.filter((e) => {
                return e.Custamer_Name.Email === localStorage.getItem('email')
            })
            setData3(FilterData)



        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    const [DSide, setDSide] = useState(false)
    const DisplySidebar = () => {

        setDSide(!DSide)
    }

    return (
        <>
            {/* Home */}

            {/*  */}
            <nav class="navbar  navsaffgfgbar-light bg-light">

                <Navbar Callback={Callback} DisplySidebar={DisplySidebar} />
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
                        {Data3 && Data3.map((e, ind) => {

                            const index = Math.floor(Math.random() * Data2.length);
                            return (
                                <>
                                    <div className='card-footer mt-2 d-flex flex-row' style={{ background: 'F1F3F6' }}>
                                        <div className='col-3'>
                                            <img src={e.ImageUrl.ImageUrl} alt="" srcset="" width={'100px'} height={'110px'} />
                                        </div>
                                        <div className='d-flex-flex-column ml-5'>
                                            <h6>{Data2[index]}</h6>
                                            <span>{e.Order_Id.Product_Name.Product_Name}</span><br></br>
                                            <div style={{display:'inline-block'}}>
                              <RandomNumberGenerator/>
                        </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                        <span className='text-center'>No More Orders</span>
                    </div>
                </div>
            </div>
            {OnClick && <div className='col-sm-10 col-md-6 col-lg-3' style={{ height: '100%', position: 'absolute', top: '175px', left: '-20px', overflow: 'hidden' }} >
                {Cat.slice().reverse().map((e, index) => { // Reversing the order of mapped elements
                    return (
                        <div key={index} className='card-footer text-start ml-2' style={{ height: '55px', background: '#2457AA', cursor: 'pointer', transitionDelay: `${index * 0.1}s` }} >
                            <div className='d-flex flex-row'>
                                <i className="fa-solid fa-arrow-right mt-2  mr-3 text-light" style={{ fontSize: '30px' }}></i>
                                <h5 className='mt-2 text-light' onClick={() => { navigate("/Product", { state: { Cat: e } }) }}>{e}</h5>
                            </div>
                        </div>
                    )
                })}
                {/* <Carosels/>  */}
            </div>}
            <div className={`bg-dark ${DSide ? 'dside' : 'ddside'}`} style={{ height: '65vh', position: 'absolute', top: '24%', right: '0px', overflow: 'hidden' }}>
                <DSidebar />
            </div>

        </>
    )
}

export default Order
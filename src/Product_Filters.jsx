import React, { useEffect, useState } from 'react'
import { Mobile_Data } from './Data/Mobile_Data'
import { useNavigate } from 'react-router-dom'



import './Filter.css'
import axios from 'axios'
const Product_Filters = () => {
    const navigate = useNavigate()
    const Data = Mobile_Data
    const [Data2,setData2]=useState()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {   
                  setData2(d.data)
                  console.log('hi')
                  console.log(d.data)
        }).catch((e) => {
            // alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    return (
          
        <> 
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
                            <a class="nav-link" onClick={() => { navigate('/Home') }}>Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onClick={() => { navigate('/Product') }} >Products</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onClick={() => { navigate('/Addcard') }}>Addcards</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onClick={() => { navigate('/Orders') }}>Orders</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*  */}
            <div className='d-flex flex-row' style={{ height: '100vh', background: '#F5F7FA', overflowX: 'hidden' }}>
                <sidebar className='d-none d-md-block' style={{ height: '100%', width: '25%', overflowY: 'auto', background: '#F5F7FA' }}>
                    <h6 >Price Ranges</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>0-1000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>1001-5000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>5001-15,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>5,000-10,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>10,000-100000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>more 10000</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Electronics</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Mobiles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Laptops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Cameras</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Audio&Video</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Telivision</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Electric Devices</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Home Appliances</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Refrigerators</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Washing Machines</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Dish Washers</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Vaccum Cleaners</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Ovens and Ranges</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Cofee Makers</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Clothing and Apparel</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Tops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Bottoms</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Dresses</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Outwear</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Shoes</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Accessories</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Furniture and Home Decor</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Sofas</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Beds</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Tables</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Chairs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Desks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Home accents</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Health and Personal Care</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Vitamins and Supplements</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Skincare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Haircare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Makeup</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Personal Hygiene Products</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Automotive</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Cars</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Trucks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>SUVs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Motorcycles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Parts and  Accessories</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Tires</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Toys and Games</h6>
                    <form className='ml-2'>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Action Figures</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Dolls</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Board Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Video Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Puzzels</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="checkbox" className='mr-2' /><span>Educatinal Toys</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                </sidebar>
                <div className='container ml-3 mt-3' style={{ overflowY: 'auto' }}>
                    <div className='row'>
                        {Data2 && Data2.map((e) => {
                            return (
                                <>
                                    <div className='model col-sm-6 col-md-4 col-lg-3 mt-3' style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <div class="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', background: '#F5F7FA' }}>
                                            <img src={e.ImageUrl} class="card-img-top" height="110px" style={{ position: 'relative' }} alt="..." />
                                            <div class="card-body d-flex flex-column ">
                                                <h6 class="card-title">{e.Product_Name.Product_Name}</h6>
                                                <span className='text-success'><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{e.Product_Name.Price}</span>
                                            </div>
                                            <div className="card-footer" style={{ height: '50px' }}>
                                                <span className='btn btn-primary col-10 mb-2' onClick={()=>{navigate('/Dis',{state:{data:e}})}} >Buy Now<i class="fa-solid fa-cart-plus ml-2"></i></span>
                                            </div>
                                        </div>
                                    </div>


                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product_Filters







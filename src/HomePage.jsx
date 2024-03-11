import React, { useEffect, useState } from 'react'
import './HomeComponents/Home.css'
import HomePage2 from './HomeComponents/HomePage2'
import { useNavigate } from 'react-router-dom'
import { TopDealsFM } from './HomeComponents/TopDealsFM'
import Electronic from './HomeComponents/Electronic'
import Off from '../src/HomeComponents/Off'
import DSidebar from './DSidebar'
import Navbar from './HomeComponents/Navbar'
import Footer from './Footer'
import Shop_By from './HomeComponents/Shop_By'
import axios from 'axios'
import CardImages from './HomeComponents/CardImages'
import ArrivalItems from './HomeComponents/ArrivalItems'
import Detaisl from './HomeComponents/Detaisl'
import Recamandete from './HomeComponents/Recamandete'
import './Dsidebar.css'
import Nav2 from './Nav2'

const HomePage = () => {
    const navigate = useNavigate()
     const Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health&Beauty', 'Books&Media', 'Sports&OutDors', 'Toys&Games', 'Automotive', 'Jewelry&Accessories']
    const [OnClick, setOnClick] = useState(false);
    const [DSide,setDSide]=useState(false)
    const Callback = () => {
        setOnClick(!OnClick)

    }

    const [Data2, setData2] = useState(null)
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            setData2(d.data)


        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    const DisplySidebar=()=>{
        
        setDSide(!DSide)
    }
    return (
        <>

        
            {/* <nav>
                <div className='d-flex flex-row justify-content-between col-12 flex-wrap' style={{ background: '#F5F7FA', overflowX: 'hidden' }}>
                    <div className='d-md-col-1'>
                        <h5 className='p-2'>ECommer</h5>
                    </div>
                    <div className='p-2 d-col-7'>
                        <input type="text" className='form-control' placeholder='Search.....' style={{ borderRadius: '50px' }} />
                    </div>
                    <div className='flex flex-row justify-content-between p-2 d-md-2 '>
                        <i style={{ fontSize: '25px' }} className="fa-solid fa-magnifying-glass mr-2 p-2 text-dark"></i>
                        <i className="fa-solid fa-cart-shopping p-2 text=dark" style={{ fontSize: '25px' }}></i>
                    </div>
                </div>
            </nav> */}
            <div style={{width:'100%',overflowX:'hidden'}} >
                       <Nav2 />
            </div>

            {/*  */}


            <div style={{ position: 'relative',width:'100%',overflowX:'hidden'}}  >
                <Navbar Callback={Callback} DisplySidebar={DisplySidebar} />
            </div>
            <div className='mt-2 d-flex flex-column justify-content-start' style={{ position: 'relative',overflowX:'hidden' }}>
                <HomePage2 />
            </div>
            <div className='mt-2 d-flex flex-column justify-content-start' style={{ overflowX: 'hidden' }} >
                <TopDealsFM />
            </div>
           

            <div className='mt-2 d-flex flex-column bg-light container-fluid' style={{position:'relative',height: '200px', position: 'relative',overflowX:'hidden' }} >
                <div className='card-footer bg-primary' style={{ height: '130px' }}>
                <h6>Shop By Category</h6>

                </div>
                <div className='d-flex flex-row col-12 container-fluid ' style={{position:'absolute', top: '40px', overflowX: 'auto',scrollbarWidth:'none' }}>
                    {Data2 && Data2.slice(13, 20).map((e) => {
                        return (
                            <>
                                <div className=' ml-4 rounded-circle col-8  col-md-4 col-lg-3'>
                                    <img className='rounded-circle p-2' src={e.ImageUrl} style={{ height: '150px' }} alt="" srcset="" />
                                </div>
                            </>
                        )
                    })}
                </div>



            </div>
            <div className='mt-2 d-flex flex-column justify-content-start' style={{ overflowX: 'hidden' }} >
                <Electronic />
            </div>
            <div className='mt-2' style={{ overflowX: 'hidden' }} >
                <CardImages />
            </div>
            <div className='mt-2' style={{ overflowX: 'hidden' }} >
                <ArrivalItems/>
            </div>
            <div className='mt-2' style={{ overflowX: 'hidden' }} >
                <Detaisl/>
            </div>
            <div className='mt-5 mb-2' style={{ overflowX: 'hidden' }} >
                <Recamandete/>
            </div>
            
            <div className='mt-2 d-flex flex-column justify-content-start' style={{ overflowX: 'hidden' }} >
                <Off />
            </div>
            <div className='mt-2 d-flex flex-column justify-content-start' style={{ overflowX: 'hidden' }} >
                <Footer />
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
            </div>}
            <div className={`bg-dark ${DSide?'dside':'ddside'}`} style={{ position: 'absolute', top: '24%', right: '0px', overflow: 'hidden'}}>
              <DSidebar className='p-2'/>
            </div>


        </>
    )
}

export default HomePage

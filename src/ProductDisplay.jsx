import React, { useEffect, useState } from 'react'
import { Mobile_Data } from './Data/Mobile_Data'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

class TruncateWords extends React.Component {
    truncateWords = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        const truncated = text.substr(0, text.lastIndexOf(' ', maxLength));
        return truncated + '...';
    };

    render() {
        const { text, maxLength } = this.props;
        const truncatedText = this.truncateWords(text, maxLength);

        return <span>{truncatedText}</span>;
    }
}

const ProductDisplay = () => {
    const Location = useLocation()
    const Data2 = Location.state.data
    console.log(Data2)
    const navigate = useNavigate()
    const Data = Mobile_Data[6]
    const [count, SetCount] = useState(1)
    const [Data3, setData2] = useState(null)
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            setData2(d.data)
        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    const AddCard=(e)=>{
       const Data={
            "Custamer_Name":localStorage.getItem('email'),
            "Product_Name":e.Product_Name.id
        }
         axios.post("http://127.0.0.1:8000/AddCardDetails/",Data).then((e)=>{
            console.log('Success')
         }).catch((e)=>{
            alert('please Try Again Later')
         })
    }
    return (
        <>
            {/*  */}
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3">
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
                            <a class="nav-link " onClick={() => { navigate('/Addcard') }}>Addcards</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onClick={() => { navigate('/Order') }}>Orders</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*  */}

            <h6 className='text-center h3 text-primary mt-3'>Your's Product Details</h6>
            <div>
                <div className='d-md-flex d-xl-flex  flex-md-row  flex-xl-row mt-5 ml-2 mr-2 ' style={{ overflowX: 'hidden' }}>

                    <div className='col-md-6 col-lg-6 card border border-success mt-2' style={{ height: '400px', marginBottom: '30px' }}>
                        <img src={Data2.ImageUrl} alt={Data2.Product_Name.Product_Name} height={'85%'} />
                        <div className='d-flex flex-row justify-content-center mt-2  '>
                            <button onClick={() => { AddCard(Data2)}} className='col-5 ml-auto p-2 border-danger text-danger d-flex flex-row justify-content-around bg-light ' style={{ borderRadius: '50px' }}> <i class="fa-solid fa-heart-circle-check mt-1"></i><span>Add To Card</span></button>
                            <button onClick={() => { navigate('/Add',{state:{Product:Data2}}) }} className='col-5 ml-auto border-danger text-danger d-flex flex-row justify-content-around' style={{ borderRadius: '50px' }}><i className="fa-solid fa-cart-shopping mt-2"></i><span className='mt-1'>Buy Now</span></button>
                        </div>
                    </div>
                    <div className=' col-md-6 col-lg-6 border border-info mt-2 ' style={{ height: '400px', marginBottom: '30px' }}>
                        <h6>
                            <span className='h5 text-danger d-inline-block w-100 text-wrap text-break'>{Data2.Product_Name.Product_Name}</span>
                        </h6>

                        <div className='d-flex flex-row align-center'>
                            <h3>Price:-</h3>
                            <p className='h5 text-primary' style={{ fontSize: '30px' }}><i class="fa-solid fa-indian-rupee-sign mr-2 "></i>{Data2.Product_Name.Price}</p>
                            <p className='ml-2 text-danger ml-3'><del style={{ fontSize: '30px' }}><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{Data2.Product_Name.Price * 2}</del></p>
                        </div>
                        <h6 className='text-primary' style={{ fontSize: '25px' }}>Rating is <span className='text-dark'>{Data.rating}<i class="fa-solid fa-star"></i></span> Out of 5</h6>
                        <h5 className='text-primary'>Special offer ends in 23:00:45 hours</h5>
                        <div className='mt-2'>
                            <h5>Quantity</h5>
                            <div className='d-flex flex-row text-center mt-2 mb-2'>
                                <button className='btn border-primary mr-2' onClick={() => SetCount(count + 1)}><i class="fa-solid fa-plus text-primary p-2"></i></button>
                                <span className='h4 mt-2'>{count}</span>
                                <button className='btn border-primary ml-2' onClick={() => { if (count > 1) { SetCount(count - 1) } }}><i class="fa-solid fa-minus text-primary p-2"></i></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='d-flex flex-column' style={{ overflowX: 'hidden' }}>
                <h5 className='p-3 text-primary'><i className="fa-solid fa-hashtag p-2 text-warning"></i>Top Deals Today</h5>
                <div className='d-flex flex-row  col-12 ' style={{ overflowX: 'auto' }}>
                    {Data3 && Data3.slice(25, 33).map((e, ind) => {
                        return (
                            <>
                                <div key={ind} className=' card col-8  col-md-4 col-xl-2 mr-4 ml-3' style={{ height: '300px', borderRadius: '50px' }}>
                                    <div className='card-body' style={{ height: '150px', marginTop: '-10px' }}>
                                        <img className='shadow' src={e.ImageUrl} alt={e.Product_Name.Product_Name} width={'100%'} height={'150px'} style={{ borderRadius: '10px' }} />
                                    </div>
                                    <div className='card-body' onClick={() => { navigate("/Dis", { state: { data: e } }) }} >
                                        <h6 className='text-primary'><TruncateWords text={e.Product_Name.Product_Name} maxLength={20}
                                        /></h6>
                                        <span className='text-success'><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{e.Product_Name.Price}</span>
                                    </div>

                                </div>
                            </>
                        )
                    })}

                </div>

            </div>


        </>
    )
}

export default ProductDisplay

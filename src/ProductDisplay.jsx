import React, { useEffect, useState } from 'react'
import { Mobile_Data } from './Data/Mobile_Data'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ResizedImage from './HomeComponents/ResizedImage'
import Navbar from './HomeComponents/Navbar'
import DSidebar from './DSidebar'
import Countdown from './Countdown'
import RandomNumberGenerator from './RandomRating'



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
    const Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health', 'Books', 'Sports', 'Toys', 'Automotive', 'Jewelry&Accessories']
    const Location = useLocation()
    const Data2 = Location.state.data
    const navigate = useNavigate()
    const Data = Mobile_Data[6]
    const [count, SetCount] = useState(1)
    const [Data3, setData2] = useState(null)
    const [OnClick, setOnClick] = useState(false);
    const Callback = () => {
        setOnClick(!OnClick)

    }
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            // setData2(d.data)
            const Filter=d.data.filter((e)=>{
                return Data2.Product_Name.Category==e.Product_Name.Category
            })

            setData2(Filter)
        }).catch((e) => {
            alert('Please Try AGian Later Somthing Eroor')
        })

    }, [Data3])
    const AddCard=(e)=>{
        const email=localStorage.getItem('email')
        console.log(e)
       const Data={
        
            "Custamer_Name":email,
            "Product_Name":e.Product_Name.id
        }
         axios.post("http://127.0.0.1:8000/AddCardDetails/",Data).then((e)=>{
            alert('Addee Success')
         }).catch((e)=>{
             alert('Already Added/Network Issuse Please Try Again lAtes')
         })
    }
    const [DSide,setDSide]=useState(false)
    const DisplySidebar=()=>{
        
        setDSide(!DSide)
    }
    
    
    return (
        <>
           
            {/*  */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-3">
               
            <Navbar Callback={Callback} DisplySidebar={DisplySidebar} />
                
            </nav>
            {/*  */}

            <h6 className='text-center h3 text-primary mt-3'>Your's Product Details</h6>
            <div>
                <div className='d-md-flex d-xl-flex  flex-md-row  flex-xl-row mt-5 ml-2 mr-2 ' style={{ overflowX: 'hidden' }}>

                    <div className='col-md-6 col-lg-6 card   mt-2' style={{ height: '400px', marginBottom: '30px' }}>
                        <div className='text-center mt-2' style={{overflow:'hidden'}}>
                        {/*  */}
                        <img src={Data2.ImageUrl} alt={Data2.Product_Name.Product_Name} height={300}  />
                        {/* <ResizedImage imageUrl={Data2.ImageUrl} height={'300px'} width={'200px'}/> */}
                        {/* <ResizedImage imageUrl={Data2.ImageUrl} height={350}  /> */}
                        </div>
                        
                        <div className='d-flex flex-row justify-content-center mt-2  '>
                            <button  onClick={() => { AddCard(Data2)}} className='col-5 ml-auto p-2  text-white d-flex flex-row justify-content-around  ' style={{background:'#FF9F00'}}> <i class="fa-solid fa-heart-circle-check mt-1"></i><span>Add To Card</span></button>
                            <button onClick={() => { navigate('/Check',{state:{Product:Data2}}) }} className='col-5 ml-auto  text-white d-flex flex-row justify-content-around' style={{ background:'#FB641B' }}><i className="fa-solid fa-cart-shopping mt-2"></i><span className='mt-1'>Buy Now</span></button>
                        </div>
                    </div>
                    <div className=' col-md-6 col-lg-6 border border-info mt-2 ' style={{ height: '400px', marginBottom: '30px' }}>
                        <h6>
                            <span className='h5 text-dark d-inline-block w-100 text-wrap text-break'>{Data2.Product_Name.Product_Name}</span>
                        </h6>
                        <div style={{display:'inline-block'}}>
                              <RandomNumberGenerator/>
                        </div>
                         <div>
                            <span className='text-success mr-2'>Saving Amount<span className='text-success ml-2'><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{Math.trunc((Data2.Product_Name.Price*(Data2.Product_Name.Discount/100)))}</span></span>
                         </div>
                        <div className='d-flex flex-row align-center'>
                         
                        <span className='text-dark' style={{fontSize:'25px'}}><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{Math.trunc(Data2.Product_Name.Price-(Data2.Product_Name.Price*(Data2.Product_Name.Discount/100)))}</span> <span className='text-dark mt-auto mb-auto ml-3'><del><i class="fa-solid fa-indian-rupee-sign mt-2"></i>{Data2.Product_Name.Price}</del></span ><span className='text-danger ml-2'></span><span className='text-success mt-auto mb-auto'>{Data2.Product_Name.Discount}%Off</span>
                        </div>
                        
                        <div>
                           
                          
                          
                        </div>
                       <div className='d-flex flex-row'>
                       <h5 className='text-primary'>Special offer ends in </h5><h5 className='text-danger'><Countdown/></h5>
                       </div>
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
                <h5 className='p-3 text-primary'><i className="fa-solid fa-hashtag p-2 text-warning"></i>Suggest For You</h5>
                <div className='d-flex flex-row  col-12 ' style={{ overflowX: 'auto' }}>
                    {Data3 && Data3.slice(0,7).map((e, ind) => {
                        return (
                            <>
                                <div key={ind} className=' card col-8  col-md-4 col-xl-2 mr-4 ml-3' style={{ height: '300px', borderRadius: '50px' }}>
                                    <div className='card-body' style={{ height: '150px', marginTop: '-10px' }}>
                                        {/* <img className='shadow' src={e.ImageUrl} alt={e.Product_Name.Product_Name} width={'150px'} height={'150px'}  style={{ borderRadius: '10px' }} /> */}
                                        <ResizedImage imageUrl={e.ImageUrl} height={150} width={150} />
                                    </div>
                                    <div className='card-body' onClick={() => { navigate("/Dis", { state: { data: e } }) }} >
                                        <h6 className='text-primary'><TruncateWords text={e.Product_Name.Product_Name} maxLength={20}
                                        /></h6>
                                        <span className='text-dark'><del><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{e.Product_Name.Price}</del></span ><span className='text-danger ml-2'>{e.Product_Name.Discount}%Off</span><span className='text-success'><i class="fa-solid fa-indian-rupee-sign mr-2"></i>{Math.trunc(e.Product_Name.Price-(e.Product_Name.Price*(e.Product_Name.Discount/100)))}only</span>
                                    </div>

                                </div>
                            </>
                        )
                    })}

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
            <div className={`bg-dark ${DSide?'dside':'ddside'}`} style={{ height: '65vh', position: 'absolute', top: '24%', right: '0px', overflow: 'hidden'}}>
              <DSidebar/>
            </div>


        </>
    )
}

export default ProductDisplay

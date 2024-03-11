import React, { useEffect, useState } from 'react'
import { Mobile_Data } from './Data/Mobile_Data'
import { useLocation, useNavigate } from 'react-router-dom'



import './Filter.css'
import axios from 'axios'
import Filter from './Filter'
import Navbar from './HomeComponents/Navbar'
import DSidebar from './DSidebar'
import Nav2 from './Nav2'
import ResizedImage from './HomeComponents/ResizedImage'
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

const Product_Filters = () => {
    const Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health&Beauty', 'Books&Media', 'Sports&OutDors', 'Toys&Games', 'Automotive', 'Jewelry&Accessories']
     const [DSide,setDSide]=useState(false)
    const [Range, setRange] = useState(0)
    const [Ele, setEle] = useState('')
    const [Home, setHome] = useState('')
    const [Cloth, setCloth] = useState('')
    const [For, setFor] = useState('')
    const [Auto, setAuto] = useState('')
    const [Toy, setToy] = useState('')
    const [Hel, setHel] = useState('')

    const Location = useLocation()
    const val = Location.state ? true : false
    const navigate = useNavigate()
    const [OnClick, setOnClick] = useState(false);
    const [Data2, setData2] = useState()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
            if (val) {
                const word = Location.state.Cat.slice(0, 4).toLowerCase();
                const FilterData = d.data.filter((e) => {
                    return e.Product_Name.Product_Name.toLowerCase().includes(word.toLowerCase()) ||
                    e.Product_Name.Category.toLowerCase().includes(word.toLowerCase()) ||
                    e.Product_Name.Category_Name.toLowerCase().includes(word.toLowerCase())
                });
                setData2(FilterData);
            } else {
                setData2(d.data);
            }

        }).catch((e) => {
            // alert('Please Try AGian Later Somthing Eroor')
        })

    }, [])
    
    const HandleClick = () => {

        setOnClick(!OnClick)
    }
    const HandleFilters = (Values, Range, Func) => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/")
            .then((data) => {


                const dataFiltered = data.data.filter((e) => {
                    let condition = false;
                    for (let word of Values) {



                        if (e.Product_Name.Product_Name.toLowerCase().includes(word.toLowerCase()) ||
                            e.Product_Name.Category.toLowerCase().includes(word.toLowerCase()) ||
                            e.Product_Name.Category_Name.toLowerCase().includes(word.toLowerCase())) {
                            condition = true;
                            break;
                        }
                    }
                    if (Range) {
                        if (e.Product_Name.Price > Range) {
                            condition = true;
                        }
                    }



                    return condition;
                });

                console.log(dataFiltered);
                setData2(dataFiltered)
                // Call HandleClick() function if it's defined
                if (Func) {
                    HandleClick();
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle error accordingly
            });
    };
    const HandleFiltering = () => {
        const Arr = [Ele, Home, Cloth, For, Auto, Toy, Hel]
        const Values = []
        for (let word of Arr) {
            if (word) {
                Values.push(word)
            }
        }
        const Func = false

        HandleFilters(Values, Range, Func)

    }
    const [OnClick2, setOnClick2] = useState(false);
    const Callback = () => {
        setOnClick2(!OnClick2)


    }
   
     
    const DisplySidebar=()=>{
        
        setDSide(!DSide)
    }
    


    return (

        <>
          
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Navbar Callback={Callback} DisplySidebar={DisplySidebar} />
            </nav>
            {/*  */}
            <div className=' bg-primary d-block d-md-none ' style={{ cursor: 'pointer', }} >
                <h6 style={{ fontSize: '25px' }} onClick={HandleClick}><i class="fa-solid fa-filter" style={{ fontSize: '25px' }}></i>Filter</h6>
            </div>

            <div className='d-flex flex-row' style={{ height: '100vh', background: '#F5F7FA', overflowX: 'hidden' }}>
                <sidebar className='bg-light d-none d-md-block' style={{ height: '100%', width: '25%', overflowY: 'auto', background: '#F5F7FA' }}>
                    <h6 >Price Ranges</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(100) }} /><span>0-1000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(1000) }} /><span>1001-5000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(5000) }} /><span>5001-10,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(10000) }} /><span>10,000-50,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(50000) }} /><span>50,000-100000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ra' onChange={(e) => { setRange(100000) }} /><span>more 10000</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Electronics</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle('Mobile') }} /><span>Mobiles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle('Laptops') }} /><span>Laptops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle("Cameras") }} /><span>Cameras</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle("Audio") }} /><span>Audi</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle("Video") }} /><span>Video</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle("Telivisions") }} /><span>Telivision</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e) => { setEle("Electric Devices") }} /><span>Electric Devices</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Home Appliances</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Refri") }} /><span>Refrigerators</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Washin") }} /><span>Washing Machines</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Dis") }} /><span>Dish Washers</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Vac") }} /><span>Vaccum Cleaners</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Ove") }} /><span>Ovens and Ranges</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e) => { setHome("Cof") }} /><span>Cofee Makers</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Clothing and Apparel</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Top") }} /><span>Tops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Bot") }} /><span>Bottoms</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Dre") }} /><span>Dresses</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Out") }} /><span>Outwear</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Sho") }} /><span>Shoes</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='co' onChange={(e) => { setCloth("Acce") }} /><span>Accessories</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Furniture and Home Decor</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Sofa") }} /><span>Sofas</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Bed") }} /><span>Beds</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Tabl") }} /><span>Tables</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Chai") }} /><span>Chairs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Desk") }} /><span>Desks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='fr' onChange={(e) => { setFor("Hom") }} /><span>Home accents</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Health and Personal Care</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e) => { setHel("Vit") }} /><span>Vitamins and Supplements</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e) => { setHel("Skin") }} /><span>Skincare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e) => { setHel("Hair") }} /><span>Haircare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e) => { setHel("Make") }} /><span>Makeup</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e) => { setHel("Person") }} /><span>Personal Hygiene Products</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Automotive</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Car") }} /><span>Cars</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Tru") }} /><span>Trucks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Suv") }} /><span>SUVs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Moto") }} /><span>Motorcycles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px',cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Par") }} /><span>Parts and  Accessories</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px' ,cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='au' onChange={(e) => { setAuto("Tir") }} /><span>Tires</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Toys and Games</h6>
                    <form className='ml-2' onSubmit={(e) => {
                        e.preventDefault()
                        HandleFiltering()
                    }}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Act") }} /><span>Action Figures</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Dol") }} /><span>Dolls</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Boar") }} /><span>Board Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Vide") }} /><span>Video Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Puzz") }} /><span>Puzzels</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{ fontSize: '20px', cursor: 'pointer' }}>
                            <input type="radio" className='mr-2' name='to' onChange={(e) => { setToy("Educa") }} /><span>Educatinal Toys</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                </sidebar>

                <div className='container ml-3 mt-3' style={{ overflowY: 'auto', position: 'relative' }}>
                    <div className='row'>
                        {Data2 && Data2.map((e) => {
                            return (
                                <div key={e.id} className='model col-6 col-md-6 col-lg-4 mt-3' style={{ display: 'flex', flexWrap: 'wrap', boxShadow: '0px 4px 8px black' }}>
                                    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '90%', background: '#F5F7FA', }}>
                                        <img
                                            src={e.ImageUrl}
                                            className="card-img-top ml-auto mr-auto shadow-lg"
                                            style={{
                                                width: '90%',
                                                height: '250px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px',
                                                imageRendering: 'auto', // Add this line to improve image quality
                                            }}
                                            alt="" />
                                             {/* <ResizedImage imageUrl={e.ImageUrl} height={200} width={'100%'} /> */}
                                             {/* <ResizedImage className='p-2' imageUrl={e.ImageUrl} altText={e.Product_Name.Product_Name} height={'300px'} width={'100%'} /> */}
                                        <div className="card-body d-flex flex-column" style={{ cursor: 'pointer' }}>
                                            <h6 onClick={() => { navigate('/Dis', { state: { data: e } }) }} className='text-primary'><TruncateWords text={e.Product_Name.Product_Name} maxLength={20} /></h6>
                                            <span className='text-success'><i className="fa-solid fa-indian-rupee-sign mr-2"></i>{e.Product_Name.Price}</span>
                                        </div>
                                        <div className="card-footer" style={{ height: '100px',width:'100%', cursor: 'pointer' }}>
                                            <span className='btn btn-primary col-12' style={{width:'100%'}} onClick={() => { navigate('/Dis', { state: { data: e } }) }} >Buy Now<i className="fa-solid fa-cart-plus ml-2"></i></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                {OnClick && <div style={{ position: 'absolute', top: '230px', width: '100%', background: 'white' }}>
                    <Filter HandleFilters={HandleFilters} />
                </div>}
            </div>
            {OnClick2  && <div className='col-sm-10 col-md-6 col-lg-3' style={{ height: '100%', position: 'absolute', top: '175px', left: '-20px', overflow: 'hidden' }} >
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

export default Product_Filters







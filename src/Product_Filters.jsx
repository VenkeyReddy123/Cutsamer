import React from 'react'
import { Mobile_Data } from './Data/Mobile_Data'

const Product_Filters = () => {
    const Data = Mobile_Data
    return (
        <>
            
            <div className='d-flex flex-row' style={{ height: '100vh', background: '#F5F7FA',overflowX:'hidden' }}>
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
                        {Data.map((e) => {
                            return (
                                <>
                                    <div className='model col-sm-6 col-md-4 col-lg-3 mt-3' style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <div class="card" style={{ display: 'flex', flexDirection: 'column', height: '100%',width:'100%',background:'#F5F7FA' }}>
                                            <img src={e.imageURL[0]} class="card-img-top" height="100px" style={{position:'relative'}} alt="..." />
                                            <div style={{position:'absolute',top:'3%',right:'10%'}}><i class="fa-brands fa-gratipay bg-white rounded-circle" style={{fontSize:'30px'}}></i></div>
                                            <div class="card-body d-flex flex-column ">
                                                <span className='text-danger'> Product Name:-</span>
                                                <span class="card-title">{e.title}</span>
                                                <span>Price:-</span><span>{e.price * 84} Ruppes</span>
                                                <small>{e.description}</small>
                                            </div>
                                            <div className="card-footer" style={{ height: '50px' }}>
                                            <span className='btn btn-primary col-10 mb-2' >Buy Now<i class="fa-solid fa-cart-plus ml-2"></i></span>
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







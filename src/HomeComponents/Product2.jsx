import React from 'react'
import { Mobile_Data } from '../Data/Mobile_Data'
const Product2 = () => {
    const Data=Mobile_Data
  return (
   <>

            <div className='d-flex flex-column'>
                <h5 className='p-3 text-primary'><i className="fa-solid fa-hashtag p-2 text-warning"></i>Top Deals Today</h5>
                <div className='d-flex flex-row ' style={{overflowX:'auto'}}>
                    {Data.slice(33, 39).map((e, ind) => (
                        <div key={ind} className='card col-6 col-sm-6 col-lg-3 col-xl-2 mr-4 ml-3'>
                            <div className='card-body'>
                            <img src={e.imageURL} alt={e.title} width={'100%'} height={'50%'} />
                                <h5>{e.title}</h5>
                            </div>
                            <div className='card-footer text-dark bg-white'>
                                <p>{e.rating} out of 5</p>
                                <h5>{e.price * 75} ind</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
   </>
  )
}

export default Product2
import React from 'react';
import { Mobile_Data } from '../Data/Mobile_Data';
import Card_Details from './Card_Details';

const AddCard = () => {
    const Data = Mobile_Data;
    const Data2 = Data.slice(2, 7);
    console.log(Data2);
    return (
        <div className='d-flex flex-column'>
            <div>
                <h5>Your Card List</h5>
            </div>
            {/* <div className='d-flex flex-row'>
                {Data2.map((e) => (
                    <div key={e.id} className='col-sm-12 col-lg-8'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-sm-12 col-lg-6'>
                                        <img src={e.imageURL} alt={e.title} style={{ width: '100%', border: '2px solid red' ,height:'150px' }} />
                                    </div>
                                    <div className='col-sm-7 col-lg-7 d-flex flex-column'>
                                    <h6 className='text-success'>{e.title}</h6>
                                        <small style={{ fontWeight: 'bold' }}>{e.description}</small>
                                        <h6 className='text-success'>{e.rating} Out of 5</h6>
                                        <p className='text-primary'>
                                        <i class="fa-solid fa-indian-rupee-sign"></i> <del className='text-danger'>{e.price * 84}ind</del>{((e.price)*84-(e.price*e.discountPercentage/100)*84)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer d-flex flex-row'>
                                <div className='col-6'>
                                    <div className='d-flex flex-row'>
                                        <i className="fa-solid fa-trash mr-auto ml-auto "></i>
                                        <span className='mr-auto'>Remove</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='d-flex flex-row '>
                                        <i className="fa-solid fa-bolt-lightning mr-auto ml-auto"></i>
                                        <span className='mr-auto'>Buy Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className='d-flex flex-sm-column d-md-flex flex-md-row d-lg-flex flex-lg-row'>
                <div className='col-sm-11 col-lg-8'>
                    <div className='d-flex-column'>
                        {Data2.map((e) => {
                            return (
                                <>
                                    <div className='card mt-3'>
                                        <div className='card-body'>
                                            <div className='d-flex flex-row '>
                                                <div className='col-4 ' style={{ overflow: 'hidden', height: '200px' }}>
                                                    <img src={e.imageURL} alt="" width={'100%'} height={'100%'} />
                                                </div>
                                                <div className='col-7'>
                                                    <h6 className='text-success'>{e.title}</h6>
                                                    <small style={{ fontWeight: 'bold' }}>{e.description}</small>
                                                    <h6 className='text-success'>{e.rating} Out of 5</h6>
                                                    <p className='text-primary'>
                                                        <i class="fa-solid fa-indian-rupee-sign"></i> <del className='text-danger'>{e.price * 84}ind</del>{((e.price) * 84 - (e.price * e.discountPercentage / 100) * 84)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='card-footer d-flex flex-row mt-3'>
                                                <div className='col-5'>
                                                    <div className='d-flex flex-row'>
                                                        <i className="fa-solid fa-trash mr-auto ml-auto "></i>
                                                        <span className='mr-auto'>Remove</span>
                                                    </div>
                                                </div>
                                                <div className='col-5'>
                                                    <div className='d-flex flex-row '>
                                                        <i className="fa-solid fa-bolt-lightning mr-auto ml-auto"></i>
                                                        <span className='mr-auto'>Buy Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </>
                            )

                        })}
                    </div>

                </div>
                <h1>That Offer</h1>
            </div>
        </div >
    );
};

export default AddCard;

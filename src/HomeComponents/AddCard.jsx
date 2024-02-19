import React from 'react';
import { Mobile_Data } from '../Data/Mobile_Data';
import Card_Details from './Card_Details';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
  const quantity = 1
  const navigate = useNavigate()
  const Data = Mobile_Data;
  const Data2 = Data.slice(2, 7);
  console.log(Data2);
  return (

    <div className='d-flex flex-column'>
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
              <a class="nav-link disabled" onClick={() => { navigate('/Addcard') }}>Addcards</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled">Orders</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h5>Your Card List</h5>
      </div>
      <div className='d-flex flex-sm-column d-md-flex flex-md-row d-lg-flex flex-lg-row '>
        <div className='col-sm-11 col-lg-8'>
          <div className='d-flex flex-column'>
            {Data2.map((e, index) => (
              <div key={index} className='card mt-3'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-12 mb-3 mb-lg-0'>
                      <img src={e.imageURL} alt="" className='img-fluid' style={{ maxHeight: '200px' }} />
                    </div>
                    <div className='col-lg-8 col-md-12'>
                      <h6 className='text-success'>{e.title}</h6>
                      <p className='text-muted'>{e.description}</p>
                      <h6 className='text-success'>{e.rating} Out of 5</h6>
                      <p className='text-primary'>
                        <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
                        <del className='text-danger'>{e.price * 84}ind</del>
                        {((e.price) * 84 - (e.price * e.discountPercentage / 100) * 84)}
                      </p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <button className='btn btn-danger'>
                          <i className="fa-solid fa-trash"></i> Remove
                        </button>
                        <button className='btn btn-primary'>
                          <i className="fa-solid fa-bolt-lightning"></i> Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className='col-sm-12 col-lg-4 mt-3 d-none d-lg-block'>
                    <div className='card shadow-lg'>
                        <div className='card-footer'>
                            <h6>Price Details</h6>
                        </div>
                        <div className='card-body'>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6>Price(1 Item)</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{Data[0].price * 84}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-4'>
                                <h6>Delivery Charges</h6>
                                <div className='d-flex flex-row'>
                                    <del><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>50</del>
                                    <h6 className='text-success ml-3'>Free</h6>
                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Quantities</h6>
                                <h4>{quantity}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Total</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity * Data[0].price * 84}</h4>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='d-flex flex-row justify-content-center mt-3'>

                                <span className='text-success' style={{ fontWeight: 'bold' }}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{quantity * ((Data[0].price * 84) * (Data[0].discountPercentage / 100))}</span>
                            </div>
                        </div>
                    </div>
                   </div>

      </div>
    </div >
  );
};

export default AddCard;

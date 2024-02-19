import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Adress = () => {
  const Location=useLocation()
  const Data=Location.state.Product
  console.log(Data)
  const navigate=useNavigate()

  const Full=useRef()
  const Mn=useRef()
  const Pin=useRef()
  const Sta=useRef()
  const Ci=useRef()
  const Ho=useRef()
  const Ro=useRef()
  const HandleSubmit=()=>{
        const Address={
             "Name":Full.current.value,
             "Number":Mn.current.value,
             "Pin":Pin.current.value,
             "State":Sta.current.value ,
             "City":Ci.current.value,
             "House":Ho.current.value,
             "Road":Ro.current.value

        }
        navigate('/Check',{state:{Product:Data,Add:Address}})
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
              <a class="nav-link " onClick={() => { navigate('/Addcard') }}>Addcards</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" onClick={() => { navigate('/Order') }}>Orders</a>
            </li>
          </ul>
        </div>
      </nav>

      {/*  */}

      <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflowX: 'hidden' }}>
        <span className='mt-3 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>Give Adress For Delivary Prodict</span>
        <form onSubmit={(e)=>{e.preventDefault()
           HandleSubmit()
        }} className='form-group shadow mt-5' style={{ background: '#1C0406', borderRadius: '50px', maxWidth: '400px', width: '90%' }}  >

          <div className='mt-3 mx-3'>
            <label htmlFor="fn" className='form-label text-white'>Full Name<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='form-control' placeholder='Full Name(Required)*' ref={Full} required />
          </div>

          <div className='mt-3 mx-3'>
            <label htmlFor="mn" className='form-label text-white'>Enter Your Mobile No. <span style={{ color: 'red' }}>*</span></label>
            <input type="number" className='form-control' placeholder='Enter Your mobile Number'  ref={Mn} required />
          </div>

          <div className='mt-3 mx-3'>
            <label htmlFor="ln" className='form-label text-white'>PinCode<span style={{ color: 'red' }}>*</span></label>
            <input type="number" placeholder='Enter Pincode' ref={Pin} required />
          </div>
          

          <div className='mt-3 mx-3 d-flex flex-row'>
            <input type="text" className='form-control mr-3' placeholder='State (Requred)*' ref={Sta} required />
            <input type="text" className='form-control' placeholder='City (Required)*' ref={Ci}  required />

          </div>

          <div className='mt-3 mx-3'>
            <input type="text" className='form-control  mt-2' placeholder='Houde No,Buildning Name (Required)*' ref={Ho} required />
            <input type="text" className='form-control mt-3' placeholder='Road Name,Area,COlony (Required)*' ref={Ro}  required />
          </div>

          <div className='text-center mt-4'>
            <input type="submit" value="Save Adress" className='btn btn-primary mb-2 mt-2 col-9 bg-danger'  />
          </div>
        </form>
      </div>
    </>
  )
}

export default Adress
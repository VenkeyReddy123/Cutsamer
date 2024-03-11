import React, { useState } from 'react';
import '../src/App.css'
import './Dsidebar.css'
import { useNavigate } from 'react-router-dom';


const DSidebar = () => {
  const navigate=useNavigate()

  let Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health&Beauty', 'Books&Media', 'Sports&OutDors', 'Toys&Games', 'Automotive', 'Jewelry&Accessories'];
  const [OnClick, setOnClick] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);


  return (
    <>

    
       <div>
       <ul class="navbar-nav mr-auto text-center">
          <li class="nav-item active mt-2">

            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Home') }}>Home</a>
          </li>
          <li class="nav-item active mt-5">
            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Product') }} >Products</a>
          </li>
          <li class="nav-item active mt-5">
            <a class="nav-link text-white " style={{ cursor: 'pointer' }} onClick={() => { navigate('/Addcard') }}>Addcards</a>
          </li>
          <li class="nav-item active mt-5">
            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Order') }}>Orders</a>
          </li>
          <li class="nav-item dropdown mt-5 mb-5 ml-auto mr-auto">
            <a class="nav-link d-flex flex-row text-center mb-5" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              <div className='d-flex flex-column'>
                <span className='text-white mt-1'>Sign In</span>
                <span className='text-warning'>My Account</span>
              </div>

            </a>
            <div class="dropdown-menu">
              {/* <a class="dropdown-item" style={{ cursor: 'pointer' }}>Profile</a> */}
              <a class="dropdown-item" style={{ cursor: 'pointer' }}  >Logout</a>
            </div>
          </li>
        </ul>
  
       </div>
    </>
  )
}

export default DSidebar;

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ Callback, DisplySidebar }) => {
    const navigate = useNavigate()
    const HandleLogout = () => {
        localStorage.removeItem('email')
        navigate("/")
    }
    const handleClick = () => {
        Callback()
    }
    const ButtonClick = () => {
        DisplySidebar()
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light col-12" style={{background:'#1F4C94'}}>
                <div className='d-flex flex-row  '>
                    <div className='' style={{ cursor: 'pointer' }} onClick={handleClick}>
                        <div className='mt-2' style={{backgroundColor:'lightgray'}}>
                            <i className="fa-solid fa-list p-1" style={{ fontSize: '20px' }} ></i>
                        </div>
                    </div>
                    <div className='mt-1 d-flex flex-column ml-1 p-1' style={{ cursor: 'pointer' }} >
                        <span className='' style={{ fontSize: '15px' }}>Shop By</span>
                        <h6 className='' style={{ color: 'yellow', fontSize: '15px' }}>Categories</h6>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" onClick={ButtonClick}></span>
                </button>
                <div style={{width:'2px',height:'100%',borderright:'2px red'}}>
                    
                </div>

                <div class="collapse navbar-collapse d-none d-lg-block " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto col-12">
                        <li class="nav-item active ml-auto">

                            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Home') }}>Home</a>
                        </li>
                        <li class="nav-item active ml-auto">
                            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Product') }} >Products</a>
                        </li>
                        <li class="nav-item active ml-auto">
                            <a class="nav-link text-white " style={{ cursor: 'pointer' }} onClick={() => { navigate('/Addcard') }}>Addcards</a>
                        </li>
                        <li class="nav-item active ml-auto">
                            <a class="nav-link text-white" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Order') }}>Orders</a>
                        </li>
                        <li class="nav-item dropdown ml-auto mr-auto">
                            <a class="nav-link d-flex flex-row" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                <div className='d-flex flex-column'>
                                    <span className='text-white' href="">Sign In</span>
                                    <span className='text-warning'>My Account</span>
                                </div>

                            </a>
                            <div class="dropdown-menu">
                                {/* <a class="dropdown-item" style={{ cursor: 'pointer' }}>Profile</a> */}
                                <a class="dropdown-item" style={{ cursor: 'pointer' }} onClick={HandleLogout} >Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
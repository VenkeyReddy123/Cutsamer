import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    const navigate=useNavigate()
    const [send,setSend]=useState('')
    
    const OnCHangeHandle=(e)=>{
        setSend(e.target.value)

        
    }
    const Navigation=()=>{

        navigate("/Product", { state: { Cat: send } }) 
    }
  return (
  <>
      <div className='d-flex fle-row' style={{height:'50px',background:'#2457AA'}}>
          <span className='p-2 text-danger ml-auto' style={{fontWeight:'bold',fontSize:'20px'}}>Ecommers </span><span  className='text-warning p-2 d-none d-md-block ' style={{fontWeight:'bold',fontSize:'20px'}}>Website</span>
          <div className='d-none d-md-flex p-2 ml-auto'>
    <input onChange={OnCHangeHandle} type="text" placeholder='Search Here Your Favorite Products' className='col-12' style={{fontSize:'20px', borderRadius:'50px'}} />
</div>


         <div className='p-2 d-none d-md-block'   >
         <button onClick={()=>{Navigation()}} ><i class="fa-solid fa-magnifying-glass" fontSize='20px'></i></button>
         </div>
         <div className='p-2 ml-auto'>
             <span className='text-white card-footer'>{localStorage.getItem('CustamerName')}</span>
         </div>
      </div>
  </>
  )
}

export default Nav2 

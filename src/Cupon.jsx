import axios from 'axios'
import React, { useRef, useState } from 'react'

const Cupon = ({UpdateOff}) => {
  const[code,setCode]=useState(null)
  const [cupon,SetCupon]=useState()
 
  const HandleSubmit=(e)=>{
    
        e.preventDefault()
           axios.get("http://127.0.0.1:8000/CuponCodeDetails/").then((d)=>{
                const FilterData=d.data.filter((e)=>{
               return e.Code_Name==code
               })
          if(FilterData){
               const Data2=FilterData[0]
                   const Data={
                   'Code_Name':Data2.id
               }
               axios.post("http://127.0.0.1:8000/CheckCodeDetails/",Data).then((d)=>{
                     if(d.data.Message){
                     
                       HandleCupon(FilterData)
                       return
                     }
                     else{
                      alert('Limited Reached')
                     }
                   }).catch((e)=>{
                      alert('Coupn Code Is Wrong')
                   })
              }
        }).catch((e)=>{
          alert("Coupen Code IS Wrong")
       })
  }
  const HandleCupon = (Data) => {
    const Obj = Data[0];
    const Dis = Math.floor(Math.random() * (Obj.Code_Off - 50 + 1)) + 50; // Corrected
    UpdateOff(Dis)//Function Adress
  };
  
  return (
   <>
      <div>
          <form onSubmit={HandleSubmit}>
               <input type="text"  placeholder='Enter CouponCode' className='col-9 mt-4' onChange={(e)=>{setCode(e.target.value)}}/>
               <input type='submit' value={"Check"}  className=' ml-2 btn btn-primary'/>
          </form>
      </div>
   </>
  )
}

export default Cupon
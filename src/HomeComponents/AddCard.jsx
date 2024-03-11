import React, { useEffect, useRef, useState } from 'react';
import { Mobile_Data } from '../Data/Mobile_Data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import DSidebar from '../DSidebar';



const AddCard = () => {
  const quantity = 1
  const navigate = useNavigate()
  const Data = Mobile_Data;
  const Data2 = Data.slice(2, 7);
  const [Data3,setData3]=useState(null)
  const Prices=[0]
  const [OnClick, setOnClick] = useState(false);
  const sectionRef = useRef(null);
  const [SendArr,setSendArr]=useState([])
  const Callback = () => {
      setOnClick(!OnClick)

  }
  let Pid=null
  const Cat = ['Electronics', 'Fashion', 'Home&Garden', 'Health&Beauty', 'Books&Media', 'Sports&OutDors', 'Toys&Games', 'Automotive', 'Jewelry&Accessories']
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/AddCardDetails/")
    .then((d) => {
        const Pid = d.data.filter(obj => obj.Custamer_Name.Email === localStorage.getItem('email')).map(obj => obj.Product_Name);
        return Pid; // Return Pid for chaining
    })
    .then((Pid) => {
        axios.get("http://127.0.0.1:8000/ProductDispalyView/")
        .then((d) => {
          const Data = d.data.filter(e => Pid.includes(e.Product_Name.id)).map(product => ({
            ...product,
            quantity: 1  // Assuming the default quantity is 1
             }));
            console.log(Data)
            setData3(Data);
        })
        .catch((error) => {
            console.log('Error fetching product display data:', error);
        });
    })
    .catch((error) => {
        console.log('Error fetching card details:', error);
    });
}, []);

  // REmobing Code

  const HandleRemove=(e)=>{
    // alert(typeof(Number(localStorage.getItem('id'))))
        const Data={
            "Product_Name":e.Product_Name.id ,
            "Custamer_Name":Number(localStorage.getItem('id'))
         }
         console.log(Data)
         axios.delete("http://127.0.0.1:8000/AddCardDetails/",{data:Data})
         .then((response) => { 
          window.location.reload();
         })
         .catch((error) => {
        
         });
  }
  function sum(arr) {

    if(arr.length>0){
      let Sum=0
          for(let va of arr){
                Sum+=Number(va)
          }
          return Sum
    }
  }
  const [DSide,setDSide]=useState(false)
  const DisplySidebar=()=>{
        
    setDSide(!DSide)
}
  return (

    <div className='d-flex flex-column'>
  
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       
               <Navbar Callback={Callback} DisplySidebar={DisplySidebar} />
            </nav>
      <div>
        <h5>Your Card List</h5>
      </div>
      <div className='d-sm-flex flex-sm-column d-lg-flex flex-lg-row '>
        <div className='col-sm-12 col-lg-8'>
          <div className='d-flex flex-column'>
            {Data3&&Data3.map((e, index) => {
                // e.push('quantity'=1)
                SendArr.push(e)
               Prices.push(e.Product_Name.Price)
             return(
              <>
               <div key={index} className='card mt-3'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-12 mb-3 mb-lg-0'>
                      <img src={e.ImageUrl} alt="" className='img-fluid' style={{ maxHeight: '200px' }} />
                    </div>
                    <div className='col-lg-8 col-md-12'>
                      <h6 className='text-success'>{e.Product_Name.Product_Name}</h6>
                      <h6 className='text-success'>4.5 Out of 5</h6>
                      <p className='text-primary'>
                        <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
                        <del className='text-danger'>{e.Product_Name.Price}</del>
                        {e.Product_Name.Price}
                      </p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <button className='btn btn-danger' onClick={()=>{HandleRemove(e)}} >
                          <i className="fa-solid fa-trash"></i> Remove
                        </button>
                        <button className='btn btn-primary'  onClick={()=>{navigate('/Check',{state:{Product:e}})}}>
                          <i className="fa-solid fa-bolt-lightning" ></i> Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              </>   
             )
})}
{Data3&&Data3.length > 0 ? <>
  <div  className='d-flex flex-row  col-sm-12 ml-auto'>
        
        <div  className='ml-auto p-3' >
                    <button  onClick={()=>{navigate('/Check',{state:{Arr:Data3}})}} style={{backgroundColor:'orangered',color:'white',border:'1px white solid',fontWeight:'bolder'}}  className='p-3'>Place   Order</button>
        </div>

  </div>
</> : <></>}

    
          </div>
                  
        </div>
        
        {OnClick && <>
          <div className='col-sm-10 col-md-6 col-lg-3' style={{ height: '100%', position: 'absolute', top: '175px', left: '-20px', overflow: 'hidden' }} >
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
            </div>
          
        </>
            
            }
        <div className='col-sm-12 col-lg-4 mt-3'>
                    <div className='card shadow-lg'>
                        <div className='card-footer'>
                            <h6>Price Details</h6>
                        </div>
                        <div className='card-body'>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6>Price(Total Items)</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 mr-1" style={{ color: 'black' }}></i>{sum(Prices)}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-4'>
                                <h6>Delivery Charges</h6>
                                <div className='d-flex flex-row'>
                                    <del><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>50</del>
                                    <h6 className='text-success ml-3'>Free</h6>
                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Total Items</h6>
                                <h4>{Prices.length-1}</h4>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h6>Total</h6>
                                <h4><i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{sum(Prices)}</h4>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='d-flex flex-row justify-content-center mt-3'>

                                <span className='text-success' style={{ fontWeight: 'bold' }}>Your Total Saving For This Order<i class="fa-solid fa-indian-rupee-sign mt-1 " style={{ color: 'black' }}></i>{Math.trunc(sum(Prices)/2)}</span>
                            </div>
                        </div>
                    </div>
                   </div>

      </div>
      <div className={`bg-dark ${DSide?'dside':'ddside'}`} style={{ height: '65vh', position: 'absolute', top: '24%', right: '0px', overflow: 'hidden'}}>
              <DSidebar/>
            </div>
    </div >
    
  );
};

export default AddCard;

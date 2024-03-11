import React, { useEffect, useState } from 'react'

const Filter = ({HandleFilters}) => {
    const [Range,setRange]=useState(0)
    const [Ele,setEle]=useState('')
    const [Home,setHome]=useState('')
    const [Cloth,setCloth]=useState('')
    const [For,setFor]=useState('')
    const [Auto,setAuto]=useState('')
    const [Toy,setToy]=useState('')
    const [Hel,setHel]=useState('') 
const HandleSubmit=(e)=>{
 e.preventDefault()
 const Arr=[Ele,Home,Cloth,For,Auto,Toy,Hel]
 const Values=[]
  for(let word of Arr){
     if(word){
        Values.push(word)
     }
  }
  const Func=true
  

  HandleFilters(Values,Range,Func)
}

    return (
          
        <> 
                <sidebar className='bg-primary' style={{ height: '100%', width: '25%', overflowY: 'auto', background: '#F5F7FA' }}>
                    <h6 >Price Ranges</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio"  className='mr-2' name='ra' onChange={(e)=>{setRange(100)}} /><span>0-1000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ra'  onChange={(e)=>{setRange(1000)}} /><span>1001-5000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ra'  onChange={(e)=>{setRange(5000)}} /><span>5001-10,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ra'  onChange={(e)=>{setRange(10000)}} /><span>10,000-50,000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ra'  onChange={(e)=>{setRange(50000)}} /><span>50,000-100000</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ra'  onChange={(e)=>{setRange(100000)}} /><span>more 10000</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Electronics</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ea'  onChange={(e)=>{setEle('Mobile')}} /><span>Mobiles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle('Laptops')}} /><span>Laptops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle("Cameras")}} /><span>Cameras</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle("Audio")}} /><span>Audi</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 'style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle("Video")}} /><span>Video</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle("Telivisions")}} /><span>Telivision</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ea' onChange={(e)=>{setEle("Electric Devices")}} /><span>Electric Devices</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Home Appliances</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='ho' onChange={(e)=>{setHome("Refri")}} /><span>Refrigerators</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 'style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ho' onChange={(e)=>{setHome("Washin")}} /><span>Washing Machines</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ho' onChange={(e)=>{setHome("Dis")}} /><span>Dish Washers</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ho' onChange={(e)=>{setHome("Vac")}} /><span>Vaccum Cleaners</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 'style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ho' onChange={(e)=>{setHome("Ove")}} /><span>Ovens and Ranges</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 'style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='ho' onChange={(e)=>{setHome("Cof")}} /><span>Cofee Makers</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>

                    <h6 >Clothing and Apparel</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Top")}} /><span>Tops</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Bot")}} /><span>Bottoms</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Dre")}} /><span>Dresses</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Out")}} /><span>Outwear</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Sho")}} /><span>Shoes</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='co' onChange={(e)=>{setCloth("Acce")}} /><span>Accessories</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Furniture and Home Decor</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='fr' onChange={(e)=>{setFor("Sofa")}} /><span>Sofas</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='fr'  onChange={(e)=>{setFor("Bed")}} /><span>Beds</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 '>
                            <input type="radio" className='mr-2'  name='fr'  onChange={(e)=>{setFor("Tabl")}} /><span>Tables</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='fr'  onChange={(e)=>{setFor("Chai")}} /><span>Chairs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='fr'  onChange={(e)=>{setFor("Desk")}} /><span>Desks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='fr'  onChange={(e)=>{setFor("Hom")}} /><span>Home accents</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Health and Personal Care</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='hl' onChange={(e)=>{setHel("Vit")}}   /><span>Vitamins and Supplements</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e)=>{setHel("Skin")}} /><span>Skincare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 'style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='hl'  onChange={(e)=>{setHel("Hair")}} /><span>Haircare</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e)=>{setHel("Make")}} /><span>Makeup</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='hl' onChange={(e)=>{setHel("Person")}} /><span>Personal Hygiene Products</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Automotive</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Car")}} /><span>Cars</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Tru")}} /><span>Trucks</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Suv")}} /><span>SUVs</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Moto")}} /><span>Motorcycles</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Par")}} /><span>Parts and  Accessories</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='au'  onChange={(e)=>{setAuto("Tir")}} /><span>Tires</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                    <h6 >Toys and Games</h6>
                    <form className='ml-2' onSubmit={HandleSubmit}>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2' name='to'  onChange={(e)=>{setToy("Act")}} /><span>Action Figures</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='to' onChange={(e)=>{setToy("Dol")}} /><span>Dolls</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='to' onChange={(e)=>{setToy("Boar")}} /><span>Board Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='to' onChange={(e)=>{setToy("Vide")}} /><span>Video Games</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='to' onChange={(e)=>{setToy("Puzz")}} /><span>Puzzels</span>
                        </div>
                        <div className='flex flex-row justify-content-between ml-2 ' style={{fontSize:'20px'}}>
                            <input type="radio" className='mr-2'  name='to'  onChange={(e)=>{setToy("Educa")}} /><span>Educatinal Toys</span>
                        </div>
                        <input type="submit" value={'Search'} className='btn btn-danger mt-1 col-11 shadow-lg' />
                    </form>
                </sidebar>
            

        </>
    )
}

export default Filter







import React from 'react'
import Img1 from './Assets/Scroll1.webp'
import Img2 from './Assets/Scroll2.webp'
import Img3 from './Assets/Scroll3.webp'

const Carosels = () => {
  return (
   <>
 <div id="carouselExampleInterval" className="carousel slide container-fluid " data-ride="carousel" style={{overflowX:'hidden',border:'2px solid red'}}>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000" style={{height:'300px'}}>
      <img src={Img1} class="d-block w-100" alt="..." style={{height:'100%', objectFit: 'cover'}}/>
    </div>
    <div class="carousel-item" data-interval="2000"  style={{height:'300px'}}>
      <img src={Img2} class="d-block w-100" alt="..." style={{width:'95%',height:'100%',objectFit: 'cover'}} />
    </div>
    <div class="carousel-item" style={{height:'300px'}}>
      <img src={Img3} class="d-block w-100" alt="..." style={{height:'100%', objectFit: 'cover'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
    <span class="carousel-control-prev-icon text-info" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>


   </>
  )
}

export default Carosels
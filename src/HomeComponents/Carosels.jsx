import React from 'react'
import Img1 from './Assets/Scroll1.webp'
import Img2 from './Assets/Scroll2.webp'
import Img3 from './Assets/Scroll3.webp'

const Carosels = () => {
  return (
   <>
 {/* <div id="carouselExampleInterval" className="carousel slide container-fluid " data-ride="carousel" style={{overflowX:'hidden'}}>
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
</div> */}
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={Img1} class="d-block w-100" alt="..." style={{height:'100%', objectFit: 'cover'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={Img1} class="d-block w-100" alt="..." style={{height:'100%', objectFit: 'cover'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={Img1} class="d-block w-100" alt="..." style={{height:'100%', objectFit: 'cover'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>


   </>
  )
}

export default Carosels
import React from 'react'

const Adress = () => {
  return (
   <>
    <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflowX:'hidden' }}>
  <span className='mt-3 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>Give Adress For Delivary Prodict</span>
  <form method="POST"  className='form-group shadow mt-5' style={{ background: '#1C0406', borderRadius: '50px', maxWidth: '400px', width: '90%' }} enctype="multipart/form-data">

    <div className='mt-3 mx-3'>
      <label htmlFor="fn" className='form-label text-white'>Full Name<span style={{ color: 'red' }}>*</span></label>
      <input type="text" className='form-control' placeholder='Full Name(Required)*' id='fn' name='fn'  required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="fn" className='form-label text-white'>Phone number<span style={{ color: 'red' }}>*</span></label>
      <input type="number" className='form-control' placeholder='Phone Number (Requred)*' id='fn' name='fn' required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="ln" className='form-label text-white'>PinCode<span style={{ color: 'red' }}>*</span></label>
      <input type="number"  placeholder='Enter Pincode'   required />
    </div>
    <div className='mt-3 mx-3'>
      <label htmlFor="mn" className='form-label text-white'>Enter Your Mobile No. <span style={{ color: 'red' }}>*</span></label>
      <input type="number" className='form-control' placeholder='Enter Your mobile Number' name="mn" id="mn" required />
    </div>

    <div className='mt-3 mx-3 d-flex flex-row'>
      <input type="text" className='form-control mr-3' placeholder='State (Requred)*' name="pw" id="pw"  required />
      <input type="text" className='form-control' placeholder='City (Required)*' name="rpw" id="rpw"  required />

    </div>

    <div className='mt-3 mx-3'>
    <input type="number" className='form-control  mt-2' placeholder='Houde No,Buildning Name (Required)*' name="mn" id="mn" required />
    <input type="number" className='form-control mt-3' placeholder='Road Name,Area,COlony (Required)*' name="mn" id="mn" required />
    </div>

    <div className='text-center mt-4'>
      <input type="submit" value="Save Adress" className='btn btn-primary mb-2 mt-2 col-9 bg-danger' />
    </div>
  </form>
</div>
   </>
  )
}

export default Adress
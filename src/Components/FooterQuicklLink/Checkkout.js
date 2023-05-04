import React from 'react'

function Checkkout() {
  return (
   <>
   <div className="container">
  <div className="py-5 text-center">
    
    
  
  </div>
  <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Order Details</span>
       
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Total Price</h6>
            
          </div>
          <span className="text-muted">712</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Discount</h6>
          
          </div>
          <span className="text-muted">0%</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Delivery Charge</h6>
           
          </div>
          <span className="text-muted">60</span>
        </li>
       
        <li className="list-group-item d-flex justify-content-between">
          <span>Final Cost</span>
          <strong>612</strong>
        </li>
      </ul>
      <form className="card p-2">
        <div className="input-group">
       
          
            <button type="button" className="btn btn-primary ">
              Place Order
            </button>
        
        </div>
      </form>
    </div>
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" noValidate="">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter  Name..."
              defaultValue=""
              required=""
            />
           
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Mobile No</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Mobile No"
              defaultValue=""
              required=""
            />
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">State</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=" Enter State"
              defaultValue=""
              required=""
            />
           
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">city</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter city"
              defaultValue=""
              required=""
            />
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">Address</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter Address"
              defaultValue=""
              required=""
            />
           
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Pincode"
              defaultValue=""
              required=""
            />
          
          </div>
        </div>
       
        <hr className="mb-2" />
        <button className="btn btn-primary " type="button">
         Add Address
        </button>
      </form>
    </div>
  </div>


  <div className="col-md-4 order-md-2 mb-4 mt-6">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Select Your Shipping Address</span>
       
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <div className='flex'>
                <label className='font-bold space-x-2'>Name:</label>
                <p className='mt-1'>Vishnu</p>
            </div>
            <div className='flex'>
                <label className='font-bold space-x-2'>Mobile:</label>
                <p className='mt-1'>xxxxxxx123</p>
            </div>
            <div className='flex'>
                <label className='font-bold space-x-2'>Area:</label>
                <p className='mt-1'>dgdfh</p>
            </div>
            <div className='flex'>
                <label className='font-bold space-x-2'>Pincode:</label>
                <p className='mt-1'>545454</p>
            </div>
            <div className='flex'>
                <label className='font-bold space-x-2'>City:</label>
                <p className='mt-1'>Siwan</p>
            </div>
            

           
          
            
          </div>
          <button className="btn btn-primary h-10 mt-5">Select Address</button>
        </li>
      
      </ul>
     
    </div>
  
</div>
</>
  )
}

export default Checkkout

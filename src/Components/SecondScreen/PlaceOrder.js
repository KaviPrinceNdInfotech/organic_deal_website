import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
// import { removeItem, incrementQuantity, decrementQuantity } from '../Store/cartSlice';

function PlaceOrder() {
  const [address,setAddress]=useState([])
  const Id = localStorage.getItem('ID')
  const UserId = localStorage.getItem('UserId')
  const auth = localStorage.getItem('loginToken')
  let Rgx = localStorage.getItem('Rgx')

  const getProduct = async (UserId) => {
    const { data } = await axios.get(`https://admin.organicdeal.in/api/Checkoutapi/ListAddress/${UserId}`);
    setAddress(data.result)
}
useEffect(()=>{
  getProduct()
})


  const dispatch = useDispatch();
  const products = useSelector(state => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    products.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.Price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }
  return (
    <div>
      <>
        {/* thank-you section start */}
        <section className="section-big-py-space light-layout">
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <div className="success-text">
                  <i className="fa fa-check-circle" aria-hidden="true" />
                  <h2>thank you</h2>
                  <p>
                    Payment is successfully processsed and your order is on the way
                  </p>
                  <p>Transaction ID:267676GHERT105467</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section ends */}
        {/* order-detail section start */}
        <section className="section-big-py-space mt--5 b-g-light">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-order">
                  <h3>your order details</h3>
                  {products?.map((item) => (
                    <div className="row product-order-detail">

                      <div className="col-3">
                        <img
                          src={`https://admin.organicdeal.in/Images/${item.ProductImage}`}
                          alt="img2"
                          className="img-fluid  "
                          style={{ height: "30px" }}
                        />
                      </div>
                      <div className="col-3 order_detail">
                        <div>
                          <h4>product name</h4>
                          <h5>{item.ProductName}
                          <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                          </h5>
                        </div>
                      </div>
                      <div className="col-3 order_detail">
                        <div>
                          <h4>quantity</h4>
                          <h5>{item.quantity}x{item.Price}</h5>
                        </div>
                      </div>
                      <div className="col-3 order_detail">
                        <div>
                          <h4>price</h4>
                          <h5>
                            
                           Rs.{item.Price * item.quantity} 
                            </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="final-total">
                    
                    <h3>
                      total <span>
                      
                       Rs: {getTotal().totalPrice}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row order-success-sec">
                  <div className="col-sm-6">
                    <h4>summery</h4>
                    <ul className="order-detail">
                      <li>order ID: 5563853658932</li>
                      <li>Order Date: October 22, 2018</li>
                      <li>Order Total:  Rs: {getTotal().totalPrice}</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>shipping address</h4>{
                         <ul className="order-detail">
                         <li className='text-red-700'>{address.Name}</li>
                         <li className='text-red-700'>568, suite ave.</li>
                         <li>Austrlia, 235153</li>
                         <li>Contact No. {address.Phone}</li>
                       </ul>
                    }
                 
                  </div>
                  <div className="col-sm-12 payment-mode">
                    <h4>payment method</h4>
                    <p>
                      Pay on Delivery (Cash/Card). Cash on delivery (COD) availabel.
                      Card/Net banking acceptance subject to device availability.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="delivery-sec">
                      <h2>expected Day of delivery</h2>
                      <h3>Within the week from this booking date</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section ends */}
      </>


    </div>
  )
}

export default PlaceOrder

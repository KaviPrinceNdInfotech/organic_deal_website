import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../Store/cartSlice';


function Mycart() {

  const Id = localStorage.getItem('ID')
  const UserId = localStorage.getItem('UserId')
  const auth = localStorage.getItem('loginToken')
  let Rgx = localStorage.getItem('Rgx')
  const [open, setOPen] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart)
  const handelRemove = (productId) => {
    dispatch(removeItem(productId))
  };

  const decrementQuantity1 = (Id) => {
    dispatch(decrementQuantity(Id))
  };

  const incrementQuantity1 = (Id) => {
    dispatch(incrementQuantity(Id))
  };



  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    products.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.Price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  const toggle = () => {
    setOPen(!open);
  };



  function handleClick() {
    const token1 = localStorage.getItem('ID')

    if (token1) {
      navigate("/checkout")
    } else {
      navigate('/login')
    }
  }







  return (
    <>

      <div id="cart_side" className="add_to_cart  ">
        <div style={{ height: "550px", overflow: "scroll" }}>

          <div className="cart-inner">
            {products?.length ?

              <div className="cart_media">
                <div style={{ height: "260px", lineHeight: "0.25em", overflow: "scroll", padding: " 4px" }}>
                  <ul class="cart_product">
                    {products?.map((item) => (
                      <li>
                        <div class="media" key={item.id}>

                          <img alt="megastore1" className="me-3 h-10" src={`https://organicdeal.in/Images/${item.ProductImage}`} />

                          <div className="media-body">
                            <a href="#" className='d-flex'>
                              <h4>{item.ProductName}
                                <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                              </h4>
                              <div class="pro-add">

                                <button className='ml-12 underline text-red-700 ' onClick={() => handelRemove(item.Id)}> <i class="fa fa-trash-o"></i></button>
                              </div>
                            </a>
                            <h6>
                              {item.Price * item.quantity} <span>{item.OurPrice * item.quantity}</span>
                            </h6>
                            <div class="addit-box">
                              <div class="qty-box">
                                <div class="input-group">
                                  <button class="qty-minus" onClick={() => dispatch(decrementQuantity1(item.Id))} ></button>
                                  {/* <input class="qty-adj form-control" type="number" value="1" /> */}
                                  <p>{item.quantity}</p>

                                  <button class="qty-plus" onClick={() => dispatch(incrementQuantity1(item.Id))}></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                    ))}




                  </ul>




                </div>

                <div className="pro-group">
                  <div className="product-offer">
                    <h6 className="product-title">
                      <i className="fa fa-tags" />5 offers Available{" "}
                    </h6>


                    <div className="offer-contain">
                      <ul>
                        <li>
                          <span className="code-lable">OFFER40</span>
                          <div>
                            <h5>Get extra $40 off on first Orders</h5>
                            <p>
                              Use code "OFFER40" Min. Cart Value $99 | Max.
                              Discount $40
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div>

                        {open && (
                          <div className="toggle">
                            <ul>
                              <li>
                                <span className="code-lable">OFFER25</span>
                                <div>
                                  <h5>Get extra $25 off on second Orders</h5>
                                  <p>
                                    Use code "OFFER25" Min. Cart Value $99 | Max.
                                    Discount $25
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER40</span>
                                <div>
                                  <h5>
                                    Bank Offer40% Unlimited Cashback on bideal Axis
                                    Bank Credit Card
                                  </h5>
                                  <p>
                                    Use code "OFFER40" Min. Cart Value $99 | Max.
                                    Discount $40
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER10</span>
                                <div>
                                  <h5>
                                    Bank Offer10% off* with Axis Bank Buzz Credit
                                    Card
                                  </h5>
                                  <p>
                                    Use code "OFFER10" Min. Cart Value $99 | Max.
                                    Discount $10
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER5</span>
                                <div>
                                  <h5>
                                    Bank Offer5% Unlimited Cashback on bideal sbi
                                    banck Credit Card
                                  </h5>
                                  <p>
                                    Use code "OFFER5" Min. Cart Value $99 | Max.
                                    Discount $5
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      <h5 className="show-offer">
                        <span className="more-offer" onClick={toggle}>
                          {open === true ? 'Show less offer' : 'Show more offer'}
                        </span>
                        <span className="less-offer">less offer</span>
                      </h5>
                    </div>
                  </div>
                </div>

                <ul class="cart_total">
                  <li>
                    subtotal : <span>{getTotal().totalPrice}</span>
                  </li>
                  <li>
                    shpping <span>free</span>
                  </li>
                  <li>
                    Delivery charge <span>0.00</span>
                  </li>
                  <li>
                    <div class="total">
                      total:<span>{getTotal().totalPrice}</span>
                    </div>
                  </li>
                  <li>
                    <div class="buttons">
                      <div class="btn btn-solid btn-sm" style={{ background: "linear-gradient(to right, #e17200 , #205403)" }}>
                        <Link to="/wishlist">
                          view wishlist
                        </Link>
                      </div>

                      <div class="btn btn-solid btn-sm " style={{ background: "linear-gradient(to right, #e17200 , #205403)" }}>
                        <div onClick={handleClick}>
                          checkout
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </div> :
              <div>
                <div className='text-center   text-2xl mt-10'>Opps! Your Cart is Empty</div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="img" className='w-full ' />
                <button className='w-60 ml-20 rounded-md p-2  text-white bg-orange-600'>Continue Shopping</button>

              </div>

            }



          </div>
        </div>
      </div>


    </>
  )
}

export default Mycart

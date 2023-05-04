import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';



function Checkout() {

  //open model
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

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

  //toggel 
  const [toggel, setToggel] = useState('');
  const toggle1 = (event) => {
    const getOption = event.target.value;
    setToggel(getOption);
  };


  //for add address

  const [Name, setName] = useState("")
  const [Phone, setPhone] = useState("")
  const [Email, setEmail] = useState("")
  const [City, setCity] = useState("")
  const [Address, setAddress] = useState("")
  const [userAddress, setUserAddress] = useState();
  const [PinCode, setPinCode] = useState("")
  const [State, setState] = useState("")
  const Id = localStorage.getItem('ID')
  const UserId = localStorage.getItem('UserId')
  const auth = localStorage.getItem('loginToken')
  let Rgx = localStorage.getItem('Rgx')
  console.log(Id, "SDDFSDF")
  const addAddress = async (id) => {
    if (!id) return;
    const AddressDetails = {
      Name, Phone, Email, Address, City, State, PinCode

    }

    const bulk = await axios.post(`https://admin.organicdeal.in/api/Checkoutapi/DeliveryAddress/${id}`, AddressDetails);

    if (bulk.status === 200) {

      setName("")
      setPhone("")
      setEmail("")
      setAddress("")
      setCity("")
      setState("")
      setPinCode("")
      toast.success("Address Add Successfully", {
        position: "top-left",
      });
    }

  }

  const getAddressDetailById = async (id) => {
    if (!id) return;
    try {
      const res = await axios.get(`https://admin.organicdeal.in/api/Checkoutapi/ListAddress/${id}`);
      console.log(res, "SSSSSSSSSS")
      if (res?.status === 200 || res.status === 201) {
        setUserAddress(res?.data?.result);
        let data = res?.data?.result[0];
        setName(data?.Name)
        setPhone(data?.Phone)
        setEmail(data?.Email)

      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleAddress = () => {
    setAddress(userAddress?.Address)
    setCity(userAddress?.City)
    setState(userAddress?.State)
    setPinCode(userAddress?.PinCode)
  }
  console.log(userAddress, "SFATRBVGFDGFDG")
  useEffect(() => {
    if (Id) {
      getAddressDetailById(Id);
    }
  }, [])

  const [MyAddress, setMyAddress] = useState([])



  return (
    <>
      <div className="breadcrumb-main ">
        <div className="">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <h2>checkout</h2>
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />
                    </li>
                    <li>
                      <Link to="/checkout">checkout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-big-py-space b-g-light">
        <div className="custom-container">
          <div className="checkout-page contact-page">
            <div className="checkout-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-title">
                      <h3>Billing Details</h3>
                      <div className='flex space-x-10 ml-14'>
                        <p>Add New Shipping Address Here</p>
                        <button type="button" className='p-2 w-40 text-center text-white bg-orange-600'
                          onClick={() => setOpen(!open)}
                        >Add Here</button>
                      </div>
                    </div>
                    {open &&
                      <div className="theme-form">
                        <div className="row check-out ">
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <label> Name</label>
                            <input
                              value={Name} onChange={(e) => setName(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder="Enter full Name"
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <label>Phone Number</label>
                            <input
                              value={Phone} onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder="xxxxxxx378"
                            />
                          </div>

                          <div className="form-group col-md-12 col-sm-12 col-xs-12">
                            <label className="field-label">Email Address</label>
                            <input
                              value={Email} onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group col-md-12 col-sm-12 col-xs-12">
                            <label className="field-label">Address</label>
                            <input
                              value={Address} onChange={(e) => setAddress(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder="Street address"
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <label> City</label>
                            <input
                              value={City} onChange={(e) => setCity(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder=""
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <label>state</label>
                            <input
                              value={State} onChange={(e) => setState(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder=""
                            />
                          </div>



                          <div className="form-group col-md-12 col-sm-6 col-xs-12">
                            <label className="field-label">Postal Code</label>
                            <input
                              value={PinCode} onChange={(e) => setPinCode(e.target.value)}
                              type="text"
                              name="field-name"

                              placeholder=""
                            />
                          </div>
                          <button type="button" className='bg-orange-600  ml-2 p-2 w-36 text-white' disabled={!Name} onClick={(e) => addAddress(Id)}>Add Address</button>
                        </div>
                      </div>
                    }

                    <div className="theme-form">
                      <div className="checkout-title">
                        <h3 className='text-center'>Select Your Shipping Address</h3>
                      </div>
                      {userAddress?.map((item, index) => {
                        return (
                          <>
                            <div className="checkout-title h-1">
                              <span className='text-xl'> Address</span>
                            </div>
                            <div className='flex space-x-2'>
                              <div className='bg-gray-200 w-80 h-24 '>
                                <div className='flex space-x-4 ml-4'>
                                  <span>Name:</span>
                                  <p className='text-green-700'>{item.Name}</p>
                                </div>

                                <div className='flex space-x-4 ml-4'>
                                  <p>{item?.Email}</p>,
                                  <p>{item?.Phone}</p>
                                </div>
                                <div className='flex space-x-4 ml-4 '>
                                  <p>{item?.Address}</p>,
                                  <p>{item?.City}</p>
                                </div>
                                <div className='flex space-x-4 ml-4 '>
                                  <p>{item?.PinCode}</p>,
                                  <p>{item?.State}</p>
                                </div>



                              </div>
                              <div className='bg-gray-200 p-2 space-x-2'>
                                <button type="button" onClick={(e) => setMyAddress(item?.Name)} className='bg-orange-700 p-2  h-10 mt-4 text-white font-bold text-sm rounded-md '>Select</button>
                                <button onClick={handleShow} type="button" className='bg-green-700 p-2  h-10 mt-4 text-white font-bold text-sm rounded-md '>Edit</button>
                              </div>

                            </div >
                          </>

                        )
                      })}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="checkout-details theme-form  section-big-mt-space">
                      <div className="order-box">
                        <div className="title-box">
                          <div>
                            Product <span>Total</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {products?.map((item) => (
                            <li>

                              <img src={`https://organicdeal.in/Images/${item.ProductImage}`} alt='imgg' className='w-4 d-inline-flex ' />

                              {item.ProductName} × {item.quantity} <span>{item.Price * item.quantity}
                                <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>

                              </span>
                            </li>
                          ))}
                        </ul>
                        <ul className="sub-total">
                          <li>
                            Subtotal <span className="count">{getTotal().totalPrice}</span>
                          </li>
                          <li>
                            your Shipping Address

                            <div className='bg-gray-200 w-80 h-24 '>
                              <div className='flex space-x-4 ml-4'>
                                <span>Name:</span>
                                <p className='text-green-700'>{MyAddress}</p>
                              </div>

                              <div className='flex space-x-4 ml-4'>
                                <p>vishnu@gmail.com</p>,
                                <p>8355039378</p>
                              </div>
                              <div className='flex space-x-4 ml-4 '>
                                <p>c-54 Sector-15</p>,
                                <p>noida</p>
                              </div>
                              <div className='flex space-x-4 ml-4 '>
                                <p>{MyAddress}</p>,

                                <p>up</p>
                              </div>



                            </div>

                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            Total <span className="count">{getTotal().totalPrice}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="payment-box space-y-2 ">



                        <button type="button" to="/placeorder" className="bg-orange-700 p-3 w-40 text-white" onClick={handleShow1}>
                          Place Order
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12">

                </div>
              </form>

            </div>

          </div>

        </div >

      </section >



      {/**for address update model popup **/}
      < Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>update Address Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="checkout-title">
            
            </div>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                     Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                   
                  />
             
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
              
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  
                  />
                
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  
                  />
                
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                     City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                   
                  />
             
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
              
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Zipcode
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  
                  />
                
                </div>
              </div>
              <button type='button' className='p-2 text-white text-center bg-orange-600 w-40 rounded-md float-right'>Update Address</button>
              
            </form>

          </div>
        </Modal.Body>

      </Modal >
      {/*end popup model*/}


      {/*payment option popup start */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>select Payment option </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex space-x-4'>
            <button className='bg-pink-700 rounded-md p-2 w-40 text-white' >Online</button>
            <Link to="/placeorder">
              <button className='bg-green-700 rounded-md p-2 w-40 text-white'>Cash</button>
            </Link>
            <button className='bg-yellow-700 rounded-md p-2 w-40 text-white'>Walllet</button>
          </div>
        </Modal.Body>

      </Modal>
      {/*payment option popup end */}




    </>
  )
}

export default Checkout

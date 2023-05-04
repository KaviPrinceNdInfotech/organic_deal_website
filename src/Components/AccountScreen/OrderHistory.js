import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

function OrderHistory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        <>
            <div className="breadcrumb-main">
                <div className="">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-contain">
                                <div>
                                    <h2>order-history</h2>
                                    <ul>
                                        <li>home</li>
                                        <li><i className="fa fa-angle-double-right"></i></li>
                                        <li>order-history</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {products?.length ?
            <section className="cart-section order-history section-big-py-space bg-gray-100 ">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table cart-table table-responsive-xs">
                                <thead>
                                    <tr className="table-head">
                                        <th scope="col">product</th>
                                        <th scope="col">description</th>
                                        <th scope="col">price</th>
                                        <th scope="col">detail</th>
                                        <th scope="col">status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {products?.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>
                                            <img  src={`https://organicdeal.in/Images/${item.ProductImage}`} alt="product" className="img-fluid w-16  " />
                                        </td>
                                        <td>order no: <span className="dark-data">15454841</span> <br />{item.ProductName}
                                            <div className="mobile-cart-content row">
                                                <div className="col-xs-3">
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <input type="text" name="quantity" className="form-control input-number" value="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                    <h4 className="td-color">{item.Price}</h4></div>
                                                <div className="col-xs-3">
                                                    <h2 className="td-color"><a href="javascript:void(0)" className="icon"><i className="ti-close"></i></a></h2></div>
                                            </div>
                                        </td>
                                        <td>
                                            <h4>{item.Price}</h4></td>
                                        <td>
                                            {/* <span>Size: </span> */}
                                            <br />
                                            <span>Quntity: {item.Quantity}{item.Metrics}</span>
                                        </td>
                                        <td>
                                            <div className="responsive-data">
                                                <h4 className="price">$63.00</h4>
                                                <span>Size: L</span>|<span>Quntity: 1</span>
                                            </div>
                                            <span className="dark-data">Delivered</span> (jul 01, 2019)
                                        </td>
                                        <td className='space-x-2 rounded-md '>
                                            <Link to="/invoice">

                                            <button type="text" className=" text-white p-2 w-32 bg-green-700 rounded-md ">Get Invoice</button>
                                            </Link>
                                            <button onClick={handleShow} type="button" className=" text-white p-2 w-32 bg-red-800 rounded-md ">Cancle Order</button>
                                        </td>

                                    </tr>
                                </tbody>
                                    ))}

                            </table>
                        </div>
                    </div>
                    <div className="row cart-buttons">
                        <div className="col-12 pull-right"><a href="javascript:void(0)" className="btn btn-normal btn-sm">show all orders</a></div>
                    </div>
                </div>
            </section>:
            <section className='h-60 bg-gray-200'>
                 <div className='text-center text-black text-2xl'>currenty your order list is empty</div>
            </section>
           
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You want cancle your order</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className='flex space-x-4'>
                        <Link to="/">
                        <button className='bg-green-700 w-32 p-2 text-white rounded-md'>Yes</button>
                        </Link>
                        <button className='bg-red-700 w-32 p-2 text-white rounded-md' onHide={handleClose}>No</button>
                    </div>
                </Modal.Footer>


            </Modal>



        </>
    )
}

export default OrderHistory
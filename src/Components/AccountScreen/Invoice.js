import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

function Invoice() {

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
            <section className="theme-invoice">
                <div className=" " >
                    <div className="row">
                        <div className="col-12">
                            <div className="invoice-popup overflow-auto">
                                <div>
                                    <div className="row invoice-header">
                                        <div className="col-md-6 ">
                                            <div className="header-left">
                                                <div className="brand-logo">
                                                    <Link to="/">
                                                        <img
                                                            src="../assets/images/grocery/logo1.png"
                                                            className="img-fluid w-40  "
                                                            alt="logo"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="header-right">
                                                <ul>
                                                    <li><h2>Shiping Address</h2></li>
                                                    <li>Organicdeal Store India-3654123</li>
                                                    <li>Call Us: 123-456-7898</li>
                                                    <li>Support@Organicdealdeal.Com</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invoice-breadcrumb">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="breadcrumb-left">
                                                    <ul>
                                                        <li>Client:-<span>Vishnu tiwari</span></li>
                                                        <li>Addresh:-<span>Sector-59 Noida,  201301, Up</span></li>
                                                        <li>Contact:-<span>8355039378</span></li>
                                                        <li>Email:-<span>vishnu@gmail.com.com</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="breadcrumb-right">
                                                    <ul>
                                                        <li>Invoice Date:- <span>12/12/2020</span></li>
                                                        <li>Issue Date:- <span>12/11/2020</span></li>
                                                        <li>Invoice No:-<span>909048</span></li>
                                                        <li>Payment Mode:-<span>COD</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive-md">
                                        <table className="invoice-table " >
                                            <thead>
                                                <tr>
                                                    <th>no.</th>
                                                    <th>item detail</th>
                                                    <th>qty</th>
                                                    <th>price</th>
                                                    <th>amout</th>
                                                </tr>
                                            </thead>
                                            {products?.map((item, index) => (
                                                <tbody>
                                                    <tr>
                                                        <td key={index.Id} >1</td>
                                                        <td>
                                                            <h3>
                                                                {item.ProductName}
                                                            </h3>
                                                            {/* <p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p> */}
                                                        </td>
                                                        <td> {item.Quantity}{item.Metrics}</td>
                                                        <td>{item.quantity}x{item.Price}</td>
                                                        <td>{item.Price * item.quantity}</td>
                                                    </tr>

                                                </tbody>
                                            ))}
                                            <tfoot>
                                                <tr>
                                                    <td colspan="2"></td>
                                                    <td colspan="2">Subtotal</td>
                                                    <td>{getTotal().totalPrice}</td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"></td>
                                                    <td colspan="2">GRAND TOTAL</td>
                                                    <td>Rs.{getTotal().totalPrice}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="row print-bar">
                                            <div className="col-md-6">
                                                <div className="printbar-left">
                                                    <button id="exportpdf" className="btn btn-solid btn-md">
                                                        <i className="fa fa-file"></i>
                                                        Export as PDF
                                                    </button>
                                                   </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="printbar-right">
                                                    <button id="printinvoice" className="btn btn-solid btn-md ">
                                                        <i className="fa fa-print"></i>
                                                        Print
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}

export default Invoice
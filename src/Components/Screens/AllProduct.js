import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import Tooltip from "@material-ui/core/Tooltip";



function AllProduct() {
    const { Id } = useParams();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState()

    const [brand, setBrand] = useState(false)
    const [price, setPrice] = useState(false)
    const imagePerRow = 6;

    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };



    useEffect(() => {
        const getCategory = async () => {
            const res = await axios.get('https://admin.organicdeal.in/api/VendorApi/GetCategory')
            setCategories(res.data)
            console.log(res.data);
        }
        getCategory()
    }, [])





    const getProduct1 = () => {
        // fetch(`https://admin.organicdeal.in/api/ProductAPI/GetProduct/categoryId?categoryId=${Id}&page=`)
        fetch('https://admin.organicdeal.in/api/ProductAPI/HotDetails')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log('res error')
                }
            })
            .then(data => setProduct(data.HotDeals))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct1()

    }, []);


    const handelAdd = (item) => {
        dispatch(addToCart(item));
    }





    return (
        <>
            {product?.length ?
                <>
                    <div className="breadcrumb-main ">
                        <div className="">
                            <div className="row">
                                <div className="col">
                                    <div className="breadcrumb-contain">
                                        <div>
                                            <h2>category</h2>
                                            <ul>
                                                <li>
                                                    <Link to="/">home</Link>
                                                </li>
                                                <li>
                                                    <i className="fa fa-angle-double-right" />
                                                </li>
                                                <li>
                                                    <Link to="/categorypage">All Product</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section-big-pt-space ratio_asos b-g-light">


                        <div className="collection-wrapper">
                            <div className="custom-container">
                                <div className="row">
                                    <div className="col-sm-3 collection-filter category-page-side">
                                    </div>
                                    <div className="collection-content">
                                        <div className="page-main-content">
                                            <div className="row">
                                                <div className="col-sm-12">

                                                    <div className="collection-product-wrapper">
                                                        {categories && categories.map((item, index) => {
                                                            console.log(item);
                                                            return (

                                                                <div className="product-wrapper-grid product">
                                                                    <div className='flex space-x-4'>
                                                                        <p className='font-bold text-xl ml-6'>{item.CategoryName}</p>
                                                                        <p className='text-2xl text-black float-right'><i className="fa fa-angle-down" aria-hidden="true"></i></p>
                                                                        {next < categories?.length && (
                                                                            <button
                                                                                className=' underline font-semibold text-sm '
                                                                                onClick={handleMoreImage}
                                                                            >
                                                                                View More Product
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
                                                                            {product?.slice(0, next)?.map((item, index) => {

                                                                                return (

                                                                                    <div className="product-box" key={item.id}>

                                                                                        <div className="product-imgbox">
                                                                                            <div className="product-front">

                                                                                                <Link to={`/viewdetails/${item.Id}`}>
                                                                                                    <img
                                                                                                        src={`https://admin.organicdeal.in/Images/${item.ProductImage}`}
                                                                                                        className="img-fluid  h-60  "
                                                                                                        alt="product"
                                                                                                    />
                                                                                                </Link>

                                                                                            </div>
                                                                                            <div className="product-back">

                                                                                                <Link to={`/viewdetails/${item.Id}`}>
                                                                                                    <img
                                                                                                        src={`https://admin.organicdeal.in/Images/${item.ProductImage}`}
                                                                                                        className="img-fluid  h-60  "
                                                                                                        alt="product"
                                                                                                    />
                                                                                                </Link>

                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="product-detail detail-center detail-inverse">
                                                                                            <div className="detail-title">
                                                                                                <div className="detail-left">
                                                                                                    <div className="rating-star">
                                                                                                        {" "}
                                                                                                        <i className="fa fa-star" />{" "}
                                                                                                        <i className="fa fa-star" />{" "}
                                                                                                        <i className="fa fa-star" />{" "}
                                                                                                        <i className="fa fa-star" />{" "}
                                                                                                        <i className="fa fa-star" />{" "}
                                                                                                    </div>


                                                                                                    <h6 className="price-title">
                                                                                                        {item.ProductName}
                                                                                                        <span className='text-orange-500'> ({item.Metric_Id}{item.Metrics})</span>
                                                                                                    </h6>{" "}

                                                                                                </div>
                                                                                                <div className="detail-right">
                                                                                                    <div className="price " style={{ color: "green", marginLeft: "-0.4rem" }}> in stock </div>
                                                                                                    <div className="price">
                                                                                                        <div className="price">
                                                                                                            {item.Price}

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="icon-detail">
                                                                                         
                                                                                                    <a

                                                                                                        onClick={() => handelAdd(item)}
                                                                                                        className="add-to-wish tooltip-top"
                                                                                                        data-tippy-content="Add to Wishlist"
                                                                                                    >
                                                                                                        {" "}
                                                                                                        <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                                    </a>
                                                                                       
                                                                                              
                                                                                                    <a
                                                                                                        href="javascript:void(0)"
                                                                                                        className="add-to-wish tooltip-top"
                                                                                                        data-tippy-content="Add to Wishlist"
                                                                                                    >
                                                                                                        {" "}
                                                                                                        <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                                                                                                    </a>
                                                                                           
                                                                                         
                                                                                                    <a

                                                                                                        className="tooltip-top"

                                                                                                    >
                                                                                                        {" "}
                                                                                                        <Link to={`/viewdetails/${item.Id}`}>
                                                                                                            <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                                        </Link>
                                                                                                    </a>
                                                                                            
                                                                                                <a
                                                                                                    href=""
                                                                                                    className="tooltip-top"
                                                                                                    data-tippy-content="Compare"
                                                                                                >
                                                                                                    {" "}
                                                                                                    <i class="fa fa-refresh" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            )
                                                        })}

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

                : <><div>
                    <div className="spinner-border" role="status">
                        <span className="sr-only text-black">Loading...</span>
                    </div>
                </div></>}







        </>
    )
}

export default AllProduct











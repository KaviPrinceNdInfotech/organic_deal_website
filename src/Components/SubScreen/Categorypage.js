 import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import Tooltip from "@material-ui/core/Tooltip";
import { useParams } from "react-router-dom";
import { useDispatch, } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import Pagination from 'react-bootstrap/Pagination';


function Categorypage() {
    const dispatch = useDispatch();

    const { Id } = useParams();
    const [brand, setBrand] = useState(false);
    const [price, setPrice] = useState(false);
    const [product, setProduct] = useState([]);

    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);


    //for data get section

    const getProduct = async () => {
        const { data } = await axios.get(`https://admin.organicdeal.in/api/ProductAPI/GetProduct/categoryId?categoryId=${Id}&page=`);
        setProduct(data.Products)
    }

    //pagination section start here
    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }
    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }
    useEffect(() => {
        getProduct()
        const pagedatacount = Math.ceil(product.length / 10);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 10;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = product?.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [product], [page])
    //pagination section end Here

    //add to cart button function

    const handelAdd = (item) => {
        dispatch(addToCart(item));
    }


    return (
        <>
            <>
                {/* breadcrumb start */}
                <div className="breadcrumb-main ">
                    <div className="px-2 py-2">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-contain">
                                    <div>
                                        <h2>category</h2>
                                        {
                                            <ul>
                                                <li>
                                                    <Link to="/">home</Link>
                                                </li>
                                                <li>
                                                    <i className="fa fa-angle-double-right" />
                                                </li>
                                                <li>
                                                    {product.CategoryName}
                                                </li>
                                            </ul>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb End */}
                {/* section start */}
                <section className="section-big-pt-space ratio_asos b-g-light">
                    <div className="collection-wrapper">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter category-page-side">
                                    {/* side-bar colleps block stat */}
                                    <div className="collection-filter-block creative-card creative-inner category-side">
                                        {/* brand filter start */}
                                        <div className="collection-mobile-back">
                                            <span className="filter-back">
                                                <i className="fa fa-angle-left" aria-hidden="true" /> back
                                            </span>
                                        </div>
                                        <div className="collection-collapse-block open">
                                            <h3 className="collapse-block-title mt-0" onClick={() => setBrand(!brand)}>brand</h3>
                                            <div className="collection-collapse-block-content">
                                                {brand && <div className="collection-brand-filter">
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="zara"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="zara"
                                                        >
                                                            New Arrival
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="vera-moda"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="vera-moda"
                                                        >
                                                            Organic Product
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="forever-21"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="forever-21"
                                                        >
                                                            Reccomended product
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="roadster"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="roadster"
                                                        >
                                                            HOT Deal
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="only"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="only"
                                                        >
                                                            Special Product
                                                        </label>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                        {/* color filter start here */}
                                        <div className="collection-collapse-block border-0 open">
                                            <h3 className="collapse-block-title">Offer</h3>
                                            <div className="collection-collapse-block-content">
                                                <div className="filter-slide">
                                                    <input
                                                        className="js-range-slider"
                                                        type="text"
                                                        name="my_range"
                                                        defaultValue=""
                                                        data-type="double"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* size filter start here */}
                                        <div className="collection-collapse-block open">
                                            <h3 className="collapse-block-title" onClick={() => setPrice(!price)}>PRICE</h3>
                                            <div className="collection-collapse-block-content">
                                                <div className="size-selector">
                                                    {price && <div className="collection-brand-filter">
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="small"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="small"
                                                            >
                                                                RS.10-RS.50
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="mediam"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="mediam"
                                                            >
                                                                RS.500-RS.1000
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="large"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="large"
                                                            >
                                                                RS.1000-RS.2000
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="extralarge"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="extralarge"
                                                            >
                                                                RS.2000-RS.4000
                                                            </label>

                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="extralarge"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="extralarge"
                                                            >
                                                                RS.4000-ABOVE
                                                            </label>

                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        {/* price filter start here */}

                                    </div>
                                    {/* silde-bar colleps block end here */}
                                    {/* side-bar single product slider start */}
                                    <div className="theme-card creative-card creative-inner">
                                        <h5 className="title-border">new product</h5>
                                        <div className="slide-1">
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">
                                                    <div className="media-banner-box">
                                                        {pageData?.map((item, index) => {

                                                            return (
                                                                <div className="media">
                                                                    <Link to={`/viewdetails/${item.Id}`}>
                                                                        <img
                                                                            src={`https://admin.organicdeal.in/Images/${item.ProductImage}`}
                                                                            className="img-fluid  h-20  "
                                                                            alt="product"
                                                                        />
                                                                    </Link>
                                                                    <div className="media-body">
                                                                        <div className="media-contant">
                                                                            <div>
                                                                                <div className="product-detail">
                                                                                    <ul className="rating">
                                                                                        <li>
                                                                                            <i className="fa fa-star" />
                                                                                        </li>
                                                                                        <li>
                                                                                            <i className="fa fa-star" />
                                                                                        </li>
                                                                                        <li>
                                                                                            <i className="fa fa-star" />
                                                                                        </li>
                                                                                        <li>
                                                                                            <i className="fa fa-star" />
                                                                                        </li>
                                                                                        <li>
                                                                                            <i className="fa fa-star-o" />
                                                                                        </li>
                                                                                    </ul>
                                                                                    <a
                                                                                        href="#"
                                                                                        tabIndex={0}
                                                                                    >
                                                                                        <p>{item.ProductName}
                                                                                        <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                                                                                        </p>
                                                                                    </a>
                                                                                    <h6>
                                                                                        {item.Price} <span>$55.21</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="cart-info">
                                                                                    <Tooltip title="Add to Cart" arrow placement="right">
                                                                                        <button
                                                                                            onClick={() => handelAdd(item)}
                                                                                            className="tooltip-top add-cartnoty"
                                                                                            data-tippy-content="Add to cart"
                                                                                        >
                                                                                            {" "}
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width={24}
                                                                                                height={24}
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth={2}
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="feather feather-shopping-cart"
                                                                                            >
                                                                                                <circle cx={9} cy={21} r={1} />
                                                                                                <circle cx={20} cy={21} r={1} />
                                                                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                            </svg>{" "}
                                                                                        </button>
                                                                                    </Tooltip>
                                                                                    <a
                                                                                        href="javascript:void(0)"
                                                                                        className="add-to-wish tooltip-top"
                                                                                        data-tippy-content="Add to Wishlist"
                                                                                    >
                                                                                        <i
                                                                                            data-feather="heart"
                                                                                            className="add-to-wish"
                                                                                        />
                                                                                    </a>
                                                                                    <a
                                                                                        href="javascript:void(0)"
                                                                                        data-bs-toggle="modal"
                                                                                        data-bs-target="#quick-view"
                                                                                        className="tooltip-top"
                                                                                        data-tippy-content="Quick View"
                                                                                    >
                                                                                        <i data-feather="eye" />
                                                                                    </a>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="tooltip-top"
                                                                                        data-tippy-content="Compare"
                                                                                    >
                                                                                        <i data-feather="refresh-cw" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">

                                                </div>
                                            </div>
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* side-bar single product slider end */}
                                    {/* side-bar banner start here */}
                                    <div className="collection-sidebar-banner">
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://organicdeal.in/Images/2021116155456756754567567567545675675675.jpg"
                                                className="img-fluid "
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    {/* side-bar banner end here */}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="top-banner-wrapper">
                                                    <a href="#">
                                                        {<img
                                                            src='https://organicdeal.in/Images/202311012415034345034343450343434523d4cce-2205-4635-8ac7-bc12733bea23.jpg'
                                                            className="img-fluid "
                                                            alt="img"
                                                        />}
                                                    </a>
                                                    {<div className="top-banner-content small-section">
                                                        <h4>{product.CategoryName}
                                                        </h4>

                                                    </div>}
                                                </div>
                                                <div className="collection-product-wrapper">

                                                    <div className="product-wrapper-grid product">
                                                        <div className="row">
                                                            {pageData.length ?
                                                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                                                    {pageData?.map((item, index) => {

                                                                        return (
                                                                            <div className="product-box">
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
                                                                                                <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                                                                                            </h6>{" "}

                                                                                        </div>
                                                                                        <div className="detail-right">
                                                                                            <div className="price " style={{ color: "green", marginLeft: "-0.4rem" }}> In stock </div>
                                                                                            <div className="price">
                                                                                                <div className="price">{item.Price} </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="icon-detail">
                                                                                        <Tooltip title="Add to Cart" arrow placement="top">
                                                                                            <a

                                                                                                onClick={() => handelAdd(item)}
                                                                                                className="add-to-wish tooltip-top"
                                                                                                data-tippy-content="Add to Wishlist"
                                                                                            >
                                                                                                {" "}
                                                                                                <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                            </a>
                                                                                        </Tooltip>
                                                                                        <Tooltip title="Add to wishlist" arrow placement="top">
                                                                                            <a
                                                                                                href="javascript:void(0)"
                                                                                                className="add-to-wish tooltip-top"
                                                                                                data-tippy-content="Add to Wishlist"
                                                                                            >
                                                                                                {" "}
                                                                                                <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                                                                                            </a>
                                                                                        </Tooltip>
                                                                                        <Tooltip title="Quick View" arrow placement="top">
                                                                                            <a

                                                                                                className="tooltip-top"

                                                                                            >
                                                                                                {" "}
                                                                                                <Link to={`/viewdetails/${item.Id}`}>
                                                                                                    <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                                </Link>
                                                                                            </a>
                                                                                        </Tooltip>
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
                                                                            </div>)
                                                                    })}
                                                                </div> :
                                                                <div>
                                                                    <h2>  Sorry Currently this time Product is not Available !</h2>

                                                                </div>
                                                            }
                                                        </div>
                                                    </div>


                                                    <div className='d-flex justify-content-end'>
                                                        <Pagination>

                                                            <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
                                                            {
                                                                Array(pageCount).fill(null).map((ele, index) => {
                                                                    return (
                                                                        <>
                                                                            <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                            <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
                                                        </Pagination>
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
                {/* section End */}
            </>

        </>
    )
}

export default Categorypage

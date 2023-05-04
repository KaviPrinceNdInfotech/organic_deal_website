import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import Pagination from 'react-bootstrap/Pagination';


function Categorypage() {
    const dispatch = useDispatch();
    const [hotProduct, setHotProduct] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const Id = localStorage.getItem('ID')



    const getUsers = async () => {
        const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/HotDetails');
        setHotProduct(data.HotDeals);
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
        getUsers();
        const pagedatacount = Math.ceil(hotProduct.length / 10);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 12;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = hotProduct?.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [hotProduct], [page])






    const handelAdd = (item) => {
        dispatch(addToCart(item));
    }










    return (
        <>
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
                                                <Link to="/categorypage">Hot Deals Product</Link>
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




                                    <div><p>Hot Deals Products</p></div>


                                </div>
                                <div className="collection-content">
                                    <div className="page-main-content">
                                        <div className="row">
                                            <div className="col-sm-12">

                                                <div className="collection-product-wrapper">

                                                    <div className="product-wrapper-grid product">
                                                        <div className="row">
                                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
                                                                {pageData?.map((item, index) => {
                                                                    console.log(item);
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
                                                                                        {/* <p>
                                                                                            Lorem Ipsum is simply dummy text of the
                                                                                            printing and typesetting industry. Lorem
                                                                                            Ipsum has been the industry's standard dummy
                                                                                            text ever since the 1500s, when an unknown
                                                                                            printer took a galley of type and scrambled
                                                                                            it to make a type specimen book
                                                                                        </p> */}

                                                                                        <h6 className="price-title ">
                                                                                            {item.ProductName}
                                                                                            <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>

                                                                                        </h6>{" "}

                                                                                    </div>
                                                                                    <div className="detail-right">
                                                                                        <div className="price " style={{ color: "green", marginLeft: "-0.4rem" }}> instock{item.IsStock}</div>
                                                                                        <div className="price">
                                                                                            <div className="price">RS. {item.Price} </div>
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
                                                                                        <i className="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                    </a>


                                                                                    <a
                                                                                        href="j#"
                                                                                        className="add-to-wish tooltip-top"
                                                                                        data-tippy-content="Add to Wishlist"
                                                                                    >
                                                                                        {" "}
                                                                                        <i className="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                                                                                    </a>



                                                                                    <a
                                                                                        href="j#"

                                                                                        className="tooltip-top"

                                                                                    >
                                                                                        {" "}
                                                                                        <Link to={`/viewdetails/${item.Id}`}>
                                                                                            <i className="fa fa-eye" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                        </Link>
                                                                                    </a>

                                                                                    <a
                                                                                        href="#"
                                                                                        className="tooltip-top"
                                                                                        data-tippy-content="Compare"
                                                                                    >
                                                                                        {" "}
                                                                                        <i className="fa fa-refresh" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>)
                                                                })}
                                                            </div>

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



                <div
                    className="modal fade bd-example-modal-lg theme-modal"
                    id="quick-view"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content quick-view-modal">
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    X
                                </button>
                                {<div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="quick-view-img">
                                            <img
                                                // src={`https://admin.organicdeal.in/Images/${product.ProductImage}`}
                                                alt=""
                                                className="img-fluid bg-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 rtl-text">
                                        <div className="product-right">
                                            <div className="pro-group">
                                                <h2>Honey</h2>
                                                <ul className="pro-price">
                                                    <li>$70</li>
                                                    <li>
                                                        <span>mrp $140</span>
                                                    </li>
                                                    <li>50% off</li>
                                                </ul>
                                                <div className="revieu-box">
                                                    <ul>
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
                                                    <a href="review.html">
                                                        <span>(6 reviews)</span>
                                                    </a>
                                                </div>
                                                <ul className="best-seller">
                                                    <li>
                                                        <svg
                                                            viewBox="0 0 128 128"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="m102.427 43.155-2.337-2.336a3.808 3.808 0 0 1 -.826-4.149l1.263-3.053a3.808 3.808 0 0 0 -2.063-4.975l-3.036-1.256a3.807 3.807 0 0 1 -2.352-3.519v-3.286a3.808 3.808 0 0 0 -3.809-3.808h-3.3a3.81 3.81 0 0 1 -3.518-2.35l-1.269-3.052a3.808 3.808 0 0 0 -4.98-2.059l-3.032 1.258a3.807 3.807 0 0 1 -4.152-.825l-2.323-2.323a3.809 3.809 0 0 0 -5.386 0l-2.336 2.336a3.808 3.808 0 0 1 -4.149.826l-3.053-1.263a3.809 3.809 0 0 0 -4.975 2.063l-1.257 3.036a3.808 3.808 0 0 1 -3.519 2.353h-3.285a3.808 3.808 0 0 0 -3.809 3.808v3.3a3.808 3.808 0 0 1 -2.349 3.519l-3.053 1.266a3.809 3.809 0 0 0 -2.059 4.976l1.259 3.035a3.81 3.81 0 0 1 -.825 4.152l-2.324 2.323a3.809 3.809 0 0 0 0 5.386l2.337 2.337a3.807 3.807 0 0 1 .826 4.149l-1.263 3.056a3.808 3.808 0 0 0 2.063 4.975l3.036 1.256a3.807 3.807 0 0 1 2.352 3.519v3.286a3.808 3.808 0 0 0 3.809 3.808h3.3a3.809 3.809 0 0 1 3.518 2.35l1.265 3.052a3.808 3.808 0 0 0 4.984 2.059l3.035-1.259a3.811 3.811 0 0 1 4.152.825l2.323 2.324a3.809 3.809 0 0 0 5.386 0l2.336-2.336a3.81 3.81 0 0 1 4.149-.827l3.053 1.264a3.809 3.809 0 0 0 4.975-2.063l1.257-3.037a3.809 3.809 0 0 1 3.519-2.352h3.285a3.808 3.808 0 0 0 3.809-3.808v-3.3a3.808 3.808 0 0 1 2.349-3.518l3.053-1.266a3.809 3.809 0 0 0 2.059-4.976l-1.259-3.036a3.809 3.809 0 0 1 .825-4.151l2.324-2.324a3.809 3.809 0 0 0 -.003-5.39z"
                                                                    fill="#f9cc4e"
                                                                />
                                                                <circle cx={64} cy="45.848" fill="#4ec4b5" r="29.146" />
                                                                <path
                                                                    d="m59.795 41.643 4.205-12.614 4.205 12.614h12.615l-8.41 8.41 4.205 12.615-12.615-8.41-12.615 8.41 4.205-12.615-8.41-8.41z"
                                                                    fill="#f9cc4e"
                                                                />
                                                                <path
                                                                    d="m87.579 74.924h-1.6a3.809 3.809 0 0 0 -3.519 2.352l-1.257 3.037a3.809 3.809 0 0 1 -4.975 2.063l-3.053-1.264a3.81 3.81 0 0 0 -4.149.827l-2.336 2.336a3.809 3.809 0 0 1 -5.386 0l-2.323-2.324a3.811 3.811 0 0 0 -4.152-.825l-3.029 1.259a3.808 3.808 0 0 1 -4.977-2.059l-1.265-3.052a3.809 3.809 0 0 0 -3.518-2.35h-1.618l-17.417 35.386 17.255-5.872 5.872 17.256 17.868-36.304 17.868 36.3 5.872-17.256 17.26 5.876z"
                                                                    fill="#f95050"
                                                                />
                                                            </g>
                                                        </svg>
                                                        3 best seller
                                                    </li>
                                                    <li>
                                                        <svg
                                                            enableBackground="new 0 0 497 497"
                                                            viewBox="0 0 497 497"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="m329.63 405.42-.38.43c-10.048 19.522-48.375 35.567-80.775 35.607-24.881 0-53.654-9.372-71.486-20.681-5.583-3.54-2.393-10.869-6.766-15.297l19.149-5.13c3.76-1.22 6.46-4.54 6.87-8.47l8.574-59.02 82.641-2.72 12.241 28.06.837 8.668-1.844 9.951 3.456 6.744.673 6.967c.41 3.93 3.11 7.25 6.87 8.47z"
                                                                    fill="#f2d1a5"
                                                                />
                                                                <path
                                                                    d="m420.39 497h-343.78c-6.21 0-7.159-6.156-6.089-12.266l2.53-14.57c3.82-21.96 16.463-37.323 37.683-44.153l27.702-8.561 28.754-8.035c18.34 18.57 48.615 27.957 81.285 27.957 32.4-.04 61.709-8.478 80.259-26.809l.38-.43 31.486 5.256 26.39 8.5c21.22 6.83 36.9 24.87 40.72 46.83l2.53 14.57c1.07 6.111-3.64 11.711-9.85 11.711z"
                                                                    fill="#7e8b96"
                                                                />
                                                                <g>
                                                                    <path
                                                                        d="m384.055 215c-2.94 43.71-18.85 104.74-24.92 130.96-.68 2.94-2.33 5.45-4.56 7.22-2.23 1.78-5.05 2.82-8.06 2.82-6.88 0-12.55-5.37-12.94-12.23 0 0-5.58-84.28-7.63-128.77z"
                                                                        fill="#dc4955"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="m141 271c-27.062 0-49-21.938-49-49 0-11.046 8.954-20 20-20h8.989l240.468-6.287 8.293 6.287h15.25c11.046 0 20 8.954 20 20 0 27.062-21.938 49-49 49z"
                                                                    fill="#f2bb88"
                                                                />
                                                                <path
                                                                    d="m360.6 415.39-.06.09c-49.3 66.23-174.56 66.38-223.76.56l-.43-.63 18.171-1.91 12.669-8.02c18.34 18.57 48.41 29.8 81.08 29.8h.15c32.4-.04 62.28-11.1 80.83-29.43l.38-.43z"
                                                                    fill="#a9a4d3"
                                                                />
                                                                <path
                                                                    d="m147.8 418.394v10.136l-32.89 10.59c-15.6 5.02-27.05 18.18-29.86 34.34l-3.59 23.54h-4.85c-6.21 0-10.92-5.6-9.85-11.71l2.53-14.57c3.82-21.96 19.5-40 40.72-46.83l26.34-8.48z"
                                                                    fill="#64727a"
                                                                />
                                                                <path
                                                                    d="m182.19 417.45-34.39 11.08c-3.99-3.86-7.68-8.02-11.02-12.49l-.43-.63 30.84-9.93c1.828 1.848 10.344.351 12.353 2.02 2.928 2.433-.561 7.928 2.647 9.95z"
                                                                    fill="#938dc8"
                                                                />
                                                                <path
                                                                    d="m299.7 358.2-2.71-28.06-79.861 2.255.001-.005-16.48.47-2.98 26.56-.763 6.8 2.039 12.83-3.989 4.55-.778 6.93c-.41 3.93-3.11 7.25-6.87 8.47l-20.12 6.48c4.37 4.43 9.41 8.44 15 11.97l10.02-3.22c9.79-3.17 16.79-11.79 17.88-21.97l2.058-17.506c.392-3.33 3.888-5.367 6.958-4.02 11.414 5.008 21.565 7.765 28.393 7.765 11.322.001 31.852-7.509 52.202-20.299z"
                                                                    fill="#f2bb88"
                                                                />
                                                                <path
                                                                    d="m134.539 164.427s-.849 18.411-.849 33.002c0 38.745 9.42 76.067 25.701 105.572 20.332 36.847 72.609 61.499 88.109 61.499s68.394-24.653 89.275-61.499c14.137-24.946 23.338-55.482 25.843-87.741.458-5.894-9.799-20.073-9.799-26.058l10.491-24.775c0-38.422-36.205-111.427-114.81-111.427s-113.961 73.005-113.961 111.427z"
                                                                    fill="#f2d1a5"
                                                                />
                                                                <g>
                                                                    <path
                                                                        d="m294 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                                                        fill="#64727a"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m203 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                                                        fill="#64727a"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m249 260.847c-5.976 0-11.951-1.388-17.398-4.163-3.691-1.88-5.158-6.397-3.278-10.087 1.88-3.691 6.398-5.158 10.087-3.278 6.631 3.379 14.547 3.379 21.178 0 3.689-1.881 8.207-.413 10.087 3.278 1.88 3.69.413 8.207-3.278 10.087-5.447 2.775-11.422 4.163-17.398 4.163z"
                                                                        fill="#f2bb88"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="m288.989 40.759c0 22.511-9.303 40.759-40.489 40.759s-48.702-42.103-48.702-42.103 17.516-39.415 48.702-39.415c25.911 0 47.746 12.597 54.392 29.769 1.353 3.497-13.903 7.182-13.903 10.99z"
                                                                    fill="#df646e"
                                                                />
                                                                <path
                                                                    d="m254.305 81.307c1.031-.099 2.069-.167 3.093-.295 26.96-3.081 47.572-19.928 47.572-40.252 0-3.81-.72-7.49-2.08-10.99-15.42-6.31-33.46-10.34-54.39-10.34-4.139 0-8.163.159-12.073.462-5.127.397-7.393-6.322-3.107-9.163 7.36-4.878 16.519-8.364 26.68-9.879-3.71-.56-7.56-.85-11.5-.85-25.933 0-47.766 12.621-54.393 29.813-.006.002-.011.004-.017.007-1.337 3.487-2.055 7.201-2.06 10.94 0 22.51 25.28 40.76 56.47 40.76 1.946.008 3.872-.09 5.805-.213z"
                                                                    fill="#dc4955"
                                                                />
                                                                <path
                                                                    d="m363.31 164.43v33c0 5.99-.23 11.94-.7 17.83-4.32-.91-8.4-2.66-12.05-5.19-22.785-15.834-31.375-40.163-37.64-60.936-.382-1.268-1.547-2.134-2.871-2.134h-30.949c-4.96 0-9.65-2.15-12.89-5.91l-10.947-12.711c-1.197-1.39-3.349-1.39-4.546 0l-10.947 12.711c-3.24 3.76-7.93 5.91-12.89 5.91h-90.33c8.47-39.6 44.09-94 111.95-94 78.61 0 114.81 73 114.81 111.43z"
                                                                    fill="#f2bb88"
                                                                />
                                                                <path
                                                                    d="m381 164.19v37.81h-11.25c-4 0-7.93-1.16-11.22-3.44-19.74-13.72-26.93-35.65-33.69-58.43-1.26-4.24-5.16-7.13-9.58-7.13h-36.165c-.873 0-1.703-.38-2.273-1.042l-21.559-25.029c-1.197-1.389-3.349-1.389-4.546 0l-21.559 25.029c-.57.662-1.4 1.042-2.273 1.042h-38.015c-5.3 0-9.68 4.14-9.98 9.44 0 0-2.331 25.591-4.032 66.31-1.765 42.256-7.908 135.02-7.908 135.02-.16 2.822-1.215 5.393-2.879 7.441-2.381 2.929-5.67.375-9.72.375-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-.792-5.474-1.472-8.414-6.7-28.94-23.83-94.686-23.83-138.351 0-13.73-.14-34.689 0-37.649.14-26.43 12.74-54.048 32-78.128 12.937-16.178 28.667-38.955 58.628-47.692 10.986-3.204 23.248-5.101 36.883-5.101 50.8 0 82.75 26.31 100.6 48.39 19.68 24.319 31.9 55.879 31.9 82.369z"
                                                                    fill="#df646e"
                                                                />
                                                                <path
                                                                    d="m211.62 38.54c-19.38 9.9-33.55 23.84-43.37 36.44-19.26 24.69-31.27 56.78-31.41 83.88-.14 3.03-.84 25.18-.84 39.25 0 44.77 18.69 117.93 25.39 147.6.47 2.08 1.4 3.94 2.68 5.5-2.38 2.93-6.01 4.79-10.06 4.79-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-3.88-4.28-4.56-7.22-6.7-28.94-25.39-100.29-25.39-143.96 0-13.73.7-35.33.84-38.29.14-26.43 12.15-57.73 31.41-81.81 12.94-16.18 33.4-34.63 63.37-43.36z"
                                                                    fill="#dc4955"
                                                                />
                                                                <g>
                                                                    <path
                                                                        d="m316.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.172.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                                                        fill="#df646e"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m225.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.171.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                                                        fill="#df646e"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m302.143 383.517c-16.23 10.87-34.973 16.353-53.643 16.353s-37.3-5.41-53.54-16.27l3.476-6.313-1.526-11.067 4.15 3.37c28.46 20.41 66.63 20.37 95.05-.12.2-.14.39-.27.6-.39l3.826-2.211z"
                                                                        fill="#a9a4d3"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m211.98 376.2-1.85 15.68c-5.23-2.27-10.31-5.03-15.17-8.28l1.95-17.38 4.15 3.37c3.5 2.51 7.15 4.72 10.92 6.61z"
                                                                        fill="#938dc8"
                                                                    />
                                                                </g>
                                                                <g>
                                                                    <path
                                                                        d="m269.5 306.5h-42c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h42c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
                                                                        fill="#df646e"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        44 active view this
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pro-group">
                                                <h6 className="product-title">product infomation</h6>
                                                <p>
                                                    Sed ut perspiciatis, unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium
                                                </p>
                                            </div>
                                            <div className="pro-group pb-0">
                                                <h6 className="product-title size-text">
                                                    select Quantity

                                                </h6>

                                                <div className="size-box">
                                                    <ul>
                                                        <li>
                                                            <a href="j#">500g</a>
                                                        </li>
                                                        <li>
                                                            <a href="j#">1kg</a>
                                                        </li>
                                                        <li>
                                                            <a href="j#">5kg</a>
                                                        </li>
                                                        <li>
                                                            <a href="j#">10kg</a>
                                                        </li>
                                                        <li>
                                                            <a href="j#">50kg+</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h6 className="product-title">color</h6>
                                                <div className="color-selector inline">
                                                    <ul>
                                                        <li>
                                                            <div className="color-1 active" />
                                                        </li>
                                                        <li>
                                                            <div className="color-2" />
                                                        </li>
                                                        <li>
                                                            <div className="color-3" />
                                                        </li>
                                                        <li>
                                                            <div className="color-4" />
                                                        </li>
                                                        <li>
                                                            <div className="color-5" />
                                                        </li>
                                                        <li>
                                                            <div className="color-6" />
                                                        </li>
                                                        <li>
                                                            <div className="color-7" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h6 className="product-title">quantity</h6>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <button className="qty-minus" />
                                                        <input
                                                            className="qty-adj form-control"
                                                            type="number"
                                                            defaultValue={1}
                                                        />
                                                        <button className="qty-plus" />
                                                    </div>
                                                </div>
                                                <div className="product-buttons">
                                                    <a
                                                        href="j#"
                                                        onClick="openCart()"
                                                        className="btn cart-btn btn-normal tooltip-top"
                                                        data-tippy-content="Add to cart"
                                                    >
                                                        <i className="fa fa-shopping-cart" />
                                                        add to cart
                                                    </a>
                                                    <Link to="/viewdetails"

                                                        className="btn btn-normal tooltip-top"
                                                        data-tippy-content="view detail"
                                                    >
                                                        view detail
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Categorypage

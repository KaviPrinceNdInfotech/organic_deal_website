

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import {
  MDBTabs, MDBTabsItem, MDBTabsLink,
  MDBTabsContent, MDBTabsPane
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
       
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          
        }
      }
    ]
  }




  const dispatch = useDispatch();

  const [categorycard, setCategorycard] = useState([])
  const [newProduct, setNewProduct] = useState([])
  const [specialProduct, setSpecialProduct] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/ReccomendedProduct');
    setCategorycard(data.RecommendProducts);
  }

  useEffect(() => {
    getUsers();
  }, []);



  const getUsers1 = async () => {
    const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/NewArrivalProduct');
    setNewProduct(data.newProducts);
  }

  useEffect(() => {
    getUsers1();
  }, []);


  const getUsers2 = async () => {
    const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/SpecialProducts');
    setSpecialProduct(data.specialProducts);
  }

  useEffect(() => {
    getUsers2();
  }, []);


  const handelAdd=(item)=>{
    dispatch(addToCart(item));
  }




  const [basicActive, gfg1] = useState('1');

  const click = (value) => {
    if (value === basicActive) {
      return;
    }

    gfg1(value);
  };

  return (
    <div id='gfg'>

      <MDBTabs className=' space-x-8 justify-center text-xl text-black h-20 bg-white '>
        <MDBTabsItem className='text-center'>
          <MDBTabsLink onClick={() => click('1')} className="text-orange-600 font-bold mt-3 border-none"
            active={basicActive === '1'}>
            New Product
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem className='text-center'>
          <MDBTabsLink onClick={() => click('2')} className="text-orange-600 font-bold mt-3"
            active={basicActive === '2'}>
            Special Product
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem className='text-center'>
          <MDBTabsLink onClick={() => click('3')} className="text-orange-600 font-bold mt-3"
            active={basicActive === '3'}>
            Best Sellars
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === '1'}>


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

                            <div className="product-wrapper-grid product">
                              <div className="row">
                                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 "> */}
                                <Slider {...sliderSettings}>
                                  {newProduct.map((item, index) => {
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
                                             

                                              <h6 className="price-title">
                                                {item.ProductName}
                                                <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                                              </h6>{" "}

                                            </div>
                                            <div className="detail-right">
                                              <div className="price " style={{ color: "green", marginLeft: "-0.4rem" }}> In stock </div>
                                              <div className="price">
                                                <div className="price"> {item.Price} </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="icon-detail">
                                            <Tooltip title="Add to Cart" arrow placement="top">

                                              <a
                                                  onClick={()=>handelAdd(item)}
                                                className="add-to-wish tooltip-top"
                                                data-tippy-content="Add to Wishlist"
                                              >
                                                {" "}
                                                <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                              </a>
                                            </Tooltip>
                                            <Tooltip title="Add to wishlist" arrow placement="top">
                                              <a
                                                href="#"
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
                                   </Slider>
                                {/* </div> */}

                              </div>
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
        
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === '2'}>
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

                            <div className="product-wrapper-grid product">
                              <div className="row">
                                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 "> */}
                                <Slider {...sliderSettings}>
                                  {specialProduct?.map((item, index) => {
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
                                             

                                              <h6 className="price-title">
                                                {item.ProductName}
                                                <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                                              </h6>{" "}

                                            </div>
                                            <div className="detail-right">
                                            <div className="price " style={{ color: "green", marginLeft: "-0.4rem" }}> In stock </div>
                                              <div className="price">
                                                <div className="price"> {item.Price} </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="icon-detail">
                                            <Tooltip title="Add to Cart" arrow placement="top">

                                              <a
                                                  onClick={()=>handelAdd(item)}
                                                className="add-to-wish tooltip-top"
                                                data-tippy-content="Add to Wishlist"
                                              >
                                                {" "}
                                                <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                              </a>
                                            </Tooltip>
                                            <Tooltip title="Add to wishlist" arrow placement="top">
                                              <a
                                                href="#"
                                                className="add-to-wish tooltip-top"
                                                data-tippy-content="Add to Wishlist"
                                              >
                                                {" "}
                                                <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                                              </a>
                                            </Tooltip>
                                            <Tooltip title="Add to wishlist" arrow placement="top">
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
                                      </Slider>
                                {/* </div> */}

                              </div>
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



         
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === '3'}>
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

                            <div className="product-wrapper-grid product">
                              <div className="row">
                                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 "> */}
                                <Slider {...sliderSettings}>
                                  {categorycard.map((item, index) => {
                                    console.log(item);
                                    return (
                                      <div >
                                      <div className="product-box ">
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
                                            <Tooltip title="Add to wishlist" arrow placement="top">
                                              <a
                                                 onClick={()=>handelAdd(item)}
                                                className="add-to-wish tooltip-top"
                                                data-tippy-content="Add to Wishlist"
                                              >
                                                {" "}
                                                <i class="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                              </a>
                                            </Tooltip>
                                            <Tooltip title="Add to wishlist" arrow placement="top">
                                              <a
                                                href="#"
                                                className="add-to-wish tooltip-top"
                                                data-tippy-content="Add to Wishlist"
                                              >
                                                {" "}
                                                <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                                              </a>
                                            </Tooltip>
                                            <Tooltip title="Quick View" arrow placement="top">
                                              <a
                                                href="#"
                                             
                                                className="tooltip-top"
                                              
                                              >
                                                {" "}
                                                <Link to={`/viewdetails/${item.Id}`}>
                                                <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                                </Link>
                                              </a>
                                            </Tooltip>
                                            <a
                                              href="#"
                                              className="tooltip-top"
                                              data-tippy-content="Compare"
                                            >
                                              {" "}
                                              <i class="fa fa-refresh" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      </div>
                                      )
                                  })}
                                       </Slider>
                                {/* </div> */}

                              </div>
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
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}





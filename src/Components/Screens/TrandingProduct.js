import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Slider from 'react-slick'
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import { addTowishList } from '../Store/WishListSlice';





function TrandingProduct() {


  const dispatch = useDispatch();
  const handelwishList = (item) => {
    dispatch(addTowishList(item));
  }


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








  const disptach = useDispatch();

  const [tarndingproduct, setTrandingProduct] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/HotDetails');
    setTrandingProduct(data.HotDeals);
  }
  useEffect(() => {
    getUsers();
  }, []);

  const handelAdd = (item) => {
    disptach(addToCart(item));
  }



  return (
    <>
      <div className="title8  section-big-pt-space">
        <h4>trending Products</h4>
      </div>
      <section className="product section-big-mb-space ">
        <div className="custom-container addtocart_count">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="product-slide-5 product-m no-arrow">
                <Slider {...sliderSettings}>
                  {tarndingproduct.map((item, index) => {
                    console.log(item);
                    return (

                      <div>
                        <div className="product-box rounded-md" key={item.Id}>
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
                            <div className="counter-cart">
                              <div className="addtocart_btn">
                                <Tooltip title="Add to Cart" arrow placement="top">
                                  <button
                                    onClick={() => handelAdd(item)}
                                    type="button"
                                    className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                                    style={{ background: "linear-gradient(to right, #e17200 , #205403)" }}
                                  >

                                    {" "}
                                    add to cart{" "}
                                  </button>
                                </Tooltip>

                              </div>
                            </div>
                            <div className="product-icon icon-top">

                              <button
                                onClick={() => handelwishList(item)}

                                className="add-to-wish tooltip-left"

                              >
                                <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "1rem", color: "red" }}></i>
                              </button>
                              <Tooltip title="Quick View" arrow placement="left">
                                <button


                                >
                                  <Link to={`/viewdetails/${item.Id}`}>
                                    <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                                  </Link>
                                </button>
                              </Tooltip>
                              <a
                                href=""
                                className="tooltip-left"
                                data-tippy-content="Compare"
                              >
                                <i class="fa fa-refresh" aria-hidden="true" style={{ fontSize: "1rem", color: "gray" }}></i>
                              </a>
                            </div>
                            <div className="new-label">
                              <div>20%</div>
                            </div>
                          </div>
                          <div className="product-detail product-detail2 bg-black rounded-b">
                            <div className="rating-star">
                              {" "}
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                            </div>

                            <h3 className='text-white'>{item.ProductName}
                              <span className='text-orange-500'> ({item.Quantity}{item.Metrics})</span>
                            </h3>
                            <div className='d-flex justify-center space-x-4'>
                              <h5 className='space-x-2 text-white'>
                                <i class="fa fa-inr" aria-hidden="true"></i>
                                {item.Price}
                                <span className='text-white'>
                                  <i class="fa fa-inr" aria-hidden="true"></i>
                                  {item.OurPrice}
                                </span>
                              </h5>

                              <h4 className='text-green-600'>{item.IsStocks}</h4>
                            </div>


                          </div>
                        </div>
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default TrandingProduct

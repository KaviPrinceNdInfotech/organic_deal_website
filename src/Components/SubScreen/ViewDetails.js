import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom"
import "../css/Custom.css"
import Slider from 'react-slick'

import Tooltip from "@material-ui/core/Tooltip";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '.././Store/cartSlice';
import { incrementQuantity, decrementQuantity } from '../Store/cartSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import axios from 'axios';
function ViewDetails() {
  const dispatch = useDispatch();
  const [open, setOPen] = useState(false);
  const { Id } = useParams();
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  const [pincode, setPinCode] = useState("");
  const [delivercode, setDeliverCode] = useState([]);
  const [brand1, setBrand1] = useState(false);

  const DeliverData = async () => {
    const { res } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/CheckPincodeAvailabile');
    setDeliverCode(res.data);
    console.log("res.data")
  }

  // useEffect(() => {
  //   DeliverData();
  // }, [])

  if (delivercode?.length > 0) {
    const matchCode = delivercode.find((dt) => dt.apiPinCode === pincode)

    if (matchCode) {
      alert("delivery  avaiable on this pincode");
    } else {
      alert("delivery not avaiable on this pincode ")
    }
  }

//image zoom 
  const handleMouseEnter = (event) => {
    // Apply zoom effect by scaling up the image on mouse enter
    event.target.style.transform = 'scale(2.1)'; // You can adjust the scale value to control the zoom level
  };

  const handleMouseLeave = (event) => {
    // Reset the transform property on mouse leave to remove the zoom effect
    event.target.style.transform = 'scale(1)';
  };







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
// related product api
  const relatedtProduct = async () => {
    const { data } =await axios.get('https://admin.organicdeal.in/api/ProductAPI/HotDetails');
    setRelatedProduct(data.HotDeals)
    
  }

 





  const getProduct1 = () => {
    fetch(`https://admin.organicdeal.in/api/ProductAPI/GetProductDetail?productId=${Id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('res error')
        }
      })
      .then(data => {
 
        setProduct(data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getProduct1()
    relatedtProduct()
  }, [relatedProduct],[product])

  const toggle = () => {
    setOPen(!open);
  };


  const decrementQuantity1 = (Id) => {
    dispatch(decrementQuantity(Id))
  };

  const incrementQuantity1 = (Id) => {
    dispatch(incrementQuantity(Id))
  };

  const handelAdd = (item) => {
    dispatch(addToCart(item));
  }





  return (
    <>
      <div className="breadcrumb-main ">
        <div className="">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <h2>product</h2>
                  <ul>
                    <li>
                      <a href="/">home</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />
                    </li>
                    <li>
                      <a href="#">product</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="section-big-pt-space b-g-light">
        <div className="collection-wrapper">
          <div className="custom-container">
            <div className="row">
              <div className="col-sm-3 collection-filter">
                <div className="collection-filter-block creative-card creative-inner">
                  <div className="collection-mobile-back">
                    <span className="filter-back">
                      <i className="fa fa-angle-left" aria-hidden="true" />
                      back
                    </span>
                  </div>
                  <div className="collection-collapse-block open">
                    <h3 className="collapse-block-title mt-0" onClick={() => setBrand1(!brand1)}>brand</h3>
                    <div className="collection-collapse-block-content">
                      {brand1 && <div className="collection-brand-filter">
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
                </div>
                <div className="collection-filter-block creative-card creative-inner">
                  <div className="product-service">
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -117 679.99892 679"
                      >
                        <path
                          d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"
                          fill="#ff4c3b"
                        />
                      </svg>
                      <div className="media-body">
                        <h4>free shipping</h4>
                        <p>free shipping world wide</p>
                      </div>
                    </div>
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 480 480"
                        style={{ enableBackground: "new 0 0 480 480" }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z"
                                fill="#ff4c3b"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div className="media-body">
                        <h4>24 X 7 service</h4>
                        <p>online service for new customer</p>
                      </div>
                    </div>
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -14 512.00001 512"
                      >
                        <path
                          d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"
                          fill="#ff4c3b"
                        />
                        <path
                          d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"
                          fill="#ff4c3b"
                        />
                        <path
                          d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"
                          fill="#ff4c3b"
                        />
                        <path
                          d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"
                          fill="#ff4c3b"
                        />
                        <path
                          d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"
                          fill="#ff4c3b"
                        />
                        <path
                          d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"
                          fill="#ff4c3b"
                        />
                      </svg>
                      <div className="media-body">
                        <h4>festival offer</h4>
                        <p>new online special festival offer</p>
                      </div>
                    </div>
                    <div className="media border-0 m-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z"
                                fill="#ff4c3b"
                              />
                              <path
                                d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z"
                                fill="#ff4c3b"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div className="media-body">
                        <h4>online payment</h4>
                        <p>Contrary to popular belief.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="theme-card creative-card creative-inner">
                  <h5 className="title-border">new product</h5>
                  <div className="slide-1">
                    <div>
                      <div className="media-banner plrb-0 b-g-white1 border-0">
                        <div className="media-banner-box">


                          <div className="media">
                            <a href="#" tabIndex={0}>

                            </a>
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
                                      <p>

                                      </p>
                                    </a>
                                    <h6>

                                      <span>$55.21</span>
                                    </h6>
                                  </div>
                                  <div className="cart-info">
                                    <Tooltip title="Add to Cart" arrow placement="right">
                                      <button
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
                                      href="#"
                                      className="add-to-wish tooltip-top"
                                      data-tippy-content="Add to Wishlist"
                                    >
                                      <i
                                        data-feather="heart"
                                        className="add-to-wish"
                                      />
                                    </a>
                                    <a
                                      href="#"
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

              </div>
              <div className="col-lg-9 col-sm-12 col-xs-12">
                <div className="container-fluid">

                  <div className="row  ">

                    <div className="col-lg-5">
                      <>

                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide carousel-fade"
                          data-mdb-ride="carousel"
                        >



                          {<div className="carousel-inner mb-5 zoom-image-container">
                            <div className="carousel-item active">
                              <img
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                                className="d-block w-100 h-96 zoom-image"
                                alt="img"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                                className="d-block w-100 h-96 zoom-image"
                                alt="img"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                                className="d-block w-100 h-96 zoom-image"
                                alt=""
                              />
                            </div>
                          </div>
                          }



                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide="prev"
                          >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-mdb-target="#carouselExampleIndicators"
                            data-mdb-slide="next"
                          >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                          </button>
                          {/* Controls */}
                          {/* Thumbnails */}

                          {<div className="carousel-indicators gap-2" style={{ marginBottom: "-120px" }}>

                            <button
                              type="button"
                              data-mdb-target="#carouselExampleIndicators"
                              data-mdb-slide-to={1}
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                              style={{ width: 100 }}
                            >
                              <img
                                
                                className="d-block w-100 "
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                              />
                            </button>
                            <button
                              type="button"
                              data-mdb-target="#carouselExampleIndicators"
                              data-mdb-slide-to={1}
                              aria-label="Slide 2"
                              style={{ width: 100 }}
                            >
                              <img
                                className="d-block w-100 h-20 "
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                              />
                            </button>
                            <button
                              type="button"
                              data-mdb-target="#carouselExampleIndicators"
                              data-mdb-slide-to={2}
                              aria-label="Slide 3"
                              style={{ width: 100 }}
                            >
                              <img
                                className="d-block w-100 h-20 "
                                src={`https://organicdeal.in/Images/${product.ProductImage}`}
                              />
                            </button>

                          </div>
                          }


                        </div>
                      </>
                    </div>

                    <div className="col-lg-7 ">
                      <div className="product-right ">
                        { <div className="pro-group crouselPosition">  
                          <h2>{product.ProductName}</h2>
                          <ul className="pro-price">
                            <li>{product.Price}</li>
                            <li>
                              <span>mrp {product.OurPrice}</span>
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
                            <Link to="/review">
                              <span>(6 reviews)</span>
                            </Link>
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
                                  <circle
                                    cx={64}
                                    cy="45.848"
                                    fill="#4ec4b5"
                                    r="29.146"
                                  />
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
                        </div>}
                        <div className="pro-group">
                          <h6 className="product-title">hurry up ! Deal end in :</h6>
                          {<p>{product.IsStocks}</p>}
                          <div className="timer">
                            <p id="demo"></p>
                          </div>
                        </div>
                        <div
                          id="selectSize"
                          className="pro-group addeffect-section product-description border-product"
                        >
                          <h6 className="product-title ">
                            select Quantity

                          </h6>

                          <h6 className="error-message">please select size</h6>
                          <div className="size-box">
                            <ul>
                              <li>
                                {product.Quantity}{product.Metrics}
                              </li>





                            </ul>
                          </div>

                          <h6 className="product-title">quantity</h6>
                          <div className="qty-box">
                            <div className="input-group">
                              <button className="qty-minus" onClick={() => dispatch(decrementQuantity1(product.Id))} />
                              <input
                                className="qty-adj form-control"
                                type="text"
                                defaultValue={1}
                              />
                              <button className="qty-plus" onClick={() => dispatch(incrementQuantity1(product.Id))} />
                            </div>
                          </div>
                          <div className="product-buttons space-x-2">
                            <a
                              onClick={() => handelAdd(product)}
                              id="cartEffect"
                              className="btn cart-btn btn-normal tooltip-top"
                              data-tippy-content="Add to cart"
                            >
                              <i className="fa fa-shopping-cart" />
                              add to cart
                            </a>
                            <a
                              href="#"
                              className="btn btn-normal add-to-wish tooltip-top"
                              data-tippy-content="Add to wishlist"
                            >
                              <i className="fa fa-heart" aria-hidden="true" />
                            </a>
                            {/* <button className='ml-2 w-28  font-bold text-white bg-orange-500' style={{ padding: "11px" }}>Buy Now</button> */}
                          </div>
                        </div>
                        <div className="pro-group">
                          <h6 className="product-title">delivery location</h6>
                          <div className="delivery-detail">
                            <div className="delivery-detail-contian">
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="ti-location-pin" />
                                </span>
                                <input
                                  onChange={(e) => setPinCode(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  maxLength={6}
                                  minLength={6}
                                  placeholder="Enter Pincode for delivery"
                                />
                              </div>
                              <button type='button'
                                style={{ padding: "12px" }}
                                className=" ml-2 w-28 rounded-md font-bold text-white bg-orange-500 "
                              >
                                check
                              </button>
                            </div>
                            <div className="delivery-lable">
                              <svg
                                enableBackground="new 0 0 512 512"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <g>
                                    <path
                                      d="m412.65 107.667h-80.65v148.333l180-21.056v-.108z"
                                      fill="#cce6ff"
                                    />
                                    <path
                                      d="m332 234.944h180v158.722h-180z"
                                      fill="#cc295f"
                                    />
                                  </g>
                                  <g>
                                    <path
                                      d="m356.333 65h-170.065l-15.601 159 15.601 169.667h170.065z"
                                      fill="#fdae02"
                                    />
                                    <path
                                      d="m0 393.667h186.268v-148.334l-186.267 20.334z"
                                      fill="#fdcb02"
                                    />
                                    <path
                                      d="m0 65 .001 96 186.267 20.333v-116.333z"
                                      fill="#fdcb02"
                                    />
                                    <path
                                      d="m235.314 265.667 29.905-104.667h-78.951l-15.601 52.333 15.601 52.334z"
                                      fill="#cc295f"
                                    />
                                    <path
                                      d="m.001 161h186.267v104.666h-186.267z"
                                      fill="#ff4d4d"
                                    />
                                  </g>
                                  <g>
                                    <circle
                                      cx="122.667"
                                      cy={384}
                                      fill="#f9f9f9"
                                      r={48}
                                    />
                                    <path
                                      d="m122.667 447c-34.738 0-63-28.262-63-63s28.262-63 63-63 63 28.262 63 63-28.262 63-63 63zm0-96c-18.196 0-33 14.804-33 33s14.804 33 33 33 33-14.804 33-33-14.804-33-33-33z"
                                      fill="#29376d"
                                    />
                                  </g>
                                  <g>
                                    <circle
                                      cx="389.333"
                                      cy={384}
                                      fill="#eaf1ff"
                                      r={48}
                                    />
                                    <path
                                      d="m389.333 447c-34.738 0-63-28.262-63-63s28.262-63 63-63 63 28.262 63 63-28.261 63-63 63zm0-96c-18.196 0-33 14.804-33 33s14.804 33 33 33 33-14.804 33-33-14.803-33-33-33z"
                                      fill="#23305b"
                                    />
                                  </g>
                                </g>
                              </svg>
                              Order within 12 hrs
                            </div>
                          </div>
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

                        <div className="pro-group">
                          <h6 className="product-title">product infomation</h6>
                          {<p>
                            {product.ProductDescription}
                          </p>}
                        </div>
                        <div className="pro-group">
                          <h6 className="product-title">Delivery option</h6>
                          <ul className="delivery-services">
                            <li>
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path d="M466.244,257.845l-58.193-86.841H300v-120H0v364.992h61.899c6.678,25.849,30.195,45,58.101,45s51.424-19.151,58.101-45h155.797c6.678,25.849,30.195,45,58.101,45s51.424-19.151,58.101-45H512V269.284L466.244,257.845z M135,81.003h30v60h-30V81.003z M120,430.995c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S136.542,430.995,120,430.995z M270,385.995h-91.899c-6.677-25.849-30.195-45-58.101-45s-51.424,19.151-58.101,45H30v-75h240V385.995z M270,280.995H30V81.003h75v90h90v-90h75V280.995z M392,430.995c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S408.542,430.995,392,430.995z M482,385.995h-31.899c-6.678-25.849-30.195-45-58.101-45s-51.424,19.151-58.101,45H300V201.003h92.041l55.715,83.143L482,292.707V385.995z" />
                                  </g>
                                </g>
                              </svg>
                              free shipping
                            </li>
                            <li>
                              <svg
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m410 0c8.285156 0 15 6.714844 15 15v199.027344c52.363281 26.195312 87 79.976562 87 140.722656 0 86.84375-70.40625 157.25-157.25 157.25-60.746094 0-114.527344-34.636719-140.722656-87h-199.027344c-8.285156 0-15-6.714844-15-15v-395c0-8.285156 6.714844-15 15-15zm-126 30v84.0625c0 10.785156-11.507812 19.085938-22.746094 12.84375l-48.753906-24.773438-49.761719 25.289063c-9.988281 5.058594-21.710937-2.324219-21.703125-13.359375l-.035156-84.0625h-111v365h172.703125c-14.519531-54.976562 1.808594-112.394531 40.855469-151.441406s96.464844-55.375 151.441406-40.855469v-172.703125zm23 391h69.996094c15.984375 0 30.488281-6.511719 40.988281-17.015625 11.039063-11.035156 17.015625-25.332031 17.015625-41.980469 0-31.96875-26.035156-58.003906-58.003906-58.003906h-41.683594l8.804688-8.820312c13.871093-13.953126-7.339844-35.042969-21.210938-21.09375l-34.402344 34.464843c-5.824218 5.855469-5.800781 15.328125.058594 21.152344l34.46875 34.402344c13.949219 13.871093 35.042969-7.339844 21.09375-21.210938l-8.914062-8.894531h41.785156c16.242187 0 28.003906 12.984375 28.003906 28.996094 0 15.40625-12.597656 28.003906-28.003906 28.003906h-69.996094c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm-42.230469-156.230469c-49.691406 49.695313-49.691406 130.269531 0 179.960938 49.695313 49.695312 130.269531 49.695312 179.960938 0 49.695312-49.691407 49.695312-130.265625 0-179.960938-49.691407-49.691406-130.269531-49.691406-179.960938 0zm-10.769531-234.769531h-83v59.65625l34.726562-17.648438c4.097657-2.078124 9.09375-2.246093 13.511719-.019531l34.761719 17.667969zm0 0"
                                  fillRule="evenodd"
                                />
                              </svg>
                              10 Days Returnable
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="-38 0 512 512.00142"
                              >
                                <g id="surface1">
                                  <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 384.773438 331.523438 C 358.414062 402.992188 304.605469 452.074219 220.273438 481.566406 C 219.972656 481.667969 219.652344 481.757812 219.320312 481.824219 C 218.449219 481.996094 217.5625 481.996094 216.679688 481.820312 C 216.351562 481.753906 216.03125 481.667969 215.734375 481.566406 C 131.3125 452.128906 77.46875 403.074219 51.128906 331.601562 C 28.09375 269.097656 29.398438 200.519531 30.550781 140.019531 L 30.558594 139.683594 C 30.792969 134.484375 30.949219 129.039062 31.035156 123.054688 C 31.222656 110.519531 41.207031 100.148438 53.765625 99.449219 C 87.078125 97.589844 116.34375 91.152344 143.234375 79.769531 C 170.089844 68.402344 193.941406 52.378906 216.144531 30.785156 C 217.273438 29.832031 218.738281 29.828125 219.863281 30.785156 C 242.070312 52.378906 265.921875 68.402344 292.773438 79.769531 C 319.664062 91.152344 348.929688 97.589844 382.246094 99.449219 C 394.804688 100.148438 404.789062 110.519531 404.972656 123.058594 C 405.0625 129.074219 405.21875 134.519531 405.453125 139.683594 C 406.601562 200.253906 407.875 268.886719 384.773438 331.523438 Z M 384.773438 331.523438 " />
                                  <path d="M 217.996094 128.410156 C 147.636719 128.410156 90.398438 185.652344 90.398438 256.007812 C 90.398438 326.367188 147.636719 383.609375 217.996094 383.609375 C 288.351562 383.609375 345.59375 326.367188 345.59375 256.007812 C 345.59375 185.652344 288.351562 128.410156 217.996094 128.410156 Z M 217.996094 353.5625 C 164.203125 353.5625 120.441406 309.800781 120.441406 256.007812 C 120.441406 202.214844 164.203125 158.453125 217.996094 158.453125 C 271.785156 158.453125 315.546875 202.214844 315.546875 256.007812 C 315.546875 309.800781 271.785156 353.5625 217.996094 353.5625 Z M 217.996094 353.5625 " />
                                  <path d="M 254.667969 216.394531 L 195.402344 275.660156 L 179.316406 259.574219 C 173.449219 253.707031 163.9375 253.707031 158.070312 259.574219 C 152.207031 265.441406 152.207031 274.953125 158.070312 280.816406 L 184.78125 307.527344 C 187.714844 310.460938 191.558594 311.925781 195.402344 311.925781 C 199.246094 311.925781 203.089844 310.460938 206.023438 307.527344 L 275.914062 237.636719 C 281.777344 231.769531 281.777344 222.257812 275.914062 216.394531 C 270.046875 210.523438 260.535156 210.523438 254.667969 216.394531 Z M 254.667969 216.394531 " />
                                </g>
                              </svg>
                              1 Year Warranty
                            </li>
                          </ul>
                        </div>
                        <div className="pro-group pb-0 flex space-x-2">
                          <h6 className="product-title mt-1">share</h6>
                          <ul className="product-social">
                            <li>
                            <a href="https://www.facebook.com/organicdeal.in" target="_blank">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/ndorganicdeal" target="_blank">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/organicdeal.in" target="_blank">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                          
                          </ul>
                          {<div className='flex space-x-2'>
                            <span className='text-xl font-bold text-orange-600 mt-1'>Vender Name :</span>
                            <p className='text-black mt-1 text-xl'>{product.VendorName}</p>
                          </div>}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <section className="tab-product tab-exes creative-card creative-inner">
                  <div className="row">
                    <div className="col-sm-12 col-lg-12">
                      <ul
                        className="nav nav-tabs nav-material"
                        id="top-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="top-home-tab"
                            data-bs-toggle="tab"
                            href="#top-home"
                            role="tab"
                            aria-selected="true"
                          >
                            <i className="icofont icofont-ui-home" />
                            Description
                          </a>
                          <div className="material-border" />
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-top-tab"
                            data-bs-toggle="tab"
                            href="#top-profile"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icofont icofont-man-in-glasses" />
                            Details
                          </a>
                          <div className="material-border" />
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-top-tab"
                            data-bs-toggle="tab"
                            href="#top-contact"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icofont icofont-contacts" />
                            Video
                          </a>
                          <div className="material-border" />
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="review-top-tab"
                            data-bs-toggle="tab"
                            href="#top-review"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icofont icofont-contacts" />
                            Write Review
                          </a>
                          <div className="material-border" />
                        </li>
                      </ul>
                      <div className="tab-content nav-material" id="top-tabContent">

                        <div
                          className="tab-pane fade show active"
                          id="top-home"
                          role="tabpanel"
                          aria-labelledby="top-home-tab"
                        >
                          {<p>
                            {product.ProductDescription}
                          </p>}

                        </div>



                        <div
                          className="tab-pane fade"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="profile-top-tab"
                        >
                          {<p className="pl-0">
                            {product.ProductDescription}
                          </p>}

                          <div className="single-product-tables">
                            <table>
                              <tbody>
                                {<tr>
                                  <td>Product Type:</td>
                                  <td>{product.CategoryName}</td>
                                </tr>}
                                <tr>
                                  <td>Color</td>
                                  <td>Brown</td>
                                </tr>
                                {<tr>
                                  <td>Weight</td>
                                  <td>{product.Metric_Id} kg</td>
                                </tr>}
                              </tbody>
                            </table>

                          </div>
                        </div>


                        <div
                          className="tab-pane fade"
                          id="top-contact"
                          role="tabpanel"
                          aria-labelledby="contact-top-tab"
                        >
                          <div className="mt-3 text-center">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${product.VideoLink}`} title="YouTube video player" frameBorder="0" allow="autoplay; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowFullScreen"></iframe>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="top-review"
                          role="tabpanel"
                          aria-labelledby="review-top-tab"
                        >
                          <form className="theme-form">
                            <div className="row">
                              <div className="col-md-12 d-flex">
                                <div className="rounded-full">
                                  <label htmlFor="name">Name</label>
                                  <input
                                    type="file"
                                    className="form-control"

                                    placeholder="Upload Image"
                                    required=""
                                  />
                                </div>
                                <div className="media">
                                  <label>Rating</label>
                                  <div className="media-body ms-3">
                                    <div className="rating three-star">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter Your name"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6">
                                <label>Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                  required=""
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Review Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your Review Subjects"
                                  required=""
                                />
                              </div>
                              <div className="col-md-12">
                                <label>Review Title</label>
                                <textarea
                                  className="form-control"
                                  placeholder="Wrire Your Testimonial Here"
                                  id="exampleFormControlTextarea1"
                                  rows={6}
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-md-12">
                                <button className="bg-orange-500 text-white p-2 rounded-sm" type="button">
                                  Submit Your Review
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-big-py-space  ratio_asos b-g-light">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 product-related">
              <h2>related products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 product">
              <div className="product-slide-6 product-m no-arrow">
                <div className="row">
                  {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 "> */}
                  <Slider {...sliderSettings}>
                    {relatedProduct?.map((item, index) => {

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
      </section>






    </>
  )
}

export default ViewDetails

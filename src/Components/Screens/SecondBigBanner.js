import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SecondBigBanner() {
  const [secondBanner, setSecondBanner] = useState([])
  useEffect(() => {
    axios.get('https://admin.organicdeal.in/api/ProductBrandApi/BrandImages')
  
      .then((response) => {
        setSecondBanner(response.data);
      })
  }, [])
  return (
    <>
    <div className="col-12">
              <div className="row">
              {secondBanner.map((item, index) => {
                    console.log(item);
                    return (
                <div className="col-md-4 mt-2">
                  <div className="collection-banner-main p-left  banner-13 banner-style8 text-center">
                    <div className="collection-img">
                      <img
                        src="https://organicdeal.in/Images/20211161340369309303693093093036930930930.jpg"
                        className="img-fluid bg-img  "
                        alt="banner"
                      />
                    </div>
                    <div className="collection-banner-contain ">
                      <div>
                        <h3>best offer</h3>
                        <h4>new dry foods</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}
              </div>
            </div>
    </>
  )
}

export default SecondBigBanner

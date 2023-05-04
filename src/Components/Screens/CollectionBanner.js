import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"



function CollectionBanner() {
  const [collection, setCollection] = useState([])
  useEffect(() => {
    axios.get('https://admin.organicdeal.in/api/VendorApi/GetCategory')
      .then((response) => {
        setCollection(response.data);
      })
  }, [])



  return (
    <>
     
      <section className="category2 section-mt-space">
        <div className="custom-container">
        <div className="d-lg-block d-xl-none h2">category</div>
          <div className="row">
            <div className="col-12 pr-0">
              <div className="category-slide6 no-arrow">
             
                <div className=" flex items-center justify-center">
                  
               
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
                  
                      {collection.map((item, index) => {
                        console.log(item);
                        return (
                          <div >
                            <a href="#" >
                              <div className="category-boxp-4 " >
                                <div >
                                  <div className="rounded-t"style={{border:"4px solid black"}} >
                                  <Link to={`/categorypage/${item.Id}`}>
                                      <img
                                        src={`https://admin.organicdeal.in/Images/${item.CategoryImage}`}
                                        alt="img1"
                                        className='w-64 h-20  '
                                      />
                                    </Link>
                                  </div>
                                  <div className="category-details">
                                    <h6 className=' flex justify-center text-sm font-bold bg-black text-white rounded-b'>{item.CategoryName}</h6>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        )
                      })}
                      
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

export default CollectionBanner



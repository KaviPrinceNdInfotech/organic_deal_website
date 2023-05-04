import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';

function LatestBlog() {
    const [latestblog, setLatestBlog] = useState([])
    useEffect(() => {
        axios.get('https://testimonialapi.toolcarton.com/api')
            .then((response) => {
                setLatestBlog(response.data);
            })
    }, [])
    return (
        <>

            <div className="title8  section-big-pt-space ">
                <h4>letest blog</h4>
            </div>

            <section className="blog  section-big-pb-space">
                <div className="custom-container">
                    <div className="row ">
                        <div className="col pr-0  ">
                            <div className="blog-slide-4 no-arrow  ">
                           
                                <div className='grid grid-cols-1 gap-2 md:grid-cols-3 '>
                                 {latestblog.map((item,index) => {
                                    console.log(item);
                                   return (
                                   
                                 <div className='border border-green-400'>
                                 
                          
                                    <div className="blog-contain">
                               
                                        
                                        <div className="blog-img">
                                            
                                            <a href="blog-details.html">
                                                <img
                                                    src="../assets/images/grocery/blog/1.jpg"
                                                    alt="blog"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-details-2 text-center">
                                            <a href="blog-details.html">
                                                <h4>This Is Why Spices. </h4>
                                            </a>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur eleifend a massa rhoncus gravida.
                                            </p>
                                            <Link to="/blog" className="btn btn-rounded  btn-xs" style={{background: "linear-gradient(to right, #e17200 , #205403)"}}>
                                                read more
                                            </Link>
                                        </div>
                                        <div className="blog-label1" style={{background: "linear-gradient(to right, #e17200 , #205403)"}}>
                                            27 <br />
                                            nov
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
            </section>
        </>
    )
}

export default LatestBlog



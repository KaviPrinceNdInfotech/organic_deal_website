import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"


function Blog() {
  const [blog, setBlog] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/Blog');
    setBlog(data.result);
  }
  

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="breadcrumb-main ">
        <div className="">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <h2>blog</h2>
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />
                    </li>
                    <li>
                      <Link to="/blog">blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-big-py-space blog-page ratio2_3">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              {blog?.map((item, index) => {
                console.log(item);
                return (
                  <div className="row blog-media">
                    <div className="col-xl-6 ">
                      <div className="blog-left">
                        <a href="#">
                          <img
                          src={`https://admin.organicdeal.in/BlogImages/${item.BlogImage}`}
                           
                            className="img-fluid  "
                            alt="blog"
                          />
                        </a>
                        <div className="date-label" style={{ background: "linear-gradient(#205403, #e17200)" }}>{item.Date}</div>
                      </div>
                    </div>
                    <div className="col-xl-6 ">
                      <div className="blog-right">
                        <div>
                          <a href="#">
                            <h4>
                              {item.Short}
                            </h4>{" "}
                          </a>
                          <ul className="post-social">
                            <li>Posted By : Admin Admin</li>
                            <li>
                              <i className="fa fa-heart" /> 5 Hits
                            </li>
                            <li>
                              <i className="fa fa-comments" /> 10 Comment
                            </li>
                          </ul>
                          <p>
                            {item.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog

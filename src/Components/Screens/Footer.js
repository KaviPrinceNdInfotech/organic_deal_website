import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="px-4 py-4">
            <div className="row">
              <div className="col-12">
                <div className="footer-main">
                  <div className="footer-box">
                    <div className="footer-title mobile-title">
                      <h5>about</h5>
                    </div>
                    <div className="footer-contant">
                      <div className="footer-logo">
                        <Link to="/">
                          <img
                            src="../assets/images/grocery/logo1.png"
                            className="img-fluid"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <p>
                        In this era where people are taking away the goodness of nature, we aim to help them live a healthier, better, and wholesome life by providing them with 100% organic, certified, and authentic food.
                      </p>
                      <ul className="sosiyal">
                        <li style={{ background: "linear-gradient(#205403, #e17200)" }}>
                          <a href="https://www.facebook.com/organicdeal.in" target="_blank">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li style={{ background: "linear-gradient(#205403, #e17200)" }}>
                          <a href="j#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li style={{ background: "linear-gradient(#205403, #e17200)" }}>
                          <a href="https://twitter.com/ndorganicdeal" target="_blank">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li style={{ background: "linear-gradient(#205403, #e17200)" }}>
                          <a href="https://www.instagram.com/organicdeal.in" target="_blank">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>my account</h5>
                    </div>
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link to="/checkout">about us</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contactus">contact us</Link>
                        </li>
                        <li>
                          <a href="j#">terms &amp; conditions</a>
                        </li>
                        <li>
                          <Link to="/return">returns &amp; exchanges</Link>
                        </li>
                        <li>
                          <a href="j#">shipping &amp; delivery</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>quick link</h5>
                    </div>
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <a href="j#">store location</a>
                        </li>
                        <li>
                          <Link to="/privacypolicy">privacy&Policy</Link>
                        </li>
                        <li>
                          <a href="j#"> my account</a>
                        </li>
                        <li>
                          <a href="j#"> orders tracking</a>
                        </li>
                        <li>
                          <Link to="/faq">FAQ </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-box">
                    <div className="footer-title">
                      <h5>contact us</h5>
                    </div>
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker" />
                          Organic Deal  <br /> india-<span>9716412565</span>
                        </li>
                        <li>
                          <i className="fa fa-phone" />
                          call us: <span>8826302378</span>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o" />
                          email us: info@organicdeal.in
                        </li>
                        <li>
                          <i className="fa fa-fax" />
                          landline <span>01204267194</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter footer-border">
          <div className="px-2 py-2">
            <div className="row">
              <div className="col-xl-6 col-md-8 col-sm-12">
                <div className="footer-left">
                  <p>2022-23  Powered by Nd infotech</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-4 col-sm-12">
                <div className="footer-right">
                  <ul className="payment">
                    <li>
                      <a href="j#">
                        <img
                          src="../assets/images/layout-1/pay/1.png"
                          className="img-fluid"
                          alt="pay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="j#">
                        <img
                          src="../assets/images/layout-1/pay/2.png"
                          className="img-fluid"
                          alt="pay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="j#">
                        <img
                          src="../assets/images/layout-1/pay/3.png"
                          className="img-fluid"
                          alt="pay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="j#">
                        <img
                          src="../assets/images/layout-1/pay/4.png"
                          className="img-fluid"
                          alt="pay"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="j#">
                        <img
                          src="../assets/images/layout-1/pay/5.png"
                          className="img-fluid"
                          alt="pay"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer

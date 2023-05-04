import React from 'react'
import {Link} from "react-router-dom"

function Contactus() {
  return (
   <>
   <>
  <div className="breadcrumb-main ">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <h2>contact</h2>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <i className="fa fa-angle-double-right" />
                </li>
                <li>
                  <Link to="/contactus">ContactUs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
  {/*section start*/}
  <section className="contact-page section-big-py-space b-g-light">
    <div className="custom-container">
      <div className="row section-big-pb-space">
        <div className="col-xl-6 offset-xl-3">
          <h3 className="text-center mb-3">Get in touch</h3>
          <form className="theme-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="review">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="review"
                    placeholder="Enter your number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <label>Write Your Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Write Your Message"
                    rows={2}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn btn-normal" type="submit">
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 map">
          <div className="theme-card">
            <iframe
              src="https://goo.gl/maps/SWvk9hW46GaDscF46"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Section ends*/}
</>

   </>
  )
}

export default Contactus

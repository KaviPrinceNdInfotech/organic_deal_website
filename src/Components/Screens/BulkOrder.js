import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'



function BulkOrder() {
  const [Fullname, setFullname] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Message, setMessage] = useState("");

  const BulkOrder = async () => {
    console.log(BulkOrder)
    const BulkRegister = {
      Fullname, CompanyName, Phone, Email, Address, City, State, Pincode, Message

    }

    const bulk = await axios.post("https://admin.organicdeal.in/api/Customerapi/Bulkorder", BulkRegister);

    if (bulk.status === 200) {
      setFullname("")
      setCompanyName("")
      setPhone("")
      setEmail("")
      setAddress("")
      setCity("")
      setState("")
      setPincode("")
      setMessage("")

    }
  }
  return (
    <div>
      <>
        <div className="breadcrumb-main ">
          <div className="">
            <div className="row">
              <div className="col">
                <div className="breadcrumb-contain">
                  <div>

                    <ul>
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right" />
                      </li>
                      <li>
                        <div>Bulk Order Here</div>
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
                {/* <h3 className="text-center mb-3">Get in touch</h3> */}
                <form className="theme-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          value={Fullname} onChange={(e) => setFullname(e.target.value)}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Full name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Company Name</label>
                        <input
                          value={CompanyName} onChange={(e) => setCompanyName(e.target.value)}
                          type="text"
                          className="form-control"
                          id="last-name"
                          placeholder="Company Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="review">Phone number</label>
                        <input
                          value={Phone} onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          className="form-control"

                          placeholder="Enter your number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={Email} onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="review">Address</label>
                        <input
                          value={Address} onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          className="form-control"

                          placeholder="Enter your Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          value={City} onChange={(e) => setCity(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="City"
                          required=""
                        />
                      </div>

                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="review">State</label>
                        <input
                          value={State} onChange={(e) => setState(e.target.value)}
                          type="text"
                          className="form-control"

                          placeholder="State"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Zip Code</label>
                        <input
                          value={Pincode} onChange={(e) => setPincode(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Zip Code"
                          required=""
                        />
                      </div>

                    </div>
                    <div className="col-md-12">
                      <div>
                        <label>Write Your Message</label>
                        <textarea
                          value={Message} onChange={(e) => setMessage(e.target.value)}
                          className="form-control"
                          placeholder="Write Your Message"
                          rows={2}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className=" p-2 w-48 rounded-md text-white bg-green-800" type="button" disabled={!Fullname} onClick={(e) => BulkOrder()}>
                        Order Here
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Section
   */}
      </>


    </div>
  )
}

export default BulkOrder

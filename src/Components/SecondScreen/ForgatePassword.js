import React from 'react'
import {Link} from "react-router-dom"

function ForgatePassword() {
  return (
    <>
    <div className="breadcrumb-main ">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumb-contain">
              <div>
                <h2>forget password</h2>
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right" />
                  </li>
                  <li>
                    <Link to="/forgatepassword">forget password</Link>
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
    <section className="login-page pwd-page section-big-py-space b-g-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="theme-card">
              <h3>Forget Your Password</h3>
              <form className="theme-form">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-0">
                      <a href="javascript:void(0)" className="btn btn-normal">
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default ForgatePassword

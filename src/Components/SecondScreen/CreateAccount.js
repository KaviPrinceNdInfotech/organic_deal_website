import React, { useState, useEffect } from "react";
import { Link,useNavigate  } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import Signin from '../Screens/Signin'





function CreateAccount() {
  const navigate = useNavigate();
  const [FullName, setFullName] = useState("");
  const [Email_id, setEmail_id] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [Otp, setOtp] = useState("");


  const handelRegOtp = () => {
    setToggle(true);

    axios.post("https://admin.organicdeal.in/api/Customerapi/Registration",
      {
        FullName: FullName,
        Phone: Phone,
        Email_id: Email_id,
        password: password
      }).then(result => {
       
       
        toast.success("Otp send Successfully", {
          position: "top-right",
        });
      })

  }
  const handleMobileLogin = () => {
    if (Otp) {
      axios.post("https://admin.organicdeal.in/api/Customerapi/OtpVerifywithRegistration", { Otp: Otp }).then(result => {
        console.log(result, "???????????????????")
        navigate("/")
        setFullName("")
        setEmail_id("")
        setPhone("")
        setPassword("")
        setOtp("")
   
        toast.success("Registration complete Successfully", {
          position: "top-right",
        });
      })
    }
  }




  const [toggle, setToggle] = useState("");
  const [View1, setView1] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);


  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const toggleView1 = () => {

    setView1(!View1);
  };
  const handleOtp = () => {
    setToggle(true);
  }


  return (

    <>

      <div className="breadcrumb-main ">
        <div className="">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-contain">
                <div>
                  <h2>register</h2>
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />
                    </li>
                    <li>
                      <Link to="/createaccount">register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-page section-big-py-space b-g-light">
        <div className="custom-container">
          <div className="row section-big-pb-space">
            <div className="col-xl-6 offset-xl-3">
              <h3 className="text-center mb-3">Create Account Here</h3>
              <form className="theme-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"

                        placeholder="Enter Your name"
                        required=""
                        value={FullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="review">Phone number</label>

                      <input
                        type="text"
                        className="form-control"

                        placeholder="Enter your 10 digit mobile number"
                        required=""
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <p className="text-green-900">* Valid number is require</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="review">Email</label>
                      <input
                        type="text"
                        className="form-control"

                        placeholder="Enter your Email id"
                        required=""
                        value={Email_id}
                        onChange={(e) => setEmail_id(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12" >
                    <div className="form-group">
                      <label >Create Password</label>
                      <div className="flex">
                        <input
                          type={View1 ? "text" : "password"}

                          className="form-control"

                          placeholder="password"
                          required=""
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={toggleView1} className="-ml-8 ">

                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </button>

                      </div>
                      <p className="text-green-900">* password must be at least 6 digit</p>

                    </div>
                  </div>

                  {toggle && <div className="col-md-12">
                    <div className="form-group">

                      <label htmlFor="review">Enter otp</label>
                      <p className="text-green-900 space-x-2"> * otp send  on your phone number</p>
                      <input
                        type="text"
                        className="form-control"

                        placeholder="Enter 4 digit otp"
                        required=""
                        value={Otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <div className="flex ">


                        <div className="countdown-text flex w-full space-x-2">
                          {seconds > 0 || minutes > 0 ? (
                            <p>
                              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                              {seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                          ) : (
                            <p>Didn't recieve code?</p>
                          )}


                          <button disabled={seconds > 0 || minutes > 0}
                            style={{
                              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                            }}
                            onClick={handleOtp}>Resend OTP</button>
                        </div>
                      </div>

                    </div>
                  </div>}



                  <div className="col-md-12">
                    {toggle ? <button className="btn btn-normal bg-black " type="button" onClick={handleMobileLogin}  >
                      Register Here
                    </button> : <button className="btn btn-normal bg-black " type="button" disabled={!FullName} onClick={handelRegOtp}>
                      Send Otp & Create Account
                    </button>}

                    <div className="row g-3 mt-3">
                      <div className="col-md-12 ">
                        <p>
                          Have you already account?{" "}
                          <Link to="/login" className="txt-default" >
                            click
                          </Link>{" "}
                          here to &nbsp;
                          <Link to="/login">
                          <button type="button" className="txt-default">
                            Login
                          </button>
                          </Link>     
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>  
    </>


  )
}

export default CreateAccount

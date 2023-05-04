import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios";
import {
  MDBTabs, MDBTabsItem, MDBTabsLink,
  MDBTabsContent, MDBTabsPane
} from 'mdb-react-ui-kit';
import "../css/Signin.css"
import icon from "../css/icon.png"

function Login() {
  const navigate = useNavigate();
  const [Email_id, setEmail_id] = useState("");
  const [Password, setPassword] = useState("");
  const [Otp, setOtp] = useState()
  const [mobileNumber, setMobileNumber] = useState()

  const [toggle, setToggle] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const [View11, setView11] = useState(false);
  const [View1, setView1] = useState(false);
  const [id, setID] = useState("");
  const token = localStorage.getItem('token')

  const token1 = localStorage.getItem('ID')
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

  const toggleView11 = () => {

    setView11(!View1);
  };
  





  const toggleView1 = () => {

    setView1(!View1);
  };


  const [basicActive, gfg1] = useState('1');

  const click = (value) => {
    if (value === basicActive) {
      return;
    }

    gfg1(value);
  };



  const handleApi = () => {
    if (Email_id && Password) {
      axios.post("https://admin.organicdeal.in/api/Customerapi/LoginWithEmail", { Email_id: Email_id, Password: Password }).then(result => {
        console.log(result, "handelApi")
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.User_Id)
        localStorage.setItem('Rgx', result.data.Rgx)
        localStorage.getItem('UserId', result.data.UserId)
        navigate("/")
        setEmail_id("")
        setPassword("")
        toast.success("Login successfully", {
          position: "top-left",
        })
      }).catch((err) => {
        console.log(err)
        toast.error("wrong Email and Password", {
          position: "top-left",
        });
      })
    }

  }


  const handleOtpp = () => {
    setToggle(true);

    axios.post("https://admin.organicdeal.in/api/Customerapi/LoginMobileOrEmail", { MobileOrEmail: mobileNumber }).then(result => {
      console.log(result, "handleOtp")
      // alert(result.data.message)
      localStorage.getItem('UserId', result.data.UserId)
      localStorage.setItem("loginToken", result.data.token)
      localStorage.setItem("ID", result.data.User_Id)
      localStorage.setItem('Rgx', result.data.Rgx)

      toast.success("Otp send Successfully", {
        position: "top-left",
      });

    }).catch((err) => {
      console.log(err)
      toast.error("Otp Not Send", {
        position: "top-left",
      });
    })


  }
  const handleMobileLogin = () => {
    if (Otp) {
      axios.post("https://admin.organicdeal.in/api/Customerapi/MobileOrEmailOtpVerify", { Otp: Otp }).then(result => {
        console.log(result, "???????????????????")
        // alert(result.data.Message)
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.User_Id)
        localStorage.setItem('Rgx', result.data.Rgx)
        localStorage.getItem('UserId', result.data.UserId)
        navigate("/")
        setOtp("")
        setMobileNumber("")
        toast.success("Login Successfully", {
          position: "top-left",
        });
      }).catch((err) => {
        console.log(err)
        toast.error("invalid otp", {
          position: "top-left",
        });
      })






    }




  }

  return (
    <>

      <section className="h-screen bg-white">
        <div className="h-full">

          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src={icon}
                className="w-full"
                alt="Sample image" />
            </div>


            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>



                <div id='gfg'>

                  <MDBTabs className='  justify-center text-lg text-black h-15 '>
                    <MDBTabsItem className='text-center'>
                      <MDBTabsLink onClick={() => click('1')} className="text-orange-600 font-sm mt-3 border-none"
                        active={basicActive === '1'}>
                        Login With Password
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className='text-center'>
                      <MDBTabsLink onClick={() => click('2')} className="text-orange-600 font-sm mt-3"
                        active={basicActive === '2'}>
                        Login Otp
                      </MDBTabsLink>
                    </MDBTabsItem>

                  </MDBTabs>

                  <MDBTabsContent>
                    <MDBTabsPane show={basicActive === '1'}>

                      <div className="container">
                        <form action="#">
                          <div className="title">Login</div>
                          <div className="input-box underline">
                            <input type="text" placeholder="Enter Your Email"
                              value={Email_id}
                              onChange={(e) => setEmail_id(e.target.value)}
                              required="" />
                            <div className="underline" />
                          </div>
                          <div className="input-box flex">
                            <input type={View1 ? "text" : "password"} placeholder="Enter Your Password"
                              value={Password} onChange={(e) => setPassword(e.target.value)}
                              required="" />
                            <button type="button" onClick={toggleView1}>
                              {View1 === true ? 'Hide' : 'Show'}


                            </button>
                            <div className="underline" />
                          </div>
                          <div className="input-box button">
                            <button type="button" className='bg-orange-500 w-full p-2 rounded-md text-white' disabled={!Email_id} onClick={handleApi} >Login</button>
                          </div>
                          <hr />


                          <hr />
                        </form>
                        <div className="option underline">or Connect With Social Media</div>
                        <div className="twitter">
                          <a href="#">
                            <i class="fab fa-google fa-6x"></i>
                            Sign in With Google
                          </a>
                        </div>
                        <div className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                            Sign in With Facebook
                          </a>

                        </div>
                        <div className="-mt-10 ml-2 underline">New User?<Link to="/createaccount" className='underline ml-1'>Click Here</Link></div>


                      </div>



                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === '2'}>
                      <div className="container mt-4">
                        <form action="#">
                          <div className="title">Login</div>
                          <div className="input-box underline">
                            <input type="text" placeholder="Enter Your Number Or Email" value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)} required="" />
                            <div className="underline" />
                          </div>

                          {toggle && <div className="input-box underline">

                            <input type="text" placeholder="Enter Otp Here " value={Otp}
                              onChange={(e) => setOtp(e.target.value)} required="" />

                            <div className="underline" />
                            <div className="flex mt-2">


                              <div className="countdown-text flex w-full space-x-2">
                                {seconds > 0 || minutes > 0 ? (
                                  <p>
                                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                  </p>
                                ) : (
                                  <p>Didn't recieve code?</p>
                                )}


                                <button type="reset" disabled={seconds > 0 || minutes > 0}
                                  style={{
                                    color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                                  }}
                                  onClick={handleOtpp}>Resend OTP</button>
                              </div>
                            </div>

                          </div>}

                          <div className="input-box button">

                            {toggle ?
                              <button type="button" className='bg-orange-500 w-full p-2 rounded-md text-white ' disabled={!Otp} onClick={handleMobileLogin} >Verify&Login</button>
                              : <button type="button" className='bg-orange-500 w-full p-2 rounded-md text-white' disabled={!mobileNumber} onClick={handleOtpp} >Send Otp</button>}
                          </div>
                          <hr />


                          <hr />
                        </form>
                        <div className="option underline">or Connect With Social Media</div>
                        <div className="twitter">
                          <a href="#">
                            <i className="fab fa-google" />
                            Sign in With Google
                          </a>
                        </div>
                        <div className="facebook">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                            Sign in With Facebook
                          </a>

                        </div>
                        <div className="-mt-10 ml-2 underline">New User?<Link to="createaccount" className='underline ml-1'>Click Here</Link></div>


                      </div>

                    </MDBTabsPane>

                  </MDBTabsContent>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>





    </>
  )
}

export default Login

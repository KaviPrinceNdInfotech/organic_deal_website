import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Signin from './Signin'



function TopHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
        toast.success("Logout successfully", {
            position: "top-left",
        })
    }

    // const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('ID')

    return (
        <>
            <div className="top-header2 " style={{ background: "linear-gradient(rgb(249 162 4), rgb(225, 114, 0))" }}>
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="top-header-left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Organic Deals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-phone" />
                                            Call Us: 9716412565/8826302378
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="top-header-right">
                                <ul>

                                    <li>
                                        <Link to="/wishlist">
                                            <i className="fa fa-heart" /> wishlist
                                        </Link>
                                    </li>
                                    {!token &&
                                        <li>
                                            <Link to="/login" >
                                                <i className="fa fa-user" /> Login/Signup
                                            </Link>

                                        </li>
                                    }

                                    {token &&
                                        <>

                                            <li onClick={handleLogout} >
                                                <button type="button">
                                                    <i className="fa fa-user" /> Logout
                                                </button>

                                            </li>
                                        </>
                                    }
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>






        </>
    )
}

export default TopHeader

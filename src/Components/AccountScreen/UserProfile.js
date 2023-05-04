import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../css/userProfile.css"

function UserProfile() {
    const Id = localStorage.getItem('ID')
    const [userProfile, setUserProfile] = useState('')
    const UserProfile = async () => {
        const { data } = await axios.get(`https://admin.organicdeal.in/api/Customerapi/UserProfile/${Id}`)
        setUserProfile(data)
    }

    useEffect(() => {
        UserProfile()

    }, [])
    return (
        <>
            {/* <div className="row gutters-sm bg-gray-400 h-screen">
                <div className="col-md-4 mb-3 mt-2 p-3">
                    <div className="card1">
                        <div className="card1-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                <div className="mt-3">
                                    <h4 className='text-xl text-green-700'>{userProfile.Name}</h4>

                                    <div className='flex space-x-4'>
                                        <div class="mb-3 mt-2">

                                            <input className="form-control "
                                                type="file"
                                                id="MultipleFile" multiple />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-8 mt-2 p-3">
                    <div className="card1 mb-3">
                        <div className="card1-body ">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userProfile.Name}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userProfile.Email}
                                </div>
                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Mobile</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userProfile.Phone}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {userProfile.Address}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12 p-2">
                                    <button type="button" className='p-2 text-white text-center bg-blue-700 rounded-md'>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


           
            <div className='bg-green-100 '>
            <div class="top-photo col-md-12  bg-gray-400">
                <img className='h-96' src="https://lh3.googleusercontent.com/p/AF1QipMvp4ECDmPTGfNdoRh9mK7zqm4epyfFEiD5Zu1w=s680-w680-h510" />
                <h3 className='text-green-700' style={{ color: "orange" }}>www.organicDeal.in</h3>

            </div>

            <div class="user">
                <img src="https://images.unsplash.com/photo-1681038097738-6c419b88f7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
                <div className='ml-32'>
                    <div class="mb-3 mt-2">

                        <input className="form-control w-64 mr-2 "
                            type="file"
                            id="MultipleFile" multiple />
                    </div>
                    <h3 className='text-2xl ml-16 text-green-700'>Name-{userProfile.Name}</h3>
                </div>

                <div class="px-10">
                    <div class="row">
                        <div class="about d-flex" col-md-12>
                            <div>
                                <h3>About<i>OrganicDeal</i></h3>
                                <div class="col-md-6">
                                    <div class="about-in">
                                        <p>In this era where people are taking away the goodness of nature, we aim to help them live a healthier, better, and wholesome life by providing them with 100% organic, certified, and authentic food.</p>




                                    </div>
                                </div>
                            </div>




                            <div class="col-md-3 col-xs-6">
                                <div class="details-left">
                                    <h3>My Profile <i>Details</i></h3>
                                    <ul>
                                        <li>Name-{userProfile.Name}</li><br />
                                        <li>Email-{userProfile.Email}</li><br />
                                        <li>Phone-{userProfile.Phone}</li><br />
                                        <li>Address-{userProfile.Address}</li><br />
                                    </ul>



                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="details-left">
                                    <h3>My Wallet <i>Balance</i></h3>
                                    <button type="button" className='p-2 text-white ml-4 mt-3 bg-green-700 w-40 '>2000</button>



                                </div>
                            </div>

                           
                             <div>Edit Profile</div>




                           



                        </div>
                    </div>
                </div>
            </div>




        </>


    )
}

export default UserProfile
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

function About() {
  const [about, setAbout] = useState([])
  useEffect(() => {
    axios.get('https://testimonialapi.toolcarton.com/api')
      .then((response) => {
        setAbout(response.data);
      })
  }, [])


  const [team, setTeam] = useState([])
  useEffect(() => {
    axios.get('https://admin.organicdeal.in/api/CategoryApi/CategoryList')
      .then((response) => {
        setTeam(response.data);
      })
  }, [])
  return (
    <>
      <>
        {/* breadcrumb start */}
        <div className="breadcrumb-main ">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="breadcrumb-contain">
                  <div>
                    <h2>about</h2>
                    <ul>
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <i className="fa fa-angle-double-right" />
                      </li>
                      <li>
                        <Link to="/about">about</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb End */}
        {/* about section start */}
        <section className="about-page section-big-py-space">
          <div className="custom-container">
            {about.map((item, index) => {
              console.log(item);
              return (
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-section">
                      <img
                        src="../assets/images/blog/1.jpg"
                        className="img-fluid   w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium
                    </h4>
                    <p className="mb-2">
                      {" "}
                      Sed ut perspiciatis unde omnis iste natus <b>error sit</b>{" "}
                      voluptatem accusantium doloremque laudantium,
                    </p>
                    <p className="mb-2">
                      {" "}
                      On the other hand, we denounce with righteous indignation and
                      dislike men who are so beguiled and demoralized by the charms of
                      pleasure of the moment, so blinded by desire, that they cannot
                      foresee the pain and trouble that are bound to ensue; and equal
                      blame belongs to those who fail in their duty through weakness of
                      will, which is the same as saying through shrinking from toil and
                      pain.
                    </p>
                    <p className="mb-2">
                      {" "}
                      These <b>cases</b> are perfectly simple and easy to distinguish. In
                      a free hour, when our power of choice is untrammelled and when
                      nothing prevents our
                    </p>
                    <p>
                      {" "}
                      being able to do what we like best, every pleasure is to be{" "}
                      <b>welcomed</b> and every pain avoided. But in certain circumstances
                      and owing to the claims of duty or the obligations of business it
                      will frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore always holds in these
                      matters to this principle of selection: he rejects pleasures to
                      secure other greater pleasures, or else he endures pains to avoid{" "}
                      <b>worse</b> pains.
                    </p>
                  </div>
                </div>   )
        })}
    </div>
        </section>

        {/* about section end */}

        <div className="title8  section-big-pt-space">
          <h4>our team</h4>
        </div>

        <section className="team1 section-big-mb-space">
          <div className="custom-container">
            <div className="row">
              <div className="col-12 pr-0">
                <div className="team-slide4 no-arrow">
                  <div className='grid grid-cols-1 gap-2 md:grid-cols-4'>
                  {team.result.map((item, index) => {
              console.log(item);
              return (
                    <div>
                      <div className="team-box">
                        <div className="img-wrraper">
                          <img
                            src={item.result.CategoryImage}
                            alt="team"
                            className="img-fluid"
                          />
                        </div>
                        <div className="team-detail">
                          <h3>{item.CategoryName}</h3>
                          <h5>{item.Id}</h5>
                          {/* <p>
                            {item.message}
                          </p> */}
                          <ul>
                            <li className="fb-color">
                              <a href="javascript:void(0)" tabIndex={0}>
                                {" "}
                                <i className="ti-facebook" />
                              </a>
                            </li>
                            <li className="twt-color">
                              {" "}
                              <a href="javascript:void(0)" tabIndex={0}>
                                <i className="ti-twitter-alt" />
                              </a>
                            </li>
                            <li className="print-color">
                              {" "}
                              <a href="javascript:void(0)" tabIndex={0}>
                                <i className="ti-pinterest" />
                              </a>
                            </li>
                          </ul>
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

    </>
  )
}

export default About

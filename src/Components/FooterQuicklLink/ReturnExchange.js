import React from 'react'
import { Link } from 'react-router-dom'

function ReturnExchange() {
  return (
    <>
      <div className="breadcrumb-main ">
        <div className="container">
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
                      <Link to="/return">Return & Exchange</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="blog-detail-page section-big-py-space ratio2_3 bg-gray-200 h-screen">
        <div className="container">
          <div className="row section-big-pb-space">
            <div className="col-sm-12 blog-detail">
              <div className="creative-card">

              
                <p className='text-2xl font-extrabold text-black'>
                Return & Exchenge
                </p>


                <p>
                We have a "no questions asked return and refund policy" which entitles all our members to return the product at the time of delivery if due to some reason they are not satisfied with the quality or freshness of the product. We will take the returned product back with us and issue a credit note for the value of the return products which will be credited to your account on the Site. This can be used to pay your subsequent shopping bills.
                </p>

              

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ReturnExchange


import React from 'react'
import "../css/Testimonial.css"

function Testimonial() {
  return (
   <>
   {/* <section className="testimonial block ">
  <img
    src="../assets/images/grocery/testimonial/1.jpg"
    alt="testimonial"
    className="img-fluid bg-img"
  />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="slide-1 no-arrow">
          <div>
            <div className="testimonial-contain">
              <div className="media">
                <div className="testimonial-img">
                  <img
                    src="../assets/images/testimonial/1.jpg"
                    className="img-fluid rounded-circle  "
                    alt="testimonial"
                  />
                </div>
                <div className="media-body">
                  <h5>Vishnu Tiwari</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-contain">
              <div className="media">
                <div className="testimonial-img">
                  <img
                    src="../assets/images/testimonial/2.jpg"
                    className="img-fluid rounded-circle  "
                    alt="testimonial"
                  />
                </div>
                <div className="media-body">
                  <h5>Vishnu Tiwari</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-contain">
              <div className="media">
                <div className="testimonial-img">
                  <img
                    src="../assets/images/testimonial/3.jpg"
                    className="img-fluid rounded-circle  "
                    alt="testimonial"
                  />
                </div>
                <div className="media-body">
                  <h5>Vishnu Tiwari</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="testimonial text-center">
  <div className="container">
    <div className="heading white-heading">Testimonial</div>
    <div
      id="testimonial4"
      className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
      data-ride="carousel"
      data-pause="hover"
      data-interval={5000}
      data-duration={2000}
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 1</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 2</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 3</h4>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#testimonial4"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#testimonial4"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </div>
</section>


   </>
  )
}

export default Testimonial

import React from 'react'

function product() {
  return (
    <>
  <>
  <section className="section-pt-space">
    <div className="tab-product-main tab-third">
      <div className="tab-prodcut-contain">
        <ul className="tabs tab-title">
          <li className="current">
            <a href="tab-1">new product</a>
          </li>
          <li className="">
            <a href="tab-2">special product</a>
          </li>
          <li className="">
            <a href="tab-3">best sellars</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/*tab product*/}
  {/* product tab  */}
  <section className="section-py-space ratio_square product">
    <div className="custom-container addtocart_count">
      <div className="row">
        <div className="col pr-0">
          <div className="theme-tab product no-arrow ">
            <div className="tab-content-cls ">
              <div id="tab-1" className="tab-content active default product">
                <div className="product-slide-5 product-m no-arrow">
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/1.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Natural Black Sesame Seeds</h3>
                        </a>
                        <h5>
                          $55
                          <span>$65</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/2.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Turmeric Powder</h3>
                        </a>
                        <h5>
                          $85
                          <span>$95</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/3.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Naturewell methi dana </h3>
                        </a>
                        <h5>
                          $43
                          <span>$68</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/4.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Dhania Powder</h3>
                        </a>
                        <h5>
                          $170
                          <span>$210</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/5.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>red chilli powder</h3>
                        </a>
                        <h5>
                          $80
                          <span>$110</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-content  product">
                <div className="product-slide-5 product-m no-arrow">
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/4.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Dhania Powder</h3>
                        </a>
                        <h5>
                          $170
                          <span>$210</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/5.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>red chilli powder</h3>
                        </a>
                        <h5>
                          $80
                          <span>$110</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/1.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Natural Black Sesame Seeds</h3>
                        </a>
                        <h5>
                          $55
                          <span>$65</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/2.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Turmeric Powder</h3>
                        </a>
                        <h5>
                          $85
                          <span>$95</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/3.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Naturewell methi dana </h3>
                        </a>
                        <h5>
                          $43
                          <span>$68</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-content  product">
                <div className="product-slide-5 product-m no-arrow">
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/3.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Naturewell methi dana </h3>
                        </a>
                        <h5>
                          $43
                          <span>$68</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/4.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Dhania Powder</h3>
                        </a>
                        <h5>
                          $170
                          <span>$210</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/5.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>red chilli powder</h3>
                        </a>
                        <h5>
                          $80
                          <span>$110</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/1.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Natural Black Sesame Seeds</h3>
                        </a>
                        <h5>
                          $55
                          <span>$65</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box ">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <a href="product-page(left-sidebar).html">
                            <img
                              src="../assets/images/grocery/product/2.jpg"
                              className="img-fluid  "
                              alt="product"
                            />
                          </a>
                        </div>
                        <div className="counter-cart">
                          <div className="addtocart_btn">
                            <button
                              type="button"
                              className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                              data-tippy-content="Add to cart"
                            >
                              {" "}
                              add to cart{" "}
                            </button>
                            <div className="qty-box cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  className="form-control input-number qty-input"
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-icon icon-top">
                          <a
                            href="javascript:void(0)"
                            className="add-to-wish tooltip-left"
                            data-tippy-content="Add to Wishlist"
                          >
                            <i data-feather="heart" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view"
                            className="tooltip-left"
                            data-tippy-content="Quick View"
                          >
                            <i data-feather="eye" />
                          </a>
                          <a
                            href="compare.html"
                            className="tooltip-left"
                            data-tippy-content="Compare"
                          >
                            <i data-feather="refresh-cw" />
                          </a>
                        </div>
                        <div className="new-label2">
                          <div>new</div>
                        </div>
                      </div>
                      <div className="product-detail product-detail2 ">
                        <a href="product-page(left-sidebar).html">
                          <h3>Turmeric Powder</h3>
                        </a>
                        <h5>
                          $85
                          <span>$95</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              --&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product tab end */}
</>


    </>
  )
}

export default product

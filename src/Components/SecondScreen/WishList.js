import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';


function WishList() {
  const dispatch=useDispatch();

  const wishlist = useSelector(state =>state.wishlist)
  
  return (
    <>
    <div className="breadcrumb-main ">
  <div className="">
    <div className="row">
      <div className="col">
        <div className="breadcrumb-contain">
          <div>
            <Link to="/wishlist">
            <h2>wishlist</h2>
            </Link>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <i className="fa fa-angle-double-right" />
              </li>
              <li>
                <a href="javascript:void(0)">wishlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="wishlist-section section-big-py-space b-g-light">
  <div className="custom-container">
    <div className="row">
      <div className="col-sm-12">
        <table className="table cart-table table-responsive-xs">
          <thead>
            <tr className="table-head">
              <th scope="col">image</th>
              <th scope="col">product name</th>
              <th scope="col">price</th>
              <th scope="col">availability</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          {wishlist?.map((item,index) => (
          <tbody>
            <tr key={index.Id}>
              <td>
                <a href="javascript:void(0)">
                  <img
                    src={`https://admin.organicdeal.in/Images/${item.ProductImage}`}
                    alt="product"
                    className="img-fluid  "
                  />
                </a>
              </td>
              <td>
                <a href="javascript:void(0)">{item.ProductName}</a>
                <div className="mobile-cart-content">
                  <div className="col-xs-3">
                    <p>in stock</p>
                  </div>
                  <div className="col-xs-3">
                    <h2 className="td-color">{item.Price}</h2>
                  </div>
                  <div className="col-xs-3">
                    <h2 className="td-color">
                      <a href="javascript:void(0)" className="icon me-1">
                        <i className="ti-close" />{" "}
                      </a>
                      <a href="javascript:void(0)" className="cart">
                        <i className="ti-shopping-cart" />
                      </a>
                    </h2>
                  </div>
                </div>
              </td>
              <td>
                <h2>{item.Price}</h2>
              </td>
              <td>
                <p>in stock</p>
              </td>
              <td>
                <a href="javascript:void(0)" className="icon me-3" >
                  <i className="ti-close" />{" "}
                </a>
                <a href="javascript:void(0)" className="cart">
                  <i className="ti-shopping-cart" />
                </a>
              </td>
            </tr>
          </tbody>
           ))}
        </table>
      </div>
    </div>
    <div className="row wishlist-buttons">
      <div className="col-12">
       
        <Link to="/" className="btn btn-normal">
        continue shopping
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default WishList

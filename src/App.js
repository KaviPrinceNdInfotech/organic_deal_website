import React from 'react'
import Main from './Components/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blog from './Components/SecondScreen/Blog'
import Navbar from './Components/Screens/Navbar'
import HotDeals from './Components/Screens/HotDeals'
import Footer from './Components/Screens/Footer'
import WishList from './Components/SecondScreen/WishList'
import Checkout from './Components/SecondScreen/Checkout'
import TopHeader from './Components/Screens/TopHeader'
import CreateAccount from './Components/SecondScreen/CreateAccount'
import Faq from './Components/SecondScreen/Faq'
import About from './Components/SecondScreen/About'
import Contactus from './Components/SecondScreen/Contactus'
import Login from './Components/SecondScreen/Login'
import ForgatePassword from './Components/SecondScreen/ForgatePassword'
import Categorypage from './Components/SubScreen/Categorypage'
import PlaceOrder from './Components/SecondScreen/PlaceOrder'
import BulkOrder from './Components/Screens/BulkOrder'
import ViewDetails from './Components/SubScreen/ViewDetails'
import ScrollToTop from './Components/SubScreen/ScrollToTop'
import PrivacyPolicy from './Components/FooterQuicklLink/PrivacyPolicy'
import ReturnExchange from './Components/FooterQuicklLink/ReturnExchange'
import Checkkout from './Components/FooterQuicklLink/Checkkout'
import Signin from './Components/Screens/Signin'
import AllProduct from './Components/Screens/AllProduct'
import ReccomendedProduct from './Components/Screens/ReccomendedProduct'
import Review from './Components/SubScreen/Review'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderHistory from './Components/AccountScreen/OrderHistory'
import Invoice from './Components/AccountScreen/Invoice'
import UserProfile from './Components/AccountScreen/UserProfile'
import SellerRegistration from './Components/SecondScreen/SellerRegistration'

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/specialproduct" element={<Main />} />
          <Route path="/blog" element={[<TopHeader />, <Navbar />, <Blog />, <Footer />]} />
          <Route path="/hotdeals" element={[<TopHeader />, <Navbar />, <HotDeals />, <Footer />]} />
          <Route path="/bulkorder" element={[<TopHeader />, <Navbar />, <BulkOrder />, <Footer />]} />
          <Route path="/wishlist" element={[<TopHeader />, <Navbar />, <WishList />, <Footer />]} />
          <Route path="/checkout" element={[<TopHeader />, <Navbar />, <Checkout />, <Footer />]} />
          <Route path="/viewdetails/:Id" element={[<TopHeader />, <Navbar />, <ViewDetails />, <Footer />]} />
          <Route path="/faq" element={[<TopHeader />, <Navbar />, <Faq />, <Footer />]} />
          <Route path="/about" element={[<TopHeader />, <Navbar />, <About />, <Footer />]} />
          <Route path="/contactus" element={[<TopHeader />, <Navbar />, <Contactus />, <Footer />]} />
          <Route path="/categorypage/:Id" element={[<TopHeader />, <Navbar />, <Categorypage />, <Footer />]} />
          <Route path="/placeorder" element={[<TopHeader />, <Navbar />, <PlaceOrder />, <Footer />]} />
          <Route path="/createaccount" element={[<TopHeader />, <Navbar />, <CreateAccount />, <Footer />]} />
          <Route path="/login" element={[<TopHeader />, <Navbar />,<Login />, <Footer />]} />
          <Route path="/forgatepassword" element={<ForgatePassword />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/return" element={<ReturnExchange />} />
          <Route path="/checkkout" element={<Checkkout />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/allProduct" element={[<TopHeader />, <Navbar />, <AllProduct />, <Footer />]} />
          <Route path="/reccomendedproduct" element={[<TopHeader />, <Navbar />, <ReccomendedProduct />, <Footer />]} />
          <Route path="/review" element={[<TopHeader />, <Navbar />, <Review />, <Footer />]} />
          <Route path="/orderhistory" element={[<TopHeader />, <Navbar />, <OrderHistory />, <Footer />]} />
          <Route path="/invoice" element={[ <TopHeader />, <Navbar />,<Invoice />,<Footer />]} />
          <Route path="/userprofile" element={[ <TopHeader />, <Navbar />,<UserProfile/>,<Footer />]} />
          <Route path="/SellerRegistration" element={[ <TopHeader />, <Navbar />,<SellerRegistration/>,<Footer />]} />


        </Routes>
        <ScrollToTop />
      </Router>
    </>
  )
}

export default App


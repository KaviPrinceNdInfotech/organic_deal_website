import React from 'react'
import "../Components/css/Scrollbar.css"
import TopHeader from './Screens/TopHeader'
import Footer from './Screens/Footer'
import Subscription from './Screens/Subscription'
import LatestBlog from './Screens/LatestBlog'
import TrandingProduct from './Screens/TrandingProduct'

import ProductNavbar from './Screens/ProductNavbar'
import Product from './Screens/Product'
import ProductBanner from './Screens/ProductBanner'
import CollectionBanner from './Screens/CollectionBanner'
import HomeSlider from './Screens/HomeSlider'
import Navbar from './Screens/Navbar'
import BigBanner from './SecondScreen/BigBanner'




function Main() {
    return (
        <>
            
                <TopHeader />
                <Navbar/>
                <HomeSlider/>
                <CollectionBanner/>
                <TrandingProduct/>
                <ProductNavbar/>
                <BigBanner/>
                {/* <ProductBanner/> */}
                {/* <LatestBlog/> */}
                <Subscription/>
               
              
                <Footer />
            
        </>
    )
}

export default Main

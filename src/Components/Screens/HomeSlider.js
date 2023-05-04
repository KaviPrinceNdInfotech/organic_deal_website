import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import LazyLoad from 'react-lazy-load';
function Banner() {

    const [image, setImage] = useState([]);
  

    const getUsers = async () => {
        const { data } = await axios.get('https://admin.organicdeal.in/api/ProductAPI/Banners');
        setImage(data.Banner);
    }

    useEffect(() => {
        getUsers();
    }, []);
 

    return (
        <div className="w-full  ">
            <LazyLoad>
            <Carousel>
                {image.map((data, index) => {
                    return (
                        <Carousel.Item>
                            <div className="w-full lg:h-screen border border-black md:h-screen ">
                              
                                 
                                <img
                                     className="d-block w-full "
                                    src={`https://admin.organicdeal.in/Images/${data.BannerPath}`}
                                    alt="First slide"

                                />
                                
                              
                            </div>
                        </Carousel.Item>
                    )

                })}
            </Carousel>
            </LazyLoad>

        </div>
    );
}

export default Banner;
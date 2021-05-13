import React from 'react';
import Slider from "react-slick";



const SidebarSlider = () => {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

    };



    return (
        <>
            <Slider {...settings}>
                <div className="product-item">
                    <div className="product-title">
                        <a href="#">Product Name</a>
                        <div className="ratting">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="product-image">
                        <a href="product-detail.html">
                            <img src="assets/img/product-10.jpg" alt="Product Image" />
                        </a>
                        <div className="product-action">
                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                            <a href="#"><i className="fa fa-heart"></i></a>
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3><span>$</span>99</h3>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-title">
                        <a href="#">Product Name</a>
                        <div className="ratting">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="product-image">
                        <a href="product-detail.html">
                            <img src="assets/img/product-9.jpg" alt="Product Image" />
                        </a>
                        <div className="product-action">
                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                            <a href="#"><i className="fa fa-heart"></i></a>
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3><span>$</span>99</h3>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                    </div>
                </div>
                <div className="product-item">
                    <div className="product-title">
                        <a href="#">Product Name</a>
                        <div className="ratting">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="product-image">
                        <a href="product-detail.html">
                            <img src="assets/img/product-8.jpg" alt="Product Image" />
                        </a>
                        <div className="product-action">
                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                            <a href="#"><i className="fa fa-heart"></i></a>
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3><span>$</span>99</h3>
                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                    </div>
                </div>
            </Slider>
        </>
    )

};

export default SidebarSlider;


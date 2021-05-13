import React from 'react';
import SidebarSlider from './SidebarSlider';



const Sidebar = () => {

        return (
            <>
                <div className="sidebar-widget category">
                    <h2 className="title">Category</h2>
                    <nav className="navbar bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-female"></i>Fashion & Beauty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-child"></i>Kids & Babies Clothes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-tshirt"></i>Men & Women Clothes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-mobile-alt"></i>Gadgets & Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-microchip"></i>Electronics & Accessories</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="sidebar-widget widget-slider">
                    <div className="sidebar-slider normal-slider">

                        <SidebarSlider></SidebarSlider>
                    </div>
                </div>

                <div className="sidebar-widget brands">
                    <h2 className="title">Our Brands</h2>
                    <ul>
                        <li><a href="#">Nulla </a><span>(45)</span></li>
                        <li><a href="#">Curabitur </a><span>(34)</span></li>
                        <li><a href="#">Nunc </a><span>(67)</span></li>
                        <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                        <li><a href="#">Fusce </a><span>(89)</span></li>
                        <li><a href="#">Sagittis</a><span>(28)</span></li>
                    </ul>
                </div>

                <div className="sidebar-widget tag">
                    <h2 className="title">Tags Cloud</h2>
                    <a href="#">Lorem ipsum</a>
                    <a href="#">Vivamus</a>
                    <a href="#">Phasellus</a>
                    <a href="#">pulvinar</a>
                    <a href="#">Curabitur</a>
                    <a href="#">Fusce</a>
                    <a href="#">Sem quis</a>
                    <a href="#">Mollis metus</a>
                    <a href="#">Sit amet</a>
                    <a href="#">Vel posuere</a>
                    <a href="#">orci luctus</a>
                    <a href="#">Nam lorem</a>
                </div>
            </>
        )
};

export default Sidebar;
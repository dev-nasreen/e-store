import React from 'react';

const Header = () => {
    return(
        <>
          {/* <!-- Top bar Start --> */}
    <div className="top-bar">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                <i className="fa fa-envelope"></i>
                support@email.com
            </div>
            <div className="col-sm-6">
                <i className="fa fa-phone-alt"></i>
                +012-345-6789
            </div>
        </div>
    </div>
</div>
{/* <!-- Top bar End -->

<!-- Nav Bar Start --> */}
<div className="nav">
    <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                   {/* <a href="/products" className="nav-item nav-link">Products</a> */}
                    <a href="/menProducts" className="nav-item nav-link">Men</a>
                    <a href="/womenProducts" className="nav-item nav-link">Women</a>
                    <a href="/kidsProducts" className="nav-item nav-link">Kids</a>
                    {/* <a href="/productDetail" className="nav-item nav-link">Product Detail</a>
                    <a href="/card" className="nav-item nav-link">Cart</a>
                    <a href="/checkOut" className="nav-item nav-link">Checkout</a> */}
                    <a href="/myAccount" className="nav-item nav-link">My Account</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                        <div className="dropdown-menu">
                            <a href="/wishlist" className="dropdown-item">Wishlist</a>
                            
                            <a href="/contactUs" className="dropdown-item">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-nav ml-auto">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                        <div className="dropdown-menu">
                          <a href="/login" className="dropdown-item">Login & Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
{/* <!-- Nav Bar End -->      

<!-- Bottom Bar Start --> */}
<div className="bottom-bar">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-md-3">
                <div className="logo">
                    <a href="index.html">
                        <img src="assets/img/logo.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button><i className="fa fa-search"></i></button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="user">
                    <a href="wishlist.html" className="btn wishlist">
                        <i className="fa fa-heart"></i>
                        <span>(0)</span>
                    </a>
                    <a href="cart.html" className="btn cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span>(0)</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

</>
    );
};

export default Header;


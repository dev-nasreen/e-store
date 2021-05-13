import React from 'react';
import BrandSlider from '../Components/BrandSlider';
import Sidebar from '../Components/Sidebar';


const Products = () => {
  return (
    <>
        {/* <!-- Breadcrumb Start --> */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Products</a></li>
              <li className="breadcrumb-item active">Product List</li>
            </ul>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}

        {/* <!-- Product List Start --> */}
        <div className="product-view">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-12">
                    <div className="product-view-top">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="product-search">
                            <input type="email" value="Search" />
                            <button><i className="fa fa-search"></i></button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-short">
                            <div className="dropdown">
                              <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Newest</a>
                                <a href="#" className="dropdown-item">Popular</a>
                                <a href="#" className="dropdown-item">Most sale</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="product-price-range">
                            <div className="dropdown">
                              <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">$0 to $50</a>
                                <a href="#" className="dropdown-item">$51 to $100</a>
                                <a href="#" className="dropdown-item">$101 to $150</a>
                                <a href="#" className="dropdown-item">$151 to $200</a>
                                <a href="#" className="dropdown-item">$201 to $250</a>
                                <a href="#" className="dropdown-item">$251 to $300</a>
                                <a href="#" className="dropdown-item">$301 to $350</a>
                                <a href="#" className="dropdown-item">$351 to $400</a>
                                <a href="#" className="dropdown-item">$401 to $450</a>
                                <a href="#" className="dropdown-item">$451 to $500</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
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
                          <img src="assets/img/product-1.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-2.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-3.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-4.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-5.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-6.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                          <img src="assets/img/product-7.jpg" alt="Product Image" />
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
                  </div>
                  <div className="col-md-4">
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
                  </div>
                  <div className="col-md-4">
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
                  </div>
                </div>

                {/* <!-- Pagination Start --> */}
                <div className="col-md-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- Pagination Start --> */}
              </div>

              {/* <!-- Side Bar Start --> */}
              <div className="col-lg-4 sidebar">
                <Sidebar></Sidebar>
              </div>
              {/* <!-- Side Bar End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Product List End -->   */}

        {/* <!-- Brand Start --> */}
        <div className="brand">
          <div className="container-fluid">
            <div className="brand-slider">
              <BrandSlider></BrandSlider>
            </div>
          </div>
        </div>
        {/* <!-- Brand End -->  */}

      </>
    )

};

export default Products;


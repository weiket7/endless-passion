
import Script from 'next/script';
import { Product } from './Product';

interface Props  {
  children: any
}

const Layout = ({ children }: Props) => {
  return <><div className="body">
  <div className="notice-top-bar bg-primary" data-sticky-start-at="180">
    <button className="hamburguer-btn hamburguer-btn-light notice-top-bar-close m-0 active" data-set-active="false">
      <span className="close">
        <span></span>
        <span></span>
      </span>
    </button>
    <div className="container">
      <div className="row justify-content-center py-2">
        <div className="col-9 col-md-12 text-center">
          <p className="text-color-light font-weight-semibold mb-0">Get Up to <strong>40% OFF</strong> New-Season Styles <a href="#" className="btn btn-primary-scale-2 btn-modern btn-px-2 btn-py-1 ms-2">MEN</a> <a href="#" className="btn btn-primary-scale-2 btn-modern btn-px-2 btn-py-1 ms-1 me-2">WOMAN</a> <span className="opacity-6 text-1">* Limited time only.</span></p>
        </div>
      </div>
    </div>
  </div>
  <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 135, 'stickySetTop': '-135px', 'stickyChangeLogo': true}">
    <div className="header-body header-body-bottom-border-fixed box-shadow-none border-top-0">
      <div className="header-top header-top-small-minheight header-top-simple-border-bottom">
        <div className="container">
          <div className="header-row justify-content-between">
            <div className="header-column col-auto px-0">
              <div className="header-row">
                <p className="font-weight-semibold text-1 mb-0 d-none d-sm-block d-md-none">FREE SHIPPING ORDERS $99+</p>
                <p className="font-weight-semibold text-1 mb-0 d-none d-md-block">Mon to Sat: 10am- 7:30pm, Sun: 1pm - 5pm</p>
              </div>
            </div>
            <div className="header-column justify-content-end col-auto px-0">
              <div className="header-row">
                <nav className="header-nav-top">
                  <ul className="nav nav-pills font-weight-semibold text-2">
                    <li className="nav-item dropdown nav-item-left-border d-lg-none">
                      <a className="nav-link text-color-default text-color-hover-primary" href="#" role="button" id="dropdownMobileMore" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMobileMore">
                        <a className="dropdown-item" href="#">About</a>
                        <a className="dropdown-item" href="#">Location</a>
                        <a className="dropdown-item" href="#">Blog</a>
                        <a className="dropdown-item" href="#">Contact</a>
                        <a className="dropdown-item" href="#">Help & FAQs</a>
                        <a className="dropdown-item" href="#">Track Order</a>
                      </div>
                    </li>
                    <li className="nav-item d-none d-lg-inline-block">
                      <a href="#" className="text-decoration-none text-color-default text-color-hover-primary">About</a>
                    </li>
                    <li className="nav-item d-none d-lg-inline-block">
                      <a href="#" className="text-decoration-none text-color-default text-color-hover-primary">Location</a>
                    </li>
                    <li className="nav-item d-none d-lg-inline-block nav-item-right-border">
                      <a href="#" className="text-decoration-none text-color-default text-color-hover-primary">Contact</a>
                    </li>
                    {/* <li className="nav-item d-none d-xl-inline-block">
                      <a href="#" className="text-decoration-none text-color-default text-color-hover-primary">Help & FAQs</a>
                    </li>
                    <li className="nav-item d-none d-xl-inline-block">
                      <a href="#" className="text-decoration-none text-color-default text-color-hover-primary">Track Order</a>
                    </li> */}
                    {/* <li className="nav-item dropdown nav-item-left-border">
                      <a className="nav-link text-color-default text-color-hover-primary" href="#" role="button" id="dropdownCurrency" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        USD
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-arrow-centered min-width-0" aria-labelledby="dropdownCurrency">
                        <a className="dropdown-item" href="#">EUR</a>
                        <a className="dropdown-item" href="#">USD</a>
                      </div>
                    </li> */}
                    {/* <li className="nav-item dropdown nav-item-right-border">
                      <a className="nav-link text-color-default text-color-hover-primary" href="#" role="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ENG
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-arrow-centered min-width-0" aria-labelledby="dropdownLanguage">
                        <a className="dropdown-item" href="#">ESP</a>
                        <a className="dropdown-item" href="#">FRA</a>
                        <a className="dropdown-item" href="#">ENG</a>
                      </div>
                    </li> */}
                  </ul>
                  <ul className="social-icons social-icons-clean social-icons-icon-gray">
                    <li className="social-icons-facebook">
                      <a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    {/* <li className="social-icons-twitter">
                      <a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="social-icons-linkedin">
                      <a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-container container">
        <div className="header-row py-2">
          <div className="header-column w-100">
            <div className="header-row justify-content-between">
              <div className="header-logo z-index-2 col-lg-2 px-0">
                <a href="index.html">
                  <img alt="Porto" width="50" height="50" data-sticky-width="82" data-sticky-height="40" data-sticky-top="84" src="endless-passion-logo.png"/>
                </a>
                &nbsp;<b>Endless Passion</b>
              </div>
              <div className="header-nav-features header-nav-features-no-border col-lg-5 col-xl-6 px-0 ms-0">
                <div className="header-nav-feature ps-lg-5 pe-lg-4">
                  <form role="search" action="page-search-results.html" method="get">
                    <div className="search-with-select">
                      <a href="#" className="mobile-search-toggle-btn me-2" data-toggle-className="open">
                        <i className="icons icon-magnifier text-color-dark text-color-hover-primary"></i>
                      </a>
                      <div className="search-form-wrapper input-group">
                        <input className="form-control text-1" id="headerSearch" name="q" type="search" value="" placeholder="Search..."/>
                        <div className="search-form-select-wrapper">
                          <div className="custom-select-1">
                            <select name="category" className="form-control form-select">
                              <option value="all" selected>All Categories</option>
                              <option value="fashion">Fashion</option>
                              <option value="electronics">Electronics</option>
                              <option value="homegarden">Home & Garden</option>
                              <option value="motors">Motors</option>
                              <option value="features">Features</option>
                            </select>
                          </div>
                          <button className="btn" type="submit">
                            <i className="icons icon-magnifier header-nav-top-icon text-color-dark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <ul className="header-extra-info col-lg-3 col-xl-2 ps-2 ps-xl-0 ms-lg-3 d-none d-lg-block">
                <li className="d-none d-sm-inline-flex ms-0">
                  <div className="header-extra-info-icon ms-lg-4">
                    <i className="icons icon-phone text-3 text-color-dark position-relative top-1"></i>
                  </div>
                  <div className="header-extra-info-text">
                    <label className="text-1 font-weight-semibold text-color-default">Mobile</label>
                    <strong className="text-4"><a href="tel:+1234567890" className="text-color-hover-primary text-decoration-none">91297079</a></strong>
                  </div>
                </li>
              </ul>
              <div className="d-flex col-auto col-lg-2 pe-0 ps-0 ps-xl-3">
                <ul className="header-extra-info">
                  <li className="ms-0 ms-xl-4">
                    <div className="header-extra-info-icon">
                      <a href="#" className="text-decoration-none text-color-dark text-color-hover-primary text-2">
                        <i className="icons icon-user"></i>
                      </a>
                    </div>
                  </li>
                  <li className="me-2 ms-3">
                    <div className="header-extra-info-icon">
                      <a href="#" className="text-decoration-none text-color-dark text-color-hover-primary text-2">
                        <i className="icons icon-heart"></i>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-nav-features ps-0 ms-1">
                  <div className="header-nav-feature header-nav-features-cart header-nav-features-cart-big d-inline-flex top-2 ms-2">
                    <a href="#" className="header-nav-features-toggle">
                      <img src="img/icons/icon-cart-big.svg" height="30" alt="" className="header-nav-top-icon-img"/>
                      <span className="cart-info">
                        <span className="cart-qty">1</span>
                      </span>
                    </a>
                    <div className="header-nav-features-dropdown" id="headerTopCartDropdown">
                      <ol className="mini-products-list">
                        <li className="item">
                          <a href="#" title="Camera X1000" className="product-image"><img src="img/products/product-1.jpg" alt="Camera X1000"/></a>
                          <div className="product-details">
                            <p className="product-name">
                              <a href="#">Camera X1000 </a>
                            </p>
                            <p className="qty-price">
                               1X <span className="price">$890</span>
                            </p>
                            <a href="#" title="Remove This Item" className="btn-remove"><i className="fas fa-times"></i></a>
                          </div>
                        </li>
                      </ol>
                      <div className="totals">
                        <span className="label">Total:</span>
                        <span className="price-total"><span className="price">$890</span></span>
                      </div>
                      <div className="actions">
                        <a className="btn btn-dark" href="#">View Cart</a>
                        <a className="btn btn-primary" href="#">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-column justify-content-end">
            <div className="header-row">

            </div>
          </div>
        </div>
      </div>
      <div className="header-nav-bar header-nav-bar-top-border bg-light">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row justify-content-end">
                <div className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border justify-content-start" data-sticky-header-style="{'minResolution': 991}" data-sticky-header-style-active="{'margin-left': '105px'}" data-sticky-header-style-deactive="{'margin-left': '0'}">
                  <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-3 header-nav-main-sub-effect-1 w-100">
                    <nav className="collapse w-100">
                      <ul className="nav nav-pills w-100" id="mainNav">
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="index.html">
                            Home
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="index.html">
                                Landing Page
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index.html#demos">
                                Demos <span className="tip tip-dark">hot</span>
                              </a>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Classic</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-classic.html">Classic - Original</a></li>
                                <li><a className="dropdown-item" href="index-classic-color.html">Classic - Color</a></li>
                                <li><a className="dropdown-item" href="index-classic-light.html">Classic - Light</a></li>
                                <li><a className="dropdown-item" href="index-classic-video.html">Classic - Video</a></li>
                                <li><a className="dropdown-item" href="index-classic-video-light.html">Classic - Video - Light</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Corporate</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-corporate.html">Corporate - Version 1</a></li>
                                <li><a className="dropdown-item" href="index-corporate-2.html">Corporate - Version 2</a></li>
                                <li><a className="dropdown-item" href="index-corporate-3.html">Corporate - Version 3</a></li>
                                <li><a className="dropdown-item" href="index-corporate-4.html">Corporate - Version 4</a></li>
                                <li><a className="dropdown-item" href="index-corporate-5.html">Corporate - Version 5</a></li>
                                <li><a className="dropdown-item" href="index-corporate-6.html">Corporate - Version 6</a></li>
                                <li><a className="dropdown-item" href="index-corporate-7.html">Corporate - Version 7</a></li>
                                <li><a className="dropdown-item" href="index-corporate-8.html">Corporate - Version 8</a></li>
                                <li><a className="dropdown-item" href="index-corporate-9.html">Corporate - Version 9</a></li>
                                <li><a className="dropdown-item" href="index-corporate-10.html">Corporate - Version 10</a></li>
                                <li><a className="dropdown-item" href="index.html#demos">More...</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Portfolio</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-portfolio.html">Portfolio - Version 1</a></li>
                                <li><a className="dropdown-item" href="index-portfolio-2.html">Portfolio - Version 2</a></li>
                                <li><a className="dropdown-item" href="index-portfolio-3.html">Portfolio - Version 3</a></li>
                                <li><a className="dropdown-item" href="index-portfolio-4.html">Portfolio - Version 4</a></li>
                                <li><a className="dropdown-item" href="index-portfolio-5.html">Portfolio - Version 5</a></li>
                              </ul>
                            </li>		
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Blog</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-blog.html">Blog - Version 1</a></li>
                                <li><a className="dropdown-item" href="index-blog-2.html">Blog - Version 2</a></li>
                                <li><a className="dropdown-item" href="index-blog-3.html">Blog - Version 3</a></li>
                                <li><a className="dropdown-item" href="index-blog-4.html">Blog - Version 4</a></li>
                                <li><a className="dropdown-item" href="index-blog-5.html">Blog - Version 5</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">One Page</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-one-page.html">One Page Original</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown dropdown-mega">
                          <a className="dropdown-item dropdown-toggle active" href="elements.html">
                            Mice
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <div className="dropdown-mega-content">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <span className="dropdown-mega-sub-title">Elements 1</span>
                                    <ul className="dropdown-mega-sub-nav">
                                      <li><a className="dropdown-item" href="elements-accordions.html">Accordions</a></li>
                                      <li><a className="dropdown-item" href="elements-alerts.html">Alerts</a></li>
                                      <li><a className="dropdown-item" href="elements-animations.html">Animations</a></li>
                                      <li><a className="dropdown-item" href="elements-arrows.html">Arrows</a></li>
                                      <li><a className="dropdown-item" href="elements-badges.html">Badges</a></li>
                                      <li><a className="dropdown-item" href="elements-before-after.html">Before / After</a></li>
                                      <li><a className="dropdown-item" href="elements-blockquotes.html">Blockquotes</a></li>
                                      <li><a className="dropdown-item" href="elements-buttons.html">Buttons</a></li>
                                      <li><a className="dropdown-item" href="elements-call-to-action.html">Call to Action</a></li>
                                      <li><a className="dropdown-item" href="elements-cards.html">Cards</a></li>
                                      <li><a className="dropdown-item" href="elements-carousels.html">Carousels</a></li>
                                      <li><a className="dropdown-item" href="elements-cascading-images.html">Cascading Images</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-3">
                                    <span className="dropdown-mega-sub-title">Elements 2</span>
                                    <ul className="dropdown-mega-sub-nav">
                                      <li><a className="dropdown-item" href="elements-content-rotate.html">Content Rotate</a></li>
                                      <li><a className="dropdown-item" href="elements-countdowns.html">Countdowns</a></li>
                                      <li><a className="dropdown-item" href="elements-counters.html">Counters</a></li>
                                      <li><a className="dropdown-item" href="elements-dividers.html">Dividers</a></li>
                                      <li><a className="dropdown-item" href="elements-forms.html">Forms</a></li>
                                      <li><a className="dropdown-item" href="elements-headings.html">Headings</a></li>
                                      <li><a className="dropdown-item" href="elements-icons.html">Icons</a></li>
                                      <li><a className="dropdown-item" href="elements-icon-boxes.html">Icon Boxes</a></li>
                                      <li><a className="dropdown-item" href="elements-image-frames.html">Image Frames</a></li>
                                      <li><a className="dropdown-item" href="elements-image-gallery.html">Image Gallery</a></li>
                                      <li><a className="dropdown-item" href="elements-image-hotspots.html">Image Hotspots</a></li>
                                      <li><a className="dropdown-item" href="elements-lightboxes.html">Lightboxes</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-3">
                                    <span className="dropdown-mega-sub-title">Elements 3</span>
                                    <ul className="dropdown-mega-sub-nav">
                                      <li><a className="dropdown-item" href="elements-lists.html">Lists</a></li>						
                                      <li><a className="dropdown-item" href="elements-maps.html">Maps</a></li>
                                      <li><a className="dropdown-item" href="elements-medias.html">Medias</a></li>
                                      <li><a className="dropdown-item" href="elements-modals.html">Modals</a></li>
                                      <li><a className="dropdown-item" href="elements-parallax.html">Parallax</a></li>
                                      <li><a className="dropdown-item" href="elements-particles.html">Particles</a></li>
                                      <li><a className="dropdown-item" href="elements-posts.html">Posts</a></li>
                                      <li><a className="dropdown-item" href="elements-pricing-tables.html">Pricing Tables</a></li>
                                      <li><a className="dropdown-item" href="elements-process.html">Process</a></li>
                                      <li><a className="dropdown-item" href="elements-progressbars.html">Progress Bars</a></li>
                                      <li><a className="dropdown-item" href="elements-random-images.html">Random Images</a></li>
                                      <li><a className="dropdown-item" href="elements-read-more.html">Read More</a></li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-3">
                                    <span className="dropdown-mega-sub-title">Elements 4</span>
                                    <ul className="dropdown-mega-sub-nav">
                                      <li><a className="dropdown-item" href="elements-sections.html">Sections</a></li>
                                      <li><a className="dropdown-item" href="elements-shape-dividers.html">Shape Dividers</a></li>
                                      <li><a className="dropdown-item" href="elements-star-ratings.html">Star Ratings</a></li>
                                      <li><a className="dropdown-item" href="elements-sticky-elements.html">Sticky Elements</a></li>
                                      <li><a className="dropdown-item" href="elements-tables.html">Tables</a></li>
                                      <li><a className="dropdown-item" href="elements-tabs.html">Tabs</a></li>
                                      <li><a className="dropdown-item" href="elements-testimonials.html">Testimonials</a></li>
                                      <li><a className="dropdown-item" href="elements-toggles.html">Toggles</a></li>
                                      <li><a className="dropdown-item" href="elements-tooltips-popovers.html">Tooltips & Popovers</a></li>
                                      <li><a className="dropdown-item" href="elements-typography.html">Typography</a></li>
                                      <li><a className="dropdown-item" href="elements-word-rotator.html">Word Rotator</a></li>
                                      <li><a className="dropdown-item" href="elements-360-image-viewer.html">360º Image Viewer</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Keyboards
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Headers</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-headers-overview.html">Overview</a></li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Classic</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-classic.html">Classic</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-classic-language-dropdown.html">Classic + Language Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-classic-big-logo.html">Classic + Big Logo</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Flat</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-flat.html">Flat</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-flat-top-bar.html">Flat + Top Bar</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-flat-top-bar-top-borders.html">Flat + Top Bar + Top Border</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-flat-colored-top-bar.html">Flat + Colored Top Bar</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-flat-borders.html">Flat + Borders</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Center</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-center.html">Center</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-center-double-navs.html">Center + Double Navs</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-center-nav-buttons.html">Center + Nav + Buttons</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-center-below-slider.html">Center Below Slider</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Floating</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-floating-bar.html">Floating Bar</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-floating-icons.html">Floating Icons</a></li>
                                  </ul>
                                </li>
                                <li><a className="dropdown-item" href="feature-headers-below-slider.html">Below Slider</a></li>
                                <li><a className="dropdown-item" href="feature-headers-full-video.html">Full Video</a></li>
                                <li><a className="dropdown-item" href="feature-headers-narrow.html">Narrow</a></li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Sticky</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-sticky-shrink.html">Sticky Shrink</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-sticky-scroll-up.html">Sticky Scroll Up</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-sticky-static.html">Sticky Static</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-sticky-change-logo.html">Sticky Change Logo</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-sticky-reveal.html">Sticky Reveal</a></li>
                                  </ul>
                                </li>				
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Transparent</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-transparent-light.html">Transparent Light</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-transparent-dark.html">Transparent Dark</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-transparent-light-bottom-border.html">Transparent Light + Bottom Border</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-transparent-dark-bottom-border.html">Transparent Dark + Bottom Border</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-transparent-bottom-slider.html">Transparent Bottom Slider</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-transparent-top-bar-extra-buttons.html">Transparent Top Bar Extra Buttons</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-semi-transparent-light.html">Semi Transparent Light</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-semi-transparent-dark.html">Semi Transparent Dark</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-semi-transparent-bottom-slider.html">Semi Transparent Bottom Slider</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-semi-transparent-top-bar-borders.html">Semi Transparent + Top Bar + Borders</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Full Width</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-full-width.html">Full Width</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-borders.html">Full Width + Borders</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-transparent-light.html">Full Width Transparent Light</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-transparent-dark.html">Full Width Transparent Dark</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-semi-transparent-light.html">Full Width Semi Transparent Light</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-semi-transparent-dark.html">Full Width Semi Transparent Dark</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-full-width-2-rows-extra-buttons.html">Full Width 2 Rows + Extra Buttons</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Navbar</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-navbar.html">Navbar</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-navbar-full.html">Navbar Full</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-navbar-pills.html">Navbar Pills</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-navbar-divisors.html">Navbar Divisors</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-navbar-icons-search.html">Nav Bar + Icons + Search</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Side Header</a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Side Header Left</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-dropdown.html">Dropdown</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-expand.html">Expand</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-columns.html">Columns</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-slide.html">Slide</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-semi-transparent.html">Semi Transparent</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-left-dark.html">Dark</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Side Header Right</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-dropdown.html">Dropdown</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-expand.html">Expand</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-columns.html">Columns</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-slide.html">Slide</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-semi-transparent.html">Semi Transparent</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-right-dark.html">Dark</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Side Header Offcanvas</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-headers-side-header-offcanvas-push.html">Push</a></li>
                                        <li><a className="dropdown-item" href="feature-headers-side-header-offcanvas-slide.html">Slide</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="feature-headers-side-header-narrow-bar.html">Side Header Narrow Bar</a></li>
                                  </ul>
                                </li>
                                <li><a className="dropdown-item" href="feature-headers-sign-in-sign-up.html">Sign In / Sign Up</a></li>
                                <li><a className="dropdown-item" href="feature-headers-logged.html">Logged</a></li>
                                <li><a className="dropdown-item" href="feature-headers-mini-cart.html">Mini Cart</a></li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Search Styles</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-search-simple-input.html">Simple Input</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-search-simple-input-reveal.html">Simple Input Reveal</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-search-dropdown.html">Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-search-big-input-hidden.html">Big Input Hidden</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-search-full-screen.html">Full Screen</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Extra</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-headers-extra-big-icon.html">Big Icon</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-extra-big-icons-top.html">Big Icons Top</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-extra-button.html">Button</a></li>
                                    <li><a className="dropdown-item" href="feature-headers-extra-background-color.html">Background Color</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Navigations</a>
                              <ul className="dropdown-menu">
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Pills</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-pills.html">Pills</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-pills-arrows.html">Pills + Arrows</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-pills-dark-text.html">Pills Dark Text</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-pills-color-dropdown.html">Pills Color Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-pills-square.html">Pills Square</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-pills-rounded.html">Pills Rounded</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Stripes</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-stripe.html">Stripe</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-stripe-dark-text.html">Stripe Dark Text</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-stripe-color-dropdown.html">Stripe Color Dropdown</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Hover Effects</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-hover-top-line.html">Top Line</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-top-line-animated.html">Top Line Animated</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-top-line-color-dropdown.html">Top Line Color Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-bottom-line.html">Bottom Line</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-bottom-line-animated.html">Bottom Line Animated</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-slide.html">Slide</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-sub-title.html">Sub Title</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hover-line-under-text.html">Line Under Text</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Vertical</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-vertical-dropdown.html">Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-vertical-expand.html">Expand</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-vertical-columns.html">Columns</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-vertical-slide.html">Slide</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Hamburguer</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-hamburguer-sidebar.html">Sidebar</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-hamburguer-overlay.html">Overlay</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Dropdown Styles</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-dark.html">Dark</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-light.html">Light</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-colors.html">Colors</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-top-line.html">Top Line</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-square.html">Square</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-arrow.html">Arrow Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-arrow-center.html">Arrow Center Dropdown</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-modern-light.html">Modern Light</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-modern-dark.html">Modern Dark</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Dropdown Effects</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-no-effect.html">No Effect</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-opacity.html">Opacity</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-move-to-top.html">Move To Top</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-move-to-bottom.html">Move To Bottom</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-move-to-right.html">Move To Right</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-dropdowns-effect-move-to-left.html">Move To Left</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Font Styles</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-font-small.html">Small</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-font-medium.html">Medium</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-font-large.html">Large</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-font-alternative.html">Alternative</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Icons</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-navigations-icons.html">Icons</a></li>
                                    <li><a className="dropdown-item" href="feature-navigations-icons-float-icons.html">Float Icons</a></li>
                                  </ul>
                                </li>
                                <li><a className="dropdown-item" href="feature-navigations-sub-title.html">Sub Title</a></li>
                                <li><a className="dropdown-item" href="feature-navigations-divisors.html">Divisors</a></li>
                                <li><a className="dropdown-item" href="feature-navigations-logo-between.html">Logo Between</a></li>
                                <li><a className="dropdown-item" href="feature-navigations-one-page.html">One Page Nav</a></li>
                                <li><a className="dropdown-item" href="feature-navigations-click-to-open.html">Click To Open</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Page Headers</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-page-headers-overview.html">Overview</a></li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Classic</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-page-headers-classic-small.html">Small</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-classic-medium.html">Medium</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-classic-large.html">Large</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Modern</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-page-headers-modern-small.html">Small</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-modern-medium.html">Medium</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-modern-large.html">Large</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Colors</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-primary.html">Primary</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-secondary.html">Secondary</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-tertiary.html">Tertiary</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-quaternary.html">Quaternary</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-light.html">Light</a></li>				
                                    <li><a className="dropdown-item" href="feature-page-headers-colors-dark.html">Dark</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Title Position</a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Left</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-left-small.html">Small</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-left-medium.html">Medium</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-left-large.html">Large</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Right</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-right-small.html">Small</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-right-medium.html">Medium</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-right-large.html">Large</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Center</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-center-small.html">Small</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-center-medium.html">Medium</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-title-position-center-large.html">Large</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Background</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-page-headers-background-fixed.html">Fixed</a></li>		
                                    <li><a className="dropdown-item" href="feature-page-headers-background-parallax.html">Parallax</a></li>
                                    <li><a className="dropdown-item" href="feature-page-headers-background-video.html">Video</a></li>			
                                    <li><a className="dropdown-item" href="feature-page-headers-background-transparent-header.html">Transparent Header</a></li>			
                                    <li><a className="dropdown-item" href="feature-page-headers-background-pattern.html">Pattern</a></li>			
                                    <li><a className="dropdown-item" href="feature-page-headers-background-overlay.html">Overlay</a></li>			
                                    <li><a className="dropdown-item" href="feature-page-headers-background-clean.html">Clean (No Background)</a></li>	
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Extra</a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Breadcrumb</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-page-headers-extra-breadcrumb-outside.html">Outside</a></li>				
                                        <li><a className="dropdown-item" href="feature-page-headers-extra-breadcrumb-dark.html">Dark</a></li>			
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="feature-page-headers-extra-scroll-to-content.html">Scroll to Content</a></li>			
                                    <li><a className="dropdown-item" href="feature-page-headers-extra-full-width.html">Full Width</a></li>
                                    <li><a className="dropdown-item" href="feature-page-headers-extra-product.html">Product</a></li>
                                    <li><a className="dropdown-item" href="feature-page-headers-extra-mouse-hover-split.html">Mouse Hover Split</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Footers</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-footers-overview.html">Overview</a></li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Classic</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-classic.html#footer">Classic</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-classic-advanced.html#footer">Advanced</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-classic-compact.html#footer">Compact</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-classic-simple.html#footer">Simple</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-classic-locations.html#footer">Locations</a></li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Copyright</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-classic-copyright-light.html#footer">Light</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-copyright-dark.html#footer">Dark</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-copyright-social-icons.html#footer">Social Icons</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Colors</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-primary.html#footer">Primary</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-secondary.html#footer">Secondary</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-tertiary.html#footer">Tertiary</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-quaternary.html#footer			">Quaternary</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-light.html#footer">Light</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-classic-colors-light-simple.html#footer">Light Simple</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Modern</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-modern.html#footer">Modern</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-modern-font-style-alternative.html#footer">Font Style Alternative</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-modern-clean.html#footer">Clean</a></li>	
                                    <li><a className="dropdown-item" href="feature-footers-modern-useful-links.html#footer">Useful Links</a></li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Background</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-modern-background-image-simple.html#footer">Image Simple</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-modern-background-image-advanced.html#footer">Image Advanced</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-modern-background-video-simple.html#footer">Video Simple</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Call to Action</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-modern-call-to-action-button.html#footer">Button</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-modern-call-to-action-simple.html#footer">Simple</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Blog</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-blog-classic.html#footer">Blog Classic</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">eCommerce</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-ecommerce-classic.html#footer">eCommerce Classic</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Contact Form</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-contact-form-classic.html#footer">Classic</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-contact-form-above-the-map.html#footer">Above the Map</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-contact-form-center.html#footer">Center</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-contact-form-columns.html#footer">Columns</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Map</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="feature-footers-map-hidden.html#footer">Hidden Map</a></li> 
                                    <li><a className="dropdown-item" href="feature-footers-map-full-width.html#footer">Full Width</a></li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu">
                                  <a className="dropdown-item" href="#">Extra</a>
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Simple</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-extra-top-social-icons.html#footer">Top Social Icons</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-extra-big-icons.html#footer">Big Icons</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="feature-footers-extra-recent-work.html#footer">Recent Work</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-extra-reveal.html#footeranchor">Reveal</a></li>
                                    <li><a className="dropdown-item" href="feature-footers-extra-instagram.html#footer">Instagram</a></li>
                                    <li className="dropdown-submenu">
                                      <a className="dropdown-item" href="#">Full Width</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="feature-footers-extra-full-width-light.html#footer">Simple Light</a></li>
                                        <li><a className="dropdown-item" href="feature-footers-extra-full-width-dark.html#footer">Simple Dark</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Admin Extension <span className="tip tip-dark">hot</span><em className="not-included">(Not Included)</em></a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-admin-forms-basic.html">Forms Basic</a></li>
                                <li><a className="dropdown-item" href="feature-admin-forms-advanced.html">Forms Advanced</a></li>
                                <li><a className="dropdown-item" href="feature-admin-forms-wizard.html">Forms Wizard</a></li>
                                <li><a className="dropdown-item" href="feature-admin-forms-code-editor.html">Code Editor</a></li>
                                <li><a className="dropdown-item" href="feature-admin-tables-advanced.html">Tables Advanced</a></li>
                                <li><a className="dropdown-item" href="feature-admin-tables-responsive.html">Tables Responsive</a></li>
                                <li><a className="dropdown-item" href="feature-admin-tables-editable.html">Tables Editable</a></li>
                                <li><a className="dropdown-item" href="feature-admin-tables-ajax.html">Tables Ajax</a></li>
                                <li><a className="dropdown-item" href="feature-admin-charts.html">Charts</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Sliders</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index-slider-revolution.html">Revolution Slider</a></li>
                                <li><a className="dropdown-item" href="index-slider-owl.html">Owl Slider</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Layout Options</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-layout-boxed.html">Boxed</a></li>
                                <li><a className="dropdown-item" href="feature-layout-dark.html">Dark</a></li>
                                <li><a className="dropdown-item" href="feature-layout-rtl.html">RTL</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Extra</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="feature-cursor-effect.html">Cursor Effect</a></li>
                                <li><a className="dropdown-item" href="feature-grid-system.html">Grid System</a></li>
                                <li><a className="dropdown-item" href="feature-reading-progress.html">Reading Progress</a></li>
                                <li><a className="dropdown-item" href="feature-lazy-load.html">Lazy Load</a></li>
                                <li><a className="dropdown-item" href="feature-page-loading.html">Page Loading</a></li>
                                <li><a className="dropdown-item" href="feature-page-transition.html">Page Transition</a></li>
                                <li><a className="dropdown-item" href="feature-side-panel.html">Side Panel</a></li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item" href="feature-gdpr.html">GDPR</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Headsets
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Contact Us</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="contact-us-advanced.php">Contact Us - Advanced</a></li>
                                <li><a className="dropdown-item" href="contact-us.html">Contact Us - Basic</a></li>
                                <li><a className="dropdown-item" href="contact-us-recaptcha.html">Contact Us - Recaptcha</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">About Us</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="about-us-advanced.html">About Us - Advanced</a></li>
                                <li><a className="dropdown-item" href="about-us.html">About Us - Basic</a></li>
                                <li><a className="dropdown-item" href="about-me.html">About Me</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Layouts</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="page-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="page-left-sidebar.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="page-right-sidebar.html">Right Sidebar</a></li>
                                <li><a className="dropdown-item" href="page-left-and-right-sidebars.html">Left and Right Sidebars</a></li>
                                <li><a className="dropdown-item" href="page-sticky-sidebar.html">Sticky Sidebar</a></li>
                                <li><a className="dropdown-item" href="page-secondary-navbar.html">Secondary Navbar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Extra</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="page-404.html">404 Error</a></li>
                                <li><a className="dropdown-item" href="page-500.html">500 Error</a></li>
                                <li><a className="dropdown-item" href="page-coming-soon.html">Coming Soon</a></li>
                                <li><a className="dropdown-item" href="page-maintenance-mode.html">Maintenance Mode</a></li>
                                <li><a className="dropdown-item" href="page-search-results.html">Search Results</a></li>
                                <li><a className="dropdown-item" href="sitemap.html">Sitemap</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Team</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="page-team-advanced.html">Team - Advanced</a></li>
                                <li><a className="dropdown-item" href="page-team.html">Team - Basic</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Services</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="page-services.html">Services - Version 1</a></li>
                                <li><a className="dropdown-item" href="page-services-2.html">Services - Version 2</a></li>
                                <li><a className="dropdown-item" href="page-services-3.html">Services - Version 3</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="page-careers.html">Careers</a></li>
                            <li><a className="dropdown-item" href="page-faq.html">FAQ</a></li>
                            <li><a className="dropdown-item" href="page-login.html">Login / Register</a></li>
                            <li><a className="dropdown-item" href="page-user-profile.html">User Profile</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Mouse pads
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Single Project</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-single-wide-slider.html">Wide Slider</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-small-slider.html">Small Slider</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-full-width-slider.html">Full Width Slider</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-gallery.html">Gallery</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-carousel.html">Carousel</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-medias.html">Medias</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-full-width-video.html">Full Width Video</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-masonry-images.html">Masonry Images</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-left-sidebar.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-right-sidebar.html">Right Sidebar</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-left-and-right-sidebars.html">Left and Right Sidebars</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-sticky-sidebar.html">Sticky Sidebar</a></li>
                                <li><a className="dropdown-item" href="portfolio-single-extended.html">Extended</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Grid Layouts</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-grid-1-column.html">1 Column</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-2-columns.html">2 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-3-columns.html">3 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-4-columns.html">4 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-5-columns.html">5 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-6-columns.html">6 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-no-margins.html">No Margins</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-full-width-no-margins.html">Full Width No Margins</a></li>
                                <li><a className="dropdown-item" href="portfolio-grid-1-column-title-and-description.html">Title and Description</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Masonry Layouts</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-masonry-2-columns.html">2 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-3-columns.html">3 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-4-columns.html">4 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-5-columns.html">5 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-6-columns.html">6 Columns</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-no-margins.html">No Margins</a></li>
                                <li><a className="dropdown-item" href="portfolio-masonry-full-width.html">Full Width</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Sidebar Layouts</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="portfolio-sidebar-right.html">Right Sidebar</a></li>
                                <li><a className="dropdown-item" href="portfolio-sidebar-left-and-right.html">Left and Right Sidebars</a></li>
                                <li><a className="dropdown-item" href="portfolio-sidebar-sticky.html">Sticky Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Ajax</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-ajax-page.html">Ajax on Page</a></li>
                                <li><a className="dropdown-item" href="portfolio-ajax-modal.html">Ajax on Modal</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Extra</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="portfolio-extra-timeline.html">Timeline</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-lightbox.html">Lightbox</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-load-more.html">Load More</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-infinite-scroll.html">Infinite Scroll</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-lazy-load-masonry.html">Lazy Load Masonry</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-pagination.html">Pagination</a></li>
                                <li><a className="dropdown-item" href="portfolio-extra-combination-filters.html">Combination Filters</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Speakers
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Large Image</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-large-image-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-large-image-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-large-image-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="blog-large-image-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Medium Image</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-medium-image-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-medium-image-sidebar-right.html">Right Sidebar </a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Grid</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-grid-4-columns.html">4 Columns</a></li>
                                <li><a className="dropdown-item" href="blog-grid-3-columns.html">3 Columns</a></li>
                                <li><a className="dropdown-item" href="blog-grid-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-grid-no-margins.html">No Margins</a></li>
                                <li><a className="dropdown-item" href="blog-grid-no-margins-full-width.html">No Margins Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-grid-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-grid-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="blog-grid-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Masonry</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-masonry-4-columns.html">4 Columns</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-3-columns.html">3 Columns</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-no-margins.html">No Margins</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-no-margins-full-width.html">No Margins Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-masonry-sidebar-right.html">Right Sidebar </a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Timeline</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-timeline.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-timeline-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-timeline-sidebar-right.html">Right Sidebar </a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Single Post</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-post.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="blog-post-slider-gallery.html">Slider Gallery</a></li>
                                <li><a className="dropdown-item" href="blog-post-image-gallery.html">Image Gallery</a></li>
                                <li><a className="dropdown-item" href="blog-post-embedded-video.html">Embedded Video</a></li>
                                <li><a className="dropdown-item" href="blog-post-html5-video.html">HTML5 Video</a></li>
                                <li><a className="dropdown-item" href="blog-post-blockquote.html">Blockquote</a></li>
                                <li><a className="dropdown-item" href="blog-post-link.html">Link</a></li>
                                <li><a className="dropdown-item" href="blog-post-embedded-audio.html">Embedded Audio</a></li>
                                <li><a className="dropdown-item" href="blog-post-small-image.html">Small Image</a></li>
                                <li><a className="dropdown-item" href="blog-post-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="blog-post-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="blog-post-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Post Comments</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="blog-post.html#comments">Default</a></li>
                                <li><a className="dropdown-item" href="blog-post-comments-facebook.html#comments">Facebook Comments</a></li>
                                <li><a className="dropdown-item" href="blog-post-comments-disqus.html#comments">Disqus Comments</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Monitors
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Single Product</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-product-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-right.html">Right Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="shop-4-columns.html">4 Columns</a></li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">3 Columns</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-3-columns-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-3-columns-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-3-columns-sidebar-right.html">Right Sidebar </a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">2 Columns</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-2-columns-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">1 Column</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-1-column-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="shop-cart.html">Cart</a></li>
                            <li><a className="dropdown-item" href="shop-login.html">Login</a></li>
                            <li><a className="dropdown-item" href="shop-checkout.html">Checkout</a></li>
                            <li><a className="dropdown-item" href="shop-order-complete.html">Order Complete</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Racing
                          </a>
                          <ul className="dropdown-menu">
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">Single Product</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-product-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-right.html">Right Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-product-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="shop-4-columns.html">4 Columns</a></li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">3 Columns</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-3-columns-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-3-columns-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-3-columns-sidebar-right.html">Right Sidebar </a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">2 Columns</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-2-columns-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="shop-2-columns-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">1 Column</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="shop-1-column-full-width.html">Full Width</a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-left.html">Left Sidebar</a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-right.html">Right Sidebar </a></li>
                                <li><a className="dropdown-item" href="shop-1-column-sidebar-left-and-right.html">Left and Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="shop-cart.html">Cart</a></li>
                            <li><a className="dropdown-item" href="shop-login.html">Login</a></li>
                            <li><a className="dropdown-item" href="shop-checkout.html">Checkout</a></li>
                            <li><a className="dropdown-item" href="shop-order-complete.html">Order Complete</a></li>
                          </ul>
                        </li>
                        {/* <li className="dropdown ms-lg-auto">
                          <a href="#" className="dropdown-item">
                            Outlet
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-item">
                            Buy Porto!
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                  <button className="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div role="main" className="main shop pt-4">

    <div className="container">

      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <aside className="sidebar">
            <form action="page-search-results.html" method="get">
              <div className="input-group mb-3 pb-1">
                <input className="form-control text-1" placeholder="Search..." name="s" id="s" type="text"/>
                <button type="submit" className="btn btn-dark text-1 p-2"><i className="fas fa-search m-2"></i></button>
              </div>
            </form>
            <h5 className="font-weight-semi-bold pt-3">Brands</h5>
            <ul className="nav nav-list flex-column">
              <li className="nav-item"><a className="nav-link" href="#">Razer</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Steelseries</a></li>
              <li className="nav-item"><a className="nav-link" href="#">HyperX</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Corsair</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Asus</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Logitech</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Cooler Master</a></li>
            </ul>
            <h5 className="font-weight-semi-bold pt-5">Tags</h5>
            <div className="mb-3 pb-1">
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Wireless</span></a>
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Wired</span></a>
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Lightweight</span></a>
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Palm grip</span></a>
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Claw grip</span></a>
              <a href="#"><span className="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1 me-1">Fingertip grip</span></a>
            </div>
            <div className="row mb-5">
              <div className="col">
                <h5 className="font-weight-semi-bold pt-5">You May Like</h5>
                <div className="product row row-gutter-sm align-items-center mb-4">
                  <div className="col-5 col-lg-5">
                    <div className="product-thumb-info border-0">
                      <a href="shop-product-sidebar-left.html">
                        <div className="product-thumb-info-image">
                          <img alt="" className="img-fluid" src="products/hyperx-origins-60.webp"/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-7 col-lg-7 ms-md-0 ms-lg-0 ps-lg-1 pt-1">
                    <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-2">Keyboard</a>
                    <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                      <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary text-decoration-none">HyperX Origins 60%</a>
                      </h3>
                    <div title="Rated 5 out of 5">
                      <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'dark', 'size':'xs'}"/>
                    </div>
                    <p className="price text-4 mb-0">
                      <span className="sale text-color-dark font-weight-semi-bold">$299,00</span>
                      <span className="amount">$289,00</span>
                    </p>
                  </div>
                </div>
                <div className="product row row-gutter-sm align-items-center mb-4">
                  <div className="col-5 col-lg-5">
                    <div className="product-thumb-info border-0">
                      <a href="shop-product-sidebar-left.html">
                        <div className="product-thumb-info-image">
                          <img alt="" className="img-fluid" src="img/products/product-grey-8.jpg"/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-7 col-lg-7 ms-md-0 ms-lg-0 ps-lg-1 pt-1">
                    <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-2">accessories</a>
                    <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary text-decoration-none">Adventurer Bag</a></h3>
                    <div title="Rated 5 out of 5">
                      <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'dark', 'size':'xs'}"/>
                    </div>
                    <p className="price text-4 mb-0">
                      <span className="sale text-color-dark font-weight-semi-bold">$99,00</span>
                      <span className="amount">$79,00</span>
                    </p>
                  </div>
                </div>
                <div className="product row row-gutter-sm align-items-center mb-4">
                  <div className="col-5 col-lg-5">
                    <div className="product-thumb-info border-0">
                      <a href="shop-product-sidebar-left.html">
                        <div className="product-thumb-info-image">
                          <img alt="" className="img-fluid" src="img/products/product-grey-9.jpg"/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-7 col-lg-7 ms-md-0 ms-lg-0 ps-lg-1 pt-1">
                    <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-2">Gaming Mis</a>
                    <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary text-decoration-none">Baseball Ball</a></h3>
                    <div title="Rated 5 out of 5">
                      <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'dark', 'size':'xs'}"/>
                    </div>
                    <p className="price text-4 mb-0">
                      <span className="sale text-color-dark font-weight-semi-bold">$399,00</span>
                      <span className="amount">$299,00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="col-lg-9 order-1 order-lg-2">

          {/* <div className="masonry-loader masonry-loader-showing"> */}
          <div>
            <div className="row products product-thumb-info-list" data-plugin-masonry data-plugin-options="{'layoutMode': 'fitRows'}">

              <Product />

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="product-thumb-info-badges-wrapper">
<span className="badge badge-ecommerce badge-success">NEW</span>
<span className="badge badge-ecommerce badge-danger">27% OFF</span>
                    </div>

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image product-thumb-info-image-effect">
                        <img alt="" className="img-fluid" src="products/razer-viper-mini.webp"/>

                          <img alt="" className="img-fluid" src="products/razer-viper-mini.webp"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">accessories</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Razer Viper Mini</a>
                      </h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$72.90</span>
                    <span className="amount">$90.90</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/logitech-g-pro-superlight.webp"/>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">Gaming Mis</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Logitech G Pro X Superlight</a></h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$199.00</span>
                    <span className="amount">$239.80</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="product-thumb-info-badges-wrapper">

<span className="badge badge-ecommerce badge-danger">27% OFF</span>
                    </div>

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    {/* <div className="countdown-offer-wrapper">
                      <div className="text-color-light negative-ls-05 text-2" data-plugin-countdown data-plugin-options="{'textDay': 'DAYS', 'textHour': 'HRS', 'textMin': 'MIN', 'textSec': 'SEC', 'date': '2023/01/01 12:00:00', 'numberClass': 'text-color-light', 'wrapperClass': 'text-color-light', 'insertHTMLbefore': '<span>OFFER ENDS IN </span>', 'textDay': 'DAYS', 'textHour': ':', 'textMin': ':', 'textSec': '', 'uppercase': true}"></div>
                    </div> */}

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/logitech-g502-x-plus.webp"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">Gaming Mis</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Logitech G502 X Plus</a>
                      </h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$199.00</span>
                    <span className="amount">$249.00</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/razer-deathadder-v3-pro.webp"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">accessories</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Razer Deathadder V3 Pro</a></h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$229.00</span>
                    <span className="amount">$250.90</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/steelseries-aerox-3.webp"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">accessories</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Steelseries Aerox 3</a><
                          /h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$119.00</span>
                    <span className="amount">$130.80</span>
                  </p>
                </div>
              </div>

              

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="product-thumb-info-badges-wrapper">

{/* <span className="badge badge-ecommerce badge-danger">27% OFF</span> */}
                    </div>

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    {/* <div className="countdown-offer-wrapper">
                      <div className="text-color-light negative-ls-05 text-2" data-plugin-countdown data-plugin-options="{'textDay': 'DAYS', 'textHour': 'HRS', 'textMin': 'MIN', 'textSec': 'SEC', 'date': '2023/01/01 12:00:00', 'numberClass': 'text-color-light', 'wrapperClass': 'text-color-light', 'insertHTMLbefore': '<span>OFFER ENDS IN </span>', 'textDay': 'DAYS', 'textHour': ':', 'textMin': ':', 'textSec': '', 'uppercase': true}"></div>
                    </div> */}

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/razer-deathadder-v3-pro-faker.jpg"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">Gaming Mis</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Razer Deathadder V3 Pro Faker Edition</a>
                      </h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$223.00</span>
                    <span className="amount">$250.00</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/razer-viper-v3-hyperspeed.jpg"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">accessories</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Razer Viper V3 Hyperspeed</a></h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$91.00</span>
                    <span className="amount">$100</span>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="products/cooler-master-mm712.jpg"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">accessories</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">Cooler Master MM712</a></h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$92.00</span>
                    <span className="amount">$100</span>
                  </p>
                </div>
              </div>

            </div>
            <div className="row mt-4">
              <div className="col">
                <ul className="pagination float-end">
                  <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-left"></i></a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <footer id="footer" className="footer-texts-more-lighten">
    <div className="container">
      <div className="row py-4 my-5">
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 className="text-4 text-color-light mb-3">CONTACT INFO</h5>
          <ul className="list list-unstyled">
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">ADDRESS</span> 
              1234 Street Name, City, State, USA
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">PHONE</span>
              <a href="tel:+1234567890">Toll Free (123) 456-7890</a>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">EMAIL</span>
              <a href="mailto:mail@example.com">mail@example.com</a>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">WORKING DAYS/HOURS </span>
              Mon - Sun / 9:00AM - 8:00PM
            </li>
          </ul>
          <ul className="social-icons social-icons-clean-with-border social-icons-medium">
            <li className="social-icons-instagram">
              <a href="http://www.instagram.com/" className="no-footer-css" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
            </li>
            <li className="social-icons-twitter mx-2">
              <a href="http://www.twitter.com/" className="no-footer-css" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="social-icons-facebook">
              <a href="http://www.facebook.com/" className="no-footer-css" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 className="text-4 text-color-light mb-3">CUSTOMER SERVICE</h5>
          <ul className="list list-unstyled mb-0">
            <li className="mb-0"><a href="contact-us-1.html">Help & FAQs</a></li>
            <li className="mb-0"><a href="services.html">Order Tracking</a></li>
            <li className="mb-0"><a href="#">Shipping & Delivery</a></li>
            <li className="mb-0"><a href="#">Orders History</a></li>
            <li className="mb-0"><a href="#">Advanced Search</a></li>
            <li className="mb-0"><a href="#">Login</a></li>
            <li className="mb-0"><a href="about-us-1.html">Careers</a></li>
            <li className="mb-0"><a href="#">About Us</a></li>
            <li className="mb-0"><a href="#">Corporate Sales</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
          <h5 className="text-4 text-color-light mb-3">POPULAR TAGS</h5>
          <ul className="list list-unstyled list-inline mb-0">
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">jeans</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">shoes</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">bag</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">jeasn</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">classic</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">black</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">bag</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">white</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">bag</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">bag</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">shoes</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">bag</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">jeans</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">shoes</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">white</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">black</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">white</a></li>
            <li className="list-inline-item"><a href="#" className="badge badge-dark rounded border border-color-light-3 font-weight-normal text-2 p-2">shoes</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3">
          <h5 className="text-4 text-color-light mb-3">SUBSCRIBE NEWSLETTER</h5>
          <p className="mb-2">Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
          <div className="alert alert-success d-none" id="newsletterSuccess">
            <strong>Success!</strong> You've been added to our email list.
          </div>
          <div className="alert alert-danger d-none" id="newsletterError"></div>
          <form id="newsletterForm" className="form-style-5 opacity-10" action="php/newsletter-subscribe.php" method="POST">
            <div className="row">
              <div className="form-group col">
                <input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <button className="btn btn-primary btn-rounded btn-px-4 btn-py-2 font-weight-bold" type="submit">SUBSCRIBE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-copyright footer-copyright-style-2 pt-4 pb-5">
        <div className="row align-items-center justify-content-md-between">
          <div className="col-12 col-md-auto text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">Porto Template © 2022. All Rights Reserved</p>
          </div>
          <div className="col-12 col-md-auto">
            <div className="payment-cc justify-content-center justify-content-md-end">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-stripe"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>




</>
}

export default Layout;

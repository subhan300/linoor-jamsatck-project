import * as React from "react"
import '../css/style2.css'
import "../css/bootstrap.min.css"
import "../css/fontawesome-all.css"
import "../css/owl.css"
import "../css/flaticon.css"
import "../css/animate.css"
import "../css/jquery-ui.css"
import "../css/jquery.fancybox.min.css"
import "../css/hover.css"
import "../css/custom-animate.css"
import "../css/responsive.css"
import "../css/style.css"
import "../css/custom-animate.css"
import "../css/colors/color-default.css"
// <link href="css/bootstrap.min.css" rel="stylesheet">
// <link href="css/fontawesome-all.css" rel="stylesheet">
// <link href="css/owl.css" rel="stylesheet">
// <link href="css/flaticon.css" rel="stylesheet">
// <link href="css/animate.css" rel="stylesheet">
// <link href="css/jquery-ui.css" rel="stylesheet">
// <link href="css/jquery.fancybox.min.css" rel="stylesheet">
// <link href="css/hover.css" rel="stylesheet">
// <link href="css/custom-animate.css" rel="stylesheet">
// <link href="css/style.css" rel="stylesheet">

// <link href="css/responsive.css" rel="stylesheet">
// <link rel="stylesheet" id="jssDefault" href="css/colors/color-default.css">


const NotFoundPage = () => {
  return (
    <>
    <div className="page-wrapper">
      {/* Preloader */}
      {/* <div class="preloader">
        <div class="icon"></div>
    </div> */}
      {/* Main Header */}
      <header className="main-header header-style-one">
        {/* Header Upper */}
        <div className="header-upper">
          <div className="inner-container clearfix">
            {/*Logo*/}
            <div className="logo-box">
              <div className="logo">
                <a
                  href="index.html"
                  title="Linoor - DIgital Agency HTML Template"
                >
                  <img
                    src="images/logo.png"
                    id="thm-logo"
                    alt="Linoor - DIgital Agency HTML Template"
                    title="Linoor - DIgital Agency HTML Template"
                  />
                </a>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2" />
                <span className="txt">Menu</span>
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="index-main.html">Home</a>
                    </li>
                    <li className="mega_1">
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="about-2.html">About Us</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog</a>
                    </li>
                    <li>
                      <a href="covid-19.html">Covid-19</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="">
                      <div className="dropdowns">
                        <div className="select">
                          <span>English</span>
                        </div>
                        <input type="hidden" name="gender" />
                        <ul className="dropdown-menus">
                          <li id="male">English</li>
                          <li id="male">Hindi</li>
                          <li id="male">Chinese</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* MEGA MENU */}
                <div className="mega_menu ">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 col-6">
                        <div className="inner">
                          <span className="main_head">Services Pages</span>
                          <div className="mt-3 p-1">
                            <a href="services.html">All Services</a>
                            <a href="services-2.html">
                              Services Two <span>New</span>
                            </a>
                            <a href="web-development.html">Website Development</a>
                            <a href="digital-marketing.html">Digital Marketing</a>
                            <a href="seo.html">SEO &amp; Content Writting</a>
                            <a href="app-development.html">App Development</a>
                            <a href="ui-designing.html">UI/UX Designing</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <div className="inner">
                          <span className="main_head">Services Pages</span>
                          <div className="mt-3 p-1">
                            <a href="services.html">All Services</a>
                            <a href="services-2.html">
                              Services Two <span>New</span>
                            </a>
                            <a href="web-development.html">Website Development</a>
                            <a href="digital-marketing.html">Digital Marketing</a>
                            <a href="seo.html">SEO &amp; Content Writting</a>
                            <a href="app-development.html">App Development</a>
                            <a href="ui-designing.html">UI/UX Designing</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <div className="inner">
                          <span className="main_head">Services Pages</span>
                          <div className="mt-3 p-1">
                            <a href="services.html">All Services</a>
                            <a href="services-2.html">
                              Services Two <span>New</span>
                            </a>
                            <a href="web-development.html">Website Development</a>
                            <a href="digital-marketing.html">Digital Marketing</a>
                            <a href="seo.html">SEO &amp; Content Writting</a>
                            <a href="app-development.html">App Development</a>
                            <a href="ui-designing.html">UI/UX Designing</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <div className="inner">
                          <span className="main_head">Services Pages</span>
                          <div className="mt-3 p-1">
                            <a href="services.html">All Services</a>
                            <a href="services-2.html">
                              Services Two <span>New</span>
                            </a>
                            <a href="web-development.html">Website Development</a>
                            <a href="digital-marketing.html">Digital Marketing</a>
                            <a href="seo.html">SEO &amp; Content Writting</a>
                            <a href="app-development.html">App Development</a>
                            <a href="ui-designing.html">UI/UX Designing</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MEGA MENU */}
              </nav>
            </div>
            <div className="other-links clearfix">
              {/* cart btn */}
              {/* <div class="cart-btn">
                        <a href="cart.html" class="theme-btn cart-toggler"><span
                                class="flaticon-shopping-cart"></span></a>
                    </div> */}
              {/*Search Btn*/}
              <div className="search-btn">
                <button type="button" className="theme-btn search-toggler">
                  <span className="flaticon-loupe" />
                </button>
              </div>
              <div className="link-box">
                <div className="call-us">
                  <a className="link" href="tel:6668880000">
                    <span className="icon" />
                    <span className="sub-text">Call Anytime</span>
                    <span className="number">666 888 0000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      {/* End Main Header */}
      {/*Mobile Menu*/}
      <div className="side-menu__block">
        <div className="side-menu__block-overlay custom-cursor__overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        {/* /.side-menu__block-overlay */}
        <div className="side-menu__block-inner ">
          <div className="side-menu__top justify-content-end">
            <a href="#" className="side-menu__toggler side-menu__close-btn">
              <img src="images/icons/close-1-1.png" alt="" />
            </a>
          </div>
          {/* /.side-menu__top */}
          <nav className="mobile-nav__container">
            {/* content is loading via js */}
          </nav>
          <div className="side-menu__sep" />
          {/* /.side-menu__sep */}
          <div className="side-menu__content">
            <p>
              Linoor is a premium Template for Digital Agencies, Start Ups, Small
              Business and a wide range of other agencies.
            </p>
            <p>
              <a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a> <br />{" "}
              <a href="tel:888-999-0000">888 999 0000</a>
            </p>
            <div className="side-menu__social">
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
          {/* /.side-menu__content */}
        </div>
        {/* /.side-menu__block-inner */}
      </div>
      {/* /.side-menu__block */}
      {/*Search Popup*/}
      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* /.search-popup__inner */}
      </div>
      {/* /.search-popup */}
      {/* Banner Section */}
      <section className="page-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(images/background/image-7.jpg)" }}
        />
        <div className="shape-1" />
        <div className="shape-2" />
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>404 Error</h1>
              <div className="page-nav">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index-main.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">Pages</a>
                  </li>
                  <li className="active">404 Error</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}
      {/*Error Section*/}
      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <div className="big-text">
              <img
                src="images/icons/404-image.png"
                id="error-404"
                className="img-fluid"
                alt=""
              />
            </div>
            <h2>Sorry We Can't Find That Page!</h2>
            <div className="text">
              The page you are looking for was moved, removed, renamed or never
              existed.
            </div>
            <div className="error-form">
              <form method="post" action="blog-grid.html">
                <div className="form-group clearfix">
                  <input
                    type="search"
                    name="email"
                    defaultValue=""
                    placeholder="Search here"
                    required=""
                  />
                  <button type="submit" className="theme-btn">
                    <span className="flaticon-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="link-box">
              <a className="theme-btn btn-style-one" href="index-main.html">
                <i className="btn-curve" />
                <span className="btn-title">Back to home</span>
              </a>
            </div>
            <div className="row mt-5 err_link">
              <div className="col-md-6 col-sm-6 col-6">
                <ul>
                  <li>
                    <a href="">Link 1</a>
                  </li>
                  <li>
                    <a href="">Link 2</a>
                  </li>
                  <li>
                    <a href="">Link 3</a>
                  </li>
                  <li>
                    <a href="">Link 4</a>
                  </li>
                  <li>
                    <a href="">Link 5</a>
                  </li>
                  <li>
                    <a href="">Link 6</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <ul>
                  <li>
                    <a href="">Link 1</a>
                  </li>
                  <li>
                    <a href="">Link 2</a>
                  </li>
                  <li>
                    <a href="">Link 3</a>
                  </li>
                  <li>
                    <a href="">Link 4</a>
                  </li>
                  <li>
                    <a href="">Link 5</a>
                  </li>
                  <li>
                    <a href="">Link 6</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Footer */}
      <footer className="main-footer normal-padding">
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              {/*Column*/}
              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget logo-widget">
                  <div className="widget-content">
                    <div className="logo">
                      <a href="index.html">
                        <img id="fLogo" src="images/footer-logo.png" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      Welcome to our web design agency. Lorem ipsum simply free
                      text dolor sited amet cons cing elit.
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#">
                          <span className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <div className="widget-content">
                    <span className="footer_heading">Explore</span>
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Meet Our Team</a>
                          </li>
                          <li>
                            <a href="#">Our Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Latest News</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="#">Support</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Terms of Use</a>
                          </li>
                          <li>
                            <a href="#">Help</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget info-widget">
                  <div className="widget-content">
                    <span className="footer_heading">Contact</span>
                    <ul className="contact-info">
                      <li className="address">
                        <span className="icon flaticon-pin-1" /> 66 Broklyn
                        Street, New York <br />
                        United States of America
                      </li>
                      <li>
                        <span className="icon flaticon-call" />
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                      <li>
                        <span className="icon flaticon-email-2" />
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Column*/}
              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget info-widget">
                  <div className="widget-content">
                    <span className="footer_heading">Contact</span>
                    <ul className="contact-info">
                      <li className="address">
                        <span className="icon flaticon-pin-1" /> 66 Broklyn
                        Street, New York <br />
                        United States of America
                      </li>
                      <li>
                        <span className="icon flaticon-call" />
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                      <li>
                        <span className="icon flaticon-email-2" />
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner clearfix">
              <div className="copyright">
                Copyright © <span id="auto_year" /> by Layerdrops.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    {/*End pagewrapper*/}
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
      <i className="fa fa-angle-up" />
    </a>
  </>
  
  )
}

export default NotFoundPage



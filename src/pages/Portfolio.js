import React from 'react'
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
import "../css/jquery.fancybox.min.css"
import "../css/colors/color-default.css"
function Portfolio() {
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
            <h1>Portfolio</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-main.html">Home</a>
                </li>
                <li className="active">Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Banner Section */}
    {/* Gallery Section */}
    <section className="gallery-section">
      <div className="auto-container">
        {/*MixitUp Galery*/}
        <div className="mixitup-gallery">
          {/*Filter*/}
          <div className="filters centered clearfix">
            <ul className="filter-tabs filter-btns clearfix">
              <li
                className="active filter"
                data-role="button"
                data-filter="all"
              >
                All<sup>[6]</sup>
              </li>
              <li className="filter" data-role="button" data-filter=".branding">
                Branding<sup>[3]</sup>
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".illustration"
              >
                illustration<sup>[3]</sup>
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".photography"
              >
                Photography<sup>[3]</sup>
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".web-design"
              >
                Web Design<sup>[4]</sup>
              </li>
            </ul>
          </div>
          <div className="filter-list row">
            {/* Gallery Item */}
            <div className="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/1.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/1.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Item */}
            <div className="gallery-item mix all photography web-design col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/2.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/2.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Item */}
            <div className="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/3.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/3.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Item */}
            <div className="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/4.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/4.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Item */}
            <div className="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/5.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/5.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Item */}
            <div className="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image">
                  <img src="images/gallery/6.jpg" alt="" />
                </figure>
                <a
                  href="images/gallery/6.jpg"
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                />
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>Graphic</span>
                    </div>
                    <div className="title">
                      <a href="portfolio-single-3.html">Fimlor Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="more-box">
                  <a class="theme-btn btn-style-one" href="portfolio.html">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Load more work</span>
                  </a>
              </div> */}
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

export default Portfolio
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
function Covid() {
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
              <h1> COVID-19</h1>
              <div className="page-nav">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index-main.html">Home</a>
                  </li>
                  <li className="active">Covid-19</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}
      {/*About Section*/}
      <section className="about-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Image Column*/}
            <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div
                  className="image-block wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/img03.png" alt="" />
                </div>
                <div
                  className="image-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/img02.png" alt="" />
                </div>
              </div>
            </div>
            {/*Text Column*/}
            <div className="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title">
                  <h2>About Corona Virus Disease (COVID-19)</h2>
                  <div className="lower-text">
                    COVID-19 is a new illness that can affect your lungs and
                    airways. It's caused by a virus called coronavirus.
                  </div>
                  <div className="text">
                    <p>
                      At the end of December 2019, Chinese public health
                      authorities reported several cases of acute respiratory
                      syndrome in Wuhan City, Hubei province, China. Chinese
                      scientists soon identified a novel coronavirus as the main
                      causative agent and It is a new strain of virus.
                    </p>
                  </div>
                  <div className="text clearfix">
                    <ul>
                      <li>Wash Your Hands For 20sec</li>
                      <li>Cover Nose and Mouth When Sneezing</li>
                      <li>If you are going to use a passage.</li>
                    </ul>
                    {/* <div class="since"><span class="txt">Since <br>2008</span></div> */}
                  </div>
                  <div className="link-box">
                    <a className="theme-btn btn-style-one" href="about.html">
                      <i className="btn-curve" />
                      <span className="btn-title">Discover More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 mx-auto">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          nam maxime? Autem et inventore exercitationem ipsum perferendis
          provident molestiae, accusantium quae, eveniet consequuntur voluptates?
          Quaerat minima ullam quasi corporis tempore. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusantium, nam maxime? Autem et
          inventore exercitationem ipsum perferendis provident molestiae,
          accusantium quae, eveniet consequuntur voluptates? Quaerat minima ullam
          quasi corporis tempore.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          nam maxime? Autem et inventore exercitationem ipsum perferendis
          provident molestiae, accusantium quae, eveniet consequuntur voluptates?
          Quaerat minima ullam quasi corporis tempore. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusantium, nam maxime? Autem et
          inventore exercitationem ipsum perferendis provident molestiae,
          accusantium quae, eveniet consequuntur voluptates? Quaerat minima ullam
          quasi corporis tempore. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusantium, nam maxime? Autem et inventore
          exercitationem ipsum perferendis provident molestiae, accusantium quae,
          eveniet consequuntur voluptates? Quaerat minima ullam quasi corporis
          tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusantium, nam maxime? Autem et inventore exercitationem ipsum
          perferendis provident molestiae, accusantium quae, eveniet consequuntur
          voluptates? Quaerat minima ullam quasi corporis tempore. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Accusantium, nam maxime?
          Autem et inventore exercitationem ipsum perferendis provident molestiae,
          accusantium quae, eveniet consequuntur voluptates? Quaerat minima ullam
          quasi corporis tempore. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusantium, nam maxime? Autem et inventore
          exercitationem ipsum perferendis provident molestiae, accusantium quae,
          eveniet consequuntur voluptates? Quaerat minima ullam quasi corporis
          tempore.
        </p>
      </section>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Latest news &amp; articles</h2>
          </div>
          <div className="row clearfix">
            {/*News Block*/}
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="images/resource/news-1.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix text-dark">
                      <li>
                        <a href="">
                          <span className="far fa-clock" /> 20 Mar
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="far fa-user-circle" /> Author
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="fa fa-list" /> Sports
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="blog_heading">
                    <a href="blog-single.html">
                      basic rules of running web agency business
                    </a>
                  </span>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*News Block*/}
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="images/resource/news-1.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix text-dark">
                      <li>
                        <a href="">
                          <span className="far fa-clock" /> 20 Mar
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="far fa-user-circle" /> Author
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="fa fa-list" /> Sports
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="blog_heading">
                    <a href="blog-single.html">
                      basic rules of running web agency business
                    </a>
                  </span>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*News Block*/}
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="images/resource/news-1.jpg" alt="" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix text-dark">
                      <li>
                        <a href="">
                          <span className="far fa-clock" /> 20 Mar
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="far fa-user-circle" /> Author
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span className="fa fa-list" /> Sports
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="blog_heading">
                    <a href="blog-single.html">
                      basic rules of running web agency business
                    </a>
                  </span>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Footer */}
      <footer className="main-footer ">
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
    {/* SCROLL TO TOP */}
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top ">
      <i className="fa fa-angle-up" />
    </a>
  </>
  
  )
}

export default Covid
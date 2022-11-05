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
function PortfolioSingle() {
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
            <h1>Portfolio Single 3</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-main.html">Home</a>
                </li>
                <li className="active">Portfolio Single 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio-details-header">
      <div className="auto-container clearfix">
        <h2 className="portfolio-details-header__title">filmore experience</h2>
        {/* /.portfolio-details-header__title */}
        <div className="clearfix">
          <div className="portfolio-details-header__image">
            <img
              src="images/update-26-02-2021/resources/portfolio-d-3.jpg"
              alt=""
            />
          </div>
          {/* /.portfolio-details-header__image */}
        </div>
        {/* /.clearfix */}
        <div className="row flex-lg-row-reverse">
          <div className="col-sm-12 col-md-6">
            <div className="portfolio-details-header__main-text">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry has been the standard dummy.
            </div>
            {/* /.portfolio-details-header__text */}
          </div>
          {/* /.col-sm-12 col-md-6 */}
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h3 className="portfolio-details-header__sub-heading">
                  Project demands:
                </h3>
                {/* /.portfolio-details-header__sub-heading */}
                <ul className="list-unstyled portfolio-details-header__list">
                  <li>Website Designing</li>
                  <li>Development</li>
                  <li>Set Up Demo</li>
                </ul>
                {/* /.list-unstyled */}
                <h3 className="portfolio-details-header__sub-heading">
                  Launched in 2021:
                </h3>
                {/* /.portfolio-details-header__sub-heading */}
                <a href="#" className="portfolio-details-header__link">
                  View Website
                </a>
              </div>
              {/* /.col-sm-12 */}
              <div className="col-sm-12 col-md-6">
                <h3 className="portfolio-details-header__sub-heading">
                  Clients:
                </h3>
                {/* /.portfolio-details-header__sub-heading */}
                <p className="portfolio-details-header__text">Jessica Brown</p>
                {/* /.portfolio-details-header__text */}
                <h3 className="portfolio-details-header__sub-heading">
                  Category:
                </h3>
                {/* /.portfolio-details-header__sub-heading */}
                <div className="portfolio-details-header__links">
                  <a href="#">Graphic</a>
                  <a href="#">Illustration</a>
                </div>
                {/* /.portfolio-details-header__links */}
              </div>
              {/* /.col-sm-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.col-sm-12 */}
        </div>
        {/* /.row */}
        <hr className="portfolio-details-header__separator" />
      </div>
      {/* /.auto-container */}
    </section>
    {/* /.portfolio-details__header */}
    <section className="portfolio-details-info">
      <div className="auto-container">
        <div className="row flex-md-row-reverse">
          <div className="col-md-6">
            <div className="portfolio-details-info__image">
              <img
                src="images/update-26-02-2021/resources/portfolio-d-3-1.jpg"
                alt=""
              />
            </div>
            {/* /.portfolio-details-info__image */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6 d-flex">
            <div className="my-auto">
              <div className="portfolio-details-info__content">
                <h3 className="portfolio-details-info__title">
                  Unique layouts
                </h3>
                <p className="portfolio-details-info__text">
                  Tincidunt elit magnis nulla facilisis sagittis sapien in nunc
                  amet ultrices dolores sit ipsum velit quet massa fringilla leo
                  orci met ultrices, dolores sit ipsum velit massa fringilla
                  leo.
                </p>
                {/* /.portfolio-details-info__text */}
              </div>
              {/* /.portfolio-details-info__content */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
        <div className="row flex-md-row-reverse">
          <div className="col-md-6">
            <div className="portfolio-details-info__image">
              <img
                src="images/update-26-02-2021/resources/portfolio-d-3-2.jpg"
                alt=""
              />
            </div>
            {/* /.portfolio-details-info__image */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6 d-flex">
            <div className="my-auto">
              <div className="portfolio-details-info__content">
                <h3 className="portfolio-details-info__title">
                  easy customization
                </h3>
                <p className="portfolio-details-info__text">
                  Tincidunt elit magnis nulla facilisis sagittis sapien in nunc
                  amet ultrices dolores sit ipsum velit quet massa fringilla leo
                  orci met ultrices, dolores sit ipsum velit massa fringilla
                  leo.
                </p>
                {/* /.portfolio-details-info__text */}
              </div>
              {/* /.portfolio-details-info__content */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
        <div className="row flex-md-row-reverse">
          <div className="col-md-6">
            <div className="portfolio-details-info__image">
              <img
                src="images/update-26-02-2021/resources/portfolio-d-3-3.jpg"
                alt=""
              />
            </div>
            {/* /.portfolio-details-info__image */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6 d-flex">
            <div className="my-auto">
              <div className="portfolio-details-info__content">
                <h3 className="portfolio-details-info__title">
                  Project benefits
                </h3>
                <p className="portfolio-details-info__text">
                  Tincidunt elit magnis nulla facilisis sagittis sapien in nunc
                  amet ultrices dolores sit ipsum velit quet massa fringilla leo
                  orci met ultrices, dolores sit ipsum velit massa fringilla
                  leo.
                </p>
                {/* /.portfolio-details-info__text */}
              </div>
              {/* /.portfolio-details-info__content */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.auto-container */}
    </section>
    {/* /.portfolio-details-info */}
    <section className="portfolio-details-video">
      <div className="auto-container">
        <div className="portfolio-details-video__thumbnail">
          <img
            src="images/update-26-02-2021/resources/portfolio-d-video-1.jpg"
            alt=""
          />
          <div className="vid-link">
            <a
              href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
              className="lightbox-image"
            >
              <div className="icon">
                <span className="flaticon-play-button-1" />
                <i className="ripple" />
              </div>
            </a>
          </div>
          {/* /.vid-link */}
        </div>
        {/* /.portfolio-details-video__thumbnail */}
      </div>
      {/* /.auto-container */}
    </section>
    {/* /.portfolio-details-video */}
    <section className="portfolio-details-summery">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="portfolio-details-summery__heading">Conclusion</h3>
            {/* /.portfolio-details-summery__heading */}
            <p className="portfolio-details-summery__text">
              Tincidunt elit magnis nulla facilisis sagittis sapien in nunc amet
              ultrices dolores sit ipsum velit quet massa fringilla leo orci nc
              amet ultrices, dolores sit ipsum velit massa fringilla leo.
            </p>
            {/* /.portfolio-details-summery__text */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <h3 className="portfolio-details-summery__heading">result</h3>
            {/* /.portfolio-details-summery__heading */}
            <p className="portfolio-details-summery__text">
              Tincidunt elit magnis nulla facilisis sagittis sapien in nunc amet
              ultrices dolores sit ipsum velit quet massa fringilla leo orci nc
              amet ultrices, dolores sit ipsum velit massa fringilla leo.
            </p>
            {/* /.portfolio-details-summery__text */}
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.auto-container */}
    </section>
    {/* /.portfolio-details-summery */}
    <div className="post-control">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="control prev">
            <a href="#">
              <span className="fa fa-angle-left" /> &nbsp; Previous
            </a>
          </div>
          <div className="control next">
            <a href="#">
              Next &nbsp;
              <span className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Similar Section */}
    <section className="gallery-section similar-gallery">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>Similar work</h2>
        </div>
        <div className="row clearfix">
          {/* Gallery Item */}
          <div className="gallery-item col-lg-4 col-md-6 col-sm-12">
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
          <div className="gallery-item col-lg-4 col-md-6 col-sm-12">
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
          <div className="gallery-item col-lg-4 col-md-6 col-sm-12">
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
      </div>
    </section>
    {/* News Section */}
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

export default PortfolioSingle
import React from "react";
import "./css/style.css";
import Card1 from "../components/card1";
import Card3 from "../components/card3";
import Card4 from "../components/card4";
import Card5 from "../components/card5";
import Card6 from "../components/card6";
import Footer from "../components/footer";
import products from "../data/data";

const home = () => {
  
  return (
    <>
      <title>Grocery store by mitul gupta</title>
      <link rel="icon" type="image/icon" href="image/favicon.PNG" />
      {/* code for font awesome cdn */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* code for font awesome cdn */}
      {/* code for linking css file */}
      <link rel="stylesheet" href="css/style.css" />
      {/* code for linking css file */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* header section */}
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fa fa-shopping-basket">Grocery</i>
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#products">products</a>
          <a href="#categories">categories</a>
          <a href="#review">review</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div className="fa fa-bars" id="menu-hidden" />
          <div className="fa fa-search" id="search-btn" />
          <div className="fa fa-shopping-cart" id="cart-btn" />
          <div className="fa fa-user" id="login-btn" />
        </div>
        <form className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="search here......"
          />
          <label htmlFor="search-box">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
        </form>
        <div className="shopping-cart">
          <div className="box">
            <i className="fa fa-trash" aria-hidden="true" />
            <img src="image/cart-img-1.png" />
            <div className="content">
              <h3>watermelon</h3>
              <span className="price">$5.99/-</span>
              <span className="quantity">qty : 1/-</span>
            </div>
          </div>
          <div className="box">
            <i className="fa fa-trash" aria-hidden="true" />
            <img src="image/cart-img-2.png" />
            <div className="content">
              <h3>Onion</h3>
              <span className="price">$3.99/-</span>
              <span className="quantity">qty : 2/-</span>
            </div>
          </div>
          <div className="box">
            <i className="fa fa-trash" aria-hidden="true" />
            <img src="image/cart-img-3.png" />
            <div className="content">
              <h3>Chicken</h3>
              <span className="price">$7.99/-</span>
              <span className="quantity">qty : 1/-</span>
            </div>
          </div>
          <div className="total"> total: $18.97/- </div>
          <a href="#" className="btn">
            checkout
          </a>
        </div>
        <form action="#" className="login-form">
          <h3>login Now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            Forget Your Password <a href="#"> Click Here</a>
          </p>
          <p>
            Don't Have An Account <a href="#"> Create Now</a>
          </p>
          <input type="submit" defaultValue="login Now" className="btn" />
        </form>
      </header>
      {/* header section */}
      {/* banner section */}
      <section className="home" id="home">
        <div className="content">
          <h3 style={{ textTransform: "uppercase", letterSpacing: ".5rem" }}>
            Fresh And <span>Organic</span>
          </h3>
          <p>
            This Website Is Designed By mitul gupta Youtube Channel So That
            Everyone Can Learn In An Easy Way That How To Create A Website.
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
      </section>
      {/* banner section */}
      {/* our features section */}
      <section className="features" id="features">
        <h1 className="heading">
          {" "}
          our <span>features</span>{" "}
        </h1>
        <div className="box-container">
          <Card3
            image={"image/feature-img-1.png"}
            title={"Fresh And Organic"}
            desc={
              "Lorem, Ipsum Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!"
            }
          ></Card3>
          <Card3
            image={"image/feature-img-2.png"}
            title={"Fresh Delivery"}
            desc={
              "Lorem, Ipsum Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!"
            }
          ></Card3>
          <Card3
            image={"image/feature-img-3.png"}
            title={"Easy Payments"}
            desc={
              "Lorem, Ipsum Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!"
            }
          ></Card3>
        </div>
      </section>
      {/* our features section */}
      {/* our products section */}
      <section className="features" id="products">
        <h1 className="heading">
          {" "}
          our <span>products</span>
        </h1>

        <div className="box-container">
          {products.map((product) => (
            <Card1
            key={product.id}
              imgName={product.imgName}
              price={product.price}
              productName={product.productName}
            ></Card1>
          ))}
        </div>
      </section>
      {/* our products section */}
      {/* our Categories section */}
      <section className="categories" id="categories">
        <h1 className="heading">
          {" "}
          product <span>categories</span>
        </h1>
        <div className="box-container">
          <Card4
            imgName="image/cat-1.png"
            discount="Upto 45% Off"
            name="Vegetables"
          ></Card4>
          <Card4
            imgName="image/cat-2.png"
            discount="Upto 45% Off"
            name="Fresh Fruits"
          ></Card4>
          <Card4
            imgName="image/cat-3.png"
            discount="Upto 45% Off"
            name="Dairy products"
          ></Card4>
          <Card4
            imgName="image/cat-4.png"
            discount="Upto 45% Off"
            name="Fresh Meat"
          ></Card4>
        </div>
      </section>
      {/* our Categories section */}
      {/* Review section */}
      <section className="categories" id="review">
        <h1 className="heading">
          {" "}
          Customer's <span>Review</span>
        </h1>
        <div className="box-container">
          <Card5></Card5>
          <Card5></Card5>
          <Card5></Card5>
        </div>
      </section>
      {/* Review section */}
      {/* Blog section */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          Our <span>Blogs</span>
        </h1>
        <div className="box-container">
          <Card6></Card6>
          <Card6 imgName="image/blog-3.jpg"></Card6>
          <Card6 imgName="image/blog-2.jpg"></Card6>
        </div>
      </section>
      {/* Blog section */}
      {/* footer section */}
      <section className="footer">
        <Footer></Footer>
        <div className="credit">
          created by <span>mitul gupta</span> | all rights reserved{" "}
        </div>
      </section>
      {/* footer section */}
    </>
  );
};

export default home;

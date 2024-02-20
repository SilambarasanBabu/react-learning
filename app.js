import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="head">
        <div className="logoContainer">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="navContainer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img
          className="food-img"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <h3>Ambur biriyani</h3>
      <h4>biriyani,south Indian</h4>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search">search</div>
      <div className="body-card">
        <div className="rest-container">
          <Card />
          
        </div>
      </div>
    </>
  );
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

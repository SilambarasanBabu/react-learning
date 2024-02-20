import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="head-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img
            className="food-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/25321657A.png"
          />
        </div>
        <h3 className="food-title">Ambur briyani</h3>
        <h4 className="food-details">South indian briyani</h4>
        <h4 className="food-details">4.4 star</h4>
        <h4 className="food-details">45 min</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="search-container">
        <h2 className="search">Search</h2>
      </div>
      <div className="rest-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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

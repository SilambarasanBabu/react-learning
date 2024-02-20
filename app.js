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

const Card = ({ rName, fDetails, star, time }) => {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img
            className="food-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/25321657A.png"
          />
        </div>
        <h3 className="food-title">{rName}</h3>
        <h4 className="food-details">{fDetails}</h4>
        <h4 className="food-details">{star}</h4>
        <h4 className="food-details">{time}</h4>
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
        <Card
          rName="Ambur briyani"
          fDetails="South indian briyani"
          star="4.4 star"
          time="45 min"
        />
        <Card
          rName="star briyani"
          fDetails="North indian briyani"
          star="4.1 star"
          time="40 min"
        />
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

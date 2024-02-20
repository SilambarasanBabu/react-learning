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

const Card = (props) => {
  const { restData } = props;
  const { fname, fdetails, star, time } = restData;

  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img
            className="food-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/25321657A.png"
          />
        </div>
        <h3 className="food-title">{fname}</h3>
        <h4 className="food-details">{fdetails}</h4>
        <h4 className="food-details">{star}</h4>
        <h4 className="food-details">{time}</h4>
      </div>
    </>
  );
};

const restList = [
  {
    id: 1,
    fname: "Biriyani",
    fdetails: "South indian",
    stars: "4.5",
    time: "45min",
  },
  {
    id: 2,
    fname: "Veg-Biriyani",
    fdetails: "South indian",
    stars: "4",
    time: "35min",
  },
  {
    id: 3,
    fname: "Idile",
    fdetails: "South indian",
    stars: "3",
    time: "5min",
  },
  {
    id: 4,
    fname: "Dosa",
    fdetails: "South indian",
    stars: "4.5",
    time: "45min",
  },
  {
    id: 5,
    fname: "Burger",
    fdetails: "North indian",
    stars: "4",
    time: "50min",
  },
  {
    id: 6,
    fname: "Biriyani",
    fdetails: "South indian",
    stars: "4.5",
    time: "45min",
  },
  {
    id: 7,
    fname: "Veg-Biriyani",
    fdetails: "South indian",
    stars: "4",
    time: "35min",
  },
  {
    id: 8,
    fname: "Idile",
    fdetails: "South indian",
    stars: "3",
    time: "5min",
  },
  {
    id: 9,
    fname: "Dosa",
    fdetails: "South indian",
    stars: "4.5",
    time: "45min",
  },
  {
    id: 10,
    fname: "Burger",
    fdetails: "North indian",
    stars: "4",
    time: "50min",
  },
];

const Body = () => {
  return (
    <>
      <div className="search-container">
        <h2 className="search">Search</h2>
      </div>
      <div className="rest-container">
        {restList.map((res) => (
          <Card key={res.id} restData={res} />
        ))}
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

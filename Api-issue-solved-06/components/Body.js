import Card from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [list, setlist] = useState([]);
  const [filterList, setFilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await Data.json();

    setlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (list.length === 0) {
  //   return <Shimmer />;
  // }
  //Using ternary operator for rendering shimmer card with conditional rendering ? :
  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurants); // Update the restaurant list, not the searchText
            }}
          >
            Search
          </button>
        </div>
        <div className="top-container">
          <button
            className="top-btn"
            onClick={() => {
              const topRatedList = list.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredList(topRatedList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterList?.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </>
  );
};

export default Body;

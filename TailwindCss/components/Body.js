import Card from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
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
    console.log(json);
    setlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useStatus();

  if (onlineStatus === false)
    return <h1>Oops Check you're internet Connection Dude;;;;</h1>;

  //Using ternary operator for rendering shimmer card with conditional rendering ? :
  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-green-50">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 rounded-full hover:bg-green-200 bg-green-100 font-semibold"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="px-1 py-1 m-2 rounded-full hover:bg-green-200 bg-green-100 font-semibold"
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
      <div className="flex flex-wrap justify-center">
        {filterList?.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            <Card resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

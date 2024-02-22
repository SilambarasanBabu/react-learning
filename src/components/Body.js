import Card from "./Card";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  const [cd, setCd] = useState(restList);

  useEffect(() => {
    fetecData();
  }, []);

  const fetecData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = data.json();
    console.log(json);
  };
  return (
    <>
      <div className="search-container">
        <button
          className="filter"
          onClick={() => {
            filteredcd = cd.filter((res) => res.stars > 4);
            setCd(filteredcd);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="rest-container">
        {cd.map((res) => (
          <Card key={res.id} restData={res} />
        ))}
      </div>
    </>
  );
};

export default Body;

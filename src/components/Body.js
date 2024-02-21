import Card from "./Card";
import restList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [cd, setCd] = useState(restList);

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

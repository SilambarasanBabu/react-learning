import Card from "./Card";
import restList from "../utils/mockData";
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

export default Body;

import { CDN_URL } from "../utils/constant";
const Card = (props) => {
  const { resData } = props;
  const { name, locality, avgRating, costForTwo, totalRatingsString } =
    resData?.info;
  return (
    <>
      <div className="body-container">
        <div className="p-4 m-4 w-[250px] h-[370] border border-solid border-green-300 rounded-lg bg-green-50 hover:bg-green-100 ">
          <div className="image-container">
            <img
              className="card-image"
              src={CDN_URL + resData?.info?.cloudinaryImageId}
            />
          </div>
          <div className="card-info">
            <h3 className="py-4 font-bold">{name}</h3>
            <h4 className="card-details">Location: {locality}</h4>
            <h4 className="card-details">Rating: {avgRating}</h4>
            <h4 className="card-details">{costForTwo}</h4>
            <h4 className="card-details">Total Rating: {totalRatingsString}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

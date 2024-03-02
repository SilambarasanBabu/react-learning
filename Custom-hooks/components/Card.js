import { CDN_URL } from "../utils/constant";
const Card = (props) => {
  const { resData } = props;
  const { name, locality, avgRating, costForTwo, totalRatingsString } =
    resData?.info;
  return (
    <>
      <div className="body-container">
        <div className="card-container">
          <div className="image-container">
            <img
              className="card-image"
              src={CDN_URL + resData?.info?.cloudinaryImageId}
            />
          </div>
          <div className="card-info">
            <h3 className="card-title">{name}</h3>
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

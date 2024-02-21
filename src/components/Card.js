import { URL_F } from "../utils/constants";
const Card = (props) => {
  const { restData } = props;
  const { fname, fdetails, stars, time } = restData;

  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img className="food-img" src={URL_F} />
        </div>
        <h3 className="food-title">{fname}</h3>
        <h4 className="food-details">{fdetails}</h4>
        <h4 className="food-details">{stars}</h4>
        <h4 className="food-details">{time}</h4>
      </div>
    </>
  );
};

export default Card;

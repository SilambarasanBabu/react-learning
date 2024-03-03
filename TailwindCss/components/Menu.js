import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";

const Menu = () => {
  const { resId } = useParams();
  const resInfo = useMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info || {}; // Add default value for destructuring

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {}; // Add default value for destructuring

  return (
    <>
      <div className="menu-container">
        <h1>{name}</h1>
        <p>
          {cuisines?.join(", ")}--{costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((items) => (
            <li key={items.card.info.id}>{items.card.info.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const Menu = () => {
  const { resId } = useParams();
  const resInfo = useMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info || {}; // Add default value for destructuring

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {}; // Add default value for destructuring

  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(Categories);
  return (
    <>
      <div className="text-center">
        <h1 className="my-6 font-bold text-2xl">{name}</h1>
        <p className="font-semibold text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        {Categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            show={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;

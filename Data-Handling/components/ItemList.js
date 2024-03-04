import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 m-3 border-b-2 border-gray-300 shadow-lg text-left"
        >
          <img src={CDN_URL + item.card.info.imageId} className="w-14" />
          <div className="py-2 ">
            <span>
              {item.card.info.name} - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          <button className="px-4 py-1 m-4 rounded-full hover:bg-green-200 bg-green-100 font-semibold">
            ADD
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

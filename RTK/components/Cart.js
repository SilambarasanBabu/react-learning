import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <button
        onClick={handleClear}
        className="p-2 m-2 rounded-lg bg-green-100 font-bold"
      >
        Clear
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;

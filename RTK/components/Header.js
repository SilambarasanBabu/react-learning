import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useStatus();
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between bg-green-100 shadow-xl">
        <div className="flex items-center">
          <img className="w-24 ml-2" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <h5 className="text-xl hover:text-red-500">
                Online Status: {onlineStatus ? "✅" : "⚠️"}
              </h5>
            </li>
            <li className="px-4">
              <Link className="text-xl hover:text-red-500" to={"/"}>
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link className="text-xl hover:text-red-500" to={"/about"}>
                About
              </Link>
            </li>
            <li className="px-4">
              <Link className="text-xl hover:text-red-500" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="px-4">
              <Link className="text-xl hover:text-red-500" to={"/grocery"}>
                Grocery
              </Link>
            </li>
            <li className="px-4">
              <Link className="text-xl hover:text-red-500" to={"/cart"}>
                Cart-({cartItem.length})
              </Link>
            </li>

            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setloginBtn("Logout")
                  : setloginBtn("Login");
              }}
              className="login-btn text-xl hover:text-red-500"
            >
              {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

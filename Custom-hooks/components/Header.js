import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useStatus();
  return (
    <>
      <div className="head">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-container">
          <ul>
            <li>
              <h5>Online Status: {onlineStatus ? "✅" : "⚠️"}</h5>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li>User</li>
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setloginBtn("Logout")
                  : setloginBtn("Login");
              }}
              className="login-btn"
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

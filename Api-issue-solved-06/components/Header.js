import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <>
      <div className="head">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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

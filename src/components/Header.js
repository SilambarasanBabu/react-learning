import { URL_L } from "../utils/constants";
const Header = () => {
  return (
    <>
      <div className="head-container">
        <div className="logo-container">
          <img className="logo" src={URL_L} />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

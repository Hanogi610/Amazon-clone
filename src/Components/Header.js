import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "./React Context API/StateProvider";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router";

const data = [
  "All",
  "All Departments",
  "Electronics",
  "Computers",
  "Smart Home",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty and Personal care",
  "Women's Fashion",
  "Men's Fashion",
  "Girl's Fashion",
  "Boy's Fashion",
  "Health and Household",
  "Home and Kitchen",
  "Video Games",
];

function Header() {
  const naviagte = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }else{
      naviagte('/login')
    }
  };
  return (
    <div className="header">
      <div className="header__logoContainer">
        <Link to="/">
          <img
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="amazon.logo"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__location">
        <LocationOnOutlinedIcon className="header__locationIcon" />
        <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Vietnam</span>
        </div>
      </div>
      <div className="header__search">
        <select name="type" id="header__dropdown" className="header__dropdown">
          {data.map((e) => {
            return (
              <option className="header__dropdownOption" value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="search__field"
          id="search__input"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">
            Hello, {!user ? "Guest" : user.email}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link style={{color: "white", textDecoration: "none"}} to="/checkout">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

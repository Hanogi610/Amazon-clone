import classes from "./Sidebar.module.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {useStateValue} from './React Context API/StateProvider';

const SBD = [
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
const PF = [
  "Gift Cards",
  "#FoundItOnAmazon",
  "Amazon Live",
  "International Shopping",
  "Amazon Second Chance",
];

export default function Sidebar({ active, setActive }) {
  const [{ user }, dispatch] = useStateValue();
  const [sub, setSub] = useState(true);
  const [lessSBD, setLessSBD] = useState(true);
  const [lessPF, setLessPF] = useState(true);
  const containerSB = useRef(null);
  useEffect(() => {
    setSub(true);
    setLessSBD(true);
  }, [active]);
  // useEffect(()=>{
  //   window.onclick = function(event) {
  //     console.log(event.target);
  //     if (active && event.target !== containerSB) {
  //       setActive(false);
  //       console.log(containerSB);
  //     }
  //   }
  // })
  const onOpen = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const seeAllSBD = () => {
    if (lessSBD) {
      setLessSBD(false);
    } else {
      setLessSBD(true);
    }
  };
  const seeAllPF = () => {
    if (lessPF) {
      setLessPF(false);
    } else {
      setLessPF(true);
    }
  };
  const openSub = () => {
    setSub(false);
  };
  const closeSub = () => {
    setSub(true);
  };
  return (
    <div ref={containerSB}>
      <div
        onClick={onOpen}
        className={`${classes.close_btn} ${!active && classes.close}`}
      >
        X
      </div>
      {!user ? <Link
        to="/login"
        className={`${classes.signin} ${active && classes.opened}`}
      >
        <h1>
          <i className="far fa-user"></i> Hello, Sign in
        </h1>
      </Link> :
      <Link
      to="/checkout"
      className={`${classes.signin} ${active && classes.opened}`}
    >
      <h1>
        <i className="far fa-user"></i> Hello, {user.email}
      </h1>
    </Link>}
      <div className={`${classes.sidebar} ${active && classes.opened}`}>
        <div className={`${classes.main_bar} ${!sub && classes.hidden}`}>
          <h1 style={{ fontSize: "1.1em", paddingTop: "5px" }}>
            Digital Content & Devices
          </h1>
          <span className={classes.item} onClick={openSub}>
            Amazon Music
          </span>
          <span className={classes.item} onClick={openSub}>Kindle E-readers & Books</span>
          <span className={classes.item} onClick={openSub}>Appstore for Android</span>
          <h1 className={classes.title}>Shop By Department</h1>
          {/* this is only a clone site so i use map to make it shorter since it will open up a same sub sidebar 
            when u click on whatever categories */}
          {SBD.map((e) => {
            if (SBD.indexOf(e) < 4) {
              return (
                <span className={classes.item} onClick={openSub}>
                  {e}
                </span>
              );
            } else {
              return (
                <span
                  className={lessSBD ? classes.hide : classes.item}
                  onClick={openSub}
                >
                  {e}
                </span>
              );
            }
          })}
          <span className={classes.show} onClick={seeAllSBD}>
            {lessSBD ? "See All" : "See Less"}
          </span>
          <h1 className={classes.title}>Programs & Features</h1>
          {PF.map((e) => {
            if (PF.indexOf(e) < 4) {
              return (
                <span className={classes.item} onClick={openSub}>
                  {e}
                </span>
              );
            } else {
              return (
                <span
                  className={lessPF ? classes.hide : classes.item}
                  onClick={openSub}
                >
                  {e}
                </span>
              );
            }
          })}
          <span className={classes.show} onClick={seeAllPF}>
            {lessPF ? "See All" : "See Less"}
          </span>
          <h1 className={classes.title}>Help & Settings</h1>
          <span className={classes.item_x}>Your Account</span>
          <span className={classes.item_x}>
            <p>
              <i className="fa-solid fa-globe"></i> English
            </p>
          </span>
          <span className={classes.item_x}>United States</span>
          <span className={classes.item_x}>Customer Service</span>
          <span className={classes.item_x}>
            <Link to="/login">Sign In</Link>
          </span>
          <span className={classes.item_x}></span>
        </div>

        <div className={`${classes.main_bar} ${sub && classes.hidden_sub}`}>
          <div className={classes.sub_nav} onClick={closeSub}>
            <i className="fa-solid fa-arrow-left"></i> MAIN MENU
          </div>
          <div>
            <h1
              style={{ border: "none", paddingTop: "20px" }}
              className={classes.title}
            >
              Example
            </h1>
            <span className={classes.item_x}>Content#</span>
            <span className={classes.item_x}>Content#</span>
            <span className={classes.item_x}>Content#</span>
            <span className={classes.item_x}>Content#</span>
          </div>
          <div>
            <h1 className={classes.title}>Example</h1>
            <span className={classes.item_x}>Content#</span>
            <span className={classes.item_x}>Content#</span>
            <span className={classes.item_x}>Content#</span>
          </div>
        </div>
      </div>
    </div>
  );
}

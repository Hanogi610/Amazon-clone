import React from "react";
import Header from "./Components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {useEffect} from 'react';
import {useStateValue} from './Components/React Context API/StateProvider';
import { auth } from "./Firebase/Firebase";
import Checkout from "./Pages/Checkout";
 
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </>
  );
}

export default App;

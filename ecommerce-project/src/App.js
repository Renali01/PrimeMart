import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() =>{
    // will only run once when app comonent loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        // user logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser 
        })
      }
      else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/login"
              element={
                <>
                  <Login />
                </>
              } />
          <Route path="/checkout"
            element={
              <>
                <Checkout />
              </>
            } />
          <Route path="/payment"
            element={
              <>
                <Payment />
              </>
            } />
          <Route path="/"
            element={
            <>
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

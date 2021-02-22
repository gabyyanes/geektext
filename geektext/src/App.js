import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

/*
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));

//Extracts data and makes it easily readible
app.use(bodyParser.urlencoded({ extened: false }));
app.use(bodyParser.json());

//Adding headers to response
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  //Check if the incoming request is equal to OPTIONS
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//If you reach this, no route was able to handle the request
app.use((req, res, next) => {
  //Create a new constant error
  const error = new Error("Not found");
  error.status = 404;

  //execute next method and pass error along with it
  next(error);
});

//Handles all kinds of errors or errors thrown from anywhere in the app
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

*/

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        {/*Render the Header component*/}
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

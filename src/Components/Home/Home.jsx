import React from "react";
import './home.css'
import { useNavigate } from "react-router-dom";


export const Home = () => {
const navigate = useNavigate();

const navigateTo = (link) => {
    navigate(link);
}
  return (
    <>
      <h1>Welcome to the AMBULA Company</h1>

      <div className="home_container">


        <div  onClick={() => navigateTo('todo')}>
          <button className="btn">To Do List App</button>
        </div>

        <div  onClick={() => navigateTo('shoppingCart')}>
          <button className="btn">Shopping List App</button>
        </div>

        <div  onClick={() => navigateTo('weather')}>
          <button className="btn">Weather Data App</button>
        </div>

      </div>
    </>
  );
};

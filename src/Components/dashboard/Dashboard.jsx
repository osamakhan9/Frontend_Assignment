import React from "react";
import { Link  } from "react-router-dom";
import "./dashboard.css";
import All_Rotes from "../../FileRoutes/All_Rotes";


export const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

          <li>
            <Link to="contact">Contact Us</Link>
          </li>
         
        </ul>
      </div>

      <div>
        <All_Rotes/>
      </div>

    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Admin</h1>
    <p>React, Redux and React Router for responsive pages</p>
    <Link to="about" className="btn btn-primary btn-large">
      Learn More
    </Link>
  </div>
);
export default HomePage;

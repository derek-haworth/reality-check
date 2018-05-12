import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div>
        <h1> Welcome to your Reality Check</h1>
        <h3>If you fail here, you fail at life.</h3>
        <Link to='/game'>Begin</Link>
    </div>
);

export default Home;
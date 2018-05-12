import React from "react";
import "./NotFound.css";

const NotFound = (props) => (
   <div className="no-match">The page you are looking for at <code>{props.location.pathname}</code> does not exist.</div>
);

export default NotFound;

import React from "react";
import "./style.css";

function Title(props) {

return (
  <div className="nav navbar">
   <h1>Clicky Game!</h1>
   <h2>You guessed correctly!</h2>
   <h2 className="title"> Score: {props.count} | Top Score: {props.topScore}</h2>
   </div>
)
}

export default Title;



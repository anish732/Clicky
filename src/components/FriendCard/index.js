import React from "react";
import "./style.css";

function FriendCard(props) {
  
  return (
    <div className="media">
      <div className="img-container">
        <img className="img-thumbnail" alt={props.name} onClick={()=> props.handleIncrement(props.id)} src={props.image} />
      </div>
    </div>
  );
  }

export default FriendCard;

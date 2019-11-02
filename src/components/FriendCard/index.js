import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card corners">
      <div className="img-container">
      <span onClick={() => props.friendClick(props.id)} className="remove">
        <img className="character" alt={props.name} src={props.image} />
      </span>
      </div>
    </div>
  );
}

export default FriendCard;

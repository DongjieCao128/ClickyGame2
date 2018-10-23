import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
 
    <div className="img-container">
      <img alt={props.name} src={props.image} alreadyclicked={props.clicked}     
      onClick={()=> props.randomize(props.id, props.clicked)} id={props.id}/>
    </div>
   


);

export default FriendCard;

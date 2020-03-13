import React from 'react';
import './card-component.css';


function Card(props){
    return (
        <div className="list-item">
            <li>{props.fruitName}</li>
            <li>{props.fruitValue}</li>
            <button onClick={props.deleteHandler} className="deleteBtn">Delete</button>
        </div>
    );
}

export default Card;

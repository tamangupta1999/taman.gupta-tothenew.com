import React from 'react';
import './card-component.css';


function Card(props){
    console.log("[card] rendering")
    return (
        <div className="list-item">
            <li key="i1">{props.fruitName}</li>
            <li key="i2">{props.fruitValue}</li>
            <button key="i3" className="editBtn" onClick={props.editHandler}>Edit</button>
            <button key="i4" className="deleteBtn" onClick={props.deleteHandler}>Delete</button>
        </div>
    );
}

export default Card;

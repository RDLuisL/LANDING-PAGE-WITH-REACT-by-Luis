import React from "react";

function Card(props) {
    
    return (
    <div className="card" style={{width: "18rem"}}>
        <img src = {props.url} className="card-img-top" alt = "logo de equipo"/>
        <div className="card-body">
            <h5 className = "card-title"> Leones del Caracas</h5>
            <p> className = "Los eternos campeones...."</p>
            <a href="#" className="btn btn-primary">
                Go Somewhere
            </a>


        </div>
        


    </div>

);
}
export default Card;

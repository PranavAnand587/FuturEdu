import React from "react";

import "../style/level-two-cards.css";

const LevelTwoCards = props => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.image} className="card-img" alt={"Image of " + props.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        {props.prerequisites != null 
                        ?    <div>
                                <hr />
                                <p className="text-muted">
                                    <small>Prerequisites : {props.prerequisites}</small>
                                </p>
                            </div>
                        :   null
                    }
                    </div>
                </div>
            </div>
        </div>    )
}

export default LevelTwoCards;
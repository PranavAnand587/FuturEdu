import React, { useEffect, useState } from "react";
import { useParams,Redirect } from "react-router-dom";

import Card from "./LevelTwoCards";


function LevelTwo() {

    let { lvltwo } = useParams();

    const [ cardsData, setCardsData ] = useState([]);

    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch("http://127.0.0.1:8000/app/category/"+ lvltwo +"?format=json")
            const cards = await res.json()
            setCardsData(cards.card_set)
        }
        fetchCardData()
    },[lvltwo])

    let CardComponents;

    if(cardsData){
        CardComponents = cardsData.map(topic => {
            return(
                <div className="row mt-4 mb-3">
                    <div className="col">
                        <Card 
                            id={topic.id}
                            name={topic.name}
                            description={topic.description}
                            prerequisites={topic.prerequisites ? topic.prerequisites : undefined}
                        />
                    </div>
                </div>
            )
        })
    }

    console.log(CardComponents)

    return (
        <div className="container">
            {!CardComponents
                ? <Redirect to="/error" />
                : CardComponents
            }
        </div>
    )
}

export default LevelTwo;
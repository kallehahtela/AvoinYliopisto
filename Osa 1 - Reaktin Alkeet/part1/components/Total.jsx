import React from "react";

const overview = 'Overall different parts and exercises of the course'
const partsTotal = 3
const exercisesTotal = 31

const Total = () => {
    return (
        <div>
            <h3>
                {overview}
            </h3>
            <p>
                There is all together {partsTotal} different parts. Exercises sum is {exercisesTotal}.
            </p>
        </div>
    )
}

export default Total;
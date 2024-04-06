import React from "react";

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    console.log('total exercises:', totalExercises)

    return (
        <div>
            <p>Total number of exercises: {totalExercises}</p>
        </div>
    );
};

export default Total;
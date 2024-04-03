import React from "react";

    // here we will define the data within the Content component
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 },
    ];

    const Content = () => {
        return (
            <div>
                {parts.map((part, index) => (
                    <p key={index}>
                        {part.name}, {part.exercises}
                    </p>
                ))}
            </div>
        );
    }


export default Content;
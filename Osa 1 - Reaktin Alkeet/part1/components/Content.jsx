import React from "react";

const Content = ({ title, parts }) => {
    return (
        <div>
        <h3>{title}</h3>
            <ul>
                {parts.map(part => (
                    <li key={part.name}>
                        {part.name} - Exercises: {part.exercises}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
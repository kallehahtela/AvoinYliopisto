import React from "react";

import Header from '../components/Header'
import Content from "../components/Content";
import Total from "../components/Total";

const course = {
  name: 'Half Stack application development',
  contentTitle: 'Content of the course',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] 
}

const now = new Date()

const App = () => {
  console.log('current time:', now.toString());
  console.log('course name:', course.name);
  console.log('content title:', course.contentTitle)
  console.log('parts & exercises:', course.parts)

  return (
    <div>
      <Header course={course.name} /> {/*This will add the course name as a prop*/}
      <hr />
      <Content title={course.contentTitle} parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  );

}

export default App
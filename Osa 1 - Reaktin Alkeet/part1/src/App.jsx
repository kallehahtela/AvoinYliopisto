import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Total from "../components/Total";

const App = (course) => {

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App
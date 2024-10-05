import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Component Demo1 </h1>
        <p> Welcome Developers :)</p>

        <br/>
        <h3> Custom Sub component with properties </h3>
        <Ninjas name="Ram" age="30" belt="black" /> <br />
        <Ninjas name="Raj" age="40" belt="yellow" /> <br />
        <Ninjas name="Rakesh" age="50" belt="green" /> <br />


      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Component Demo1 </h1>
        <p> Welcome Developers :)</p>

        <br/>
        <h3> Custom Sub component </h3>
        <Ninjas />


      </div>
    );
  }
}

export default App;
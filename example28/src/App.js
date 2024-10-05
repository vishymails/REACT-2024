import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas : [
      {name : "Ram", age : 30, belt : 'black', id : 1},
      {name : "Raj", age : 40, belt : 'green', id : 2},
      {name : "Rakesh", age : 50, belt : 'yellow', id : 3},
      {name : "Ramesh", age : 20, belt : 'pink', id : 4}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React Component Demo1 </h1>
        <p> Welcome Developers :)</p>

        <br/>
        <h3> Custom Sub component with properties and state - Functional Object style</h3>
        <Ninjas ninjas = {this.state.ninjas} />
       

      </div>
    );
  }
}

export default App;
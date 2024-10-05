class App extends React.Component {
    state = {
        name : "Ram",
        age : 30
    }

    handleMouseOver(e) {
        console.log(e.target, e.pageX);
    }

    handleClick = (e) => {
        console.log(e.target);
        console.log(this.state);
        this.setState({
            name : 'Yoshi'
        });
    }

    handleCopy(e) {
        console.log("Try being original for once ");
    }

    render() {
        return (
            <div className="app-content">
                <h1> Hello Developers </h1>
                <p> My name is : {this.state.name } and I am { this.state.age } </p>
                <button onClick={this.handleClick}> Click Me</button>
                <button onMouseOver={this.handleMouseOver}> Hover Me </button>
                <p onCopy = {this.handleCopy}> What ? </p>

            </div>
        )
    }
}


//ReactDOM.render(<App />, document.getElementById('app'));

const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
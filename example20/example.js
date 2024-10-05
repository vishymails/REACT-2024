class App extends React.Component {
    state = {
        name : "Ram",
        age : 30
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state);
    }
    render() {
        return (
            <div className="app-content">
                <h1> Hello Developers </h1>
                <p> My name is : {this.state.name } and I am { this.state.age } </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


//ReactDOM.render(<App />, document.getElementById('app'));

const domContainer = document.querySelector("#app")
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
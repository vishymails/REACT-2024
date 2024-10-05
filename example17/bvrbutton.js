const e = React.createElement;

class BvrButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked : false};
    }

    render() {
        if(this.state.liked) {
            return 'I like Bvr button component';
        }

        return e(
            'button',
            {
                onClick : () => this.setState({ liked : true})
            },
            'Bvr'
        );
    }
}

const domContainer = document.querySelector("#bvr_button_container")
const root = ReactDOM.createRoot(domContainer);
root.render(e(BvrButton));
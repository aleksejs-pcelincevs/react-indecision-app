class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Some text</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;

// const toggleVisibility = () => {
//     visible = !visible;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visible ? 'Hide details' : 'Show details'}</button>
//             {visible && <p>Some text</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };


// render();
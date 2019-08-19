import React, { Component } from 'react';

class boton extends Component {
    handleClick = () => {
        alert('Add task');
    }

    render() {
        return (
            <button onClick={this.handleClick} className="m-1 text-teal-100 inline-block hover:bg-teal-800 bg-teal-900 rounded-lg block p-1">
                {this.props.bText}
            </button>
        );
    }
}
export default boton;
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class DivN2 extends Component {
    handleClick = () => {
        ReactDOM.unmountComponentAtNode(document.getElementsByName('aa'));
    }
    render() {
        return (
            <div name="aa" onClick={this.handleClick} className="hover:bg-teal-500 bg-teal-600 rounded-lg hover:text-teal-900 text-teal-100 m-2 cursor-pointer shadow-2xl">
                <p className="truncate p-1">hola hola hola hola</p>
            </div>
        );
    }
}

export default DivN2;

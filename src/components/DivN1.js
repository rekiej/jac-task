import React, { Component } from 'react';
import DivN2 from './DivN2';


class DivN1 extends Component {
    render() {
        return (
            <div className="bg-teal-900 w-56 m-4 p-2 rounded-lg shadow-2xl">
                <h2 className="text-xl text-teal-100 font-mono">
                    {this.props.dText}
                        <div id="a" className="rounded-lg h-64 bg-white overflow-y-scroll">
                            <DivN2></DivN2>
                    </div>
                </h2>
            </div>
        );
    }
}

export default DivN1;

import React, { Component } from 'react';
import Cabesera from './Cabesera';
import DivN1 from './DivN1';
import Boton  from './Boton';

class DivN0 extends Component {
    
    render() {
        return (
            <div id="A" className="h-screen bg-teal-700 scrolling-touch ">
                <Cabesera></Cabesera>
                <div className="px-4 flex flex-wrap justify-between">
                    <DivN1 id="To-do" dText="To-do"></DivN1>
                    <DivN1 id="In-process" dText="In-process"></DivN1>
                    <DivN1 id="Done" dText="Done"></DivN1>
                </div>
                <Boton bText="Add-Task"></Boton>
            </div>
        );
    }
}

export default DivN0;
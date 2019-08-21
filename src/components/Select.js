import React from 'react';
import Boton from './Boton'

export default class Selectj extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'toDo'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="mx-auto">
          <form onSubmit={this.handleSubmit}>
            <label>
              <p className="inline-block">State:</p>
              <select className="" value={this.state.value} onChange={this.handleChange}>
                <option value="toDo">To do</option>
                <option value="inProcess">In process</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <Boton type="submit" bText="texto"></Boton>
          </form>
        </div>
      );
    }
}
  
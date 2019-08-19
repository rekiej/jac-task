import React, {Component} from 'react';

class Popup extends Component {
  render() {
    return (
      <div className="absolute p-64">
        <div className='p-10 w-48 h-32 bg-gray-200 rounded-lg'>
          <h1>{this.props.text}</h1>
        <button 
        className="m-1 text-teal-100 inline-block 
        hover:bg-teal-800 bg-teal-900 rounded-lg block p-1 float-left my-3 font-bold"
        onClick={this.props.closePopup}>
            close
        </button>
        </div>
      </div>
    );
  }
}

export default Popup
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    render() {
        const {taski} = this.props;
        return <div> 
        <div className="w-2/3 hover:bg-teal-500 bg-teal-600 rounded-lg 
        hover:text-teal-900 text-teal-100 m-2 max-h-full cursor-pointer 
        p-2 shadow-2xl float-left" >    
            {taski.id}-  {taski.title} 
        </div>
            <button 
            className="m-1 text-teal-100 inline-block 
                hover:bg-red-600 bg-red-700 rounded-lg block p-1 float float-left my-3 px-2 font-bold"
                onClick={this.props.deleteTask.bind(this, taski.id)}>
                    X
            </button>
            <button 
                className="m-1 text-teal-100 inline-block 
                hover:bg-teal-800 bg-teal-900 rounded-lg block p-1 float-left my-3 font-bold"
                onClick={this.props.chaTopro.bind(this, taski.id)}>
                    Done
            </button>
        </div>
        
    }
}

Task.propTypes = {
    taski: PropTypes.object.isRequired
}

export default Task
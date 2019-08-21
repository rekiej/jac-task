import React, {Component} from 'react';
import Task from './task-format'
import PropTypes from 'prop-types';

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => 
            <Task 
                key={task.id} 
                taski={task} 
                deleteTask={this.props.deleteTask}
                chaTopro={this.props.chaTopro}
                togglePopup={this.props.togglePopup} 
            />);
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks;
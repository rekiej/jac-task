import React, {Component} from 'react';

class TaskForms extends Component {
  
  state= {
    title: '',
    description: ''
  }
  
  onSubmit = e => {
    this.props.addTask(this.state.title,this.state.description)
    console.log(this.div)
    e.preventDefault();
    this.setState ({
      title: '',
      description: ''
    })
  }
  
  onChange = e => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: (e.target.value)
    })
  }

  render() {
    return ( 
      <div className="text-gray-900 text-center">
        <form onSubmit={this.onSubmit}>
          <h2>Type task title</h2>
          <input 
            className="w-3/4"
            type="text" 
            name="title"
            placeholder="Write Title" 
            onChange={this.onChange} 
            value={this.state.title} />
          <br/>
          <h2>Type task description</h2>
          <textarea 
            className="h-10 overflow-y-scroll w-3/4"
            name="description"
            placeholder="Write a description" 
            onChange={this.onChange} 
            value={this.state.description}/>
          <br/>
          <input 
            className="m-1 text-teal-100 inline-block 
            hover:bg-teal-800 bg-teal-900 cursor-pointer
            rounded-lg block p-1"
            type="submit" 
            value="add"
          />
        </form>
      </div>
    )
  }
  
  }

  export default TaskForms
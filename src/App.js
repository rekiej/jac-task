import React from 'react';
//section where the components are import
//style components
import Cabesera from './components/Cabesera';
//import DivN1 from './components/DivN1';
import Boton  from './components/Boton';
//functionality components
//import Formss from './components/Formss'
import tasks from './components/tasks.json'
import Tasks from './components/listtask'
import Popup from './components/popup'; 


class App extends React.Component {
 state = {
   tasks: tasks,
   tasks1: tasks,
   showPopup: false
 }
 //add 
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length +1
    }

    
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    
  }
 //delete
  deleteTask = id => {
    const delTask = this.state.tasks.filter(tasks => tasks.id !== id);
    this.setState({tasks: delTask});

  }
  deleteTask1 = id => {
    const delTask1 = this.state.tasks1.filter(tasks => tasks.id !== id);
    this.setState({tasks1: delTask1});
  }

  //editing
 /* editRow = id =>{
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: '', username: '' };
    const [currentTask, setCurrentTask] = useState(initialFormState);
    const editRow = task => {
    setEditing(true)
  
    setCurrentUser({ id: task.id, title: task.title, description: task.description })
  }
}*/

 //change parents
  chaTopro = id => {
    const chaTask = this.state.tasks.filter(tasks => tasks.id === id);
    const delTask = this.state.tasks.filter(tasks => tasks.id !== id);
    console.log(chaTask)
    this.setState({tasks: delTask});
   
    this.setState({tasks1: [...this.state.tasks1, chaTask]}); 
    
  }
 //popups
 constructor(props){  
  super(props);  
  this.state = { showPopup: false };  
  }  
  
    togglePopup() {  
  this.setState({  
    showPopup: !this.state.showPopup  
    });  
  } 


  render() {
    return (<div className="body h-screen bg-teal-700 scrolling-touch">
        <Cabesera/>
        <div className="px-4 flex flex-wrap justify-between">
          <div className="bg-teal-900 w-56 m-4 p-2 rounded-lg shadow-2xl">
              <h2 className="text-xl text-teal-100 font-mono">
                  {this.props.dText}
                      <div id="a" className="rounded-lg h-64 bg-white overflow-y-scroll">
                        <Boton bText="Add-Task" onClick={this.togglePopup.bind(this)}/>
                        <div className="bg-teal-900 w-64 m-4 p-2 rounded-lg shadow-2xl">
                          <h2 className="text-xl text-teal-100 font-mono">
                              {this.props.dText}
                                <div id="a" className="rounded-lg h-64 bg-white overflow-y-scroll">
                                  {this.state.showPopup ?  
                                    <Popup  
                                    text='Click "Close Button" to hide popup'  
                                    closePopup={this.togglePopup.bind(this)} addTask={this.addTask} 
                                    />  
                                    : null  
                                  }  
                              </div>
                          </h2>
                        </div>
                        <div className="mt-5">
                          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} chaTopro={this.chaTopro}/>
                        </div>
                  </div>
              </h2>
          </div>

          <div name="in process" className="bg-gray-600">
           <h2>IN PROCESS</h2>
           <div>
             <Tasks tasks={this.state.tasks1} deleteTask={this.deleteTask1} chaTopro={this.chaTopro}/>

           </div>
          </div>
          <div name="done" className="bg-gray-700">
           <h2>DONE</h2>
          </div>
        </div>
      </div>
    )
  }

}

export default App;

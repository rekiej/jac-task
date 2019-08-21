import React from 'react';
//section where the components 
import Formss from './components/Formss'
import tasks from './components/tasks.json'
import Cabesera from './components/Cabesera';
import Tasks from './components/listtask'
import Tasks1 from './components/listtask1'
import Popup from './components/popup2'; 


class App extends React.Component {
 state = {
   tasks: tasks,
   tasks1: tasks,
   btasks: tasks
 }
 //add 
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1
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
    console.log(chaTask.map(tasks => tasks.title))
    
    const cchaTask = {
        title: chaTask.map(tasks => tasks.title),
        description: chaTask.map(tasks => tasks.description),
        id: this.state.tasks1.length + 1
      }   
      console.log(cchaTask, 'hila')
    this.setState({tasks1: [...this.state.tasks1, cchaTask]}); 
    this.setState({tasks: delTask});
   
  }
 //popups
 //constructor() {
 //   super();
 //   this.state = {
 //     showPopup: false
 //   };
 // }
  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    });
    const haTask = this.state.tasks.filter(tasks => tasks.id === 1);
    console.log(haTask.map(tasks => tasks.title))
    this.setState({btasks: haTask})
    const hhaTask = {
        title: haTask.map(tasks => tasks.title),
        description: haTask.map(tasks => tasks.description),
        id: this.state.tasks1.length + 1
    } 
    console.log(hhaTask)
  } 
    

  render() {
    return (<div className="body h-screen bg-teal-700 scrolling-touch">
      <Cabesera/> 
        <div className="px-4 flex flex-wrap justify-between">
            <div className="bg-teal-900 w-1/3 m-4 p-2 rounded-lg shadow-2xl ml-20">
                <h2 className="text-xl text-teal-100 font-mono">
                     <div id="a" className="rounded-lg h-56 py-1 bg-white">
                        <div  
                            className="bg-teal-600 rounded-lg text-teal-100 m-2 p-2 shadow-2xl">
                                <Formss className="text-center" addTask={this.addTask}/>
                        </div>
                    </div>
                    <br/>
                    TO DO
                            <button className="rounded-lg bg-gray-700 ml-4" onClick={this.togglePopup.bind(this)}>
                                casa
                            </button>
                     <div id="a" className="rounded-lg h-64 bg-white overflow-y-scroll">
                            <Tasks
                            className="hover:bg-teal-500 bg-teal-600 rounded-lg 
                            hover:text-teal-900 text-teal-100 m-2 max-h-full cursor-pointer 
                            p-2 shadow-2xl" 
                             tasks={this.state.tasks} 
                             deleteTask={this.deleteTask} 
                             chaTopro={this.chaTopro}
                        
                            />
                        {/*</div>*/}
                    </div>
                     <div className="mt-5">
                         
                    </div>
                </h2>
            </div>  
            {this.state.showPopup ? 
                <Popup
                  text= {tasks.map(tasks => tasks.description)}
                  closePopup={this.togglePopup.bind(this)}
                  
                />
                : null
            }  
            <div className="bg-teal-900 w-1/3 m-4 p-2 rounded-lg shadow-2xl mr-20">
                <h2 className="text-xl text-teal-100 font-mono">
                    DONE
                     <div id="a" className="rounded-lg h-64 bg-white overflow-y-scroll">
                        {/*<div className="hover:bg-teal-500 bg-teal-600 rounded-lg 
                            hover:text-teal-900 text-teal-100 m-2 max-h-full cursor-pointer 
                        p-2 shadow-2xl">*/}
                            <Tasks1
                            className="hover:bg-teal-500 bg-teal-600 rounded-lg 
                            hover:text-teal-900 text-teal-100 m-2 max-h-full cursor-pointer 
                            p-2 shadow-2xl" 
                             tasks={this.state.tasks1} 
                             deleteTask={this.deleteTask1} 
                             chaTopro={this.chaTopro}
                            />
                        {/*</div>*/}
                    </div>
                     <div className="mt-5">
                         
                    </div>
                </h2>
            </div>
          
        </div>
      </div>
    )
  }

}

export default App;

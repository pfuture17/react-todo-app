import React from 'react'
import AddTask from './components/AddTask'
import TaskTable from './components/TaskTable'
import { connect } from 'react-redux'
import './App.css'

const App = ({ tasks }) => {

  let pendingTasks = tasks.filter(task => task.status === 'pending');
  let doneTasks = tasks.filter(task => task.status === 'done');
  return (
    <div className="App"> 
    <h1>TO DO APP</h1>
      <div className="App-header">
        <AddTask tasks={tasks}/>
      </div>
      <div className="App-body">
        <div className="pending">
          <h2>Pending Tasks</h2>
          {
            pendingTasks.length > 0 ? <TaskTable tasks={pendingTasks}/> : <h2>No Pending Tasks</h2>
          }

        </div>
        <div className="done">
          <h2>Done Tasks</h2>
          <TaskTable tasks={doneTasks}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      tasks: state.tasks
  }
}


export default connect(mapStateToProps)(App)
import { useState } from 'react';
import { connect } from 'react-redux';
import './AddTask.css'



const AddTask = ({addTask, tasks}) => {
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setNewErrorMessage] = useState('')

    const addTaskChangeHandler = (e) => {
        setNewTask(e.target.value)
    }

    const addTaskBtn = () => {
        if(newTask.trim() === ""){
            setNewErrorMessage('this field cannot be blank')
        } else if (tasks.filter(task => task.name.toLowerCase() === newTask.toLowerCase().trim()).length > 0 ){
            setNewErrorMessage('task name already taken')
        } else if (tasks.filter (task=> task.status === 'pending').length === 12){
            setNewErrorMessage('max tasks')
        } else {
            let newTaskCopy = {
                name: newTask,
                status: 'pending'
            }

            addTask(newTaskCopy);
            setNewTask('');
            setNewErrorMessage('');
        }
    }

    return (
        <div className="addTask">
           <h3>Task Name</h3>
           <span className='error'>
                {errorMessage}    
            </span>
           <input 
                type="text"
                value={newTask}
                onChange={addTaskChangeHandler}
            /> <br/>
            <button className='add' onClick={addTaskBtn}>Add Task</button><br/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (newTask) => dispatch({type:'ADD_TASK', payload: newTask})
    }
}


export default connect(null, mapDispatchToProps)(AddTask);
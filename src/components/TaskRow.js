import { connect } from 'react-redux'
import './TaskRow.css'


const TaskRow = ({task, deleteTask, doneTask}) => {
    return (
        <div>
            <ul>
                <li>
                        {task.name}
                        <div>
                            {
                                task.status === 'pending'?
                                <button className='check' onClick={()=>doneTask(task)}>✓</button>: null
                            }
                            <button className='x' onClick={()=>deleteTask(task)}>x</button> 
                        </div>
                </li>
            </ul>

        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (task) => dispatch({ type: 'DELETE_TASK', payload: task}),
        doneTask: (task) => dispatch({ type: 'DONE_TASK' , payload: task})

    }
}

export default connect (null, mapDispatchToProps)(TaskRow);

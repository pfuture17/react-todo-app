import TaskRow from './TaskRow';

const TaskTable = ({ tasks }) => {
    return (
        <div>
           {
               tasks.map((task) => {
                   return <TaskRow task={task} key={task.name}/> 
                   
               })
           }
        </div>
    )
}

export default TaskTable
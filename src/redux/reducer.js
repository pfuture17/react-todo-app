const initialState = {
    tasks: [
        { name: 'eat', status: 'pending'},
        { name: 'code', status: 'pending'},
        { name: 'sleep', status: 'done'},
      ],
}

let taskCopy;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_TASK':
            taskCopy = [...state.tasks]
            let filteredTask = taskCopy.filter( task => {
                return (task.name !== action.payload.name)
            })
            return {
                ...state,
                tasks:filteredTask
            }
        case 'DONE_TASK':
            taskCopy = [...state.tasks]
            if(taskCopy.filter(task => task.status === 'done').length === 12) {
                return state
            }else  {
                taskCopy.find(task => task.name === action.payload.name).status='done'
            }
            return {
                ...state,
                tasks:taskCopy
            }
        case 'ADD_TASK':
            let newTask = action.payload
            taskCopy = [...state.tasks]
            taskCopy.push(newTask)
            return {
                ...state,
                tasks:taskCopy
            }
        default:
            return state;
    }
}

export default reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    task: [],
    completeTask: []
}

const TaskFeatures = createSlice({
    name: "Task features",
    initialState,
    reducers: {
        handleTask: (state, action) => {
            if(!state.task) {
                state.task = action.payload
            } else {
                state.task.push(action.payload)
            }
        },
        handleCompleteTask: (state, action) => {
            const task = state.task.filter((values) => values === action.payload)

            console.log({task})
            if(!state.completeTask) {
                state.completeTask = action.payload
            } else {
                state.completeTask.push(action.payload)
            }
        },

        handleDelete: (state, action) => {
            if(action.payload.name === "running") {
                // state.task.filter((values) => values.title !== action.payload.title)
                state.task.splice(action.payload.index, 1)
            } else if(action.payload.name === "complete") {
                // state.completeTask.filter((values) => values.title !== action.payload.title)
                state.completeTask.splice(action.payload.index, 1)
            }
        }
    }
})
export const {handleTask, handleCompleteTask, handleDelete} = TaskFeatures.actions
export default TaskFeatures.reducer
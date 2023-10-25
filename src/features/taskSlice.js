import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        value: [],
    },
    reducers: {
        incrementCounter: (state, action) => {
            const index = state.value.findIndex((task) => task.id === action.payload)
            state.value[index].counter++
        },
        decrementCounter: (state, action) => {
            const index = state.value.findIndex((task) => task.id === action.payload)
            state.value[index].counter--
        },
        addTask: (state, action) => {
            state.value.push(action.payload)
        },
        removeTask: (state, action) => {
            const index = state.value.findIndex((task) => task.id === action.payload)
            state.value.splice(index, 1)
        },

        updateTask: (state, action) => {
            const index = state.value.findIndex((task) => task.id === action.payload.id)
            state.value[index].name = action.payload.name
        },

        resetPersons: (state) => {
           state.value = state.value.map((task) =>{
             task.counter = 0
             return task            
            })
        }
    },
})

export const { incrementCounter, decrementCounter, addTask, removeTask, updateTask , resetPersons } = taskSlice.actions

export default taskSlice.reducer
import { CARD_DATA } from './data';
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "task",
    initialState: {
        items: [...CARD_DATA],
        fillterTasks: []
    },
    reducers: {
        addNewTask(state, action) {
            state.items.push({
                id: action.payload.id,
                title: action.payload.title,
                creator: action.payload.creator,
                status: action.payload.status,
                discription: action.payload.discription,
            });
        },
        handleDisplayAll(state) {
            state.fillterTasks = [...state.items];
        },
        handleDisplayNew(state) {
            state.fillterTasks = [...state.items].filter(item => item.status === 'New')
        },
        handleDisplayDoing(state) {
            state.fillterTasks = [...state.items].filter(item => item.status === 'Doing')
        },
        handleDisplayDone(state) {
            state.fillterTasks = [...state.items].filter(item => item.status === 'Done')
        },
    }
});

export const { addNewTask,
    handleDisplayAll,
    handleDisplayNew,
    handleDisplayDoing,
    handleDisplayDone } = tasksSlice.actions;

export default tasksSlice.reducer;
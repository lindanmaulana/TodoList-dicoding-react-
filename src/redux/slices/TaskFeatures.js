import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ],
  search: []
};

const TaskFeatures = createSlice({
  name: "Task features",
  initialState,
  reducers: {
    handleTask: (state, action) => {
      if (!state.task) {
        state.task = action.payload;
      } else {
        const check = state.task.some(
          (fill) => fill.title === action.payload.title
        );
        if (!check) {
          state.task.push(action.payload);
        } else {
          return alert(`Title ${action.payload.title} duplicated`);
        }
      }
    },

    handleArchivedTask: (state, action) => {
      state.task.map((values) => {
        if (values.id === action.payload) {
          if (!values.archived) {
            values.archived = true;
          }
        }
      });
    },

    handleSearchTask: (state, action) => {
      const taskSearch = state.task.filter(
        (fill) => fill.title === action.payload
      );
      state.search = taskSearch;
    },

    handleDelete: (state, action) => {
      if (state.task) {
        state.task = state.task.filter((task) => task.id !== action.payload);
      }
    },
  },
});
export const {
  handleTask,
  handleDelete,
  handleArchivedTask,
  handleSearchTask,
} = TaskFeatures.actions;
export default TaskFeatures.reducer;

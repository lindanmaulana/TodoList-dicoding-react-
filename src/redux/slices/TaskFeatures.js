import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 2,
      title: "Functional Component",
      body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 3,
      title: "Modularization",
      body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 4,
      title: "Lifecycle",
      body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 5,
      title: "ESM",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 6,
      title: "Module Bundler",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
  ],
  search: [],
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

        state.search.map((values) => {
          if (values.id === action.payload) {
            values.archived = true;
          }
        });
      });
    },

    handleMoveItTask: (state, action) => {
      state.task.map((values) => {
        if (values.id === action.payload) {
          if (values.archived) {
            values.archived = false;
          }
        }
      });

      state.search.map((values) => {
        if (values.id === action.payload) {
          if (values.archived) {
            values.archived = false;
          }
        }
      });
    },

    handleDeleteTask: (state, action) => {
      if (state.task) {
        state.task = state.task.filter((task) => task.id !== action.payload);
        state.search = state.search.filter(
          (task) => task.id !== action.payload
        );
      }
    },

    handleSearchTask: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      if (state.task.length > 0) {
        state.search = state.task.filter((fill) => {
          return fill.title.toLowerCase().includes(searchQuery);
        });
      }
    },
  },
});
export const {
  handleTask,
  handleDeleteTask,
  handleArchivedTask,
  handleMoveItTask,
  handleSearchTask,
} = TaskFeatures.actions;
export default TaskFeatures.reducer;

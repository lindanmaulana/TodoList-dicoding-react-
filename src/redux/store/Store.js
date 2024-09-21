import { configureStore } from "@reduxjs/toolkit";
import TaskFeatures from "../slices/TaskFeatures";
import SideBarFeatures from "../slices/SideBarFeatures";

const Store = configureStore({
  reducer: {
    home: TaskFeatures,
    sideBar: SideBarFeatures
  },
});

export default Store

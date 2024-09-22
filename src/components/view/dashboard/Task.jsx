import { useDispatch, useSelector } from "react-redux";
import {
  handleArchivedTask,
  handleDeleteTask,
  handleMoveItTask
} from "../../../redux/slices/TaskFeatures";
import ArchivedTask from "./ArchivedTask";
import RunningTask from "./RunningTask";

const Task = () => {
  const selector = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log({selector})

  const handleDelete = (values) => {
    dispatch(handleDeleteTask(values));
  };

  const handleArchived = (id) => {
    dispatch(handleArchivedTask(id));
  };


  const handleMoveIt = (id) => {
    dispatch(handleMoveItTask(id))
  }

  return (
    <div className="lg:w-[60%]">
      <RunningTask handleDelete={handleDelete} handleArchived={handleArchived} selector={selector} />
      <ArchivedTask handleDelete={handleDelete} handleMoveIt={handleMoveIt} selector={selector} />
    </div>
  );
};

export default Task;
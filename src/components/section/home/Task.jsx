import { FaEdit } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import {
  MdOutlineDeleteForever,
  MdOutlinePendingActions,
} from "react-icons/md";
import Title from "../../elements/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  handleArchivedTask,
  handleDelete,
} from "../../../redux/slices/TaskFeatures";
import { BiTaskX } from "react-icons/bi";

const Task = () => {
  const selector = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleDeleteTask = (values) => {
    dispatch(handleDelete(values));
  };

  const handleArchived = (id) => {
    console.log({ checkId: id });
    dispatch(handleArchivedTask(id));
  };

  return (
    <div className="lg:w-[60%]">
      <div>
        <Title>Running Task</Title>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          {selector.task.filter(fill => fill.archived === false).length > 0 ? (
            selector.task
              .filter((fill) => fill.archived !== true)
              ?.map((values, index) => (
                <div
                  className="flex justify-between gap-2 p-2 rounded-md bg-primary"
                  key={index}
                >
                  <div className="flex flex-col gap-[14px]">
                    <h3 className="text-base font-bold text-third">
                      {values.title}
                    </h3>
                    <p className="text-xs font-bold text-third">
                      {values.body}
                    </p>
                    <p className="text-xs font-bold text-third">
                      Created: {values.createdAt}
                    </p>
                    <button
                      onClick={() => handleArchived(values.id)}
                      className="flex items-center gap-2 text-xs text-third"
                    >
                      <MdOutlinePendingActions className="text-xl" />
                      Mark as archived
                    </button>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-3 text-third">
                    <FaEdit className="text-lg" />
                    <button onClick={() => handleDeleteTask(values.id)}>
                      <MdOutlineDeleteForever className="text-2xl" />
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p className="flex items-center justify-center gap-4 text-base text-center text-primary/50">Empty assignment <BiTaskX /></p>
          )}
        </div>
      </div>
      {/* Completed task */}
      <div>
        <Title>Archived Task</Title>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          {selector.task.filter(fill => fill.archived === true).length > 0 ? (
            selector.task
              .filter((fill) => fill.archived === true)
              .map((values, index) => (
                <div
                  className="flex justify-between gap-2 p-2 rounded-md bg-primary"
                  key={index}
                >
                  <div className="flex flex-col gap-[14px]">
                    <h3 className="text-base font-bold text-third">
                      {values.title}
                    </h3>
                    <p className="text-xs font-bold text-third">
                      {values.body}
                    </p>
                    <p className="text-xs font-bold text-third">
                      Created: {values.createdAt}
                    </p>
                    <button className="flex items-center gap-2 text-xs text-third">
                      <FcApproval className="text-xl" />
                      Archived task
                    </button>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-3 text-third">
                    <FaEdit className="text-lg" />
                    <button onClick={() => handleDeleteTask(values.id)}>
                      <MdOutlineDeleteForever className="text-2xl" />
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p className="flex items-center justify-center gap-4 text-base text-center text-primary/50">Empty assignment <BiTaskX /></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
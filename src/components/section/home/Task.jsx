import { FaEdit } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import {
  MdOutlineDeleteForever,
  MdOutlinePendingActions,
} from "react-icons/md";
import Title from "../../elements/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCompleteTask,
  handleDelete,
} from "../../../redux/slices/TaskFeatures";

const Task = () => {
  const selector = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleMarkComplete = (values) => {
    const date = new Date();
    const data = {
      title: values.title,
      startDate: values.startDate,
      endDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
    };
    dispatch(handleCompleteTask(data));
  };

  const handleDeleteTask = (values) => {
    dispatch(handleDelete(values));
  };

  return (
    <div className="lg:w-[60%]">
      <div>
        <Title>Running Task</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {selector.task?.map((values, index) => (
            <div
              className="bg-primary rounded-md p-2 flex justify-between gap-8"
              key={index}
            >
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-base font-bold text-third">
                  {values.title}
                </h3>
                <p className="text-xs font-bold text-third">
                  Start date: {values.startDate}
                </p>
                <button
                  onClick={() => handleMarkComplete(values)}
                  className="text-xs text-third flex items-center gap-2"
                >
                  <MdOutlinePendingActions className="text-xl" />
                  Mark as completed
                </button>
              </div>
              <div className=" text-third gap-3 flex flex-col justify-start items-center">
                <FaEdit className="text-lg" />
                <button
                  onClick={() =>
                    handleDeleteTask({
                      name: "running",
                      index,
                    })
                  }
                >
                  <MdOutlineDeleteForever className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Completed task */}
      <div>
          <Title>Completed Task</Title>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 py-4">
          {selector.completeTask.map((values, index) => (
            <div
              className="bg-primary rounded-md p-2 flex justify-between gap-8"
              key={index}
            >
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-base font-bold text-third">
                  {values.title}
                </h3>
                <p className="text-xs font-bold text-third">
                  Start date: {values.startDate}
                </p>
                <p className="text-xs font-bold text-third">
                  End date: {values.endDate}
                </p>
                <button className="text-xs text-third flex items-center gap-2">
                  <FcApproval className="text-xl" />
                  Completed
                </button>
              </div>
              <div className=" text-third gap-3 flex flex-col justify-start items-center">
                <FaEdit className="text-lg" />
                <button
                  onClick={() =>
                    handleDeleteTask({
                      name: "complete",
                      index,
                    })
                  }
                >
                  <MdOutlineDeleteForever className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;

// uncompleted
{
  /* <div className="bg-primary rounded-md p-2 flex justify-between gap-8" key={values.title}>
<div className="flex flex-col gap-[14px]">
  <h3 className="text-base font-bold text-third">
    Learn Javascript
  </h3>
  <p className="text-xs font-bold text-third">
    Start date: 07-07-2023
  </p>
  <button className="text-xs text-third flex items-center gap-2">
    <MdOutlinePendingActions className="text-xl" />
    Mark as completed
  </button>
</div>
<div className=" text-third gap-3 flex flex-col justify-start items-center">
  <FaEdit className="text-lg" />
  <MdOutlineDeleteForever className="text-2xl" />
</div>
</div> */
}

// completed
{
  /* <div className="bg-primary rounded-md p-2 flex justify-between gap-8">
<div className="flex flex-col gap-[14px]">
  <h3 className="text-base font-bold text-third">
    Learn Javascript
  </h3>
  <p className="text-xs font-bold text-third">
    Start date: 07-07-2023
  </p>
  <button className="text-xs text-third flex items-center gap-2">
    <FcApproval className="text-xl" />
    Mark as completed
  </button>
</div>
<div className=" text-third gap-3 flex flex-col justify-start items-center">
  <FaEdit className="text-lg" />
  <MdOutlineDeleteForever className="text-2xl" />
</div>
</div> */
}

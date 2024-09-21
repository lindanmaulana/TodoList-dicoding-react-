import { FaEdit } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { handleTask } from "../../../redux/slices/TaskFeatures";

const Create = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log({ selector });

  const handleForm = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.elements["task-title"].value,
      startDate: event.target.elements["start-date"].value,
    };

    dispatch(handleTask(data));
  };
  return (
    <form onSubmit={handleForm} className="lg:w-[40%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full">
        <label htmlFor="task-title">
          <h3 className="text-base text-primary mb-1">Task title</h3>
          <div className="border-2 border-primary rounded-lg overflow-hidden relative py-2">
            <input
              type="text"
              placeholder="Task title"
              name="task-title"
              id="task-title"
              className="bg-transparent ps-4 w-full h-full pe-5 outline-none"
            />
            <FaEdit className=" absolute right-2 top-1/2 -translate-y-1/2 text-lg text-primary" />
          </div>
        </label>
        <label htmlFor="end-date">
          <h3 className="text-base text-primary mb-1">End date</h3>
          <div className="border-2 border-primary rounded-lg overflow-hidden relative py-2">
            <input
              type="text"
              placeholder="07-07-23"
              name="start-date"
              id="end-date"
              className="bg-transparent ps-4 w-full h-full pe-5 outline-none"
            />
            <IoIosCalendar className="absolute top-1/2 -translate-y-1/2 right-2 text-xl text-primary" />
          </div>
        </label>
      </div>

      <div className="flex justify-center items-center">
        <button type="submit" className="bg-primary rounded-lg text-third text-base px-4 py-2 lg:px-20  lg:py-2">
          Add to list
        </button>
      </div>
    </form>
  );
};

export default Create;

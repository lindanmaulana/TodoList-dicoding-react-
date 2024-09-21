import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleTask } from "../../../redux/slices/TaskFeatures";
// import { useFormik } from "formik";
// import * as yup from "yup"
const Create = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log({ selector });

  const handleForm = (event) => {
    event.preventDefault();
    const task = selector.home.task;
    const values = event.target;

    if (values.elements["task-title"].value.length > 0) {
      if (values.elements["task-title"].value.length < 50) {
        const data = {
          id: task.length > 0 ? selector.home.task[task.length - 1].id + 1 : 1,
          title: event.target.elements["task-title"].value,
          body: event.target.elements["task-body"].value,
          archived: false,
          createdAt: new Date().toISOString(),
        };

        dispatch(handleTask(data));
        event.target.reset();
      } else {
        alert("Title cannot exceed 50 characters");
      }
    } else {
      alert("Empty title");
    }
  };

  //   const formik = useFormik({
  //     initialValues: {
  //         "id": null,
  //         "title": "",
  //         "body": "",
  //         "archived": false,
  //         "createdAt": ""
  //     },
  //     onSubmit: () => {},
  //     validationSchema: yup.object().shape({
  //         id: yup.number().required(),
  //         title: yup.string().required().
  //     })
  //   })
  return (
    <form onSubmit={handleForm} className="lg:w-[40%]">
      <div className="grid w-full grid-cols-1 gap-8 mb-10">
        <label htmlFor="task-title">
          <h3 className="mb-1 text-base text-primary">Task title</h3>
          <div className="relative py-2 overflow-hidden border-2 rounded-lg border-primary">
            <input
              type="text"
              placeholder="Task title"
              name="task-title"
              id="task-title"
              className="w-full h-full bg-transparent outline-none ps-4 pe-5"
            />
            <FaEdit className="absolute text-lg -translate-y-1/2 right-2 top-1/2 text-primary" />
          </div>
        </label>
        <label htmlFor="task-body">
          <h3 className="mb-1 text-base text-primary">Task body</h3>
          <div className="relative py-2 overflow-hidden border-2 rounded-lg border-primary">
            <input
              type="text"
              placeholder="Task body"
              name="task-body"
              id="task-body"
              className="w-full h-full bg-transparent outline-none ps-4 pe-5"
            />
            <FaEdit className="absolute text-lg -translate-y-1/2 right-2 top-1/2 text-primary" />
          </div>
        </label>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="px-4 py-2 text-base rounded-lg bg-primary text-third lg:px-20 lg:py-2"
        >
          Add to list
        </button>
      </div>
    </form>
  );
};

export default Create;

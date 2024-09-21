import { useRoutes } from "react-router-dom";
import HomeTask from "../components/section/home/Index";
import CreateTask from "../components/section/taskCreate/Index";
import CompleteTask from "../components/section/completeTask/Index";
import AllTask from "../components/section/allTask/Index";
import ErrorFallbackBoundary from "./ErrorFallbackBoundary";

const TaskRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomeTask />,
    },
    {
      path: "create-task",
      element: <CreateTask />
    },
    {
      path: "complete-task",
      element: <CompleteTask />
    },
    {
      path: "all-task",
      element: <AllTask />
    },
    {
      path: "*",
      element: <ErrorFallbackBoundary />
    }
  ]);
  return router;
};

export default TaskRouter;

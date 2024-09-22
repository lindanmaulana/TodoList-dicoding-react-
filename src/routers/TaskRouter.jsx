import { useRoutes } from "react-router-dom";

import ErrorFallbackBoundary from "./ErrorFallbackBoundary";
import HomeTask from "../components/view/dashboard/Index";
import CreateTask from "../components/view/taskCreate/Index";
import CompleteTask from "../components/view/completeTask/Index";
import AllTask from "../components/view/allTask/Index";

const TaskRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomeTask />,
    },
    {
      path: "create-task",
      element: <CreateTask />,
    },
    {
      path: "complete-task",
      element: <CompleteTask />,
    },
    {
      path: "all-task",
      element: <AllTask />,
    },
    {
      path: "*",
      element: <ErrorFallbackBoundary />,
    },
  ]);
  return router;
};

export default TaskRouter;

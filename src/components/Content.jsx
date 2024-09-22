import TaskRouter from "../routers/TaskRouter";
import SideBar from "./SideBar";

const Content = () => {
  const element = TaskRouter();
  return (
    <main className="">
      <div className="h-screen pt-[72px] flex">
        <SideBar />
        <div className="flex-1 overflow-auto bg-third">
          <div className="flex flex-col items-center justify-center gap-20 px-5 pt-10 lg:flex-row lg:items-start">{element}</div>
        </div>
      </div>
    </main>
  );
};

export default Content;

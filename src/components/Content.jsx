import TaskRouter from "../routers/TaskRouter";
import SideBar from "./SideBar";

const Content = () => {
  const element = TaskRouter();
  return (
    <main className="">
      <div className="h-screen pt-[72px] flex overflow-auto">
        <SideBar />
        <div className="flex-1 bg-third overflow-auto">
          <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center px-5 pt-10 gap-20">{element}</div>
        </div>
      </div>
    </main>
  );
};

export default Content;

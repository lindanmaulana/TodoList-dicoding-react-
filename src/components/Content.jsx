import SideBar from "./SideBar";
import HomeTask from "./view/dashboard/Index";

const Content = () => {
  return (
    <main className="">
      <div className="h-screen pt-[72px] flex">
        <SideBar />
        <div className="flex-1 overflow-auto bg-third">
          <div className="flex flex-col items-center justify-center gap-20 px-5 pt-10 lg:flex-row lg:items-start">
            <HomeTask />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;

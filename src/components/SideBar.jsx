import { AiOutlineDashboard } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const selector = useSelector(state => state.sideBar.isOpen)
  const dataSideBar = [
    {
      id: 1,
      title: "Dashboard",
      icon: AiOutlineDashboard,
      url: "/",
    }
  ];
  return (
    <div className={`${selector ? "w-5/12 sm:w-3/12 lg:w-2/12 opacity-100" : "w-[1px] opacity-0"} transition-all duration-1000 ease-in-out bg-primary py-10`}>
      <ul className="ps-5 pr-4 md:pr-0 flex flex-col gap-[30px]" >
        {dataSideBar?.map((values) => (
          <li key={values.id} className="">
            <Link to={values.url} className="flex items-center gap-4 text-sm text-third sm:text-base">
              <values.icon />
              {values.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { handleIsOpen } from "../redux/slices/SideBarFeatures";
import { handleSearchTask } from "../redux/slices/TaskFeatures";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(handleIsOpen());
  };

  const handleSearch = (e) => {
    dispatch(handleSearchTask(e.target.value));
  };
  return (
    <header className="fixed top-0 w-full px-5 bg-secondary lg:px-3">
      <nav className="container max-w-7xl">
        <div className="flex items-center justify-between gap-4 py-5 lg:gap-0">
          <button onClick={handleSidebar}>
            <RxHamburgerMenu className="text-3xl text-primary" />
          </button>

          <div className="relative bg-third rounded-lg w-[286px]">
            <input
              type="text"
              onChange={handleSearch}
              name="task-search"
              className="w-full py-2 text-xs bg-transparent outline-none text-primary/40 pe-7 ps-2"
              placeholder="Write your project name"
            />
            <IoSearch className="absolute text-xl -translate-y-1/2 right-1 top-1/2 text-primary" />
          </div>

          <div className="flex items-center gap-6 text-3xl text-primary">
            <FaRegBell />
            <MdDarkMode />
            <RxAvatar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

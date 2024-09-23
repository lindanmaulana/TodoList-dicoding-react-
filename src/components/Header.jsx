import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { handleIsOpen } from "../redux/slices/SideBarFeatures";
import {
  handleResetSearchTask,
  handleSearchTask,
} from "../redux/slices/TaskFeatures";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(handleIsOpen());
  };

  const handleSearch = (e) => {
    const values = e.target.value;

    if (values === "") {
      dispatch(handleResetSearchTask());
    } else {
      dispatch(handleSearchTask(values));
    }
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
              name="task-search"
              onChange={handleSearch}
              className="w-full py-2 text-xs bg-transparent outline-none text-primary/40 pe-7 ps-2"
              placeholder="Write your project name"
            />
            <IoSearch className="absolute text-xl -translate-y-1/2 right-1 top-1/2 text-primary" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

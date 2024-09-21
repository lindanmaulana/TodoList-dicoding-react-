import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { handleIsOpen } from "../redux/slices/SideBarFeatures";

const Header = () => {
    const dispatch = useDispatch()
    const handleSidebar = () => {
        dispatch(handleIsOpen())
    }
  return (
    <header className="bg-secondary w-full fixed top-0 px-5 lg:px-3">
    <nav className="container max-w-7xl">
      <div className="flex justify-between gap-4 lg:gap-0 items-center py-5">
        <button onClick={handleSidebar}>
          <RxHamburgerMenu className="text-primary text-3xl" />
        </button>

        <div className="relative bg-third rounded-lg w-[286px]">
          <input type="text" className="bg-transparent text-xs text-primary/40 w-full outline-none pe-7 py-2 ps-2" placeholder="Write your project name" />
          <IoSearch className="absolute right-1 top-1/2 -translate-y-1/2 text-primary text-xl"/>
        </div>

        <div className="flex items-center gap-6 text-primary text-3xl">
          <FaRegBell />
          <MdDarkMode />
          <RxAvatar />
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header

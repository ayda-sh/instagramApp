import { NavLink } from "react-router-dom";
import Search from "../search/search";

const SideBar = () => {
  return (
    <div className="relative">
      <div class="flex flex-col items-start p-4 bg-white h-screen">
        <img
          className="w-[120px]"
          src="public/Instagram-Wordmark-Black-Logo.wine.svg"
          alt=""
        />
        <div class="flex items-center mb-7 gap-2">
          <img className="hover:border hover:rounded-full hover:border-[#ccc] hover:p-2 p-2" src="public/Frame.png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/home">Home</NavLink>
          </span>
        </div>
        <div class="flex items-center mb-4 gap-2">
          <div>
            <Search />
          </div>
        </div>
        <div class="flex items-center mb-7 gap-2">
          <img className="hover:border hover:rounded-full hover:border-[#ccc] hover:p-2 p-2"  src="public/Frame (2).png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/create">Create</NavLink>
          </span>
        </div>
        <div class="flex items-center mb-7 gap-2">
          <img className="rounded-full hover:border hover:rounded-full hover:border-[#ccc] hover:p-2 p-2" src="public/Frame (3).png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/profile">Profile</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};


export default SideBar;

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div class="flex flex-col items-start p-4 bg-white h-screen ">
        <img
          className="w-[120px]"
          src="public/Instagram-Wordmark-Black-Logo.wine.svg"
          alt=""
        />
        <div class="flex items-center mb-4 gap-2">
          <img src="public/Frame.png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/home">Home</NavLink>
          </span>
        </div>
        <div class="flex items-center mb-4 gap-2">
          <img src="public/Frame (1).png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/search">Search</NavLink>
          </span>
        </div>
        <div class="flex items-center mb-4 gap-2">
          <img src="public/Frame (2).png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/create">Create</NavLink>
          </span>
        </div>
        <div class="flex items-center mb-4 gap-2">
          <img className="rounded-full" src="public/Frame (3).png" alt="" />
          <span class="ml-2 text-gray-600 hover:text-black">
            <NavLink to="/profile">Profile</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import { NavLink } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="container mx-auto flex justify-center mb-11 my-10">
        <div className="w-[400px] border border-[#dbdbdb] justify-center flex flex-col px-8 pb-8">
          <div className="flex items-end justify-center">
            <h1 className="text-black text-5xl font-semibold"></h1>
            <img
              src="public/Instagram-Wordmark-Black-Logo.wine.svg"
              className="w-[200px]"
              alt=""
            />
            <img className="w-[100]" src="src/assets/Group 2015.png" alt="" />
          </div>
          <div className="mt-4 justify-center flex">
            <form className="justify-center flex flex-col">
              <label className="input input-bordered flex items-center gap-2  bg-[#fafafa]">
                <input type="text" className="grow" placeholder="Phone number, username Email" />
              </label>
  
  
              <label className="input input-bordered flex items-center gap-2 mt-3 bg-[#fafafa]">
                <input type="password" className="grow" placeholder="password" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
  
              <button
                className="bg-[#4cb5f9] rounded px-7 py-2 mt-7 text-white"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-black">
            Don't have an account?
              <span className="text-[#4cb5f9]">
                <NavLink to="signup">
                Sign Up
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    )
}

export default LogIn;
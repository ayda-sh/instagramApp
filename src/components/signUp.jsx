import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { client } from "../../lib/axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate()
   const schema = yup.object({
          username: yup.string().required(),
          email: yup.string().required().email(),
          password: yup.string().required().min(4).max(8),
      })
  
      const [isShowPassword, setIsShowPassword] = useState(false);
  
      const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(schema),
          mode: "onChange"
      })
  
  
      function toggleShowPassword() {
          setIsShowPassword(!isShowPassword);                                                                                                                         
      }
  
      async function submitForm(user) {
  
  
          try {
              const response = await client.post("/user/signup", user)
              console.log(response.data);
              localStorage.setItem('token', response.data.jwt)
              toast.success("user added successful", {
                  type: "success"
              });
              navigate("/login")
          }
          catch(error) {
             toast(error, {
              type: "error"
             });
          }
      }

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
          <form onSubmit={handleSubmit(submitForm)} className="justify-center flex flex-col">
            <label className="input input-bordered flex items-center gap-2  bg-[#fafafa]">
              <input {...register("email")} type="text" className="grow" placeholder="Email" />
              {errors?.email ? <span className="text-error">{errors.email.message}</span> : null}
            </label>

            <label className="input input-bordered flex items-center gap-2 mt-3 bg-[#fafafa]">
              <input {...register("username")} type="text" className="grow" placeholder="Username" />
              {errors?.username ? <span className="text-error">{errors.username.message}</span> : null}
            </label>

            <label className="input input-bordered flex items-center gap-2 mt-3 bg-[#fafafa]">
              <input {...register("password")} type="password" className="grow" placeholder="password" />
              <svg
                onClick={toggleShowPassword}
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
              {errors?.password ? <span className="text-error">{errors.password.message}</span> : null}
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
            Already have an account?
            <span className="text-[#4cb5f9]">
                <NavLink to="login">
                    login
                </NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

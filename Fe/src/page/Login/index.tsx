import { useForm, SubmitHandler } from "react-hook-form";
import { loginApi } from "../../database";
import { useNavigate, Link } from "react-router-dom";
import { InfoSuccess, InfoFailure } from "../../compoment";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
const SECRET_KEY = import.meta.env.VITE_JWT_SECRET_KEY;
import { useAuthentication } from "./authHook";
import { ClipLoader } from "react-spinners";
interface Login {
  username: string;
  password: string;
  isCheckBox: boolean;
}
const index = () => {
  const changePage = useNavigate();

  const { authenticateUser, autoFillFormWithSavedData, isSuccess, isFailure } =
    useAuthentication();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Login>();

  useEffect(() => {
    const isRemember = localStorage.getItem("isRemember") === "true";
    autoFillFormWithSavedData(isRemember, setValue);
  }, [autoFillFormWithSavedData, setValue]);
  const onSubmit: SubmitHandler<Login> = (data) => {
    authenticateUser(data, data.isCheckBox, changePage);
  };


  useEffect(()=>{
    const token = localStorage.getItem('MainToken')
    const isSaveAcount= localStorage.getItem('isRemember')
    if(isSaveAcount!=='true'){
      console.log('save not acount');
      localStorage.clear()
  
    return
    }
    
    if(token){
      try {
        const decodedToken: JwtPayload = jwtDecode(token);
        if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
          // Token đã hết hạn, xử lý đăng xuất
          console.log('Token đã hết hạn. Đăng xuất người dùng.');
          // Thực hiện hàm đăng xuất ở đây
          localStorage.clear()
          
          return 
        } else {
          // Token còn hiệu lực, bạn có thể thực hiện các hành động khác
          console.log('Token hiệu lực.');
          changePage('/home/product')
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
   
    
  },[])
  return (
    <>
      <div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
        {isSuccess &&  <InfoSuccess/>}
        {isFailure && <InfoFailure />}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="username"
                  autoComplete="username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 10,
                      message: "Username must be at least 10 characters long ",
                    },
                  })}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.username && (
                  <span className="text-red-600">
                    {errors.username.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 10,
                      message: "Password must be at least 10 characters long",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/,
                      message: "Invalid password format",
                    },
                  })}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            {/* checkbox */}
            <div className="flex justify-start items-center text-center">
              <input
                type="checkbox"
                {...register("isCheckBox")}
                name="isCheckBox"
              />
              <label
                htmlFor="isCheckBox"
                className="block text-sm font-medium leading-6 text-gray-900 mx-2"
              >
                Save account
              </label>
            </div>
            {/* submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;

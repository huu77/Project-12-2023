import { useForm, SubmitHandler } from "react-hook-form";
import { registerApi } from "../../database";
import { useNavigate, Link } from "react-router-dom";
import { InfoSuccess, InfoFailure } from "../../compoment";
import { yupResolver } from '@hookform/resolvers/yup';
import schema ,{Register}from "./schema";
import InputCustom from "./InputCustom";
import { createFormData } from "./data";
import { useState } from "react"; 
const index = () => {
  const changePage = useNavigate();
const [isSuccess, setIsSuccess]  =useState(false)
const [isFailure,setIsFailure]  =useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver:yupResolver(schema)
  });

  const omitConfirmPassword = (data: Register): Omit<Register,'confirmPassword'> => {
    const { confirmPassword, ...dataWithoutConfirmPassword } = data;
    return dataWithoutConfirmPassword;
  };
  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      const dataWithoutConfirmPassword = omitConfirmPassword(data);  
      const response = await registerApi(dataWithoutConfirmPassword);
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false);
        changePage('/login');
      }, 500);
    } catch (error) {
      setIsFailure(true);
      console.error(error);
      setTimeout(() => {
        setIsFailure(false);
      }, 2000);
    }
  };
  const formData = createFormData();

  return (
    <>
      <div className="flex relative min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {isSuccess && <InfoSuccess />}
        {isFailure && <InfoFailure />}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="  grid grid-rows-4   grid-cols-2 gap-4 gap-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formData.map((field) => (
              <InputCustom field={field} key={field.id} errors={errors} register={register}/>
            ))}

            {/* submit */}
            <div className="row-span-1 col-span-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account already?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;

// AuthHooks.js
import { useState } from "react";
import { loginApi } from "../../database";

export const useAuthentication = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const authenticateUser = async (
    data: { username: any; password: any },
    rememberMe: boolean,
    changePage: (arg0: string) => void
  ) => {
    try {
      const response = await loginApi({
        username: data.username,
        password: data.password,
      });
  
      localStorage.setItem("MainToken", response.accessToken);

      if (rememberMe) {
        localStorage.setItem("isRemember", `${rememberMe}`);
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        changePage("/home/product");
      }, 500);
    } catch (error) {
      setIsFailure(true);
      console.error(error);
      setTimeout(() => {
        setIsFailure(false);
      }, 2000);
    }
  };

  const autoFillFormWithSavedData = (isRemember: any, setValue: any) => {
    if (isRemember) {
      const savedUser = JSON.parse(localStorage.getItem("userLogin") || "{}");
      if (savedUser) {
        Object.keys(savedUser).forEach((key) => {
          setValue(key, savedUser[key]);
        });
      }
    }
  };

  return {
    authenticateUser,

    autoFillFormWithSavedData,
    isSuccess,
    isFailure,
  };
};

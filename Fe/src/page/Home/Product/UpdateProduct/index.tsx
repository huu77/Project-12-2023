import React, { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UpdateProduct,
  getOneProduct,
  updateProduct,
} from "../../../../database/product";
import { useDispatch } from "react-redux";
import { updateItem } from "../Product.slice";

const index = ({ id }: { id: number | string }) => {
  // dispatch
  const dispatch = useDispatch();
  // ant design message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Update product success",
    });
  };

  const errorS = () => {
    messageApi.open({
      type: "error",
      content: "Update product errors",
    });
  };

  //  react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<UpdateProduct>();


    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    const handleOk = async (e: React.BaseSyntheticEvent<object, any, any> ) => {
      e.preventDefault();
      handleSubmit(onSubmit)(e);
      setIsModalOpen(false);
    };

  useEffect(() => {

    const check = async () => {
      if(isModalOpen){
        const response = await getOneProduct(id as string);

        setValue("name", response?.name);
        setValue("price", parseInt(response?.price));
        setValue("description", response?.description);
        setValue("active", response?.active);
      }
 
    };
    check();
   
  }, [isModalOpen]);

  const onSubmit: SubmitHandler<UpdateProduct> = async (data) => {
    try {
      success();
      setTimeout(() => {
        dispatch(updateItem({ id, data }) as any);
      }, 500);
    } catch (error) {
      console.log(error);
      errorS();
    }
  };

  return (
    <>
      <EditOutlined className="text-red-600" onClick={showModal} />
      <Modal
        title={`Edit product`}
        open={isModalOpen}
        onOk={(e)=>handleOk(e)}
        onCancel={handleCancel}
      >
        {contextHolder}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="mt-1 p-2 border rounded w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          {/* price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Price:
            </label>
            <input
              id="price"
              type="text"
              autoComplete="price"
              className="mt-1 p-2 border rounded w-full"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-600">{errors.price.message}</span>
            )}
          </div>
          {/* description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Description:
            </label>
            <textarea
              id="description"
              className="mt-1 p-2 border rounded w-full"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-600">{errors.description.message}</span>
            )}
          </div>
          <div className="mb-4 flex justify-start items-center">
            <label className="block text-sm font-medium text-gray-600">
              Active:
            </label>
            <input
              id="active"
              type="checkbox"
              className="mt-1 p-2 border rounded w-10"
              {...register("active")}
            />
            {errors.description && (
              <span className="text-red-600">{errors.description.message}</span>
            )}
          </div>

         
        </form>
      </Modal>
    </>
  );
};

export default index;

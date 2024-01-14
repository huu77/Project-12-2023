import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createItem } from "../Product.slice";
import { postImage } from "../../../../database";
interface CreateNew {
  name: string;
  price: number | string;
  description: string;
  ProductImage: string[];
}
const index = () => {
  // dispatch
  const dispatch = useDispatch();
  // ant design message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Create new product success",
    });
  };

  const errorS = () => {
    messageApi.open({
      type: "error",
      content: "Create new product errors",
    });
  };

  //  react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateNew>();

  const onSubmit: SubmitHandler<CreateNew> = async (data) => {
    try {
 
      // handle postimg 
      // const formData = new FormData();
      // formData.append('file', data.ProductImage[0]);
      // console.log(formData.get('file'));
      
      // const response = await postImage(formData);

      // console.log(response);

      // console.log({ ...data, ProductImage: newImageUrls });
      success();

      setTimeout(() => {
        dispatch(createItem({ ...data, ProductImage: [] }) as any);
      }, 1000);
    } catch (error) {
      console.log(error);

      errorS();
    } finally {
      setValue("name", "");
      setValue("price", "");
      setValue("description", "");
      setValue("ProductImage", []);
    }
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
    setIsModalOpen(false);
  };
  return (
    <>
      <span
        onClick={showModal}
        className="bg-sky-600 font-bold text-center text-white px-4 py-2 rounded-md hover:bg-sky-700 focus:outline-none focus:ring focus:border-sky-300"
      >
        Create
      </span>
      <Modal
        title={`Create a New Product`}
        open={isModalOpen}
        onOk={(e) => handleOk(e)}
        onCancel={handleCancel}
      >
        {contextHolder}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
              {...register("price", { required: true, valueAsNumber: true })}
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
          {/* img */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Img:
            </label>
            <input
              id="images"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="mt-1 p-2 border rounded w-full"
              {...register("ProductImage", { required: true })}
            />
            {errors.ProductImage && (
              <span className="text-red-600">
                {errors.ProductImage.message}
              </span>
            )}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default index;

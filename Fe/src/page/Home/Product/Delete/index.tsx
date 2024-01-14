import React, { useState } from "react";
import { Modal, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteItem } from "../Product.slice";

const Delete = ({ id, active }: { id: number; active: boolean }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Delete product success",
    });
  };

  const errorS = () => {
    messageApi.open({
      type: "error",
      content: "Delete product errors",
    });
  };

  // handle action delete redux
  const dispatch = useDispatch();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = async () => {
    try {
      success();
      setTimeout(() => {
        setIsModalOpen(false);
        dispatch(deleteItem(id) as any);
      }, 1000);
    } catch (error) {
      errorS();
    }
  };

  return (
    <>
      <span className={`ml-3 ${!active && "hidden"}`} onClick={showModal}>
        <DeleteOutlined />
      </span>
      <Modal
        title={`Have you want to  delete a product ${id} ?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
      </Modal>
    </>
  );
};
export default Delete;

import React from "react";
import { Modal, Button } from "antd";
import { UserAdd } from "./userAdd";
import { TodoAdd } from "./todoAdd";

const PopupModal = ({visible,onCancel,onCreate,addType,confirmLoading,wrappedComponentRef}) =>{
  return (
    <Modal
      title={"Add New " + addType}
      visible={visible}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onOk={onCreate}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={confirmLoading}
          onClick={onCreate}
        >
          Save
        </Button>
      ]}
    >
      {addType === "User" ? (
        <UserAdd
          wrappedComponentRef={wrappedComponentRef}
          handleSubmit={onCreate}
        />
      ) : (
        <TodoAdd
          wrappedComponentRef={wrappedComponentRef}
          handleSubmit={onCreate}
        />
      )}
    </Modal>
  );
}

export default PopupModal;
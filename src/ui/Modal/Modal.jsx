import { Modal } from "antd";

const CommonModal = ({
  children,
  title,
  open,
  onClose,
  footer = null,
  centered = true,
  maskClosable = true,
  className = "",
  ...restProps
}) => {
  return (
    <div className="w-full rounded-2xl">
      <Modal
        title={title}
        open={open}
        onCancel={onClose}
        footer={footer}
        centered={centered}
        maskClosable={maskClosable}
        closable={false}
        className="w-full rounded-2xl!"
        rootClassName={`[&_.ant-modal-container]:!p-0 [&_.ant-modal-container]:!rounded-[25px] [&_.ant-modal-content]:!bg-white [&_.ant-modal-content]:!rounded-[25px] [&_.ant-modal-content]:!p-0 [&_.ant-modal-header]:!bg-white [&_.ant-modal-header]:!border-b-0 [&_.ant-modal-header]:!rounded-t-[25px] [&_.ant-modal-header]:!p-0 [&_.ant-modal-header]:!pb-4 [&_.ant-modal-title]:!text-xl [&_.ant-modal-title]:!font-semibold [&_.ant-modal-title]:!text-gray-900 [&_.ant-modal-body]:!bg-white [&_.ant-modal-body]:!p-0 [&_.ant-modal-body]:rounded-[25px] [&_.ant-modal-footer]:!bg-white [&_.ant-modal-footer]:!border-t-0 [&_.ant-modal-footer]:!rounded-b-[25px] [&_.ant-modal-footer]:!p-0 ${className}`}
        {...restProps}
      >
        {children}
      </Modal>
    </div>
  );
};

export default CommonModal;

import { Drawer } from "antd";
import CloseIcon from "../../assets/svg/add.svg?react";
import Button from "../Button/Button";
const CommonDrawer = ({
  open,
  onClose,
  title,
  description,
  children,
  footerButtonPrimaryLabel,
  footerButtonSecondaryLabel,
  footerButtonSecondaryType,
}) => {
  return (
    <Drawer
      onClose={onClose}
      open={open}
      width={463}
      closable={false}
      rootClassName="[&_.ant-drawer-body]:p-0! [&_.ant-drawer-header]:display-none"
    >
      <div className="flex flex-col h-full">
        {/* Header - Fixed Top */}
        <div className="shrink-0 border-b border-[#E5E5E5] p-8 pb-3 bg-muted-foreground/30">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="text-2xl! font-bold! text-foreground">{title}</h1>
              <p className="text-[16px]! font-normal! text-muted-foreground leading-6">
                {description}
              </p>
            </div>
            <div
              className="flex w-6 h-6 shrink-0 rounded-full cursor-pointer"
              onClick={onClose}
            >
              <CloseIcon className="rotate-45" />
            </div>
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 bg-muted-foreground/30">
          {children}
        </div>

        {/* Footer - Fixed Bottom */}
        <div className="shrink-0 border-t border-[#E5E5E5] py-3 px-8 flex gap-3 justify-end bg-muted-foreground/30">
          {footerButtonSecondaryLabel && (
            <Button
              variant={"outlined"}
              type={footerButtonSecondaryType}
              label={footerButtonSecondaryLabel}
              className={"h-8!"}
            />
          )}
          <Button
            type={"primary"}
            label={footerButtonPrimaryLabel}
            className={"h-8!"}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default CommonDrawer;

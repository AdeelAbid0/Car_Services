import CommonDrawer from "../../../components/ui/Drawer";
import StarActive from "../../../assets/svg/star-active.svg?react";
import StarDefault from "../../../assets/svg/star-default.svg?react";
import ProfileIcon from "../../../assets/svg/profile-circle.svg?react";
import Calendar from "../../../assets/svg/calendar.svg?react";
import Service from "../../../assets/svg/service.svg?react";
import Mail from "../../../assets/svg/mail.svg?react";
import Call from "../../../assets/svg/call-filled.svg?react";
const PartnerDetails = ({
  viewPartnerDetail,
  setViewPartnerDetail,
  rejectDrawer,
  setRejectDrawer,
}) => {
  return (
    <div>
      <CommonDrawer
        open={viewPartnerDetail}
        onClose={() => {
          setViewPartnerDetail(false);
        }}
        title={"Detail view"}
        footerButtonSecondaryLabel={"Remove Partner"}
        footerButtonSecondaryType={"danger"}
        footerButtonSecondaryClick={() => {
          setRejectDrawer(true);
        }}
        rootClassName={`${rejectDrawer ? "[&_.ant-drawer-content-wrapper]:mr-[64px]! [&_.ant-drawer-content-wrapper]:my-[87px]! [&_.ant-drawer-content-wrapper]:transition-all! [&_.ant-drawer-content-wrapper]:duration-400! [&_.ant-drawer-content-wrapper]:ease-in-out!" : ""}`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-full flex items-center gap-4">
            <div>
              <img
                src="/Images/about-main.png"
                alt="img"
                className="w-12 h-12 flex shrink-0 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm! font-semibold! text-foreground">
                AutoFix Garage
              </h1>
              <p className="text-xs! text-muted-foreground">
                F-11 Markaz, Islamabad
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <StarActive />
            <StarActive />
            <StarDefault />
            <StarDefault />
            <StarDefault />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Total earning
          </p>
          <div className="flex justify-center p-4 rounded-xl border border-border bg-muted-background!">
            <span className="text-[16px] leading-5 text-foreground font-medium">
              PKR 230,600
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Partner Info
          </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <ProfileIcon className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                Ahmed Khan
              </h1>
            </div>

            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Call className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                +92333333333
              </h1>
            </div>
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Mail className="w-4 h-4" />
              </div>
              <h1 className="text-primary text-xs! font-medium!">
                ahmed@autofix.com
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">Status </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <div className="relative z-10 flex shrink-0 w-3! h-3! justify-center items-center bg-success/50 opacity-50! rounded-full">
                  <div className="absolute z-20 w-1! h-1! bg-success rounded-full"></div>
                </div>
              </div>
              <h1 className="text-success text-xs! font-medium!">Active</h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Category
          </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Service className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                Mechanical
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">Joined</p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Calendar className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                12 Jan 2026
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Services
          </p>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <div className="relative z-10 flex shrink-0 w-3! h-3! justify-center items-center bg-foreground/50 opacity-50! rounded-full">
                  <div className="absolute z-20 w-1! h-1! bg-foreground rounded-full"></div>
                </div>
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                Car Repair
              </h1>
            </div>
          </div>
        </div>
      </CommonDrawer>
    </div>
  );
};
export default PartnerDetails;

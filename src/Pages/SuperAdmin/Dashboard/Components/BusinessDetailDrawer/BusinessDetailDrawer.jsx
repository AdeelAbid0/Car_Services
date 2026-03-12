import CommonDrawer from "../../../../../ui/Drawer/Drawer";
import ShopIcon from "../../../../../assets/svg/shop.svg?react";
import ProfileIcon from "../../../../../assets/svg/profile-circle.svg?react";
import LocationIcon from "../../../../../assets/svg/location-2.svg?react";
import Calendar from "../../../../../assets/svg/calendar.svg?react";
import Service from "../../../../../assets/svg/service.svg?react";
import Clock from "../../../../../assets/svg/clock.svg?react";
import Mail from "../../../../../assets/svg/mail.svg?react";
import Call from "../../../../../assets/svg/call-filled.svg?react";
const BusinessDetailDrawer = ({
  setShowDetailDrawer,
  selectedBusiness,
  rejectDrawer,
  setRejectDrawer,
}) => {
  console.log({ selectedBusiness });
  return (
    <div>
      <CommonDrawer
        title={"Detail"}
        open={true}
        onClose={() => setShowDetailDrawer(false)}
        footerButtonPrimaryLabel="Approve"
        footerButtonSecondaryLabel="Reject"
        footerButtonSecondaryType={"danger"}
        footerButtonPrimaryClick={() => {}}
        footerButtonSecondaryClick={() => setRejectDrawer(true)}
        rootClassName={`${rejectDrawer ? "[&_.ant-drawer-content-wrapper]:mr-[64px]! [&_.ant-drawer-content-wrapper]:my-[87px]! [&_.ant-drawer-content-wrapper]:transition-all! [&_.ant-drawer-content-wrapper]:duration-600! [&_.ant-drawer-content-wrapper]:ease-in-out!" : ""}`}
      >
        <div>
          <p className="text-muted-foreground text-xs! font-medium!">
            Partner Info
          </p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <ShopIcon className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                AutoFix Garage
              </h1>
            </div>
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
                <LocationIcon className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">Lahore</h1>
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
        <div className="mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Category
          </p>
          <div className="flex flex-col gap-1.5 mt-2.5">
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
          <p className="text-muted-foreground text-xs! font-medium!">
            Customer details
          </p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Service className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                Car Repair
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">
            Submitted On
          </p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Calendar className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                12 Jan 2026
              </h1>
            </div>

            <div className="flex w-full bg-muted-background rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-background rounded-lg">
                <Clock className="w-4 h-4" />
              </div>
              <h1 className="text-foreground text-xs! font-medium!">
                12:15 PM
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground text-xs! font-medium!">Images</p>
          <div className="flex w-full gap-3 mt-2">
            <div className="w-[49%] min-w-36 rounded-xl">
              <img
                src="/Images/about-main.png"
                alt="image"
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </CommonDrawer>
    </div>
  );
};

export default BusinessDetailDrawer;

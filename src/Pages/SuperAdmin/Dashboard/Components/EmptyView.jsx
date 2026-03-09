import EmptyIcon from "../../../../assets/Images/dashboard-empty-view.svg?react";
const EmptyView = () => {
  return (
    <div className="flex flex-col gap-5 text-center">
      <div className="flex w-full justify-center">
        <EmptyIcon />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[16px] font-semibold text-foreground">
          No requests yet
        </h1>
        <p className="font-medium text-sm text-muted-foreground">
          New partner’s requests will show here.
        </p>
      </div>
    </div>
  );
};

export default EmptyView;

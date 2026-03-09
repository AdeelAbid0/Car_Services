const NewRequests = () => {
  return (
    <div className="flex w-full justify-between rounded-2xl bg-background hover:bg-white p-6 cursor-pointer">
      <div className="flex w-[80%] gap-5">
        <div className="flex shrink-0 w-12 h-12 rounded-xl">
          <img
            src="/Images/hero-image.png"
            alt="profile-image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-auto flex-col gap-4 justify-center">
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-[20px]! font-bold! text-foreground leading-7">
                Tyre Replacement
              </h1>
              <p className="text-[13px] font-normal text-muted-foreground pt-0.5">
                Suzuki Swift 2021
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Customer
              </p>
              <h1 className="text-sm! font-bold! text-foreground">
                Mansoor Ali
              </h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Schedule
              </p>
              <h1 className="text-sm! font-bold! text-foreground">
                Next Friday, 1:00 PM
              </h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Estimated Duration
              </p>
              <span className="flex gap-2 text-sm! font-bold! text-foreground">
                1 hour
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[20%] justify-between">
        <div className="flex w-full flex-col items-end gap-1.5">
          <p className="text-xs font-medium text-muted-foreground">
            You will earn
          </p>
          <h1 className="text-[20px] font-bold! text-foreground">PKR 15,000</h1>
        </div>
        <div className="flex w-full justify-end ">
          <div className="px-4 py-1">
            <label className="text-danger font-medium text-sm cursor-pointer hover:text-danger/80">
              Reject
            </label>
          </div>
          <div className="px-4 py-1">
            <label className="text-primary font-medium text-sm cursor-pointer hover:text-primary/80">
              Accept
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequests;

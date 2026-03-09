import StarActive from "../.././../../assets/svg/star-active.svg?react";
import StarDefault from "../.././../../assets/svg/star-default.svg?react";
const Ratings = () => {
  return (
    <div className="flex w-full justify-between rounded-2xl bg-background hover:bg-white p-6 cursor-pointer">
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full justify-between">
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
                    Emma Brown
                  </h1>
                  <p className="text-[13px] font-normal text-muted-foreground pt-0.5">
                    Suzuki Swift 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[20%] items-end justify-center">
            <div className="flex gap-0.75">
              <StarActive />
              <StarActive />
              <StarActive />
              <StarActive />
              <StarDefault />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm! font-normal! text-muted-foreground leading-4">
            Very smooth experience. The mechanic arrived on time and explained
            everything clearly. My car feels much better after the service.
            Highly recommended!
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-sm! font-normal! text-foreground">
            Engine Oil Change
          </h1>
          <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block"></span>
          <h1 className="text-sm! font-normal! text-foreground">2 days</h1>
        </div>
      </div>
    </div>
  );
};

export default Ratings;

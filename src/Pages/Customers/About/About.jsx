const About = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-between w-[50%] py-11">
        <div className="flex flex-col gap-1 w-[50%] relative z-0">
          <h1 className="text-2xl! font-bold! text-foreground leading-11">
            About us
          </h1>
          <p className="text-[16px] font-normal text-muted-foreground leading-6">
            We’re building a simple and reliable way to manage all your car
            services in one place. <br />
            From routine maintenance to emergency assistance, our platform
            connects car owners with verified service providers they can trust.
            <br />
            We focus on transparency, convenience, and quality — so you spend
            less time worrying about your car and more time on what matters.
          </p>
          <div className="flex w-full gap-12 mt-10">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-primary leading-11 text-[48px]! font-bold!">
                500 +
              </h1>
              <p className="text-[16px]! font-medium!">Happy Clients</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-primary leading-11 text-[48px]! font-bold!">
                300 +
              </h1>
              <p className="text-[16px]! font-medium!">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="w-[49%] relative z-0">
          <img src="/Images/about-main.png" alt="" className="" />
          <img
            src="/Images/about-primary.png"
            alt=""
            className="absolute z-10 -left-[30%] -bottom-[10%]"
          />
          <img
            src="/Images/about-secondary.png"
            alt=""
            className="absolute z-20 -left-full bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

const About = () => {
  return (
    <div className="flex w-full max-w-[90%] mx-auto justify-center items-center">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-start py-4 px-4 lg:px-8">
        <div className="flex flex-col gap-3 relative z-10">
          <h1 className="text-2xl! font-bold! text-foreground leading-11">
            About us
          </h1>
          <p className="text-[16px] w-full max-w-xl font-normal text-muted-foreground leading-6">
            We’re building a simple and reliable way to manage all your car
            services in one place. <br />
            From routine maintenance to emergency assistance, our platform
            connects car owners with verified service providers they can trust.
            <br />
            We focus on transparency, convenience, and quality — so you spend
            less time worrying about your car and more time on what matters.
          </p>
          <div className="flex flex-wrap w-full gap-x-12 gap-y-6 lg:mt-8 mt-6">
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
        <div className="w-full mx-auto max-w-[620px] relative z-0">
          <img src="/Images/about-main.png" alt="" className="w-[80%]" />
          <img
            src="/Images/about-primary.png"
            alt=""
            className="absolute z-10 w-[55%] -left-[30%] -bottom-[15%]"
          />
          <img
            src="/Images/about-secondary.png"
            alt=""
            className="absolute z-20 -left-[110%] -bottom-5 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;

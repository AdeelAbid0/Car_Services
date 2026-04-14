const About = () => {
  return (
    <div className="flex w-full max-w-[90%] mx-auto justify-center items-center">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-start py-4 px-4 lg:px-8">
        <div className="flex flex-col gap-2 md:gap-3 relative z-10">
          <h1 className="text-2xl! font-bold! text-foreground leading-11">
            About us
          </h1>
          <p className="md:text-[16px] text-[13px] w-full max-w-xl font-normal text-muted-foreground leading-6">
            We’re building a simple and reliable way to manage all your car
            services in one place. <br />
            From routine maintenance to emergency assistance, our platform
            connects car owners with verified service providers they can trust.
            <br />
            We focus on transparency, convenience, and quality — so you spend
            less time worrying about your car and more time on what matters.
          </p>
          <div className="flex flex-wrap w-full gap-x-12 gap-y-6 lg:mt-8 md:mt-6">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-primary leading-11 text-[36px] md:text-[48px]! font-bold!">
                500 +
              </h1>
              <p className="text-[16px]! font-medium!">Happy Clients</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-primary leading-11 text-[36px] md:text-[48px]! font-bold!">
                300 +
              </h1>
              <p className="text-[16px]! font-medium!">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto md:max-w-155 relative z-0 flex md:justify-center mb-20 md:mb-0">
          <img
            src="/Images/about-main.png"
            alt=""
            className="w-[220px] h-[220px] md:w-[80%] md:h-full abosolute left-0 overflow-hidden"
          />
          <img
            src="/Images/about-primary.png"
            alt=""
            className="absolute z-10 w-[176px] md:w-[55%] right-0 md:-left-[30%] bottom-[10%] md:-bottom-[15%]"
          />
          <img
            src="/Images/about-secondary.png"
            alt=""
            className="absolute z-20 md:-left-[110%] top-[225px] md:top-auto md:-bottom-5"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

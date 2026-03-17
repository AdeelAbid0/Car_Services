import React from 'react'
import PartnerCard from '../../../../Components/PartnerCard/PartnerCard'
import CustomCalendar from '../../../../Components/Calendar/Calendar'

const StepsModal = ({ currentStep = 1 }) => {

    const STEPS = [
        { id: 1, label: 'Service' },
        { id: 2, label: 'Partner' },
        { id: 3, label: 'Schedule' },
    ]

    const StepCircle = ({ stepId, currentStep }) => {
        const isActive = stepId <= currentStep
        return(
            <div className='flex flex-col items-center gap-2'>
                <div
                className={`w-[32px] h-[32px] rounded-full border-2 flex items-center justify-center transition-colors duration-300 
                    ${isActive ? 'border-primary' : 'border-neutral-300'}`}                
                >
                    <div
                    className={`w-[11px] h-[11px] rounded-full transition-colors duration-300 ${isActive ? 'bg-primary' : 'bg-neutral-300'}`}
                    />

                </div>
                <span
                className={`text-[13px] font-semibold font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                >
                    {STEPS.find((s) => s.id === stepId)?.label}
                </span>
            </div>
        )
    }
  return (
    <>
    {currentStep <= 3 && (
    <div className='flex gap-[1px] items-start justify-center px-10 '>
        {STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
                <StepCircle stepId={step.id} currentStep={currentStep} />
                {index < STEPS.length -1 && 
                <div className='flex-1 max-w-[100px] border-t-2 border-dashed border-neutral-300 mt-4 mx-2'/>
                }
            </React.Fragment>
        ))}
    </div>
    )}
    {currentStep === 2 && (
    <div className="flex w-full flex-col gap-2 p-10 max-h-[70vh] overflow-auto">
            <h1 className="text-foreground text-2xl font-semibold!">
              Select Partner
            </h1>
            {[1, 2, 3].map((item) => {
              return (
                <PartnerCard
                  profileImage={"/Images/hero-image.png"}
                  tag={"Recommended"}
                  shopName={"Detail Kings"}
                  status={"Available Now  "}
                  location={"H-8 Sector, Islamabad"}
                  distance={"2.8 km away"}
                  services={"Leather Conditioning"}
                  price={"3000"}
                  rating={5}
                />
              );
            })}
    </div>
     )}

     {currentStep === 3 && (
        <div className="flex flex-col gap-4 p-10 max-h-[70vh] w-full overflow-auto">
             <h1 className="text-foreground text-2xl font-semibold!">
              Select Date & Time
            </h1>
            <div className="flex items-center flex-col gap-2 max-h-[80vh] overflow-auto">
              <CustomCalendar />
            </div>
          </div>
     )}

     {currentStep === 4 && (
        <div className="flex flex-col gap-4 p-10">
            <h1 className="text-foreground text-2xl font-semibold!">
              Booking Confirmed
            </h1>
            <div className='relative overflow-hidden flex flex-col gap-6 bg-white p-15 justify-center items-center border-[1px] h-[55vh] rounded-2xl border-border w-full'>
              <div className='pointer-events-none absolute -top-24 left-0 h-44 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#f05800]/30 to-[#ffd02f]/30 blur-3xl' />
              <div className='pointer-events-none absolute -bottom-24 right-0 h-59 w-[50%] rounded-full bg-gradient-to-r from-[#a04df0]/20 to-[#4062d9]/20 blur-3xl' />

              <div className='relative z-10 flex flex-col gap-3'>
                    <h2 className='font-semibold weight-600 text-[44px]'>Congratulations! 🎉</h2>
                    <span className='font-medium text-[16px] weight-500 text-muted-foreground'>You've completed your first car service with us.</span>
                </div>
              <img className='relative z-10' src='booking-confirm.svg'/>
              <span className='relative z-10 mt-2 text-primary font-medium underline cursor-pointer'>View Booking</span>
            </div>
          
        </div>
     )}
    </>
  )
}

export default StepsModal



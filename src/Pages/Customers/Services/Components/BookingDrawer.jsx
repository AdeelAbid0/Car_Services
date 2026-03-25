import React, {useState} from 'react'
import CommonDrawer from '../../../../ui/Drawer/Drawer'
import BookingSteps from './BookingSteps'
import CloseIcon from '../../../../assets/svg/add.svg?react'

export const BookingDrawer = ({showBookingDrawer,setShowBookingDrawer}) => {
    const[currentStep, setCurrentStep] = useState(2)
    const TOTAL_STEPS = 4
    const BOOKING_DRAWER_WIDTH = {
        2: "75%",
        3: "45%",
        4: "45%"
    }

    const Drawer_Width = BOOKING_DRAWER_WIDTH[currentStep]
    const isConfirmStep = currentStep === TOTAL_STEPS

    const handleClick = () => {
        if(currentStep < TOTAL_STEPS){
            setCurrentStep(prev => prev + 1)
        }
    }

    const handleClose = () => {
        setShowBookingDrawer(false)
        setTimeout(() => {
            setCurrentStep(2)
        }, 50)
    }

  return (
    <div>
        <CommonDrawer
        open={showBookingDrawer}
        onClose={handleClose}    
        childrenPadding={false}
        footerButtonPrimaryLabel={isConfirmStep ? "Close" : "Continue"}
        footerButtonPrimaryClick={isConfirmStep ? handleClose : handleClick}
        width={Drawer_Width}
        showHeader={false} 
        >
            <div className='flex h-full flex-col bg-background'>
                <div className='sticky top-0 z-10 flex items-start gap-6 border-b border-border bg-background px-8 py-6'>
                    <div className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full' onClick={handleClose}>
                        <CloseIcon className='rotate-45' />
                    </div>
                    <div className='min-w-0 flex-1'>
                        <BookingSteps currentStep={currentStep} showContent={false} />
                    </div>
                </div>

                <div className='flex-1 overflow-y-auto'>
                    <BookingSteps currentStep={currentStep} showStepper={false} />
                </div>
            </div>

        </CommonDrawer>
    </div>
  )
}

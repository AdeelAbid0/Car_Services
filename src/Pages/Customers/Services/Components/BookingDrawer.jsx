import React, {useState} from 'react'
import CommonDrawer from '../../../../ui/Drawer/Drawer'
import StepsModal from './StepsModal'
import ArrowRightIcon from '../../../../assets/svg/arrow-right.svg?react'

export const BookingDrawer = ({showBookingDrawer,setShowBookingDrawer}) => {
    const[currentStep, setCurrentStep] = useState(1)
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
        setCurrentStep(2)
    }

  return (
    <div>
        <CommonDrawer
        open={showBookingDrawer}
        onClose={handleClose}    
        footerButtonPrimaryLabel={isConfirmStep ? "Close" : "Continue"}
        footerButtonPrimarySuffixIcon={isConfirmStep ? null : <ArrowRightIcon/>}   
        footerButtonPrimaryClick={isConfirmStep ? handleClose : handleClick}
        width={Drawer_Width} 
        >
            <StepsModal currentStep={currentStep}/>

        </CommonDrawer>
    </div>
  )
}

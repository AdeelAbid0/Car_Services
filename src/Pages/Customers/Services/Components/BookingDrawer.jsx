import React, {useState} from 'react'
import CommonDrawer from '../../../../ui/Drawer/Drawer'
import StepsModal from './StepsModal'
import ArrowRightIcon from '../../../../assets/svg/arrow-right.svg?react'

export const BookingDrawer = ({showBookingDrawer,setShowBookingDrawer}) => {
    const[currentStep, setCurrentStep] = useState(1)
    const TOTAL_STEPS =3
    
    const handleClick = () => {
        if(currentStep < TOTAL_STEPS){
            setCurrentStep(prev => prev + 1)
        }
    }

    const handleClose = () => {
        setShowBookingDrawer(false)
        setCurrentStep(1)
    }

  return (
    <div>
        <CommonDrawer
        open={showBookingDrawer}
        onClose={handleClose}    
        footerButtonPrimaryLabel="Continue"
        footerButtonPrimarySuffixIcon={<ArrowRightIcon/>}   
        footerButtonPrimaryClick={handleClick}
        width="75%" 
        >
            <StepsModal currentStep={currentStep}/>

        </CommonDrawer>
    </div>
  )
}

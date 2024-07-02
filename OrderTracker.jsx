import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "placed",
    "order confirmed",
    "shipped",
    "out for delivery",
    "delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
      <Stepper activeStep ={activeStep} alternativeLabel>
{steps.map((label)=><Step>
    <StepLabel sx="#9155FD">{label}</StepLabel>
</Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker

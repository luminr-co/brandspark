import React from 'react'
import { GustoIcon, MastercardIcon, PaypalIcon, VisaIcon, WiseIcon } from '../../assets'

const WeAccept = () => {
  return (
    <div className='text-center mt-16'>
        <h1 className='font-primary'>We Accept : </h1>
        <div className="flex gap-16 items-center justify-center mt-10">
            <PaypalIcon/>
            <WiseIcon/>
            <MastercardIcon/>
            <GustoIcon/>
            <VisaIcon/>
        </div>
    </div>
  )
}

export default WeAccept
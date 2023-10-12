import { Button } from '@pwskills/rachnaui'
import React, { useEffect, useState } from 'react'
import { useTimer } from '../../hooks/timer/useTimer'
import { calculateTimeDifference } from '../../hooks/utils/genericFunction'

const Live = () =>  {
    const {hour , minutes , seconds} = useTimer(2)
      useEffect(() => {
       const catchObj=  calculateTimeDifference("2023-07-25T12:23:40.693Z" , "2023-07-26T11:19:30.693Z")
       console.log("catchObj" , catchObj)
      },[])
  return (
    <div>
        <div>
        {hour < 10 ? `0${hour}` : hour} : {minutes < 10 ? `0${minutes}`: minutes } : {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <Button disabled = {hour === 0 && minutes === 0 && seconds === 0}>Submit</Button>
        </div>
  )
}

export default Live
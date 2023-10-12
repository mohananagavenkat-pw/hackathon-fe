import { Button } from '@pwskills/rachnaui'
import React, { useEffect, useState } from 'react'

const Live = () =>  {
    const [seconds , setSeconds] = useState(60)
    const [minutes  , setMinutes] = useState(1)
    const [hour , setHour] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    // setDisableSendAgain(false);
                    clearInterval(interval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if(minutes === 0 && seconds === 0){
                if(hour === 0){
                    clearInterval(interval)
                }
                else{
                    setHour(hour -1)
                    setMinutes(59)
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds]);
      
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
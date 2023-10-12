import { useEffect, useState } from "react";

export const useTimer = (inputHour) => {

    const [seconds , setSeconds] = useState(1)
    const [minutes  , setMinutes] = useState(1)
    const [hour , setHour] = useState(inputHour)
    const [days , setDays] = useState(1)
    // console.log("date" , date)
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
                    setSeconds(59)
                }
            }
            if(hour === 0 ){
                if(days === 0)
                clearInterval(interval)
            else{
                setDays(days -1)
                setHour(23)
                setMinutes(59)
                setSeconds(59)
            }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds , hour]);
    
    return {minutes, seconds , hour}
}
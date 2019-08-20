import * as React from 'react';
import {StoreContext} from "../App";
import {toggleTimer} from "../store/timerStatusReducer";
import {useEffect} from "react";

const PostTimer = (props: object) => {
  const [runningTime, setRunningTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  const [{timerStatus}, dispatch] = React.useContext(StoreContext)

  const handleClick = () => {
      dispatch(toggleTimer())
      console.log(timerStatus)
    setStartTime(Date.now())
  };


React.useEffect(()=>{
    let interval: any = null
    if (timerStatus===true){
        console.log(true)
        interval = setInterval(()=>{
            setRunningTime(runningTime => runningTime +1);
        }, 1000)
    }
    else if (timerStatus===false && runningTime!==0) {
        clearInterval(interval)
    }
    return () =>  clearInterval(interval)
},[timerStatus,runningTime])

  return(
      <div>
          <p>{runningTime}</p>
          <button onClick={handleClick}>
          {timerStatus ? 'STOP' : 'START'}
          </button>

          {/*<button onClick={handleReset}>RESET</button>*/}
          {/*{(runningTime && !timerStatus) && <form>FILL ME IN</form> }*/}

      </div>
  )
};

export default PostTimer

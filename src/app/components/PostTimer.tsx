import * as React from 'react';

const PostTimer = (props: object) => {
  const [timerStatus, setTimerStatus] = React.useState(false);
  const [runningTime, setRunningTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);

  const handleClick = () => {
    let timer;
console.log('click running')
    if (timerStatus === false) {
        console.log('timer running')

            startTimer()
console.log( 'in click', startTime, timerStatus)
      timer = setInterval(tick, 50);
    } else {
        console.log('stop timer', timerStatus)
      setTimerStatus(false);
      clearInterval(timer);
    }
  };

  const startTimer = async () =>{
       await setStartTime(Date.now());
      await setTimerStatus(true);
      console.log(startTime, timerStatus )

  }

  const handleReset = (): void => {
      console.log('reset clicked')

    setRunningTime(0);
    setTimerStatus(false);
  };

  const tick = () => {
      console.log(timerStatus)
        console.log(Date.now()-startTime)
        setRunningTime(Date.now()-startTime)
  };


  return(
      <div>
          <p>{Math.round(runningTime/1000)}</p>
          <button onClick={handleClick}>
          {timerStatus ? 'STOP' : 'START'}
          </button>

          <button onClick={handleReset}>RESET</button>
          {(runningTime && !timerStatus) && <form>FILL ME IN</form> }

      </div>
  )
};

export default PostTimer

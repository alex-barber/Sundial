import * as React from 'react';
import { StoreContext } from '../App';
import { toggleTimer } from '../store/timerStatusReducer';
import { useEffect } from 'react';
import { db } from '../../../server/firebase';

const PostTimer = (props: object) => {
  const [runningTime, setRunningTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  const [{ timerStatus }, dispatch] = React.useContext(StoreContext);
  const [postBody, setPostBody] = React.useState('');
  const handleClick = () => {
    dispatch(toggleTimer());
    console.log(timerStatus);
    setStartTime(Date.now());
  };

  React.useEffect(() => {
    let interval: any = null;
    if (timerStatus === true) {
      console.log(true);
      interval = setInterval(() => {
        setRunningTime(runningTime => runningTime + 1);
      }, 1000);
    } else if (timerStatus === false && runningTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStatus, runningTime]);

  const addPost = (): any => {
    let date = new Date();
    db.collection('Projects')
      .doc('0w9ead0zQmmoIIYmQQX0')
      .collection('posts')
      .doc(`${date.getFullYear()}-${date.getMonth() + 1}`)
      .update({
        1: {
          day: date.getDate(),
          user: 'placeholder',
          postBody: postBody,
          tags: ['placeholder'],
          startTime: startTime,
          runningTime: runningTime,
        },
      });
    //TODO: on success: let user know & clear form;
  };

  return (
    <div>
      <p>{runningTime}</p>
      <button onClick={handleClick}>{timerStatus ? 'STOP' : 'START'}</button>

      {/*<button onClick={handleReset}>RESET</button>*/}
      {runningTime && !timerStatus ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <form
            onSubmit={(event: any) => {
              event.preventDefault();
              addPost();
            }}
          >
            <input
              type="text"
              value={postBody}
              onChange={e => setPostBody(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostTimer;

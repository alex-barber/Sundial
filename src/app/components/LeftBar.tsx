import * as React from 'react';
import * as firebase from 'firebase';
import { AuthContext } from '../App';

const LeftBar = (props: object) => {

  return (
    <div
      style={{
        height: '93vh',
        width: '7vw',
        backgroundColor: 'lightgrey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginRight: '2em',
      }}
    />
  );
};

export default LeftBar;

import * as React from 'react';
import { db } from '../../../server/firebase';
import * as firebase from 'firebase';
import ClockButton from './ClockButton';

export const SingleProjectView = (props: object) => {
  return (
    <div>
      <div>TEMP</div>
      <ClockButton />
    </div>
  );
};

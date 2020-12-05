import React, { Fragment } from 'react';

const Arrow =  ({ on }) => (
  <Fragment>
    {on ? '▼' : '▲'}
  </Fragment>
);

export default Arrow;

import React from 'react';

import MainView from './view';
import Topbar from '../topbar';
import Timer from '../../pages/timer';

export default function () {
  return (
    <MainView>
      <Topbar />
      <Timer />
    </MainView>
  );
}

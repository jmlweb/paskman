import React from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Loading from '../components/Loading/Loading';
import isSnapshot from '../utils/isSnapshot';

const OnlyBrowserGate = (persistor, WrappedComponent) => {
  if (isSnapshot() || !persistor) {
    return WrappedComponent;
  }
  return (
    <PersistGate persistor={persistor} loading={<Loading />}>
      {WrappedComponent}
    </PersistGate>
  );
};

export default OnlyBrowserGate;

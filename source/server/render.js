import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';

export default React => (renderProps, store) => renderToString(
  <Provider store={store}>
    <RouterContext {...renderProps} />
  </Provider>,
);

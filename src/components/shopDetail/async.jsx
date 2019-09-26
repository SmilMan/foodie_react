import React from 'react';
import Loadable from 'react-loadable';

import Loading from 'loading/index';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  // loading: Loading
  loading: () => {
      return (
         <Loading/>
      )
  }
});

export default LoadableComponent; 
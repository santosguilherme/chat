import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingContent } from './styles/Container';

function Loading() {
  return (
    <LoadingContent>
      <CircularProgress />
    </LoadingContent>
  );
}

export default memo(Loading);

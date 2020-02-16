import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions as appActions, selectors as appSelectors} from 'redux/modules/app';

import Loading from './components/Loading/Loading';
import AppTabs from './components/AppTabs/AppTabs';
import {BackgroudPrimary, BackgroudSecondary} from './styles/Background';
import {Container, Content} from './styles/Container';
import 'typeface-roboto';

function App() {
  const dispatch = useDispatch();

  const isWebsocketConnected = useSelector(appSelectors.getWebsocketConnected);

  useEffect(() => {
    dispatch(appActions.connectWebsocket());
  }, [dispatch]);

  return (
    <>

      <Container>
        <BackgroudPrimary/>
        <Content>
          {
            isWebsocketConnected
              ? <AppTabs/>
              : <Loading/>
          }
        </Content>
        <BackgroudSecondary/>
      </Container>
    </>
  );
}

export default App;

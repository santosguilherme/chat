import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import 'typeface-roboto';

import Chat from 'features/Chat/Chat';
import Settings from 'features/Settings/Settings';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }

  div#root {
    height: 100vh;
    max-height: 100vh;
  }
`;

const Container = styled.main`
  height: 100%;

  display: grid;
  grid-template-rows: min-content auto;
`;


const Header = styled(AppBar)`
`;

const Body = styled.div`
  overflow-y: auto;
`;

const tabs = {
  0: <Chat />,
  1: <Settings />,
};

function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyle/>
      <Container>
        <Header position="static">
          <Tabs value={activeTab} onChange={handleChangeTab}>
            <Tab label="Chat" />
            <Tab label="Settings" />
          </Tabs>
        </Header>
        <Body>
          {tabs[activeTab]}
        </Body>
      </Container>
    </>
  );
}

export default App;

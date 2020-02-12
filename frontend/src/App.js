import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import 'typeface-roboto';

import Chat from './Chat/Chat';
import Settings from './Settings/Settings';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }

  div#root {
    height: 100vh;
  }
`;

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;


const Header = styled.header`
`;

const Body = styled.div`
  flex: 1;
  overflow: auto;
`;

const Footer = styled.footer`
  background: green;
`;

const tabs = {
  0: <Chat />,
  1: <Settings />,
};

function App() {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyle/>
      <Container>
        <Header>
          <Tabs value={activeTab} onChange={handleChangeTab}>
            <Tab label="Chat" />
            <Tab label="Settings" />
          </Tabs>
        </Header>
        <Body>
          {tabs[activeTab]}
        </Body>
        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

export default App;

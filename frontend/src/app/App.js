import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
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

  @media screen and (min-width: 768px) {
    background-color: #ccc;

    display: grid;
    grid-template-rows: 1fr 1fr 4fr 4fr 1fr;
    grid-template-columns: 1fr 6fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-rows: 1fr 1fr 3fr 3fr 1fr;
  }
`;

const BackgroudPrimary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: yellow;
    grid-area: 1 / 1 / 3 / 4;
  }
`;

const BackgroudSecondary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: greenyellow;
    grid-area: 3 / 1 / 6 / 4;
  }
`;

const Content = styled.main`
  height: 100%;

  display: grid;
  grid-template-rows: min-content auto;

  @media screen and (min-width: 768px) {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2);
    z-index: 100;

    grid-column: 2;
    grid-row: 2 / 5;
  }

`;


const Header = styled(AppBar)`
`;

const Body = styled.div`
  overflow-y: auto;
`;

const tabs = {
  0: <Chat/>,
  1: <Settings/>,
};

function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <CssBaseline/>
      <GlobalStyle/>
      <Container>
        <BackgroudPrimary />
        <Content>
          <Header position="static">
            <Tabs value={activeTab} onChange={handleChangeTab}>
              <Tab label="Chat"/>
              <Tab label="Settings"/>
            </Tabs>
          </Header>
          <Body>
            {tabs[activeTab]}
          </Body>
        </Content>
        <BackgroudSecondary />
      </Container>
    </>
  );
}

export default App;

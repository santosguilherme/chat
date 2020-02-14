import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import Screen from '../commons/components/Screen/Screen';
import ChatMessage from '../commons/components/ChatMessage/ChatMessage';

const SendMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  background-color: #fff;
`;

export default function Chat() {
  const messages = [
    {
      id: 1,
      userName: 'Guest',
      message: 'Want to bang tonight?',
      date: '12/01/2020',
    },
    {
      id: 2,
      userName: 'Guest',
      message: 'Want to bang tonight?',
      date: '12/01/2020',
    },
    {
      id: 3,
      userName: 'Guest',
      message: 'Want to bang tonight?',
      date: '12/01/2020',
    },
    {
      id: 4,
      userName: 'Guest',
      message: 'Want to bang tonight?',
      date: '12/01/2020',
    }
  ];
  // TODO: ul e li
  return (
    <Screen>
      {({Content, Footer}) => (
        <>
          <Content backgroundColor="#E5DDD5">
            {messages.map(({id, userName, message, date}) => (
              <ChatMessage
                key={id}
                userName={userName}
                message={message}
                dateTime={date}
              />
            ))}
            <ChatMessage
              align="left"
              backgroundColor="#DCF8C6"
              message="What?"
              dateTime="25/05/1992"
            />
          </Content>
          <Footer backgroundColor="#f0f0f0">
            <SendMessage>
              <StyledTextField id="filled-basic" placeholder="Enter message" variant="outlined" fullWidth/>
              <IconButton aria-label="delete">
                <SendRoundedIcon/>
              </IconButton>
            </SendMessage>
          </Footer>
        </>
      )}
    </Screen>
  );
}

import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import Screen from '../commons/components/Screen/Screen';
import ChatMessage from '../commons/components/ChatMessage/ChatMessage';
import {actions as messagesActions, selectors as messagesSelectors} from '../redux/modules/messages';
import {selectors as userSettingsSelectors} from '../redux/modules/userSettings';
import {useDispatch, useSelector} from 'react-redux';

const StyledTextField = styled(TextField)`
  background-color: #fff;
  grid-area: input;
`;

const SendMessageButton = styled.div`
  grid-area: button;
  align-self: center;
`;

const SendMessageGrid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-auto-columns: min-content;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "input button";
`;

export default function Chat() {
  const dispatch = useDispatch();

  const userName = useSelector(userSettingsSelectors.getUserName);
  const messages = useSelector(messagesSelectors.getMessages);
  const loggedUserId = useSelector(messagesSelectors.getUserId);
  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback(
    (event) => setMessage(event.target.value),
    []
  );

  const handleSendMessageClick = useCallback(
    () => {
      dispatch(messagesActions.sendMessage({ userName, text: message}));
      setMessage('');
    },
    [dispatch, message, userName]
  );

  return (
    <Screen>
      {({Content, Footer}) => (
        <>
          <Content backgroundColor="#E5DDD5" alignContent="end">
            {messages.map(({id, userId, userName, text, dateTime}) => (
              <ChatMessage
                key={id}
                align={(loggedUserId === userId) ? 'left' : 'right'}
                backgroundColor={(loggedUserId === userId) ? '#DCF8C6' : undefined}
                userName={(loggedUserId !== userId) ? userName : undefined}
                message={text}
                dateTime={dateTime}
              />
            ))}
            {false && (
              <ChatMessage
                align="left"
                backgroundColor="#DCF8C6"
                message="What?"
                dateTime="25/05/1992"
              />
            )}
          </Content>
          <Footer backgroundColor="#f0f0f0">
            <SendMessageGrid>
              <StyledTextField
                id="filled-basic"
                placeholder="Enter message"
                variant="outlined"
                value={message}
                onChange={handleChangeMessage}
                fullWidth/>
              <SendMessageButton>
                <IconButton aria-label="delete" onClick={handleSendMessageClick} disabled={!message.length}>
                  <SendRoundedIcon/>
                </IconButton>
              </SendMessageButton>
            </SendMessageGrid>
          </Footer>
        </>
      )}
    </Screen>
  );
}

import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Screen from 'commons/components/Screen/Screen';
import { actions as messagesActions, selectors as messagesSelectors } from 'redux/modules/messages';
import { selectors as userSettingsSelectors } from 'redux/modules/userSettings';

import ChatMessage from './components/ChatMessage/ChatMessage';
import { SendMessage } from './components/SendMessage/SendMessage';

function Chat() {
  const dispatch = useDispatch();

  const userName = useSelector(userSettingsSelectors.getUserName);
  const hour12 = useSelector(userSettingsSelectors.getHour12);
  const enterMode = useSelector(userSettingsSelectors.getEnterMode);

  const messages = useSelector(messagesSelectors.getMessages);
  const loggedUserId = useSelector(messagesSelectors.getUserId);

  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback(
    event => setMessage(event.target.value),
    [],
  );

  const handleSendMessageClick = useCallback(
    () => {
      dispatch(messagesActions.sendMessage({ userName, text: message }));
      setMessage('');
    },
    [dispatch, message, userName],
  );

  const isLoggedUserMessage = messageUserId => loggedUserId === messageUserId;

  const renderLoggedUserMessage = (loggedMessage, props) => {
    const { id, text, dateTime } = loggedMessage;

    return (
      <ChatMessage
        key={id}
        align="right"
        backgroundColor="chat.loggedMessage"
        message={text}
        dateTime={dateTime}
        {...props}
      />
    );
  };

  const renderNonLoggedUserMessage = (nonLoggedMessage, props) => {
    const {
      id, userName: messageUserName, text, dateTime,
    } = nonLoggedMessage;

    return (
      <ChatMessage
        key={id}
        userName={messageUserName}
        message={text}
        dateTime={dateTime}
        {...props}
      />
    );
  };

  // TODO: useMemo?
  const renderChatMessage = chatMessage => {
    const { userId } = chatMessage;

    return isLoggedUserMessage(userId)
      ? renderLoggedUserMessage(chatMessage, { hour12 })
      : renderNonLoggedUserMessage(chatMessage, { hour12 });
  };

  return (
    <Screen>
      {({ Content, Footer }) => (
        <>
          <Content backgroundColor="chat.content" alignContent="end">
            {messages.map(renderChatMessage)}
          </Content>
          <Footer backgroundColor="chat.send">
            <SendMessage
              value={message}
              onChange={handleChangeMessage}
              onSend={handleSendMessageClick}
              sendOnCtrlEnter={enterMode}
            />
          </Footer>
        </>
      )}
    </Screen>
  );
}

export default Chat;

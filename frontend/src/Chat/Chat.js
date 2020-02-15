import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Screen from '../commons/components/Screen/Screen';
import ChatMessage from './components/ChatMessage/ChatMessage';
import {SendMessage} from './components/SendMessage/SendMessage';

import {actions as messagesActions, selectors as messagesSelectors} from '../redux/modules/messages';
import {selectors as userSettingsSelectors} from '../redux/modules/userSettings';

function Chat() {
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

  const isLoggedUserMessage = messageUserId => {
    return loggedUserId === messageUserId;
  };

  const renderLoggedUserMessage = ({ id, text, dateTime}) => (
    <ChatMessage
      key={id}
      align="left"
      backgroundColor="#DCF8C6"
      message={text}
      dateTime={dateTime}
    />
  );

  const renderNonLoggedUserMessage = ({id, userName, text, dateTime}) => (
    <ChatMessage
      key={id}
      userName={userName}
      message={text}
      dateTime={dateTime}
    />
  );

  // TODO: useMemo?
  const renderChatMessage = message => {
    const { userId } = message;
    return isLoggedUserMessage(userId)
      ? renderLoggedUserMessage(message)
      : renderNonLoggedUserMessage(message);
  };

  return (
    <Screen>
      {({Content, Footer}) => (
        <>
          <Content backgroundColor="#E5DDD5" alignContent="end">
            {messages.map(renderChatMessage)}
          </Content>
          <Footer backgroundColor="#f0f0f0">
            <SendMessage value={message} onChange={handleChangeMessage} onClick={handleSendMessageClick}/>
          </Footer>
        </>
      )}
    </Screen>
  );
}

export default Chat;

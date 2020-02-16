import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Screen from 'commons/components/Screen/Screen';
import {actions as messagesActions, selectors as messagesSelectors} from 'redux/modules/messages';
import {selectors as userSettingsSelectors} from 'redux/modules/userSettings';

import ChatMessage from './components/ChatMessage/ChatMessage';
import {SendMessage} from './components/SendMessage/SendMessage';

function Chat() {
  const dispatch = useDispatch();

  const userName = useSelector(userSettingsSelectors.getUserName);
  const hour12 = useSelector(userSettingsSelectors.getHour12);
  const enterMode = useSelector(userSettingsSelectors.getEnterMode);

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

  const renderLoggedUserMessage = ({ id, text, dateTime}, props) => (
    <ChatMessage
      key={id}
      align="right"
      backgroundColor="#DCF8C6"
      message={text}
      dateTime={dateTime}
      {...props}
    />
  );

  const renderNonLoggedUserMessage = ({id, userName, text, dateTime}, props) => (
    <ChatMessage
      key={id}
      userName={userName}
      message={text}
      dateTime={dateTime}
      {...props}
    />
  );

  // TODO: useMemo?
  const renderChatMessage = message => {
    const { userId } = message;
    return isLoggedUserMessage(userId)
      ? renderLoggedUserMessage(message, { hour12 })
      : renderNonLoggedUserMessage(message, { hour12 });
  };

  return (
    <Screen>
      {({Content, Footer}) => (
        <>
          <Content backgroundColor="#E5DDD5" alignContent="end">
            {messages.map(renderChatMessage)}
          </Content>
          <Footer backgroundColor="#f0f0f0">
            <SendMessage value={message} onChange={handleChangeMessage} onSend={handleSendMessageClick} sendOnCtrlEnter={enterMode}/>
          </Footer>
        </>
      )}
    </Screen>
  );
}

export default Chat;

import React, {
  useCallback, useEffect, useState, memo, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Screen from 'commons/components/Screen/Screen';
import { actions as messagesActions, selectors as messagesSelectors } from 'redux/modules/messages';
import { selectors as userSettingsSelectors } from 'redux/modules/userSettings';

import ChatMessage from './components/ChatMessage/ChatMessage';
import SendMessage from './components/SendMessage/SendMessage';
import { ContentWrapper } from './styles/Content';

function Chat() {
  const dispatch = useDispatch();
  const messageWrapperRef = useRef();
  const [message, setMessage] = useState('');

  const userName = useSelector(userSettingsSelectors.getUserName);
  const hour12 = useSelector(userSettingsSelectors.getHour12);
  const enterMode = useSelector(userSettingsSelectors.getEnterMode);

  const messages = useSelector(messagesSelectors.getMessages);
  const loggedUserId = useSelector(messagesSelectors.getUserId);

  useEffect(() => {
    if (messages && messages.length) {
      const { current } = messageWrapperRef;
      current.scrollTop = current.scrollHeight;
    }
  }, [messages]);

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

  const isLoggedUserMessage = useCallback(
    messageUserId => loggedUserId === messageUserId,
    [loggedUserId],
  );

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

  const renderChatMessage = useCallback(
    chatMessage => {
      const { userId } = chatMessage;

      return isLoggedUserMessage(userId)
        ? renderLoggedUserMessage(chatMessage, { hour12 })
        : renderNonLoggedUserMessage(chatMessage, { hour12 });
    },
    [hour12, isLoggedUserMessage],
  );

  return (
    <Screen>
      {({ Content, Footer }) => (
        <>
          <ContentWrapper ref={messageWrapperRef}>
            <Content backgroundColor="chat.content" alignContent="end">
              {messages.map(renderChatMessage)}
            </Content>
          </ContentWrapper>
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

export default memo(Chat);

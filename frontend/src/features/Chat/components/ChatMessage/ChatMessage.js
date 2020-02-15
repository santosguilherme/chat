import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {Message, MessageRow} from './styles/Container';
import {MessageContent, MessageTime} from './styles/Content';

function ChatMessage({align, backgroundColor, userName, message, dateTime, hour12}) {
  const locale = 'en-US'; // TOOD: receber vindo do settings
  const date = new Date(dateTime);
  const messageTime = date.toLocaleTimeString(locale, {
    timeStyle: 'short',
    hour12
  });

  return (
    <MessageRow left={align === 'left'}>
      <Message backgroundColor={backgroundColor}>
        <MessageContent>
          <Typography variant="subtitle2">{userName}</Typography>
          <Typography variant="body2">{message}</Typography>
        </MessageContent>
        <MessageTime>
          <Typography variant="caption" title={date.toLocaleString()}>{messageTime}</Typography>
        </MessageTime>
      </Message>
    </MessageRow>
  );
}

ChatMessage.defaultProps = {
  align: 'right',
};

ChatMessage.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  backgroundColor: PropTypes.string,
  userName: PropTypes.string,
  message: PropTypes.string,
  dateTime: PropTypes.string,
  hour12: PropTypes.bool.isRequired,
};

export default ChatMessage;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { Message, MessageRow } from './styles/Container';
import { MessageContent, MessageTime } from './styles/Content';

function ChatMessage({ align, backgroundColor, userName, message, dateTime }) {
  return (
    <MessageRow left={align === 'left'}>
      <Message backgroundColor={backgroundColor}>
        <MessageContent>
          <Typography variant="subtitle2">{userName}</Typography>
          <Typography variant="body2">{message}</Typography>
        </MessageContent>
        <MessageTime>
          <Typography variant="caption">{dateTime}</Typography>
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
};

export default ChatMessage;

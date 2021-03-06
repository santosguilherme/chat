import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { FormattedTime, useIntl } from 'react-intl';

import { Message, MessageRow } from './styles/Container';
import { MessageContent, MessageTime } from './styles/Content';
import { Tail } from './styles/Tail';

function ChatMessage({
  align, backgroundColor, userName, message, dateTime, hour12,
}) {
  const intl = useIntl();
  const date = new Date(dateTime);

  return (
    <MessageRow left={align === 'left'}>
      <Message backgroundColor={backgroundColor} align={align}>
        <Tail backgroundColor={backgroundColor} align={align} />
        <MessageContent>
          <Typography variant="subtitle2">{userName}</Typography>
          <Typography variant="body2">{message}</Typography>
        </MessageContent>
        <MessageTime>
          <Typography variant="caption" title={date.toLocaleString(intl.locale)}>
            <FormattedTime value={date} hour12={hour12} />
          </Typography>
        </MessageTime>
      </Message>
    </MessageRow>
  );
}

ChatMessage.defaultProps = {
  align: 'left',
  backgroundColor: 'background.paper',
  userName: undefined,
};

ChatMessage.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  backgroundColor: PropTypes.string,
  dateTime: PropTypes.string.isRequired,
  hour12: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

export default memo(ChatMessage);

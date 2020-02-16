import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import {isEmpty} from 'commons/utils/string/isEmpty';

import {SendMessageGrid} from './styles/Container';
import {StyledTextField} from './styles/Input';
import {StyledButton} from './styles/Button';

export function SendMessage({sendOnCtrlEnter, value, onSend, onChange}) {
  const valueIsEmpty = isEmpty(value);

  const handleKeyDown = useCallback(
    (event) => {
      const isCtrlCmdHold = event.ctrlKey || event.metaKey;
      const isEnterKey = event.key === 'Enter';

      if (sendOnCtrlEnter && !valueIsEmpty && isEnterKey && isCtrlCmdHold) {
        onSend();
      }
    },
    [sendOnCtrlEnter, valueIsEmpty, onSend]
  );

  return (
    <SendMessageGrid>
      <StyledTextField
        placeholder="Enter message"
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        fullWidth
      />
      <StyledButton onClick={onSend} disabled={valueIsEmpty}>
        <SendRoundedIcon/>
      </StyledButton>
    </SendMessageGrid>
  );
}

SendMessage.defaultProps = {
  onSend: () => {
  },
};

SendMessage.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSend: PropTypes.func,
  sendOnCtrlEnter: PropTypes.bool.isRequired
};

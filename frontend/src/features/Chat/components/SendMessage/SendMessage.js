import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import { isEmpty } from 'commons/utils/string/isEmpty';

import { SendMessageGrid } from './styles/Container';
import { StyledTextField } from './styles/Input';
import { StyledButton } from './styles/Button';

function SendMessage({
  sendOnCtrlEnter, value, onSend, onChange,
}) {
  const intl = useIntl();
  const valueIsEmpty = useMemo(() => isEmpty(value), [value]);

  const handleKeyDown = useCallback(
    event => {
      const isCtrlCmdHold = event.ctrlKey || event.metaKey;
      const isEnterKey = event.key === 'Enter';

      if (sendOnCtrlEnter && !valueIsEmpty && isEnterKey && isCtrlCmdHold) {
        onSend();
      }
    },
    [sendOnCtrlEnter, valueIsEmpty, onSend],
  );

  return (
    <SendMessageGrid>
      <StyledTextField
        id="messageText"
        name="messageText"
        inputProps={{
          'aria-label': intl.formatMessage({ id: 'CHAT.SEND_MESSAGE.INPUT.PLACEHOLDER' }),
        }}
        placeholder={intl.formatMessage({ id: 'CHAT.SEND_MESSAGE.INPUT.PLACEHOLDER' })}
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        fullWidth
      />
      <StyledButton
        aria-label={intl.formatMessage({ id: 'CHAT.SEND_MESSAGE.BUTTON.LABEL' })}
        onClick={onSend}
        disabled={valueIsEmpty}
        aria-disabled={valueIsEmpty}
      >
        <SendRoundedIcon />
      </StyledButton>
    </SendMessageGrid>
  );
}

SendMessage.defaultProps = {
  onSend: () => {},
  value: '',
};

SendMessage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSend: PropTypes.func,
  sendOnCtrlEnter: PropTypes.bool.isRequired,
  value: PropTypes.string,
};

export default memo(SendMessage);

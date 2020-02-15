import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import * as PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

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

export function SendMessage(props) {
    return <SendMessageGrid>
        <StyledTextField
            id="filled-basic"
            placeholder="Enter message"
            variant="outlined"
            value={props.value}
            onChange={props.onChange}
            fullWidth/>
        <SendMessageButton>
            <IconButton aria-label="delete" onClick={props.onClick} disabled={!props.value.length}>
                <SendRoundedIcon/>
            </IconButton>
        </SendMessageButton>
    </SendMessageGrid>;
}

SendMessage.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SendMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Chat(){
  return (
    <Content>
      <SendMessage>
        <TextField id="filled-basic" placeholder="Enter message" variant="outlined"  fullWidth/>
        <IconButton aria-label="delete">
          <SendRoundedIcon />
        </IconButton>
      </SendMessage>
    </Content>
  );
}

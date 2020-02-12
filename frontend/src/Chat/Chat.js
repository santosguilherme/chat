import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Typography from '@material-ui/core/Typography';


const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SendMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.div`
  display: flex;
`;

const MessageContent = styled.div`
  flex: 1;
`;

const MessageText = styled.p`

`;

const MessageUser = styled.span`

`;

const MessageTime = styled.span`
  display: flex;
  align-items: flex-end;
`;

export default function Chat() {
  return (
    <Content>
      <Message>
        <MessageContent>
          <Typography variant="subtitle2" component={MessageUser}>Guest</Typography>
          <Typography variant="body2" component={MessageText}>Want to bang tonight?</Typography>
        </MessageContent>
        <Typography variant="caption" component={MessageTime}>12/01/2020</Typography>
      </Message>
      <SendMessage>
        <TextField id="filled-basic" placeholder="Enter message" variant="outlined" fullWidth/>
        <IconButton aria-label="delete">
          <SendRoundedIcon/>
        </IconButton>
      </SendMessage>
    </Content>
  );
}

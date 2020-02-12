import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';



const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Settings(){
  const [userName, setUserName] = React.useState('Guest');
  const [interfaceColor, setInterfaceColor] = React.useState('light');
  const [clockDisplay, setClockDisplay] = React.useState('12');
  const [enterMode, setEnterMode] = React.useState(false);
  const [language, setLanguage] = React.useState('enUS');

  const handleChangeUserName = event => {
    setUserName(event.target.value);
  };

  const handleChangeInterfaceColor = event => {
    setInterfaceColor(event.target.value);
  };

  const handleChangeClockDisplay = event => {
    setClockDisplay(event.target.value);
  };

  const handleChangeEnterMode = event => {
    setEnterMode(event.target.value);
  };

  const handleChangeLanguage = event => {
    setLanguage(event.target.value);
  };

  return (
    <Form>
      <TextField  value={userName} onChange={handleChangeUserName} label="User name" required variant="outlined" />
      <FormControl component="fieldset">
        <FormLabel component="legend">Interface Color</FormLabel>
        <RadioGroup row name="interfaceColor" value={interfaceColor} onChange={handleChangeInterfaceColor}>
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Clock Display</FormLabel>
        <RadioGroup row name="clockDisplay" value={clockDisplay} onChange={handleChangeClockDisplay}>
          <FormControlLabel value="12" control={<Radio />} label="12 hours" />
          <FormControlLabel value="24" control={<Radio />} label="24 hours" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Send messages on CTRL + ENTER</FormLabel>
        <RadioGroup row name="enterMode" value={enterMode} onChange={handleChangeEnterMode}>
          <FormControlLabel value={true} control={<Radio />} label="On" />
          <FormControlLabel value={false} control={<Radio />} label="Off" />
        </RadioGroup>
      </FormControl>
      <TextField id="select" label="Language" value={language} onChange={handleChangeLanguage} variant="outlined" select>
        <MenuItem value="enUS">English</MenuItem>
        <MenuItem value="ptBR">Português</MenuItem>
      </TextField>
    </Form>
  );
}

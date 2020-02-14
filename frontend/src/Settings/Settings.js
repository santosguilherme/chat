import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { actions, selectors } from '../redux/modules/userSettings';

import Screen from '../commons/components/Screen/Screen';

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;
`;

export default function Settings() {
  const dispatch = useDispatch();

  const userName = useSelector(selectors.getUserName);
  const interfaceColor = useSelector(selectors.getInterfaceColor);
  const clockDisplay = useSelector(selectors.getClockDisplay);
  const enterMode = useSelector(selectors.getEnterMode);
  const language = useSelector(selectors.getLanguage);

  const handleChangeUserName = useCallback(
    (event) => dispatch(actions.updateUserName(event.target.value)),
    [dispatch]
  );

  const handleChangeInterfaceColor = useCallback(
    (event) => dispatch(actions.updateInterfaceColor(event.target.value)),
    [dispatch]
  );

  const handleChangeClockDisplay = useCallback(
    (event) => dispatch(actions.updateClockDisplay(event.target.value)),
    [dispatch]
  );

  const handleChangeEnterMode = useCallback(
    (event) => dispatch(actions.updateEnterMode(event.target.value === 'true')),
    [dispatch]
  );

  const handleChangeLanguage = useCallback(
    (event) => dispatch(actions.updateLanguage(event.target.value)),
    [dispatch]
  );

  const handleResetDefaultsClick = useCallback(
    () => dispatch(actions.resetDefaults()),
    [dispatch]
  );

  return (
    <Screen>
      {({ Content, Footer }) => (
        <>
          <Content>
            <StyledTextField value={userName} onChange={handleChangeUserName} label="User name" required variant="outlined" />
            <FormControl component="fieldset">
              <FormLabel component="legend">Interface color</FormLabel>
              <RadioGroup row name="interfaceColor" value={interfaceColor} onChange={handleChangeInterfaceColor}>
                <FormControlLabel value="light" control={<Radio/>} label="Light"/>
                <FormControlLabel value="dark" control={<Radio/>} label="Dark"/>
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Clock display</FormLabel>
              <RadioGroup row name="clockDisplay" value={clockDisplay} onChange={handleChangeClockDisplay}>
                <FormControlLabel value="12" control={<Radio/>} label="12 hours"/>
                <FormControlLabel value="24" control={<Radio/>} label="24 hours"/>
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Send messages on CTRL + ENTER</FormLabel>
              <RadioGroup row name="enterMode" value={enterMode} onChange={handleChangeEnterMode}>
                <FormControlLabel value={true} control={<Radio/>} label="On"/>
                <FormControlLabel value={false} control={<Radio/>} label="Off"/>
              </RadioGroup>
            </FormControl>
            <TextField id="select" label="Language" value={language} onChange={handleChangeLanguage} variant="outlined"
                       select>
              <MenuItem value="enUS">English</MenuItem>
              <MenuItem value="ptBR">Português</MenuItem>
            </TextField>
          </Content>
          <Footer>
            <Button variant="contained" fullWidth onClick={handleResetDefaultsClick}>Reset to defaults</Button>
          </Footer>
        </>
      )}
    </Screen>
  );
}

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { FormattedMessage, useIntl } from 'react-intl';

import { actions, selectors } from 'redux/modules/userSettings';
import Screen from 'commons/components/Screen/Screen';

const maxWidthCSS = () => css`
    @media screen and (min-width: 768px) {
      max-width: 544px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 440px;
    }
  `;

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;

  ${maxWidthCSS};
`;

const ButtonContent = styled.div`
  ${maxWidthCSS};
`;

const availableLanguages = ['en-US', 'pt-BR'];

function Settings() {
  const intl = useIntl();
  const dispatch = useDispatch();

  const userName = useSelector(selectors.getUserName);
  const interfaceColor = useSelector(selectors.getInterfaceColor);
  const hour12 = useSelector(selectors.getHour12);
  const enterMode = useSelector(selectors.getEnterMode);
  const language = useSelector(selectors.getLanguage);

  const handleChangeUserName = useCallback(
    event => dispatch(actions.updateUserName(event.target.value)),
    [dispatch],
  );

  const handleChangeInterfaceColor = useCallback(
    event => dispatch(actions.updateInterfaceColor(event.target.value)),
    [dispatch],
  );

  const handleChangeHour12 = useCallback(
    event => dispatch(actions.updateHour12(event.target.value === 'true')),
    [dispatch],
  );

  const handleChangeEnterMode = useCallback(
    event => dispatch(actions.updateEnterMode(event.target.value === 'true')),
    [dispatch],
  );

  const handleChangeLanguage = useCallback(
    event => dispatch(actions.updateLanguage(event.target.value)),
    [dispatch],
  );

  const handleResetDefaultsClick = useCallback(
    () => dispatch(actions.resetDefaults()),
    [dispatch],
  );

  return (
    <Screen>
      {({ Content, Footer }) => (
        <>
          <Content>
            <StyledTextField
              value={userName}
              onChange={handleChangeUserName}
              label={intl.formatMessage({ id: 'SETTINGS.USER_NAME.INPUT.LABEL' })}
              required
              variant="outlined"
              fullWidth
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <FormattedMessage id="SETTINGS.UI_COLOR.INPUT.LABEL" />
              </FormLabel>
              <RadioGroup row name="interfaceColor" value={interfaceColor} onChange={handleChangeInterfaceColor}>
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.UI_COLOR.LIGHT.LABEL' })}
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.UI_COLOR.DARK.LABEL' })}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <FormattedMessage id="SETTINGS.CLOCK.INPUT.LABEL" />
              </FormLabel>
              <RadioGroup row name="clockDisplay" value={hour12} onChange={handleChangeHour12}>
                <FormControlLabel
                  value
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.CLOCK.12.LABEL' })}
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.CLOCK.24.LABEL' })}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <FormattedMessage id="SETTINGS.CTRL_ENTER.INPUT.LABEL" />
              </FormLabel>
              <RadioGroup row name="enterMode" value={enterMode} onChange={handleChangeEnterMode}>
                <FormControlLabel
                  value
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.CTRL_ENTER.ON.LABEL' })}
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label={intl.formatMessage({ id: 'SETTINGS.CTRL_ENTER.OFF.LABEL' })}
                />
              </RadioGroup>
            </FormControl>
            <StyledTextField
              id="select"
              label={intl.formatMessage({ id: 'SETTINGS.LANGUAGE.INPUT.LABEL' })}
              value={language}
              onChange={handleChangeLanguage}
              variant="outlined"
              select
            >
              {availableLanguages.map(locale => (
                <MenuItem value={locale} key={locale}>
                  <FormattedMessage id={`SETTINGS.LANGUAGE.${locale.toUpperCase()}.LABEL`} />
                </MenuItem>
              ))}
            </StyledTextField>
          </Content>
          <Footer>
            <ButtonContent>
              <Button
                variant="contained"
                fullWidth
                onClick={handleResetDefaultsClick}
              >
                <FormattedMessage id="SETTINGS.RESET_BUTTON.TEXT" />
              </Button>
            </ButtonContent>
          </Footer>
        </>
      )}
    </Screen>
  );
}

export default Settings;

import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';

import { availableLanguages } from 'commons/domains/i18n/locales';
import { actions, selectors } from 'redux/modules/userSettings';
import Screen from 'commons/components/Screen/Screen';
import InputRadio from 'features/Settings/components/InputRadio/InputRadio';
import OutlinedTextField from 'features/Settings/components/OutlinedTextField/OutlinedTextField';
import OutlinedSelectField from 'features/Settings/components/OutlinedSelectField/OutlinedSelectField';

import { MaxWidthContent } from './styles/Content';

function Settings() {
  const intl = useIntl();
  const dispatch = useDispatch();

  const userName = useSelector(selectors.getUserName);
  const interfaceColor = useSelector(selectors.getInterfaceColor);
  const hour12 = useSelector(selectors.getHour12);
  const enterMode = useSelector(selectors.getEnterMode);
  const language = useSelector(selectors.getLanguage);

  const languageOptions = useMemo(
    () => availableLanguages.map(locale => ({
      label: intl.formatMessage({ id: `SETTINGS.LANGUAGE.${locale.toUpperCase()}.LABEL` }),
      value: locale,
    })),
    [intl],
  );

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
            <MaxWidthContent>
              <OutlinedTextField
                label={intl.formatMessage({ id: 'SETTINGS.USER_NAME.INPUT.LABEL' })}
                name="userName"
                value={userName}
                onChange={handleChangeUserName}
                required
              />
            </MaxWidthContent>
            <InputRadio
              label={intl.formatMessage({ id: 'SETTINGS.UI_COLOR.INPUT.LABEL' })}
              name="interfaceColor"
              value={interfaceColor}
              onChange={handleChangeInterfaceColor}
              options={[
                { label: intl.formatMessage({ id: 'SETTINGS.UI_COLOR.LIGHT.LABEL' }), value: 'light' },
                { label: intl.formatMessage({ id: 'SETTINGS.UI_COLOR.DARK.LABEL' }), value: 'dark' },
              ]}
            />
            <InputRadio
              label={intl.formatMessage({ id: 'SETTINGS.CLOCK.INPUT.LABEL' })}
              name="clockDisplay"
              value={hour12}
              onChange={handleChangeHour12}
              options={[
                { label: intl.formatMessage({ id: 'SETTINGS.CLOCK.12.LABEL' }), value: true },
                { label: intl.formatMessage({ id: 'SETTINGS.CLOCK.24.LABEL' }), value: false },
              ]}
            />
            <InputRadio
              label={intl.formatMessage({ id: 'SETTINGS.CTRL_ENTER.INPUT.LABEL' })}
              name="enterMode"
              value={enterMode}
              onChange={handleChangeEnterMode}
              options={[
                { label: intl.formatMessage({ id: 'SETTINGS.CTRL_ENTER.ON.LABEL' }), value: true },
                { label: intl.formatMessage({ id: 'SETTINGS.CTRL_ENTER.OFF.LABEL' }), value: false },
              ]}
            />
            <MaxWidthContent>
              <OutlinedSelectField
                label={intl.formatMessage({ id: 'SETTINGS.LANGUAGE.INPUT.LABEL' })}
                name="language"
                value={language}
                onChange={handleChangeLanguage}
                options={languageOptions}
              />
            </MaxWidthContent>
          </Content>
          <Footer>
            <MaxWidthContent>
              <Button
                variant="contained"
                onClick={handleResetDefaultsClick}
                fullWidth
                aria-label={intl.formatMessage({ id: 'SETTINGS.RESET_BUTTON.TEXT' })}
              >
                {intl.formatMessage({ id: 'SETTINGS.RESET_BUTTON.TEXT' })}
              </Button>
            </MaxWidthContent>
          </Footer>
        </>
      )}
    </Screen>
  );
}

export default Settings;

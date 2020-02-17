import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import React, {useCallback} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {useDispatch, useSelector} from 'react-redux';

import Chat from 'features/Chat/Chat';
import Settings from 'features/Settings/Settings';
import {actions as messagesActions, selectors as messagesSelectors} from 'redux/modules/messages';

import {TabBody} from './styles/Content';
import {TabsContent} from './styles/Container';
import {FormattedMessage} from 'react-intl';

const tabs = {
  0: <Chat/>,
  1: <Settings/>,
};

function AppTabs() {
  const dispatch = useDispatch();
  const unreadMessages = useSelector(messagesSelectors.getUnreadMessages);

  const [activeTab, setActiveTab] = React.useState(0);

  const isChatTabActive = () => {
    return activeTab === 0;
  };

  const resetUnreadMessages = useCallback(
    () => dispatch(messagesActions.resetUnreadMessages()),
    [dispatch]
  );

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
    resetUnreadMessages();
  };

  return (
    <TabsContent>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleChangeTab}>
          <Tab label={
            <Badge badgeContent={isChatTabActive ? 0 : unreadMessages} color="secondary">
              <FormattedMessage id="TABS.CHAT.LABEL" />
            </Badge>
          }/>
          <Tab label={<FormattedMessage id="TABS.SETTINGS.LABEL" />}/>
        </Tabs>
      </AppBar>
      <TabBody>
        {tabs[activeTab]}
      </TabBody>
    </TabsContent>
  );
}

export default AppTabs;

import React from 'react';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import ChatMessage from './ChatMessage';

function renderChatMessage(options = {}) {
  const {
    dateTime = '2020-02-18T02:36:37.071Z',
    hour12 = true,
    message = 'any message',
    userName,
    align,
    backgroundColor,
  } = options;
  return customRender(
    <ChatMessage
      dateTime={dateTime}
      hour12={hour12}
      message={message}
      userName={userName}
      align={align}
      backgroundColor={backgroundColor}
    />,
  );
}

describe('ChatMessage', () => {
  describe('hour12', () => {
    test('shows the time in 12 hours format', () => {
      const { getByText } = renderChatMessage({ dateTime: '2020-02-18T02:30:37.071Z' });

      expect(getByText('11:30 PM')).toBeInTheDocument();
    });

    test('shows the time in 24 hours format', () => {
      const { getByText } = renderChatMessage({ hour12: false, dateTime: '2020-02-18T02:30:37.071Z' });

      expect(getByText('23:30')).toBeInTheDocument();
    });
  });

  describe('message', () => {
    test('is displayed', () => {
      const { getByText } = renderChatMessage({ message: 'my chat message' });

      expect(getByText('my chat message')).toBeInTheDocument();
    });
  });

  describe('userName', () => {
    test('is displayed when informed', () => {
      const { getByText } = renderChatMessage({ userName: 'any-user' });

      expect(getByText('any-user')).toBeInTheDocument();
    });

    test('is not displayed when omitted', () => {
      const { container } = renderChatMessage();

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('align', () => {
    test('the default value', () => {
      const { container } = renderChatMessage();

      expect(container.firstChild).toMatchSnapshot();
    });

    test('the custom value', () => {
      const { container } = renderChatMessage({ align: 'right' });

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('backgroundColor', () => {
    test('the default value', () => {
      const { container } = renderChatMessage();

      expect(container.firstChild).toMatchSnapshot();
    });

    test('the custom value', () => {
      const { container } = renderChatMessage({ backgroundColor: 'chat.loggedMessage' });

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

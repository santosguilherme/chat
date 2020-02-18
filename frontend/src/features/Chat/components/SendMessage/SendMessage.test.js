import React from 'react';
import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import SendMessage from './SendMessage';

describe('SendMessage', () => {
  describe('input message', () => {
    test('is displayed', () => {
      const { getByPlaceholderText } = customRender(
        <SendMessage onChange={jest.fn()} sendOnCtrlEnter={false} />,
      );

      expect(getByPlaceholderText('send message input placeholder')).toBeInTheDocument();
    });

    test('display its value', () => {
      const { getByDisplayValue } = customRender(<SendMessage onChange={jest.fn()} sendOnCtrlEnter={false} value="my value" />);

      expect(getByDisplayValue('my value')).toBeInTheDocument();
    });

    test('calls the onChange on typing', async () => {
      const onChangeMock = jest.fn();
      const { getByPlaceholderText } = customRender(
        <SendMessage onChange={onChangeMock} sendOnCtrlEnter={false} />,
      );

      const input = getByPlaceholderText('send message input placeholder');

      act(() => {
        userEvent.type(input, 'any text');
      });

      expect(onChangeMock).toHaveBeenCalled();
    });
  });

  describe('send message button', () => {
    test('is displayed', () => {
      const { getByLabelText } = customRender(
        <SendMessage onChange={jest.fn()} sendOnCtrlEnter={false} />,
      );

      expect(getByLabelText('send message button label')).toBeInTheDocument();
    });

    test('is disabled when the input value is empty', () => {
      const { getByLabelText } = customRender(
        <SendMessage onChange={jest.fn()} sendOnCtrlEnter={false} />,
      );

      expect(getByLabelText('send message button label')).toBeDisabled();
    });

    test('is enabled when the input value is not empty', () => {
      const { getByLabelText } = customRender(<SendMessage onChange={jest.fn()} sendOnCtrlEnter={false} value="any value" />);

      expect(getByLabelText('send message button label')).toBeEnabled();
    });
  });

  describe('The user press ctrl/metaKey + enter', () => {
    describe('sendOnCtrlEnter is true', () => {
      test('onSend is called', () => {
        const onSendMock = jest.fn();
        const { getByPlaceholderText } = customRender(
          <SendMessage onChange={jest.fn()} value="any value" onSend={onSendMock} sendOnCtrlEnter />,
        );

        const input = getByPlaceholderText('send message input placeholder');

        act(() => {
          fireEvent.keyDown(input, { key: 'Enter', keyCode: 13, ctrlKey: true });
          fireEvent.keyDown(input, { key: 'Enter', keyCode: 13, metaKey: true });
        });

        expect(onSendMock).toHaveBeenCalledTimes(2);
      });
    });

    describe('sendOnCtrlEnter is false', () => {
      test('onSend is not called', () => {
        const onSendMock = jest.fn();
        const { getByPlaceholderText } = customRender(
          <SendMessage onChange={jest.fn()} value="any value" onSend={onSendMock} sendOnCtrlEnter={false} />,
        );

        const input = getByPlaceholderText('send message input placeholder');

        act(() => {
          fireEvent.keyDown(input, { key: 'Enter', keyCode: 13, ctrlKey: true });
          fireEvent.keyDown(input, { key: 'Enter', keyCode: 13, metaKey: true });
        });

        expect(onSendMock).toHaveBeenCalledTimes(0);
      });
    });
  });
});

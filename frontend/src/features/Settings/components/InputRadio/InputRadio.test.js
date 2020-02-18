/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import InputRadio from './InputRadio';

const defaultInputRadioOptions = [
  {
    label: 'On',
    value: true,
  },
  {
    label: 'Off',
    value: false,
  },
];

describe('InputRadio', () => {
  test('is displayed', () => {
    const { getByLabelText } = customRender(
      <InputRadio
        label="any-label"
        name="any-name"
        value={true}
        onChange={jest.fn()}
        options={defaultInputRadioOptions}
      />,
    );

    expect(getByLabelText('any-label')).toBeInTheDocument();
    expect(getByLabelText('On')).toBeInTheDocument();
    expect(getByLabelText('Off')).toBeInTheDocument();
  });

  test('the correct option is selected based on the value', () => {
    const { getByLabelText } = customRender(
      <InputRadio
        label="any-label"
        name="any-name"
        value={true}
        onChange={jest.fn()}
        options={defaultInputRadioOptions}
      />,
    );

    expect(getByLabelText('On')).toBeChecked();
    expect(getByLabelText('Off')).not.toBeChecked();
  });

  test('call the onChange on select another option', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = customRender(
      <InputRadio
        label="any-label"
        name="any-name"
        value={true}
        onChange={onChangeMock}
        options={defaultInputRadioOptions}
      />,
    );

    act(() => {
      userEvent.click(getByLabelText('Off'));
    });

    expect(onChangeMock).toHaveBeenCalled();
  });

  test('check the new option on the value is updated', async () => {
    const { getByLabelText, rerender } = customRender(
      <InputRadio
        label="any-label"
        name="any-name"
        value={true}
        onChange={jest.fn()}
        options={defaultInputRadioOptions}
      />,
    );

    await rerender(
      <InputRadio
        label="any-label"
        name="any-name"
        value={false}
        onChange={jest.fn()}
        options={defaultInputRadioOptions}
      />,
    );

    expect(getByLabelText('On')).not.toBeChecked();
    expect(getByLabelText('Off')).toBeChecked();
  });
});

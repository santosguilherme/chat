import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import OutlinedTextField from './OutlinedTextField';

describe('OutlinedTextField', () => {
  test('is displayed', () => {
    const { getByLabelText } = customRender(
      <OutlinedTextField
        label="any-label"
        name="any-name"
        onChange={jest.fn()}
      />,
    );

    expect(getByLabelText('any-label')).toBeInTheDocument();
  });

  test('the correct value is displayed', () => {
    const { getByDisplayValue } = customRender(
      <OutlinedTextField
        label="any-label"
        name="any-name"
        value="any value"
        onChange={jest.fn()}
      />,
    );

    expect(getByDisplayValue('any value')).toBeInTheDocument();
  });

  test('call the onChange when a new value is typed', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText, getByDisplayValue } = customRender(
      <OutlinedTextField
        label="any-label"
        name="any-name"
        onChange={onChangeMock}
      />,
    );

    act(() => {
      userEvent.type(getByLabelText('any-label'), 'any new value');
    });

    expect(onChangeMock).toHaveBeenCalled();
    expect(getByDisplayValue('any new value')).toBeInTheDocument();
  });

  test('show the new value when the component is updated', async () => {
    const { getByDisplayValue, rerender } = customRender(
      <OutlinedTextField
        label="any-label"
        name="any-name"
        value="any initial value"
        onChange={jest.fn()}
      />,
    );

    await rerender(
      <OutlinedTextField
        label="any-label"
        name="any-name"
        value="any updated value"
        onChange={jest.fn()}
      />,
    );

    expect(getByDisplayValue('any updated value')).toBeInTheDocument();
  });
});

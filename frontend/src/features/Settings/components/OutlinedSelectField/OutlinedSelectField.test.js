import React from 'react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import OutlinedSelectField from './OutlinedSelectField';

const defaultSelectOptions = [
  {
    label: 'One',
    value: '1',
  },
  {
    label: 'Two',
    value: '2',
  },
];

describe('OutlinedSelectField', () => {
  test('is displayed', () => {
    const { getByLabelText } = customRender(
      <OutlinedSelectField
        label="any-label"
        name="any-name"
        value="1"
        onChange={jest.fn()}
        options={defaultSelectOptions}
      />,
    );

    expect(getByLabelText('any-label')).toBeInTheDocument();
  });

  test('the correct option is selected based on the value', () => {
    const { getByText, container } = customRender(
      <OutlinedSelectField
        label="any-label"
        name="any-name"
        value="1"
        onChange={jest.fn()}
        options={defaultSelectOptions}
      />,
    );

    expect(getByText('One')).toBeInTheDocument();
    expect(container).not.toContainHTML('Two');
  });

  test('call the onChange on select another option', () => {
    const onChangeMock = jest.fn();

    const { getByText } = customRender(
      <OutlinedSelectField
        label="any-label"
        name="any-name"
        value="1"
        onChange={onChangeMock}
        options={defaultSelectOptions}
      />,
    );

    act(() => {
      userEvent.click(getByText('One'));
    });

    expect(getByText('Two')).toBeInTheDocument();

    act(() => {
      userEvent.click(getByText('Two'));
    });

    expect(onChangeMock).toHaveBeenCalled();
  });

  test('select the new option on the value is updated', async () => {
    const { getByText, rerender } = customRender(
      <OutlinedSelectField
        label="any-label"
        name="any-name"
        value="1"
        onChange={jest.fn()}
        options={defaultSelectOptions}
      />,
    );

    await rerender(
      <OutlinedSelectField
        label="any-label"
        name="any-name"
        value="2"
        onChange={jest.fn()}
        options={defaultSelectOptions}
      />,
    );

    expect(getByText('Two')).toBeInTheDocument();
  });
});

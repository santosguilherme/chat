import React from 'react';

import { customRender } from 'commons/utils/test/reactTestingLibrary';

import Loading from './Loading';

describe('Loading', () => {
  test('renders correctly', () => {
    const { container } = customRender(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

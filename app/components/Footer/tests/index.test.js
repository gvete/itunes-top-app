import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = renderer.create(<Footer />).toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

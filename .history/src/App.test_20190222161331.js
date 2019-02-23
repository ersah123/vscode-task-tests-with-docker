import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('<Link />', () => {
  let tree;
  let component;
  beforeAll(() => {
      component = renderer.create(
          <App />,
      );
      tree = component.toJSON();
  });

  test('<App /> component rendered successfully', () => {
    expect(tree).toMatchSnapshot();
  })
})

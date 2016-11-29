import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  var tree = renderer.create(<App redux={fromJS({})} />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react'
import UndoList from '../../undo-list'

import { shallow } from 'enzyme';

it('UndoList 初始化时 count 数目为 0', () => {
  const wrapper = shallow(<UndoList />)
  expect(wrapper.state('count')).toBe(0)
});
import React from 'react'
import TodoList from '../../'
import Header from '../../header'

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('TodoList 初始化列表为空', () => {
  const wrapper = shallow(<TodoList />)
  // const inputElem = wrapper.find('[data-test="input"]')
  expect(wrapper.state('undoList')).toEqual([])
});

it('TodoList 给 Header 传递一个增加 undoList 内容的方法', () => {
  const wrapper = shallow(<TodoList />)
  const header = wrapper.find(Header)
  // console.log(Header.prop)
  expect(header.prop('addUndoItem')).toBe(wrapper.instance().addUndo)
});

it('Header 回车时，undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />)
  const header = wrapper.find(Header)
  const addFunc = header.prop('addUndoItem')
  addFunc('learn jest')
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe('learn jest')
});

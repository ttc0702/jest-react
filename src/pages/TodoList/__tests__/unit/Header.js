import React from 'react'
import Header from '../../header'

import { shallow } from 'enzyme';

// it('Header 快照', () => {
//   const wrapper = shallow(<Header />)
//   expect(wrapper).toMatchSnapshot()
// });

it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find('[data-test="input"]')
  expect(inputElem.length).toBe(1)
});

it('Header 组件 input 框内容，初始化应该为空', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find('[data-test="input"]')
  expect(inputElem.prop('value')).toBe('')
});

it('Header 组件 input 框内容，当用户输入是，会跟随变化', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find('[data-test="input"]')
  const userInput = 'learn test'
  inputElem.simulate('change', {
    target: {value: userInput}
  })
  // 数据测试，适用于单元测试
  expect(wrapper.state('value')).toBe(userInput)
  // dom 测试，适用于集成测试
  const newInputElem = wrapper.find('[data-test="input"]')
  expect(newInputElem.prop('value')).toBe(userInput)
});

it('Header 组件 input 框输入回车时，如果 input 无内容，无操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputElem = wrapper.find('[data-test="input"]')
  wrapper.setState({
    value: ''
  })
  inputElem.simulate('keyUp', {
    keyCode: 13,
  })
  expect(fn).not.toHaveBeenCalled()
});

it('Header 组件 input 框输入回车时，如果 input 有内容，函数应该被调用，且清空内容', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputElem = wrapper.find('[data-test="input"]')
  const userInput = 'learn jest'
  wrapper.setState({
    value: userInput
  })
  inputElem.simulate('keyUp', {
    keyCode: 13,
  })
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenLastCalledWith(userInput)

  const newInputElem = wrapper.find('[data-test="input"]')
  expect(newInputElem.prop('value')).toBe('')
});
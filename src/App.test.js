import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(<App />, div)
  // const app = div.getElementsByClassName('App')
  // expect(app.length).toBe(1)

  // mount：渲染 App 组件及其子组件。
  // shallow：只渲染 App 组件本身，而不会渲染 App 中引入的子组件，速度较快，适用于组件的单元测试。
  const wrapper = shallow(<App />)

  console.log(wrapper.debug())
  // expect(wrapper.find('.App').length).toBe(1)
  // expect(wrapper.find('.App').prop('title')).toBe('test')
  // 避免使用类选择器，使测试用例与代码解耦。
  const app = wrapper.find('[data-test="app"]')
  expect(app.length).toBe(1)
  // 安装 jest-enzyme，可以使用更多的匹配器
  expect(app).toExist()
  expect(app).toHaveProp('title', 'test')
  // expect(app).toMatchSnapshot()
});

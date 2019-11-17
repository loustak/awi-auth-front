import React from 'react'
import { create, act } from 'react-test-renderer'
import DashboardPage from '../components/pages/Dashboard/Dashboard'
import { Provider } from 'react-redux'
import store from '../store/store'

describe('Dashboard component test', () => {
  it('should render without throwing an error', () => {
    const collapse = create(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    )
    expect(collapse.toJSON()).toMatchSnapshot()
  })

  // test('it shows collapsed students content when clicked', () => {
  //   const children = 'ChildrenTest'
  //   let component = null
  //   act(() => {
  //     component = create(
  //       <Collapse title='Title Test' defaultOpen buttonText='ButtonText'>
  //         {children}
  //       </Collapse>)
  //   })
  //   const instance = component.root
  //   // console.log(instance.props)
  //   // const expandIcon = instance.findByType(FontAwesomeIcon)
  //   // console.log(expandIcon.props.onClick)
  //   // act(() => expandIcon.props.onClick())
  //   const collapse = instance.findByProps({ className: 'contentWrapper' })
  //   expect(collapse.props.children.props.children).toBe(children)
  // })
})

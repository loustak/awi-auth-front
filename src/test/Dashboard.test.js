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

  test('it shows collapsed students content when clicked', () => {

    let component = null
    act(() => {
      component = create(
        <Provider store={store}>
          <DashboardPage />
        </Provider>)
    })
  })
})

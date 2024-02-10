import IncrementButtonVue from '~/components/IncrementButton.vue'
import { mount } from '@vue/test-utils'

describe('IncrementButton.vue', () => {
  test('表示', () => {
    const wrapper = mount(IncrementButtonVue)
    expect(wrapper.exists()).toBeTruthy()
  })
})

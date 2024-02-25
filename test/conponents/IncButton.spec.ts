import { mount } from '@vue/test-utils'
import IncButtonVue from '~/components/IncButton.vue'

describe('IncButton.vue', () => {
  test('表示', () => {
    const wrapper = mount(IncButtonVue)
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBeTruthy()
  })

  test('カウントが0から始まる', () => {
    const wrapper = mount(IncButtonVue)
    expect(wrapper.text()).toContain('0')
  })

  test('ボタンクリックでカウントが増える', async () => {
    const wrapper = mount(IncButtonVue)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})

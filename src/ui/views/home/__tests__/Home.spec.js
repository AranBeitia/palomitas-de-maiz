import { shallowMount } from '@vue/test-utils'
import Home from '@/ui/views/home/Home'

describe('The home', () => {
  it('passes the sanity check and creates the wrapper', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.exists()).toBe(true)
  })
})

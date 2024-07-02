import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import UserCardWidget from './UserCardWidget.vue'

describe('UserCardWidget', () => {
  it('renders properly', async () => {
    const wrapper = mount(UserCardWidget, {
      props: {
        userCards: [{ header: 'Header' }],
        isLoading: true,
      },
    })
    expect(wrapper.text()).not.toContain('Header')
    wrapper.setProps({
      isLoading: false,
    })

    await nextTick()
    expect(wrapper.props().isLoading).toBe(false)
    expect(wrapper.text()).toContain('Header')
  })
})

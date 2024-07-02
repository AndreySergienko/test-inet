import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import UserCardController from './UserCardController.vue'

describe('UserCardController', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(UserCardController, {
      slots: {
        card: 'Card slot',
        actions: 'Action slot',
        img: 'This is avatar',
      },
    })
    expect(wrapper.text()).toContain('Card slot')
    expect(wrapper.text()).toContain('Action slot')
    expect(wrapper.text()).toContain('This is avatar')
  })
})

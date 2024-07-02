import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppFooter from './AppFooter.vue'

describe('AppFooter', () => {
  it('renders properly', () => {
    const wrapper = mount(AppFooter, { slots: { 'card-text': 'Test Slots' } })
    expect(wrapper.text()).toContain('Test Slots')
  })
})

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Step from '@/components/Step.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Step.vue', () => {
  let actions
  let store
  let getters

  beforeEach(() => {
    actions = {
      toggleStep: jest.fn(),
      getStepValue: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('toggleStep is dispatched when step is clicked', () => {
    // const wrapper = shallowMount(Step)
    const wrapper = shallowMount(Step, { store, localVue })
    const div = wrapper.find('div.step')

    div.trigger('click')
    expect(actions.toggleStep).toHaveBeenCalled()
  })
})

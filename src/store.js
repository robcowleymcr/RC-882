import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grid: {
      snare: {
        name: 'Snare',
        sequence: Array(16)
      }
    },
    json: Object,
    counter: 0,
    playSequence: false,
    stepInterval: 200
  },
  getters: {
    getStepValue: (state) => (lane, number) => {
      return state.grid[lane][number - 1]
    }
  },
  mutations: {
    toggleStep (state, obj) {
      state.grid[obj.lane][obj.stepNumber - 1] = !state.grid[obj.lane][obj.stepNumber - 1]
      state.grid = JSON.parse(JSON.stringify(state.grid))
    },
    incrementCounter (state) {
      if (state.counter === 15) {
        state.counter = 0
      } else {
        state.counter++
      }
    },
    togglePlaySequence (state) {
      state.playSequence = !state.playSequence
    },
    initJsonObject (state, obj) {
      console.log(obj)
    }
  },
  actions: {
    toggleStep ({ context }, payload) {
      this.commit('toggleStep', payload)
    },
    incrementCounter ({ context }) {
      this.commit('incrementCounter')
    },
    playSequence ({ context }) {
      this.commit('togglePlaySequence')
    },
    initJsonObject ({ context }, payload) {
      this.commit('initJsonObject', payload)
    }
  }
})

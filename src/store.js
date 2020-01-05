import Vue from 'vue'
import Vuex from 'vuex'
import api from './assets/scripts/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grid: [
      {
        name: 'Snare',
        sequence: Array(16),
        src: 'wav/snare.wav'
      },
      {
        name: 'Kick',
        sequence: Array(16),
        src: 'wav/snare.wav'
      }
    ],
    json: Object,
    counter: 0,
    sequenceLength: 16,
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
    async loadSounds ({ context }) {
      this.commit('initJsonObject')
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grid: [
      {
        name: 'Snare',
        sequence: [null, null, false, null, true, null, null, null, null, false, null, null, true, null, null, null],
        url: './wav/snare.wav'
      },
      {
        name: 'Kick',
        sequence: [true, null, null, null, null, null, true, null, false, null, false, false, null, false, null, null],
        url: './wav/kick.wav'
      },
      {
        name: 'Hat',
        sequence: [true, null, true, false, true, null, true, false, true, null, true, false, true, false, true, true],
        url: './wav/hat.wav'
      }
    ],
    json: Object,
    counter: 0,
    sequenceLength: 16,
    playSequence: false,
    stepInterval: 200
  },
  mutations: {
    toggleStep (state, obj) {
      state.grid[obj.lane].sequence[obj.stepNumber - 1] = !state.grid[obj.lane].sequence[obj.stepNumber - 1]
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
    resetSequence (state) {
      state.grid.forEach(obj => {
        obj.sequence = Array(16)
      })
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
    },
    resetSequence ({ context }) {
      this.commit('resetSequence')
    }
  }
})

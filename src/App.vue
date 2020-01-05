<template>
  <div id="app">
    <lane
      v-for="(value, index) in grid"
      :name="value.name"
      :object="value"
      :key="index"
      :index="index"
    ></lane>
    <div @click="playClickHandler()">Play - {{ sequencePlaying }}</div>
    <div @click="stopClickHandler()">Stop - {{ stopSequence }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Lane from './components/Lane.vue'
import { setTimeout } from 'timers'
import axios from 'axios'

export default {
  name: 'app',
  data: function () {
    return {
      stopSequence: false,
      sequencePlaying: false,
      audioBuffer: null
    }
  },
  components: {
    Lane
  },
  computed: {
    ...mapState({
      grid: state => state.grid
    })
  },
  methods: {
    playClickHandler: function () {
      if (!this.sequencePlaying) {
        this.sequencePlaying = true
        this.timeoutIterator()
      }
    },
    stopClickHandler: function () {
      if (this.sequencePlaying) {
        this.stopSequence = true
      }
    },
    timeoutIterator: function () {
      if (this.sequencePlaying && !this.stopSequence) {
        this.$store.dispatch('incrementCounter')
        setTimeout(this.timeoutIterator, 500)
      } else {
        this.stopSequence = false
        this.sequencePlaying = false
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadSounds')
  },
  created () {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FCFCFC;
}

.grid__container {
  width: 100%;
}
.grid__item {
  display: inline-block;
  width: 50px;
  height: 50px;

  &.grid__item--active {
    color: white;
  }
  &.grid__item--counter {
    border-color: red;
  }
}
</style>

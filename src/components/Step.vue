<template>
  <div
    class="step"
    v-bind:class="classObject"
    @click="clickHandler"
  >
      {{ number }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Step',
  data: function () {
    return {
      active: false
    }
  },
  props: {
    number: Number,
    laneName: String,
    laneNumber: Number
  },
  computed: {
    ...mapState({
      counter: state => state.counter,
      grid: state => state.grid
    }),
    isCurrentStep: function () {
      return (this.counter + 1) === this.number
    },
    classObject: function () {
      return {
        active: this.getStepValue(this.laneNumber, this.number),
        current: this.isCurrentStep
      }
    }
  },
  methods: {
    ...mapActions(['toggleStep']),
    clickHandler: function (event) {
      this.$store.dispatch('toggleStep', { stepNumber: this.number, lane: this.laneNumber })
    },
    getStepValue (laneNumber, index) {
      return this.grid[laneNumber][index - 1]
    }
  }
}
</script>

<style scoped lang="scss">
.step {
    height: 40px;
    width: 40px;
    border: 2px solid #BDC3C3;
    background-color: #BDC3C3;
    display: inline-block;
    border-radius: 3px;
    margin-right: 0.5rem;
    color: #373236;
    -webkit-transition: background-color 30ms linear;
    -ms-transition: background-color 30ms linear;
    transition: background-color 30ms linear;
    -webkit-transition: border-color 30ms linear;
    -ms-transition: border-color 30ms linear;
    transition: border-color 30ms linear;
    &:hover {
      border-color: #7F7C7F;
    }

    &.active {
      background-color: #78C091;
      border-color: #78C091;
      &:hover {
        border-color: #7F7C7F;
      }
    }

    &.current {
      border-color: #373236;
    }
}
</style>

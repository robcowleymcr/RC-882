<template>
  <div class="lane">
    <div class="lane__name">{{ name }}</div>
    <step
      v-for="(step, index) in array"
      v-bind:key="index"
      v-bind:number="index + 1"
      v-bind:lane-name="name"
    ></step>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Step from './Step.vue'

export default {
  name: 'Lane',
  props: {
    name: String
  },
  computed: {
    ...mapState({
      grid: state => state.grid
    }),
    array: function () {
      return this.grid[this.$vnode.key].sequence
    }
  },
  components: {
    Step
  }
}
</script>

<style scoped lang="scss">
.lane {
  display: flex;
  margin-bottom: 1rem;

  &__name {
    width: 75px;
  }
}
</style>

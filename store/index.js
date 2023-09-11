import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {

  state: () => ({
    api: 'https://api.rencom.xyz/assets/',
    counter: 0
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne() {
      return this.doubleCounter + 1
    },
  },
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
  },
})
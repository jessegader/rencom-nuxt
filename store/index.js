import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {

  state: () => ({
    assets: 'https://api.rencom.xyz/assets/',
    view: '',
    loading: true,
    mobile: '',
    menuOpen: false,
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
    setView(val) {
      this.view = val
    },
    setLoading(val) {
      this.loading = val
    },
    setMenu() {
      this.menuOpen = !this.menuOpen
    },
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
    handleMobile(val) {
      // watch media query
      const mq = window.matchMedia(`(max-width: ${val}px)`)
      const mqMatch = (e) => this.mobile = e.matches
      mqMatch(mq)
      mq.addEventListener('change', mqMatch)
  }
  },
})
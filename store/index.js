import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {

  state: () => ({
    assets: 'https://api.rencom.xyz/assets/',
    view: '',
    loading: true,
    mobile: '',
    menuOpen: false,
    scrolled: false,
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
    handleMobile(val) {
      // watch media query
      const mq = window.matchMedia(`(max-width: ${val}px)`)
      const mqMatch = (e) => this.mobile = e.matches
      mqMatch(mq)
      mq.addEventListener('change', mqMatch)
    },
    handleScroll() {
      // watch scroll event
      const bar = document.querySelector('.n-scrollbar-rail__scrollbar')
      bar && +bar.style.top.slice(0,-2) >= 22 ? this.scrolled = true : this.scrolled = false
    }
  },
})
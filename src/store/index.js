import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    me: null
  }),
  actions: {
    setMe(me) {
      this.me = me
    }
  }
})

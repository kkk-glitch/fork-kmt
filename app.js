(new Vue({
  el: '#app',
  data () {
    return {
      d: dayjs(new Date('1949-12-31T00:00:00.000Z')),
      dd: {},
    }
  },
  mounted () {
    dayjs.locale('zh-tw')
    
    setInterval(this.set(), 1000)
  },
  methods: {
    set () {
      const d = dayjs().diff(this.d, 's')
      const { floor } = Math
      this.dd = [
        { unit: '年', value: floor(d / (3600 * 24) / 365) },
        { unit: '日', value: floor(d / (3600 * 24) % 365) },
        { unit: '時', value: floor((d / 3600) % 24) },
        { unit: '分', value: floor((d / 60) % 60) },
        { unit: '秒', value: floor(d % 60) }
      ]
      return this.set
    }
  },
}))
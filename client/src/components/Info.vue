<template>
  <div class="info">
    <h3>JannRocas</h3>

    <div v-for="item in info">
      <p> {{item.title}} : {{item.description}} </p>
    </div>
  </div>
</template>

<script>
import InfoService from '@/services/InfoService'

export default {
  name: 'info',
  data () {
    return {
      info: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      const response = await InfoService.fetchInfo()
      this.info = response.data
    }
  }
}

</script>

<template>
  <div ref="secondContainer" id="Second-container" class="page">
    <h1>Second Microfrontend</h1>
    <p>This is a MicroFrontend comming from a remote project</p>
    <button @click="$router.go(-1)">Go Back</button>
    <button @click="sendEvent">Event</button>
    <br/>
    <br/>
    <img :src="image" alt="second">
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      id: null
    }
  },
  computed: {
    image () {
      return `https://picsum.photos/id/${this.id}//400/300`
    }
  },
  methods: {
    sendEvent () {
      const event = new CustomEvent('custom-event', {
        bubbles: true,
        detail: { source: 'Second' }
      })
      this.$refs.secondContainer.dispatchEvent(event)
    }
  },
  created () {
    this.id = this.$route.params.id || 1033
  },
  mounted () {
    console.log('💡 Second Microfrontend mounted!')
  },
  beforeDestroy() {
    console.log('🧨 Second Microfrontend destroyed!')
  }
}
</script>
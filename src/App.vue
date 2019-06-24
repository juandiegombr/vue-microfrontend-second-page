<template>
  <div id="Second-container" class="page">
    <h1>Second Microfrontend</h1>
    <p>This is a MicroFrontend comming from a remote project</p>
    <button @click="$router.go(-1)">Go Back</button>
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
  created () {
    this.id = this.$route.params.id || 1033
    console.log('Second Microfrontend created!')
  },
  beforeDestroy() {
    console.log('Second Microfrontend destroyed!')
  }
}
</script>
<template>
  <div id="Second-container" class="page">
    <h1>Second Microfrontend</h1>
    <p>This is a MicroFrontend comming from a remote project</p>
  </div>
</template>

<script>
export default {
  name: 'Second',
  created () {
    console.log('Second Microfrontend created!')
  },
  beforeDestroy() {
    console.log('Second Microfrontend destroyed!')
  }
}
</script>
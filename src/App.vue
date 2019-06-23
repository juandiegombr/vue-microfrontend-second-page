<template>
  <div id="Second-container">
    <h1>Second Microfrontend</h1>
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
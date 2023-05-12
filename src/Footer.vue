<script setup>
const date = new Date();

const year = date.getFullYear()
</script>


<template>
  <footer>
    <p>GeoTech development. All rights reserved.</p>
    <small> © {{ year }}</small>
  </footer>
</template>



<style scoped>
footer {
  background-color: aquamarine;
  text-align: center;
  padding: 0.5rem 0px;
}
</style>

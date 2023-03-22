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
  height: 3rem;
  padding-left: 1rem;
  text-align: center;
}
</style>

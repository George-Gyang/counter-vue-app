<script setup>
import Nav from "@/Nav.vue";
import Footer from "@/Footer.vue";
</script>

<template>
  <Nav />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style>
main{
  min-height: 70vh;
  padding: 1rem;
}
</style>
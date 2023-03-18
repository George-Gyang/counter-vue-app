<script setup>
import { ref } from 'vue';

const count = ref(0)

function incrementCount(){
  count.value = count.value +1
  console.log(incrementCount)
}

function decrementCount(){
  count.value = count.value -1
}

const setValue = ref(0)



</script>

<template>
  <main>
    <div>
      <h1>Counter App</h1>

      <input v-model="setValue" type="text" name="" id="">
      <button @click="incrementCount">increment</button>
      <h2><b>{{ count }}</b></h2>
      <button @click="decrementCount">decrement</button>
    </div>
  </main>
</template>  


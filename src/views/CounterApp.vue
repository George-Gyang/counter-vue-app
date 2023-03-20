<template>
    <main>
      <div class="main-section">
        <h1>Counter App</h1>
  
        <div>
          <h2>
            <b>Count: {{ count }}</b>
          </h2>
          <div>
            <input v-model="inputValue" type="number" />
            <button @click="reset">Reset Counter</button>
          </div>
          <div>
            <button @click="reduceCounter">Decrement</button>
            <button @click="addCounter">Increment</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const inputValue = ref();
  const count = ref(0);
  
  const reduceCounter = () => {
    count = count.value--;
  };
  
  const addCounter = () => {
    count = count.value++;
  };
  
  const reset = () => {
    count.value = 0;
  };
  
  // const setValue = (){
  //   count = inputValue
  // }
  </script>
  
  <style>
  
  .main-section{
    margin: 1rem;
  }
  </style>
  
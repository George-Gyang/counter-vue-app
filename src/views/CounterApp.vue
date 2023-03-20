<template>
    <main>
      <div class="main-section">
        <h1>Counter App</h1>
  
        <div class="main-app">
          <h2>
            <b>Count: {{ count }}</b>
          </h2>
          <div>
            <input placeholder="set value" v-model="inputValue" type="number" />
          </div>
          <div class="btn-div">
            <button class="main-btn" @click="reduceCounter">Decrement</button>
            <button class="main-btn" @click="addCounter">Increment</button>
          </div>
          <button class="reset-btn" @click="reset">Reset Counter</button>

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
  
  <style setup>

h1{
    text-align: center;
  }
  h2{
    text-align: center;
    margin: 0.5rem 0;
  }
  
  .main-section{
    margin: 1rem;
  }

  .main-app{
    background-color: #dfebfa;
    max-width: 300px;
    min-height: 200px;
    margin: auto;
    border: 1px solid darkgray;
    border-radius: 10px;
    padding: 1rem;
  }

  input{
    display: block;
    height: 2.5rem;
    max-width: 100px;
    border-radius: 5px;
    margin: auto;
    text-align: center;
  }

 .btn-div{
  display: flex;
  justify-content: space-between;
  }

  .main-btn{
    background-color: white;
    padding: 0.5rem 0.5rem;
    border: 1px solid darkgray;
    border-radius: 5px;
    margin: 1rem;
  }

  .reset-btn{
    display: block;
    background-color: grey;
    border: 1px solid black;
    color: white;
    padding: 0.5rem;
    margin: 1rem auto;
  }

  .reset-btn:hover{
    background-color: hsl(0, 0%, 30%);
  }
  </style>
  
<template>
    <div class="home-content">
        <h1>Conter App</h1>
  <p>
    This is a counter project that increment, decrement set value and reset
    counter, built using the composition API. The the ref method was use to
    manage the state and the watch menthod was use to monitor changes from the
    input element.
  </p>
  <RouterLink to="/Counter">See more...</RouterLink>
    </div>

</template>


<style scoped>
h1{
    margin: 1rem 0;
    text-align: center;
}
.home-content{
    max-width: 350px;
    margin: auto;
    /* text-align: center; */
}

</style>
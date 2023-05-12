<template>
  <nav>
    <ul>
      <li>
        <RouterLink class="navlinks" active-class="active" to="/"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink class="navlinks" active-class="active" to="/Counter"
          >Counter</RouterLink
        >
      </li>
      <li>
        <RouterLink class="navlinks" active-class="active" to="/ErrorPage"
          >404 page</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: aquamarine;
  padding: 1rem;
  padding-left: 1rem;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
  margin: auto 0px;
}
li {
  margin-right: 1rem;
}
.navlinks {
  text-decoration: none;
}

.active {
  color: rgb(3, 65, 65);
  font-size: bolder;
  font-size: 1.05rem;
}
</style>

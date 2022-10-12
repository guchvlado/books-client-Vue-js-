<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark px-5">
      <router-link to="/" class="navbar-brand">Library</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/books" class="nav-link">Books</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>


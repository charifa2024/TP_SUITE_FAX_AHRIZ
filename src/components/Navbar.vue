<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Jobs App</router-link>
    <div>
      <router-link to="/">Offres</router-link>
      <router-link :to="{ name: 'AddJob' }">Ajouter un emploi</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

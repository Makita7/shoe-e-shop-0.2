<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'NavbarComp',
})

</script>

<template>
  <header class="d-flex justify-between align-center">
    <v-col>
      <p class="logo">E-SHOP</p>
    </v-col>
    <nav class="d-flex">
      <RouterLink class="links" to="/">Start</RouterLink>
      <RouterLink class="links" to="/men">Men</RouterLink>
      <RouterLink class="links" to="/women">Women</RouterLink>
      <RouterLink class="links" to="/unisex">Unisex</RouterLink>
      <RouterLink class="links" to="/kids">Kids</RouterLink>
    </nav>
    <v-col class="d-flex justify-end">
      <v-icon class="ml-4">mdi-cart</v-icon>
      <v-icon class="ml-4">mdi-account</v-icon>
    </v-col>
  </header>
</template>

<style scoped>
header {
  border-bottom: solid 1px gray;
}

.logo {
  font-size: 1.5rem;
  margin-bottom: 0;
  font-weight: bold;
}

.links {
  text-decoration: none;
  color: black;
  padding: 0 0.5rem;
}
</style>

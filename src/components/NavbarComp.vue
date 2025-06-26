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
      <p class="logo pl-1">E-SHOP</p>
    </v-col>
    <nav class="d-flex">
      <RouterLink class="links" to="/" active-class="active-link">Start</RouterLink>
      <RouterLink class="links" to="/men" active-class="active-link">Men</RouterLink>
      <RouterLink class="links" to="/women" active-class="active-link">Women</RouterLink>
      <RouterLink class="links" to="/unisex" active-class="active-link">Unisex</RouterLink>
      <RouterLink class="links" to="/kids" active-class="active-link">Kids</RouterLink>
    </nav>
    <v-col class="d-flex justify-end">
      <v-icon class="ml-4">mdi-cart</v-icon>
      <v-icon class="ml-4">mdi-account</v-icon>
    </v-col>
  </header>
</template>

<style scoped>
header {
  border-bottom: solid 1px var(--borders);
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

.active-link {
  font-weight: bold;
}
</style>

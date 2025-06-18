<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'NavbarComp',
})

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Start</RouterLink>
      <RouterLink to="/men">Men</RouterLink>
      <RouterLink to="/women">Women</RouterLink>
      <RouterLink to="/unisex">Unisex</RouterLink>
      <RouterLink to="/kids">Kids</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

defineComponent({
  name: 'ProfilePage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <v-col class="d-flex" cols="3" style="flex-direction: column;">
      <RouterLink class="link mb-3" active-class="active" to="/profile/profileInfo">profile info</RouterLink>
      <RouterLink class="link mb-3" active-class="active" to="/profile/orderHistory">Order history</RouterLink>
      <RouterLink class="link mb-3" active-class="active" to="/profile/wishlist">wishlist</RouterLink>
    </v-col>

    <v-col>
      <Transition name="fade">
        <RouterView class="mt-4" />
      </Transition>
    </v-col>
  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: var(--dark-green);
  text-transform: capitalize;
  font-size: 1.1rem;
}

.active {
  text-decoration: underline;
  font-weight: bold;
  color: var(--mid-green);
}
</style>

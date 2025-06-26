<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'NotFoundPage',
})

</script>

<template>
  <div class="text-center cont">
    <img src="@/assets/notFound.png" alt="not found page cartoon" class="mb-2 prevent-select" />
    <div class="d-flex justify-center align-center">
      <p class="mb-0 mr-4">The page you are looking for does not exist...</p>
      <v-btn to="/" color="var(--mid-green)" variant="outlined">
        <v-icon class="mr-2">mdi-arrow-left</v-icon>
        Go Back
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.cont {
  margin-top: 4rem;
}

p {
  font-size: 1.2rem;
  color: var(--mid-green);
}

img {
  margin: 0 auto;
  width: 50%;
  max-width: 40rem;
}
</style>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'CardComp',
})

defineProps({
  title: String,
  img: String,
})

</script>

<template>
  <div class="card pb-5">
    <img :src="img" alt="sneaker shoe" class="pt-6 pb-4" />
    <div class="mx-4">
      <p class="mb-0 mt-2 text-capitalize title">{{ title }}</p>
      <div class="d-flex justify-space-between">
        <p class="category">Category:</p>
        <p class="category">Sizes:</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 33.3%;
  overflow: hidden;
  border-right: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
}

.title {
  font-size: 1.2rem;
}

.category {
  color: gray;
}

img {
  max-height: auto;
  width: 19rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

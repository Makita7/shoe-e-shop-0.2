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
  <div class="card pb-4">
    <img :src="img" alt="sneaker shoe" class="pt-6 pb-4" />
    <div class="ml-4">
      <p class="mb-0 mt-2 text-capitalize title">{{ title }}</p>
      <p class="category">category</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 33.3%;
  overflow: hidden;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
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
}
</style>

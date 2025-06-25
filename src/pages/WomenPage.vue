<script setup lang="ts">
import { defineComponent } from 'vue'
import CardComp from '@/components/CardComp.vue';

defineComponent({
  name: 'WomenPage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <CardComp v-for="i in 5" :key="i" title="women"
      img="https://videos.openai.com/vg-assets/assets%2Ftask_01jyksahq2fctr65vksbmwjx7r%2F1750864768_img_1.webp?st=2025-06-25T13%3A46%3A45Z&se=2025-07-01T14%3A46%3A45Z&sks=b&skt=2025-06-25T13%3A46%3A45Z&ske=2025-07-01T14%3A46%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=oigrUwAV6VgDQjzGaLOTTPGYlWjkXA6IlXekgjq8X6s%3D&az=oaivgprodscus" />
  </div>
</template>

<style scoped></style>

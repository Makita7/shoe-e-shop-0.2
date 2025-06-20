<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const alternate_first_box = ref(true);
const alternate_third_box = ref(true);

function alternateImages() {
  setInterval(() => {
    alternate_first_box.value = !alternate_first_box.value;
  }, 4000)

  setInterval(() => {
    alternate_third_box.value = !alternate_third_box.value;
  }, 4800)
}

onUnmounted(() => {
  alternateImages();
})

onMounted(() => {
  alternateImages();
})

</script>

<template>
  <div class="d-flex">
    <Transition name="fade" mode="out-in">
      <v-col v-if="alternate_first_box" cols="4" class="height-100 first_box" />
      <v-col v-else cols="4" class="height-100 first_box2" />
    </Transition>
    <v-col class="height-100">
      <div class="box2 second_box"></div>
      <div class="d-flex">
        <Transition name="fade" mode="out-in">
          <div v-if="alternate_third_box" class="box3 w50 third_box"></div>
          <div v-else class="box3 w50 third_box2"></div>
        </Transition>
        <div class="box3 w50 fourth_box"></div>
      </div>
    </v-col>
  </div>
</template>

<style scoped>
.height-100 {
  height: 80vh;
  padding: 0;
}

.box2 {
  height: 30vh;
}

.box3 {
  height: 50vh;
}

.w50 {
  width: 50%;
}

.first_box {
  background-image: url('@/assets/images-home/box-one-1.jpg');
  background-repeat: none;
  background-size: cover;
}

.first_box2 {
  background-image: url('@/assets/images-home/box-one-2.jpg');
  background-repeat: none;
  background-size: cover;
}

.second_box {
  background-image: url('@/assets/images-home/box-second.png');
  background-repeat: none;
  background-size: cover;
}

.third_box {
  background-image: url('@/assets/images-home/box-three.jpg');
  background-repeat: none;
  background-size: cover;
}

.third_box2 {
  background-image: url('@/assets/images-home/box-three-2.jpg');
  background-repeat: none;
  background-size: cover;
}

.fourth_box {
  background-image: url('@/assets/images-home/box-fourth.jpg');
  background-repeat: none;
  background-size: cover;
}

.fourth_box:hover {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
}
</style>

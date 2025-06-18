<script setup lang="ts">

</script>

<template>
  <div class="d-flex">
    <v-col cols="4" class="height-100 first_box">1</v-col>
    <v-col class="height-100">
      <div class="box2 second_box">2</div>
      <div class="d-flex">
        <div class="box3 w50 third_box">3</div>
        <div class="box3 w50">3</div>
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
  border-right: solid 2px gray;
}

.second_box {
  border-bottom: solid 2px gray;
}

.third_box {
  border-right: solid 2px gray;
}
</style>

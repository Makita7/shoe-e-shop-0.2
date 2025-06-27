<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'WishlistComp',
})

const wishlistItem = ref(false);

function toggleWishlist() {
  wishlistItem.value = !wishlistItem.value;
  setTimeout(() => wishlistItem.value = !wishlistItem.value, 1500);
}


</script>

<template>
  <div class="">
    <h3 class="text-center mb-2" style="color: var(--mid-green);">Wishlist</h3>

    <v-row v-for="i in 4" :key="i" class="align-center justify-space-between pt-4 pb-2 px-4">
      <div class="d-flex align-center">
        <img src="https://nikearprod.vtexassets.com/arquivos/ids/155415-1600-1600?width=1600&height=1600&aspect=true"
          alt="image of shoe name" class="shoeImg" />
        <p class="ml-4 shoeName font-weight-bold">Air Force 1</p>
      </div>
      <p><b>Brand:</b> Nike</p>
      <p><b>Price:</b> $120</p>
      <v-col class="d-flex justify-end" cols="5">
        <Transition name="fade" mode="out-in">
          <v-icon v-if="!wishlistItem" @click="toggleWishlist" :class="{ animate: wishlistItem }"
            class="wishlistBtn heart-icon">mdi-heart</v-icon>
          <div v-else class="d-flex align-center">
            Are you sure you want to remove Item?
            <v-btn density="compact" variant="outlined" color="var(--dark-green)" class="ml-2">No</v-btn>
            <v-btn density="compact" variant="outlined" color="var(--green)" class="ml-2">Yes</v-btn>
          </div>
        </Transition>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.shoeName {
  font-size: 1.2rem;
}

.shoeImg {
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 1rem;
}

.wishlistBtn {
  color: var(--mid-green);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.wishlistBtn:hover {
  color: var(--heart-green);
  transform: scale(1.1);
}

.animate {
  color: var(--light-green);
}

.animate {
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>

<script setup lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFiltersStore } from '@/stores/filters';

defineEmits({
  name: 'FilterbarComp',
})

const filterStore = useFiltersStore();
interface UniversalFilters {
  size: string[];
  brand: string[];
  priceRange: string[];
  sortBy: string[];
  material: string[];
  use: string[];
}

const universalFilters = ref<UniversalFilters>({
  size: [],
  brand: [],
  priceRange: [],
  sortBy: [],
  material: [],
  use: [],
});
const filters = ref([]);

const route = useRoute();

onMounted(() => {
  universalFilters.value = filterStore.getFilter('universalFilters');
  filters.value = filterStore.getFilter(route.path.split('/')[1]);
}),

  watch(route, async (newRoute) => {
    filters.value = filterStore.getFilter(route.path.split('/')[1])
  })

const activeSize = ref();

function toggleActive(setValue: string) {
  activeSize.value = setValue;
}

const activeBrand = ref<string[]>([]);

function toggleBrand(newBrand: string) {
  console.log(activeBrand)

  const index = activeBrand.value.indexOf(newBrand);

  if (index !== -1) {
    activeBrand.value.splice(index, 1);
  } else {
    activeBrand.value.push(newBrand);
  }

}

const priceRange = ref();

let color = ref();

function selectColor(c: String) {
  color.value = c;
}

const sortBy = ref();

function sortByToggle(newSort: String) {
  sortBy.value = newSort;
}

const material = ref();

function materialToggle(newMaterial: String) {
  material.value = newMaterial;
}

const usage = ref();

function usageToggle(newUsage: String) {
  usage.value = newUsage;
}

function clearFilter() {
  activeSize.value = null;
  activeBrand.value = [];
  priceRange.value = null;
  color.value = null;
  sortBy.value = null;
  material.value = null;
  usage.value = null;
}

</script>

<template>
  <!-- size -->
  <div class="d-flex flex-wrap">
    <p class="font-weight-bold pr-2 prevent-select text-uppercase">Size Charts:</p>
    <p v-for="s in universalFilters.size" :key="s" @click="toggleActive(s)" class="filter-chip prevent-select mx-1"
      :class="activeSize == s ? 'active' : ''">{{ s }}</p>
  </div>

  <!-- priceRange -->
  <v-select label="Choose Price Range" v-model="priceRange" :items="universalFilters.priceRange" variant="plain"
    class="my-2" hide-details />

  <hr class="my-2" style="border-color: var(--borders);" />

  <!-- colors -->
  <p class="font-weight-bold pr-2 prevent-select text-uppercase">Colors:</p>
  <div class="d-flex justify-center mx-1">
    <div v-for="c in universalFilters.color" :key="c" class="colorChip ma-1 prevent-select" @click="selectColor(c)"
      :style="`background-color: ${c};`" :class="color === c ? 'activeColor' : ''" />
  </div>

  <hr class="my-2" />

  <!-- brand -->
  <div class="d-flex flex-wrap mb-6 mt-4">
    <p class="font-weight-bold pr-2 prevent-select text-uppercase">Brands:</p>
    <p v-for="b in universalFilters.brand" :key="s" @click="toggleBrand(b)" class="filter-chip prevent-select mx-1"
      :class="activeBrand.indexOf(b) !== -1 ? 'active' : ''">{{ b }}</p>
  </div>

  <!-- sortBy -->
  <div class="d-flex flex-wrap mb-6 mt-4">
    <p class="font-weight-bold pr-2 prevent-select text-uppercase">Sort By:</p>
    <p v-for="sort in universalFilters.sortBy" :key="sortBy" @click="sortByToggle(sort)"
      class="filter-chip prevent-select mx-1" :class="sortBy == sort ? 'active' : ''">{{ sort }}</p>
  </div>

  <!-- material -->
  <div class="d-flex flex-wrap mb-4">
    <p class="font-weight-bold pr-2 prevent-select text-uppercase">Material:</p>
    <p v-for="m in universalFilters.material" :key="m" @click="materialToggle(m)"
      class="filter-chip prevent-select mx-1" :class="material == m ? 'active' : ''">{{ m }}</p>
  </div>
  <hr class="my-2" />

  <!-- usage -->
  <div class="d-flex flex-wrap my-4">
    <p class="font-weight-bold pr-2 prevent-select text-uppercase">Usage:</p>
    <p v-for="u in universalFilters.use" :key="sortBy" @click="usageToggle(u)" class="filter-chip prevent-select mx-1"
      :class="usage == u ? 'active' : ''">{{ u }}</p>
  </div>

  <div class="d-flex justify-end">
    <v-btn @click="clearFilter" variant="outlined" density="comfortable" rounded="xl">Clear Filters</v-btn>
  </div>
</template>


<style scoped>
.filter-chip {
  border-radius: 16px;
  padding: 2px 8px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  margin-bottom: 0.3rem;
}

.filter-chip:hover {
  background-color: var(--light-blue);
}

.active {
  background-color: var(--light-blue);
}

.active:hover {
  background-color: #bdd1e0;
}

.colorChip {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 1rem;
  border: var(--borders) solid 1px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
}

.colorChip:hover {
  transform: scale(1.1);
}

.activeColor {
  border: black solid 2px;
}
</style>

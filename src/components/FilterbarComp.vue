<script setup lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFiltersStore } from '@/stores/filters';

defineEmits({
  name: 'FilterbarComp',
})

const filterStore = useFiltersStore();
const universalFilters = ref([]);
const filters = ref([]);

const route = useRoute();

onMounted(() => {
  universalFilters.value = filterStore.getFilter('universalFilters');
  filters.value = filterStore.getFilter(route.path.split('/')[1]);
}),

  watch(route, async (newRoute) => {
    filters.value = filterStore.getFilter(route.path.split('/')[1])
  })

</script>

<template>
  <div class="d-flex">
    <p class="font-weight-bold pr-2 prevent-select">Sizes:</p>
    <p v-for="s in universalFilters.size" :key="s" class="filter-chip prevent-select mx-1">{{ s }}</p>
  </div>
</template>


<style scoped>
.filter-chip {
  border-radius: 16px;
  padding: 2px 8px;
  cursor: pointer;
}

.filter-chip:hover {
  background-color: aquamarine;
}
</style>

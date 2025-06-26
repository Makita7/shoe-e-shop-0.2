import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', () => {

  const universalFilters = ref({
    size: ["US", "UK", "EU"],
    color: ["#0056ab", "white", "gray", "red", "green", "pink"],
    brand: ["Nike", "Adidas", "Puma", "Vans", "Reebok", "Converse", "Other"],
    priceRange: ["0-50", "50-100", "100-150", "150+", "custom"],
    sortBy: ["Newest", "Price Low-High", "Price High-Low", "Best Sellers", "Trending", "Discount"],
    material: ["Leather", "Canvas", "Knit", "Vegan", "Recycled"],
    use: ["Lifestyle", "Training", "Running", "Basketball", "Casual"],
  });

  const sports = ref({
    fit: ["Wide Fit", "Slim Fit"],
    dropType: ["High-top", "Mid", "Low-top"]
  });

  const kids = ref({
      closureType: ["Velcro", "Laces", "Slip-On"],
      theme: ["Cartoons", "Sports Teams", "Glitter", "Neutral"],
    });

  const allFilters = computed(() => ({
    universalFilters: universalFilters.value,
    kids: kids.value,
  }))

  const getFilter = (category: String) => {
    return allFilters.value[category as keyof allFilters.value];
  }

  return { universalFilters, kids, getFilter }
})

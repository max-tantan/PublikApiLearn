import { ref } from "vue";

export function useUnsplash() {
  const images = ref([]);
  const loading = ref(false);

  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

  async function searchPhotos(query = "retro") {
    loading.value = true;
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    images.value = data.results;
    loading.value = false;
  }

  return { images, loading, searchPhotos };
}

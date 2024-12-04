<template>
  <sidebar_component />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Tahmin CRUD</h1>

    <!-- Form Section -->
    <form @submit.prevent="handleCreateSlide" class="grid gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
      <div class="grid gap-2">
        <label for="slideName" class="font-semibold">Slide</label>
        <input
          type="text"
          id="slideName"
          v-model="form.name"
          placeholder="Slide name"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="slideImage" class="font-semibold">Reklam Şəkli</label>
        <input
          type="file"
          id="slideImage"
          @change="handleFileChange($event)"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        class="p-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Əlavə et
      </button>
    </form>

    <!-- Cards Section -->
    <div v-if="slides.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div
        v-for="item in slides"
        :key="item._id"
        class="bg-white border rounded-lg shadow-md overflow-hidden"
      >
        <div>
          <img
            :src="`https://merc.az/${item.slideImage}`"
            class="w-full"
            alt="Slide Image"
          />
          <div class="p-4">
            <p class="mt-2 font-bold">{{ item.name }}</p>
            <button
              @click="handleDeleteSlide(item._id)"
              class="mt-4 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-gray-600 mt-8">Heç bir slide tapılmadı.</p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import sidebar_component from '@/components/sidebar_component.vue';

export default {
  components: {
    sidebar_component,
  },
  setup() {
    const slides = ref([]);
    const form = ref({
      name: '',
      slideImage: null,
    });

    // Fetch all slides
    const fetchSlides = async () => {
      try {
        const response = await axios.get('https://merc.az/api/admin/slide');
        slides.value = response.data;
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    // Create a new slide
    const handleCreateSlide = async () => {
      const formData = new FormData();
      Object.entries(form.value).forEach(([key, value]) => formData.append(key, value));

      try {
        await axios.post('https://merc.az/api/admin/slide', formData);
        form.value = { name: '', slideImage: null }; // Reset form
        await fetchSlides();
      } catch (error) {
        console.error('Error creating slide:', error);
      }
    };

    // Delete a slide
    const handleDeleteSlide = async (id) => {
      try {
        await axios.delete(`https://merc.az/api/admin/slide/${id}`);
        await fetchSlides();
      } catch (error) {
        console.error('Error deleting slide:', error);
      }
    };

    // Handle file input change
    const handleFileChange = (event) => {
      form.value.slideImage = event.target.files[0];
    };

    // Fetch slides on component mount
    onMounted(fetchSlides);

    return {
      slides,
      form,
      handleCreateSlide,
      handleDeleteSlide,
      handleFileChange,
    };
  },
};
</script>

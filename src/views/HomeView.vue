<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

// Import components
import navigation_component from '@/components/navigation_component.vue';
import singlebets_component from '@/components/singlebets_component.vue';
import cupons_component from '@/components/cupons_component.vue';
import footer_component from '@/components/footer_component.vue';
import wp_component from '@/components/wp_component.vue';

// Import Swiper Vue.js components and styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Pagination,  Mousewheel } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    navigation_component,
    singlebets_component,
    cupons_component,
    footer_component,
    wp_component,
  },
  setup() {
    const slides = ref([]);

    // Fetch slides from the API
    const fetchSlides = async () => {
      try {
        const response = await axios.get('https://merc.az/api/admin/slide');
        slides.value = response.data;
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    onMounted(fetchSlides);

    return {
      slides,
      modules: [Autoplay, Mousewheel, Pagination],
    };
  },
};
</script>

<template>
  <div class="w-full">
    <!-- Navigation Component -->
    <navigation_component />

    <!-- WP Component -->
    <wp_component />

    <!-- Banner Section -->
    <main class="main">
      <section class="section banner banner-section">
        <div>
          <swiper
          :direction="'vertical'"
    :slidesPerView="1"

    :mousewheel="true"
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="w-full h-[50vh]"
          >
            <swiper-slide
              v-for="item in slides"
              :key="item._id"
              class="w-full h-full flex justify-center items-center"
            >
              <img
                :src="`https://merc.az:5000/${item.slideImage}`"
                class="w-full h-full object-cover"
                alt="Slide Image"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div>
          <swiper
          ref="{swiperRef}"
          :slidesPerView="3"
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :pagination="{
      type: 'fraction',
    }"
            :modules="modules"
            class="w-full h-[20vh] m-10"
          >
            <swiper-slide
              v-for="item in slides"
              :key="item._id"
              class=" h-full flex justify-center items-center"
            >
              <img
                :src="`https://merc.az:5000/${item.slideImage}`"
                class="w-full h-full object-cover"
                alt="Slide Image"
              />
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </main>

    <!-- Single Bets Section -->
    <div class="w-full">
      <div class="w-full p-3">
        <h1 class="text-3xl font-bold">Təkli Mərclər</h1>
        <div class="flex justify-center p-2">
          <hr class="w-[98%]" />
        </div>
      </div>
      <singlebets_component />
    </div>

    <!-- Coupons Section -->
    <div class="w-full">
      <div class="w-full p-3">
        <h1 class="text-3xl font-bold">Kuponlar</h1>
        <div class="flex justify-center p-2">
          <hr class="w-[98%]" />
        </div>
      </div>
      <cupons_component />
    </div>

    <!-- Footer Component -->
    <footer_component />
  </div>
</template>

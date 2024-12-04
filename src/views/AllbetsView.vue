<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import navigation_component from '@/components/navigation_component.vue';
import wp_component from '@/components/wp_component.vue';
import footer_component from '@/components/footer_component.vue';

export default {
  components: {
    navigation_component,
    wp_component,
    footer_component,
  },
  setup() {
    const tahminler = ref([]);
    const form = ref({
      tahmin: '',
      emsal: '',
      author: '',
      sonuc: 'win',
      groupOneImage: null,
      groupTwoImage: null,
    });

    const fetchTahminler = async () => {
      try {
        const response = await axios.get('https://merc.az/api/admin/bet');
        tahminler.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const onFileChange = (field, event) => {
      form.value[field] = event.target.files[0];
    };

    onMounted(fetchTahminler);

    return { tahminler, form, onFileChange };
  },
};
</script>

<template>
  <div class="w-full min-h-screen">
    <!-- Header section -->
    <div class="w-full h-[40vh] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1578034756435-4b92079f4c21?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"></div>

    <!-- Components -->
    <navigation_component />
    <wp_component />

    <!-- Main Content -->
    <div class="w-full p-4">
      <h1 class="text-2xl font-bold mb-2">Bütün Təkli Mərclər</h1>
      <div class="flex justify-center p-2 mb-4">
        <hr class="w-full" />
      </div>

      <!-- Scrollable Card Container -->
      <div class="w-full flex flex-wrap justify-center gap-6">
        <div v-for="item in tahminler" :key="item._id" class="w-full sm:w-[450px] shadow-lg border border-primary rounded-lg overflow-hidden">
          <!-- Card Header -->
          <div class="flex border-b-2 border-second p-2 justify-between items-center">
            <!-- Left Side -->
            <div class="flex flex-col items-center">
              <img :src="`https://merc.az/${item.groupOneImage}`" class="w-16 h-16 object-cover mb-2" alt="Team Logo for {{ item.groupNameOne }}" />
              <h2 class="text-center font-semibold">{{ item.groupNameOne }}</h2>
            </div>
            <!-- Center Side -->
            <div class="text-center">
              <h3 class="font-bold text-lg">Stade Roi Baudouin</h3>
              <p class="text-gray-500">24/10/2024</p>
            </div>
            <!-- Right Side -->
            <div class="flex flex-col items-center">
              <img :src="`https://merc.az/${item.groupTwoImage}`" class="w-16 h-16 object-cover mb-2" alt="Team Logo for {{ item.groupNameTwo }}" />
              <h2 class="text-center font-semibold">{{ item.groupNameTwo }}</h2>
            </div>
          </div>

          <!-- Card Details -->
          <div class="flex justify-around p-2 bg-gray-100">
            <!-- Left Section -->
            <div class="flex flex-col items-center">
              <ion-icon class="text-5xl text-primary" name="football-outline"></ion-icon>
              <p class="mt-2">Futbol</p>
            </div>
            <!-- Center Section -->
            <div class="flex flex-col items-center">
              <ion-icon class="text-3xl text-primary" name="trophy-sharp"></ion-icon>
              <p class="font-bold text-sm">Millətlər liqası</p>
            </div>
            <!-- Right Section -->
            <div class="flex flex-col items-center">
              <ion-icon class="text-5xl text-primary" name="time-outline"></ion-icon>
              <p class="mt-2">00:00</p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-2 flex justify-between items-center">
            <!-- Author Info -->
            <div>
              <p class="font-bold"><span class="text-primary">Müəllif:</span> {{ item.author }}</p>
            </div>
            <!-- Prediction Table -->
            <table class="w-[150px] border-collapse">
              <caption class="text-center bg-primary font-bold text-second py-1">Proqnoz</caption>
              <thead>
                <tr class="border-b">
                  <th class="p-1 text-left">Təxmin</th>
                  <th class="p-1 text-left">Əmsal</th>
                  <th class="p-1 text-center">Nəticə</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-1">{{ item.tahmin }}</td>
                  <td class="p-1">{{ item.emsal }}</td>
                  <td class="p-1 text-center font-bold" :class="item.sonuc === 'win' ? 'text-green-600' : 'text-red-600'">
                    {{ item.sonuc }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer_component />
  </div>
</template>

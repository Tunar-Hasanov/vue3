<template>
  <sidebar_component />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Tahmin CRUD</h1>

    <!-- Form Section -->
    <form @submit.prevent="createTahmin" class="grid gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
      <div class="grid gap-2">
        <label for="tahmin" class="font-semibold">Tahmin</label>
        <input
          type="text"
          id="tahmin"
          v-model="form.tahmin"
          placeholder="Tahmin"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="emsal" class="font-semibold">Emsal</label>
        <input
          type="text"
          id="emsal"
          v-model="form.emsal"
          placeholder="Emsal"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="author" class="font-semibold">Author</label>
        <input
          type="text"
          id="author"
          v-model="form.author"
          placeholder="Author"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="groupNameOne" class="font-semibold">Birinci Komandanın Adı</label>
        <input
          type="text"
          id="groupNameOne"
          v-model="form.groupNameOne"
          placeholder="Birinci Komanda"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="groupNameTwo" class="font-semibold">İkinci Komandanın Adı</label>
        <input
          type="text"
          id="groupNameTwo"
          v-model="form.groupNameTwo"
          placeholder="İkinci Komanda"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="matchTime" class="font-semibold">Maç Zamanı</label>
        <input
          type="text"
          id="matchTime"
          v-model="form.matchTime"
          placeholder="Zaman"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="matchDate" class="font-semibold">Maç Tarihi</label>
        <input
          type="text"
          id="matchDate"
          v-model="form.matchDate"
          placeholder="Tarih"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="sonuc" class="font-semibold">Sonuç</label>
        <select
          id="sonuc"
          v-model="form.sonuc"
          class="p-2 border rounded-md"
          required
        >
          <option value="win">Win</option>
          <option value="lose">Lose</option>
        </select>
      </div>
      <div class="grid gap-2">
        <label for="groupOneImage" class="font-semibold">Birinci Komanda Resmi</label>
        <input
          type="file"
          id="groupOneImage"
          @change="onFileChange('groupOneImage', $event)"
          class="p-2 border rounded-md"
          required
        />
      </div>
      <div class="grid gap-2">
        <label for="groupTwoImage" class="font-semibold">İkinci Komanda Resmi</label>
        <input
          type="file"
          id="groupTwoImage"
          @change="onFileChange('groupTwoImage', $event)"
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
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div
        v-for="item in tahminler"
        :key="item._id"
        class="bg-white border rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-4 flex justify-between items-center bg-blue-100">
          <div class="text-center">
            <img :src="`https://merc.az/${item.groupOneImage}`" class="w-12 h-12 object-cover rounded-full" alt="Team One" />
            <p class="mt-2 font-bold">{{ item.groupNameOne }}</p>
          </div>
          <div>
            <h1 class="font-semibold text-gray-800 text-center">VS</h1>
          </div>
          <div class="text-center">
            <img :src="`https://merc.az/${item.groupTwoImage}`" class="w-12 h-12 object-cover rounded-full" alt="Team Two" />
            <p class="mt-2 font-bold">{{ item.groupNameTwo }}</p>
          </div>
        </div>
        <div class="p-4">
          <p><span class="font-bold">Date:</span> {{ item.matchDate }}</p>
          <p><span class="font-bold">Time:</span> {{ item.matchTime }}</p>
          <p><span class="font-bold">Author:</span> {{ item.author }}</p>
        </div>
        <div class="p-4 bg-gray-100">
          <table class="table-auto w-full text-center">
            <thead>
              <tr class="bg-blue-600 text-white">
                <th class="px-4 py-2">Təxmin</th>
                <th class="px-4 py-2">Əmsal</th>
                <th class="px-4 py-2">Nəticə</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2">{{ item.tahmin }}</td>
                <td class="px-4 py-2">{{ item.emsal }}</td>
                <td class="px-4 py-2 font-bold" :class="item.sonuc === 'win' ? 'text-green-600' : 'text-red-600'">
                  {{ item.sonuc }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 flex justify-end">
          <button
            @click="deleteTahmin(item._id)"
            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
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
    const tahminler = ref([]);
    const form = ref({
      tahmin: '',
      emsal: '',
      author: '',
      sonuc: 'win',
      groupOneImage: null,
      groupTwoImage: null,
      groupNameOne: '',
      groupNameTwo: '',
      matchTime: '',
      matchDate: '',
    });

    const fetchTahminler = async () => {
      const response = await axios.get('https://merc.az/api/admin/bet');
      tahminler.value = response.data;
    };

    const createTahmin = async () => {
      const formData = new FormData();
      Object.entries(form.value).forEach(([key, value]) =>
        formData.append(key, value)
      );

      try {
        await axios.post('https://merc.az/api/admin/bet', formData);
        await fetchTahminler();
      } catch (error) {
        console.error('Error creating tahmin:', error);
      }
    };

    const deleteTahmin = async (id) => {
      try {
        await axios.delete(`https://merc.az/api/admin/bet/${id}`);
        await fetchTahminler();
      } catch (error) {
        console.error('Error deleting tahmin:', error);
      }
    };

    const onFileChange = (field, event) => {
      form.value[field] = event.target.files[0];
    };

    onMounted(fetchTahminler);

    return { tahminler, form, createTahmin, deleteTahmin, onFileChange };
  },
};
</script>

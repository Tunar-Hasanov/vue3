<template>
  <sidebar_component />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-8">Tahmin CRUD</h1>

    <!-- Form Section -->
    <div class="form-container bg-white p-6 rounded-lg shadow-md">
      <form @submit.prevent="createKupon" class="space-y-6">
        <!-- Kupon First Group -->
        <div class="form-group">
          <h2 class="text-lg font-semibold">Kupon First Group</h2>
          <div class="grid grid-cols-2 gap-4">
            <input type="text" v-model="form.tahminOne" placeholder="Tahmin 1" class="input" required />
            <input type="text" v-model="form.emsalOne" placeholder="Emsal 1" class="input" required />
            <input type="text" v-model="form.author" placeholder="Author" class="input" required />
            <input type="text" v-model="form.groupNameOne" placeholder="Birinci Komandanın Adı 1" class="input" required />
            <input type="text" v-model="form.groupNameTwo" placeholder="İkinci Komandanın Adı 1" class="input" required />
            <input type="text" v-model="form.matchTimeOne" placeholder="Zaman 1" class="input" required />
            <input type="text" v-model="form.matchDateOne" placeholder="Tarih 1" class="input" required />
            <select v-model="form.sonucOne" class="input" required>
              <option value="win">Win</option>
              <option value="lose">Lose</option>
            </select>
            <input type="file" @change="onFileChange('groupOneImage', $event)" class="file-input" required />
            <input type="file" @change="onFileChange('groupTwoImage', $event)" class="file-input" required />
          </div>
        </div>

        <!-- Kupon Second Group -->
        <div class="form-group mt-8">
          <h2 class="text-lg font-semibold">Kupon Second Group</h2>
          <div class="grid grid-cols-2 gap-4">
            <input type="text" v-model="form.tahminTwo" placeholder="Tahmin 2" class="input" required />
            <input type="text" v-model="form.emsalTwo" placeholder="Emsal 2" class="input" required />
            <input type="text" v-model="form.groupNameThirty" placeholder="Birinci Komandanın Adı 2" class="input" required />
            <input type="text" v-model="form.groupNameForty" placeholder="İkinci Komandanın Adı 2" class="input" required />
            <input type="text" v-model="form.matchTimeTwo" placeholder="Zaman 2" class="input" required />
            <input type="text" v-model="form.matchDateTwo" placeholder="Tarih 2" class="input" required />
            <select v-model="form.sonucTwo" class="input" required>
              <option value="win">Win</option>
              <option value="lose">Lose</option>
            </select>
            <input type="file" @change="onFileChange('groupThirtyImage', $event)" class="file-input" required />
            <input type="file" @change="onFileChange('groupFortyImage', $event)" class="file-input" required />
          </div>
        </div>

        <button type="submit" class="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Əlavə et
        </button>
      </form>
    </div>

    <!-- Kupon Display Section -->
    <div id="client" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div
        v-for="item in kupon"
        :key="item._id"
        class="kupon-card bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div class="flex items-center p-4 border-b">
          <img :src="`https://merc.az:5000/${item.groupOneImage}`" class="w-12 h-12 rounded-full mr-4" />
          <h3 class="font-semibold">{{ item.groupNameOne }}</h3>
          <span class="mx-2">VS</span>
          <img :src="`https://merc.az:5000/${item.groupTwoImage}`" class="w-12 h-12 rounded-full ml-4" />
          <h3 class="font-semibold">{{ item.groupNameTwo }}</h3>
        </div>
        <div class="p-4">
          <p class="text-sm text-gray-500">{{ item.matchDateOne }} | {{ item.matchTimeOne }}</p>
          <table class="mt-4 w-full text-sm">
            <thead>
              <tr>
                <th class="text-left">Təxmin</th>
                <th class="text-left">Əmsal</th>
                <th class="text-left">Nəticə</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ item.tahminOne }}</td>
                <td>{{ item.emsalOne }}</td>
                <td>
                  <span
                    :class="{
                      'text-green-500': item.sonucOne === 'win',
                      'text-red-500': item.sonucOne === 'lose',
                    }"
                  >
                    {{ item.sonucOne }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center p-4 border-b">
          <img :src="`https://merc.az/${item.groupThirtyImage}`" class="w-12 h-12 rounded-full mr-4" />
          <h3 class="font-semibold">{{ item.groupNameThirty }}</h3>
          <span class="mx-2">VS</span>
          <img :src="`https://merc.az/${item.groupFortyImage}`" class="w-12 h-12 rounded-full ml-4" />
          <h3 class="font-semibold">{{ item.groupNameForty }}</h3>
        </div>
        <div class="p-4">
          <p class="text-sm text-gray-500">{{ item.matchDateTwo }} | {{ item.matchTimeTwo }}</p>
          <table class="mt-4 w-full text-sm">
            <thead>
              <tr>
                <th class="text-left">Təxmin</th>
                <th class="text-left">Əmsal</th>
                <th class="text-left">Nəticə</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ item.tahminTwo }}</td>
                <td>{{ item.emsalTwo }}</td>
                <td>
                  <span
                    :class="{
                      'text-green-500': item.sonucTwo === 'win',
                      'text-red-500': item.sonucTwo === 'lose',
                    }"
                  >
                    {{ item.sonucTwo }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          @click="deleteKupon(item._id)"
          class="btn w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-b"
        >
          Sil
        </button>
      </div>

    </div>
  </div>
</template>
<style>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  width: 100%;
}
.file-input {
  display: block;
  width: 100%;
}
.btn {
  transition: background-color 0.2s ease-in-out;
}
.kupon-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import sidebar_component from '@/components/sidebar_component.vue';

export default {
  components: {
    sidebar_component,
  },
  setup() {
    const kupon = ref([]);
    const form = ref({
      tahminOne: '',
      emsalOne: '',
      author: '',
      tahminTwo: '',
      emsalTwo: '',
      sonucOne: 'win',
      sonucTwo: 'win',
      groupOneImage: null,
      groupTwoImage: null,
      groupThirtyImage: null,
      groupFortyImage: null,
      groupNameOne: '',
      groupNameTwo: '',
      groupNameThirty: '',
      groupNameForty: '',
      matchTimeOne: '',
      matchDateOne: '',
      matchTimeTwo: '',
      matchDateTwo: '',
    });

    const fetchKupon = async () => {
      const response = await axios.get('https://merc.az/api/admin/kupon');
      kupon.value = response.data;
    };

    const createKupon = async () => {
  const formData = new FormData();
  formData.append('tahminOne', form.value.tahminOne);
  formData.append('emsalOne', form.value.emsalOne);
  formData.append('tahminTwo', form.value.tahminTwo);
  formData.append('emsalTwo', form.value.emsalTwo);
  formData.append('author', form.value.author);
  formData.append('sonucOne', form.value.sonucOne);
  formData.append('sonucTwo', form.value.sonucTwo);
  formData.append('groupNameOne', form.value.groupNameOne);
  formData.append('groupNameTwo', form.value.groupNameTwo);
  formData.append('groupNameThirty', form.value.groupNameThirty);
  formData.append('groupNameForty', form.value.groupNameForty);
  formData.append('matchTimeOne', form.value.matchTimeOne);
  formData.append('matchDateOne', form.value.matchDateOne);
  formData.append('matchTimeTwo', form.value.matchTimeTwo);
  formData.append('matchDateTwo', form.value.matchDateTwo);
  formData.append('groupOneImage', form.value.groupOneImage);
  formData.append('groupTwoImage', form.value.groupTwoImage);
  formData.append('groupThirtyImage', form.value.groupThirtyImage);
  formData.append('groupFortyImage', form.value.groupFortyImage);

  try {
    await axios.post('https://merc.az/api/admin/kupon', formData);
    await fetchKupon();
  } catch (error) {
    console.error('Error creating kupon:', error);
  }
};

    const deleteKupon = async (id) => {
      await axios.delete(`https://merc.az/api/admin/kupon/${id}`);
      fetchKupon();
    };

    const onFileChange = (field, event) => {
      form.value[field] = event.target.files[0];
    };

    onMounted(fetchKupon);

    return { kupon, form, createKupon, deleteKupon, onFileChange };
  },
};
</script>

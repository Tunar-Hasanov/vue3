<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {

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
      const response = await axios.get('https://merc.az/api/admin/bet');
      tahminler.value = response.data;
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
  <div>
    <!-- Scrollable Card Container -->
    <div class="w-full p-6 flex overflow-x-auto overflow-y-hidden bg-second space-x-4">
      <!-- card Item start -->
      <div v-for="item in tahminler" :key="item._id" class="w-[450px] shadow-lg border border-primary rounded-lg flex-shrink-0">
        <div class="w-full border-b-2 border-second flex justify-around">
          <!-- left side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <img
              :src="`https://merc.az/${item.groupOneImage}`"
              class="w-16"
              alt="Team Logo"
            />
            <h1>{{ item.groupNameOne }}</h1>
          </div>
          <!-- center side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <h1 class="font-bold text-lg">Stade Roi Baudouin</h1>
            <h1 class="text-thirty">24/10/2024</h1>
          </div>
          <!-- right side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <img
              :src="`https://merc.az/${item.groupTwoImage}`"
              class="w-16"
              alt="Team Logo"
            />
            <h1>{{ item.groupNameTwo }}</h1>
          </div>
        </div>

        <!-- card half -->
        <div class="w-full flex justify-around">
          <!-- left side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <ion-icon class="text-5xl text-primary" name="football-outline"></ion-icon>
            <h1>Futbol</h1>
          </div>
          <!-- center side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <ion-icon class="text-3xl text-primary" name="trophy-sharp"></ion-icon>
            <h1 class="font-bold text-sm">Millətlər liqası</h1>
          </div>
          <!-- right side -->
          <div class="flex m-2 justify-center items-center flex-col">
            <ion-icon class="text-5xl text-primary" name="time-outline"></ion-icon>
            <h1>00:00</h1>
          </div>
        </div>
        <!-- card half  -->
        <div class="w-full p-2 flex justify-around items-center">
          <!-- left side  -->
          <div>
            <h1 class="font-bold"><span class="text-primary">Müəllif:</span> {{ item.author }}</h1>
          </div>
          <!-- right side  -->
          <div>
            <table class="w-[150px]">
              <caption class="text-center bg-primary font-bold text-second">
                Proqnoz
              </caption>
              <tr class="border border-primary">
                <th class="p-1">Təxmin</th>
                <th class="p-1">Əmsal</th>
                <th class="p-1">Nəticə</th>
              </tr>
              <tr class="border border-primary">
                <td class="p-1">{{item.tahmin}}</td>
                <td class="p-1">{{ item.emsal }}</td>
                <td class="p-1 text-center font-bold"  :class="item.sonuc === 'win' ? 'text-green-600' : 'text-red-600'">{{ item.sonuc }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- card Item end -->

    </div>
  </div>
</template>

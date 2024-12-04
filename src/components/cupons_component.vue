<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
export default {

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

    onMounted(fetchKupon);

    return { kupon, form};
  },
};
</script>
<template>
  <div>
    <!-- Scrollable Card Container -->
    <div class="w-full p-6 flex overflow-x-auto overflow-y-hidden bg-second space-x-4">
      <!-- card Item start -->
      <div v-for="item in kupon"
      :key="item._id" class="w-[450px] shadow-lg border border-[rgba(0,0,0,0.3)] rounded-lg m-5 flex-shrink-0">
        <!-- group-1  -->
        <div class="flex justify-around border-b border-[rgba(0,0,0,0.3)] items-center">
          <!-- left side  -->
          <div class="p-2">
            <div class="flex">
              <div>
              <img class="w-16 h-16 rounded-full" :src="`https://merc.az/${item.groupOneImage}`" alt="">
              <h3 class="font-semibold text-center">{{ item.groupNameOne }}</h3>
            </div>
            <div class="flex items-center">
              <img src="@/assets/images/vs.png" class="w-16" alt="">
            </div>
            <div>
              <img class="w-16 h-16 rounded-full" :src="`https://merc.az/${item.groupTwoImage}`" alt="">
              <h3 class="font-semibold text-center">{{ item.groupNameTwo }}</h3>
            </div>
            </div>
            <div class="text-center flex items-center">
              <ion-icon name="football-outline" class="text-primary m-1"></ion-icon>
              <p class="m-1 text-sm">{{ item.matchDateOne }} | {{ item.matchTimeOne }}</p>
            </div>
          </div>
          <!-- right side  -->
          <div class="p-2">
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
                <td class="p-1">{{ item.tahminOne }}</td>
                <td class="p-1">{{ item.emsalTwo }}</td>
                <td class="p-1 text-second text-center font-bold" :class="{
                      'text-green-500': item.sonucOne === 'win',
                      'text-red-500': item.sonucOne === 'lose',
                    }">{{ item.sonucOne }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="flex justify-around border-b border-[rgba(0,0,0,0.3)] items-center">
          <!-- left side  -->
          <div class="p-2">
            <div class="flex">
              <div>
              <img class="w-16 h-16 rounded-full" :src="`https://merc.az/${item.groupThirtyImage}`" alt="">
              <h3 class="font-semibold text-center">{{ item.groupNameThirty }}</h3>
            </div>
            <div class="flex items-center">
              <img src="@/assets/images/vs.png" class="w-16" alt="">
            </div>
            <div>
              <img class="w-16 h-16 rounded-full" :src="`https://merc.az/${item.groupFortyImage}`" alt="">
              <h3 class="font-semibold text-center">{{ item.groupNameForty }}</h3>
            </div>
            </div>
            <div class="text-center flex items-center">
              <ion-icon name="football-outline" class="text-primary m-1"></ion-icon>
              <p class="m-1 text-sm">{{ item.matchDateTwo }} | {{ item.matchTimeTwo }}</p>
            </div>
          </div>
          <!-- right side  -->
          <div class="p-2">
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
                <td class="p-1">{{ item.tahminTwo }}t</td>
                <td class="p-1">{{ item.emsalTwo }}</td>
                <td class="p-1 text-second text-center font-bold" :class="{
                      'text-green-500': item.sonucTwo === 'win',
                      'text-red-500': item.sonucTwo === 'lose',
                    }">{{ item.sonucTwo }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="w-full h-6 flex items-center justify-around bg-primary">
          <h1 class="font-bold text-second">Müəllif: {{ item.author }}</h1>
          <p class="text-second">{{ item.tahminOne + item.tahminTwo }}</p>
        </div>
      </div>
      <!-- card Item end -->

    </div>
  </div>
</template>

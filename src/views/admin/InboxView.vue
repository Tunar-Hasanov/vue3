<template>
  <div class="w-full flex flex-center">
  <sidebar_component/>
  <div class="my-[60px]">
    <h1>Admin Panel</h1>
    <ul v-if="contacts.length">
      <li v-for="contact in contacts" :key="contact._id">
        <p><strong>İsim:</strong> {{ contact.name }}</p>
        <p><strong>Telefon:</strong> {{ contact.phone }}</p>
        <p><strong>Mesaj:</strong> {{ contact.message }}</p>
        <button @click="deleteContact(contact._id)">Sil</button>
      </li>
    </ul>
    <p v-else>Henüz mesaj bulunmuyor.</p>
  </div>
</div>
</template>

<script>
import { ref, onMounted } from "vue";
import sidebar_component from "@/components/sidebar_component.vue";
export default {
  components: {
    sidebar_component,
  },
  setup() {
    const contacts = ref([]);

    const fetchContacts = async () => {
      try {
        const response = await fetch("https://merc.az/api/admin/contact");
        if (response.ok) {
          contacts.value = await response.json();
        } else {
          console.error("Veriler getirilemedi");
        }
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };

    const deleteContact = async (id) => {
      if (!confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;

      try {
        const response = await fetch(`https://merc.az/api/admin/contact/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          // Başarıyla silindiyse, yerel listesinden kaldır
          contacts.value = contacts.value.filter((contact) => contact._id !== id);
        } else {
          console.error("Mesaj silinemedi");
        }
      } catch (error) {
        console.error("Silme işlemi sırasında hata oluştu:", error);
      }
    };

    onMounted(fetchContacts);

    return { contacts, deleteContact };
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  position: relative;
}
button {
  margin-top: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #ff0000;
}
</style>

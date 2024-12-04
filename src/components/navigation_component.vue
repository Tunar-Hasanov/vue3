<script setup>
import { ref, onMounted, watch } from 'vue'

// Reactive states
const isMenuActive = ref(false)
const isHeaderScrolled = ref(false)

// Toggle navbar menu
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

// Close menu on link click
const closeMenu = () => {
  isMenuActive.value = false
}

// Scroll event to toggle header background
const onScroll = () => {
  isHeaderScrolled.value = window.scrollY >= 85
}

// Listen to resize events
const onResize = () => {
  if (window.innerWidth > 768) {
    isMenuActive.value = false
  }
}

// Setup lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <!-- Header Section -->
  <header class="header" :class="{ 'on-scroll': isHeaderScrolled }" id="header">
    <nav class="navbar container">
      <a href="/" class="brand">
        <img src="@/assets/images/logo.png" class="w-28" alt="">
      </a>
      <div class="burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" id="burger">
        <span class="burger-line bg-second"></span>
        <span class="burger-line bg-second"></span>
        <span class="burger-line bg-second"></span>
      </div>
      <div
        class="menu sm:bg-transparent bg-[#222]"
        :class="{ 'is-active': isMenuActive }"
        id="menu"
      >
        <ul class="menu-inner">
          <li class="menu-item">
            <RouterLink to="/" class="menu-link text-second" @click="closeMenu">
              Ana Səhifə
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/allbets" class="menu-link text-second" @click="closeMenu">
              Mərclər
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/allcupons" class="menu-link text-second" @click="closeMenu">
              Kuponlar
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/contact" class="menu-link text-second" @click="closeMenu">
              Əlaqə
            </RouterLink>
          </li>
        </ul>
      </div>
      <a href="https://t.me/merc_az" class="menu-block bg-primary text-second font-bold shadow-lg">
        Canlı Mərclər
      </a>
    </nav>
  </header>
</template>

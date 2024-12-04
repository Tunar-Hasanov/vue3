<template>
  <section class="bg-second">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <RouterLink to="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
            Ana Səhifə
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/allbets" class="text-base leading-6 text-gray-500 hover:text-gray-900">
            Mərclər
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/allcupons" class="text-base leading-6 text-gray-500 hover:text-gray-900">
            Kuponlar
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/contact" class="text-base leading-6 text-gray-500 hover:text-gray-900">
            Əlaqə
          </RouterLink>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="https://www.instagram.com/merc.az_official/profilecard/?igsh=MXd0a3luYXNhbW9mNQ=="
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Instagram</span>
          <i class="bx bxl-instagram text-3xl"></i>
        </a>
        <a href="https://t.me/merc_az" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Telegram</span>
          <i class="bx bxl-telegram text-3xl"></i>
        </a>
        <a
          href="https://x.com/merc_az?t=YxEnvDHJxfKPsIIrG_GTYg&s=09"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <i class="bx bxl-twitter text-3xl"></i>
        </a>
        <a
          href="https://www.tiktok.com/@merc.az?_t=8rTeh0v3rOh&_r=1"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Tiktok</span>
          <i class="bx bxl-tiktok text-3xl"></i>
        </a>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © 2025 Mərc.az, Inc. All rights reserved.
      </p>
    </div>
  </section>
</template>

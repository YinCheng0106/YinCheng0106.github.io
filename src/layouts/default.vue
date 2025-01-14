<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  const month = new Date().getMonth();
  let snows = false;
  if(month === 10 || month === 11 || month === 0) {
    snows = true; // 11, 12, 1
  }
  const isDark = computed(() => useColorMode().value == "dark");
</script>

<template>
  <div>
    <div class="min-h-screen flex flex-col p-4">
      <Header />
      <main class="flex-grow p-4">
        <slot />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
    <SnowfallBg
      :color="isDark ? '#FFFFFF' : '#000000'"
      class="fixed inset-0 pointer-events-none"
      :hidden="!snows"
      :min-radius="0.2"
      :max-radius="3"
      :speed="0.75"
    />
    <ParticlesBg
      class="fixed inset-0 pointer-events-none"
      :hidden="snows"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
  </div>
</template>
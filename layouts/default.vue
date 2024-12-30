<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col p-4">
    <Header />
    <main class="flex-grow p-4">
      <slot />
    </main>
    <Footer />
    <SpeedInsights />
  </div>
</template>

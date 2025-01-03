<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  const month = new Date().getMonth();
  let snows = false;
  if(month === 10 || month === 11 || month === 0) {
    snows = true; // 11, 12, 1
  }
</script>

<template>
  <div class="snowflakes" aria-hidden="true" :hidden="!snows">
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">冷</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">冷</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
    <div class="snowflake">
      <div class="inner">❅</div>
    </div>
  </div>
  <div class="min-h-screen flex flex-col p-4">
    <Header />
    <main class="flex-grow p-4">
      <slot />
    </main>
    <Footer />
    <SpeedInsights />
  </div>
</template>
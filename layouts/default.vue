<script setup>
  import Header from "../components/header.vue";
  import Footer from "../components/footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col p-4">
    <Header />
    <main class="flex-grow p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

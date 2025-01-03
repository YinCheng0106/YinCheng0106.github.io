<script setup>
    import DarkMode from "./DarkMode.vue";
</script>

<template>
    <div class="flex justify-between items-center p-4 border-t-2 border-neutral-400">
        <p>© 2025 YinCheng.</p>
        <div class="flex flex-wrap gap-2">
            <NuxtLink class="link" to="/about">關於</NuxtLink>
            <NuxtLink class="link" to="/terms">條款</NuxtLink>
        </div>
        <DarkMode />
    </div>
</template>

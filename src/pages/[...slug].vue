<script setup>
definePageMeta({
    layout: false
});
useSeoMeta({
    title: '404 Not Found',
});
</script>

<template>
    <div class="flex min-h-screen items-center font-mono">
        <div class="mx-auto flex flex-wrap items-center p-4">
            <div class="w-full p-4 text-center md:w-1/2">
                <div class="text-[10rem]">404</div>
            </div>
            <div class="w-full p-4 text-center md:w-1/2 md:text-left">
                <div class="mb-12 text-3xl"><del>你發現了一個神秘的通道</del></div>
                <NuxtLink to="/"
                    class="btn btn-outline text-lg">
                    回首頁</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path">
                <NuxtLink :to="blog._path" class="block p-4 border-b border-gray-200 dark:border-gray-800">
                    <h2 class="m-2 font-bold text-xl">{{ blog.title }}</h2>
                    <p class="px-4 py-2 text-xs dark:text-gray-500 text-gray-700">{{ blog.description }}</p>
                </NuxtLink>
            </div>
        </ContentList>
    </div>
</template>
<script setup>
</script>

<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path">
                <NuxtLink :to="blog._path" class="block p-2 m-4 border-b border-gray-200 rounded-t-2xl dark:hover:bg-gray-950 hover:bg-gray-100 dark:hover:border-gray-500 hover:border-gray-400 duration-300 delay-75">
                    <h2 class="m-2 font-bold text-xl">{{ blog.title }}</h2>
                    <p class="px-4 py-2 text-xs dark:text-gray-400 text-gray-700">{{ blog.description }}</p>
                </NuxtLink>
            </div>
        </ContentList>
    </div>
</template>
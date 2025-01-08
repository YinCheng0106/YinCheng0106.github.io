<script setup>
    import { useState } from '#app';
    const colorMode = useState('color-mode', () => 'dark');
    const toggleTheme = (theme) => {
        colorMode.value = theme;
        document.documentElement.className = theme;
    };
    
    const items = [
        [{
            label: 'Dark',
            click: () => {
                toggleTheme('dark');
            },
        },{
            label: 'Light',
            click: () => {
                toggleTheme('light');
            },
        }]
    ];
</script>

<template>
    <div class="m-4 mx-2 md:mx-8 float-right border-2 border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-500 rounded-lg duration-300 delay-75">
        <UDropdown :open-delay="300" :close-delay="75" :items="items" :popper="{ placement: 'left-start' }">
            <UButton class="duration-300 delay-75" :icon="colorMode === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
                :color="colorMode === 'light' ? 'yellow' : 'gray'" 
                :variant="colorMode === 'light' ? 'solid' : 'ghost'" 
                aria-label="DarkMode" />
        </UDropdown>
    </div>
</template>
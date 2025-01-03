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
    <div class="m-4 mx-8 float-right ">
        <UDropdown :items="items" :popper="{ placement: 'left-start' }">
            <UButton :icon="colorMode === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
                :color="colorMode === 'light' ? 'yellow' : 'gray'" 
                :variant="colorMode === 'light' ? 'solid' : 'ghost'" />
        </UDropdown>
    </div>
</template>
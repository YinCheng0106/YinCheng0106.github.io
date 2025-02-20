<script lang="ts" setup>
const ip = ref('Loading...');
const country = ref('Loading...');

onMounted(async () => {
  try {
    const data = await $fetch('/api/get-ip');
    if (data.ip) {
      ip.value = data.ip;
      console.log("S: ", data.ip);
    } else {
      ip.value = '無法取得 IP 地址';
      console.log("E: ", data);
      return;
    }
    const geoData = await $fetch(`http://www.geoplugin.net/json.gp?ip=61.221.28.190`);
    console.log(geoData);
    country.value = geoData.geoplugin_countryName || '未知國家';
  } catch (error) {
    console.error('Error fetching IP or country:', error);
    country.value = 'Not Found';
  }
});
</script>

<template>
  <div class="font-mono">{{ ip }}</div>
  <div class="font-mono flex flex-wrap justify-center item-center">{{ country }}</div>
</template>

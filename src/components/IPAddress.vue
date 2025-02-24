<script lang="ts" setup>
const ip = ref('Loading...');
const country = ref('Loading...');
const city = ref('Loading...');
const currencyCode = ref('Loading...');
const countryPopulation = ref('Loading...');
const timezone = ref('Loading...');

onMounted(async () => {
  try {
    const data = await $fetch('/api/get-ip');
    if(data.ip === "127.0.0.1") {
      ip.value = "本機";
      console.log("Local: ", data.ip);
      //return;
    } else if (data.ip) {
      ip.value = data.ip;
      console.log("S: ", data.ip);
    } else {
      ip.value = '無法取得 IP 地址';
      console.log("E: ", data);
      return;
    }
    const geoData = await $fetch(`https://ipapi.co/${data.ip}/json/`);
    console.log("Geo: ", geoData);
    country.value = geoData.country_name || '未知國家';
    city.value = geoData.city || '未知城市';
    currencyCode.value = geoData.currency || '未知';
    countryPopulation.value = geoData.country_population || '未知';
    timezone.value = geoData.timezone || '未知時區';
  } catch (error) {
    console.error('Error fetching IP or country:', error);
    country.value = '錯誤';
    city.value = '錯誤';
    currencyCode.value = '錯誤';
    countryPopulation.value = '錯誤';
    timezone.value = '錯誤';
  }
});
</script>

<template>
  <div class="border-2 border-gray-300 m-4 rounded-lg">
    <h3 class="font-bold flex justify-center border-b">IP</h3>
    <div class="font-mono flex justify-center">{{ ip }}</div>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto">
    <div class="border-2 border-gray-300 rounded-lg p-1">
      <h3 class="font-bold flex justify-center border-b">國家</h3>
      <div class="font-mono flex justify-center">{{ country }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg p-1">
      <h3 class="font-bold flex justify-center border-b">城市</h3>
      <div class="font-mono flex justify-center">{{ city }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg p-1">
      <h3 class="font-bold flex justify-center border-b">貨幣代碼</h3>
      <div class="font-mono flex justify-center">{{ currencyCode }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg p-1">
      <h3 class="font-bold flex justify-center border-b">人口數</h3>
      <div class="font-mono flex justify-center">{{ countryPopulation }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg p-1">
      <h3 class="font-bold flex justify-center border-b">時區</h3>
      <div class="font-mono flex justify-center">{{ timezone }}</div>
    </div>
  </div>
</template>

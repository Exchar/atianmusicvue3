
<script setup lang="ts">
import {onMounted,ref} from "vue";
import {routes} from "@/router";

const keepAliveViews = ref<string[]>([]);
const routesInfos = routes;
onMounted(()=> {
  const filterViews = routesInfos.filter(i=>i?.meta?.keepAlive);
  keepAliveViews.value = filterViews.map(i=>String(i.name));
});
</script>
<template>
    <router-view #default="{Component}">
      <keep-alive :include="keepAliveViews">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
</template>

<style scoped>
</style>

<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 15:54:09
 * @LastEditTime: 2023-10-19 20:11:38
 * @LastEditors: Ian
-->
<template>
  <v-app>
    <AppBar></AppBar>
    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
  },
  data: () => ({}),
};
</script>

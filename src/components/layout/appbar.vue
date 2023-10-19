<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 17:29:19
 * @LastEditTime: 2023-10-19 20:03:43
 * @LastEditors: Ian
-->
<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      elevate-on-scroll
      flat
      left
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
          :no-gutters="!$vuetify.breakpoint.smAndUp"
          align="center"
          justify="space-between"
        >
          <v-col class="d-flex align-center justify-between">
            <v-toolbar-title
              class="font-weight-bold text-h5 primary--text"
              style="cursor: pointer"
              @click="$router.push('/')"
            >
              <v-icon color="primary" large>mdi-liquid-spot</v-icon>
              Christian
              <span class="accent--text">Blog</span>
            </v-toolbar-title>
            <v-col v-if="!$vuetify.breakpoint.mdAndUp" class="text-right">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            </v-col>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
            <button
              v-for="(item, i) in barItems"
              :key="i"
              :to="item.to"
              class="text-capitalize text-h6 font-weight-medium"
              exact
              exact-active-class="accent--text"
              text
            >
              {{ item.title }}
            </button>
            <v-icon color="primary" class="pl-2" style="margin-top: -4px"
              >mdi-magnify</v-icon
            >
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      right
    >
      <v-list color="primary" nav>
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          :href="item.href"
          :target="item.target"
          :to="item.to"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-icon color="success" class="pl-2" style="margin-top: -2px"
            >mdi-magnify</v-icon
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "Home",
        to: "/",
      },
    ],
  }),
};
</script>

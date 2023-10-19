<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 15:54:09
 * @LastEditTime: 2023-10-19 19:10:59
 * @LastEditors: Ian
-->
<template>
  <div>
    <h3 class="text-h5 font-weight-medium pb-4">News</h3>

    <hr style="height: 5px; background-color: #000000" />
    <v-row v-for="i in blogList.slice(0, 6)" :key="i.id" class="pt-5">
      <v-col cols="1" class="pl-8">
        <v-icon style="color: black">mdi-message-text</v-icon>
      </v-col>
      <v-col>
        <div>
          <a href="#">
            <h4 class="font-weight-bold primary--text">
              {{ i.title }}
            </h4>
          </a>
          <div>{{ i.summary }}</div>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SidebarNews",
  props: {
    blogList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

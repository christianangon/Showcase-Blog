<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 15:54:09
 * @LastEditTime: 2023-10-19 20:04:47
 * @LastEditors: Ian
-->
<template>
  <div class="pt-5">
    <v-row v-for="i in blogList" :key="i.id" class="pl-8">
      <v-icon
        style="display: flex; align-items: flex-start; color: #000000"
        size="28"
        class="mt-4"
        >mdi-message-text</v-icon
      >
      <v-col>
        <div>
          <a href="#">
            <h3 class="font-weight-bold primary--text">
              {{ i.title }}
            </h3>
          </a>
          <div>{{ i.summary }}</div>
          <div>{{ i.slug }}</div>
          <div>{{ i.createdAt }}</div>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "bottomNews",
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

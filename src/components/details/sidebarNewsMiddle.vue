<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 15:54:09
 * @LastEditTime: 2023-10-19 19:08:40
 * @LastEditors: Ian
-->
<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">News</h3>

      <hr style="height: 5px; background-color: #000000" />

      <div>
        <v-row v-for="i in blogList.slice(0, 5)" :key="i.id" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat>
              <v-img
                :src="i.image"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <h4 class="font-weight-light primary--text">
                {{ convertDate(i.publishedAt) }}
              </h4>
              <a href="#">
                <h4 class="font-weight-bold primary--text">
                  {{ i.title }}
                </h4>
              </a>

              <h4 class="font-weight-light primary--text">
                {{ i.subcategory }}
              </h4>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarNewsTop",
  props: {
    blogList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    convertDate(date) {
      const originalDate = new Date(date);
      const options = { year: "numeric", month: "long", day: "2-digit" };

      const formattedDate = originalDate.toLocaleDateString(undefined, options);
      return formattedDate;
    },
  },
};
</script>

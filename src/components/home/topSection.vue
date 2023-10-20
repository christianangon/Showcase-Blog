<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-20 12:00:42
 * @LastEditTime: 2023-10-20 12:46:42
 * @LastEditors: Ian
-->
<template>
  <div>
    <div class="pt-5">
      <v-row>
        <v-col
          v-for="i in blogList.slice(0, 6)"
          :key="i.id"
          cols="12"
          lg="4"
          md="6"
        >
          <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
            <div>
              <v-card
                :color="hover ? 'white' : 'transparent'"
                :elevation="hover ? 12 : 0"
                flat
                hover
              >
                <v-img
                  :aspect-ratio="16 / 9"
                  class="elevation-2"
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  height="200px"
                  :src="i.image"
                  style="border-radius: 16px; position: relative"
                >
                  <!-- Container for image and text -->
                  <div
                    style="
                      display: flex;
                      flex-direction: column-reverse;
                      justify-content: space-between;
                      height: 100%;
                    "
                  >
                    <div>
                      <v-btn
                        class="w-100"
                        style="
                          background-color: #ca2020;
                          color: #ffffff;
                          border-radius: 0 10px 0 0;
                        "
                        to="category"
                        >{{ i.category }}</v-btn
                      >
                    </div>
                  </div>
                </v-img>

                <v-card-text>
                  <div class="text-h5 font-weight-medium primary--text">
                    {{ i.title }}
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection",
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

<style lang="scss" scoped></style>

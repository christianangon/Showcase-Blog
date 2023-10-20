<template>
  <v-row>
    <v-col cols="12" lg="12" xl="8">
      <div>
        <div class="pt-16">
          <h3 class="text-h5 font-weight-bold pb-4">News</h3>
          <hr style="height: 5px; background-color: black" />
          <v-row class="py-5">
            <v-col v-for="i in blogList" :key="i.id" cols="12" lg="4" md="6">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="50"
                open-delay="50"
              >
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
                      style="border-radius: 16px"
                    >
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
        <div style="text-align: center">
          <button
            v-if="blogListMeta.pageSize < blogListMeta.total"
            @click="loadMore"
            class="mx-auto mt-4 text-h5 font-weight-medium"
            variant="plain"
            style="color: #ca2020"
          >
            Load more news
          </button>
          <div v-if="loading" class="text-center mt-4">
            <v-progress-circular
              indeterminate
              color="ca2020"
            ></v-progress-circular>
          </div>
        </div>
      </div>
    </v-col>

    <v-col>
      <div class="pt-16">
        <sidebarNewsTop :blogList="blogList" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MiddleSection",
  components: {
    sidebarNewsTop: () => import("@/components/details/sidebarNewsTop"),
  },
  props: {
    blogList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    blogListMeta: {
      type: Object,
      default: function () {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    loadMore() {
      this.$emit("loadmore");
    },
  },
};
</script>

<style lang="scss" scoped></style>

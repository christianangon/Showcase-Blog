<template>
  <div>
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
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h3 class="text-h5 font-weight-bold pb-4">News</h3>
            <h3 class="font-weight-light pb-4">
              Competition is fierce in the online slots industry, with many big
              developers vying for players’ attention. Learn more about the top
              software providers below.
            </h3>
            <hr style="height: 5px; background-color: black" />
            <v-row class="py-5">
              <v-col
                v-for="i in blogList.slice(0, 3)"
                :key="i.id"
                cols="12"
                lg="4"
                md="6"
              >
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
                      <div>
                        <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          :src="i.image"
                          style="
                            border-radius: 16px;
                            opacity: 0.5;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                        </v-img>
                        <div
                          class="font-weight-bold text-h5"
                          style="
                            position: absolute;
                            top: 33%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                          "
                        >
                          {{ i.category }}
                        </div>
                      </div>
                      <v-card-text>
                        <div>
                          <h3 class="font-weight-medium">
                            {{ i.summary }}
                            {{ i.publishedAt }}
                          </h3>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
                <v-btn
                  class="py-8 mt-5"
                  style="
                    background-color: #ca2020;
                    color: #ffffff;
                    border-radius: 5px;
                    width: 100%;
                  "
                  >Read More</v-btn
                >
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <sidebarNewsMiddle :blogList="blogList" />
        </div>
      </v-col>
    </v-row>
    <div class="pt-16">
      <h2 class="text-h4 font-weight-bold">News</h2>
      <hr style="height: 5px; background-color: #000000" />
      <bottomNews :blogList="blogList" />
    </div>
  </div>
</template>

<script>
import { getBlog } from "../api/blog/index";
export default {
  name: "Home",
  components: {
    sidebarNewsTop: () => import("@/components/details/sidebarNewsTop"),
    sidebarNewsMiddle: () => import("@/components/details/sidebarNewsMiddle"),
    bottomNews: () => import("@/components/details/bottomNews"),
  },
  data() {
    return {
      blogList: [],
      blogListMeta: {},
      itemsToShow: 20,
      loading: false, // Initialize the loading flag
    };
  },
  mounted() {
    this.handleGetBlog(10);
  },
  methods: {
    async handleGetBlog(count) {
      let params = {
        "populate[0]": "thumbnail",
        "pagination[pageSize]": count,
      };
      const res = await getBlog(params);
      if (res.data) {
        const customCategory = ["Games", "Crypto Currency", "Playtech"];
        const customSubCategory = ["Game Provider", "Crypto Provider"];
        this.blogListMeta = res.data.meta.pagination;
        this.blogList = res.data.data.map((item, index) => {
          const categoryIndex = index % customCategory.length;
          const subcategoryIndex = index % customSubCategory.length;
          return {
            ...item,
            image: item.thumbnail.url,
            category: customCategory[categoryIndex],
            subcategory: customCategory[subcategoryIndex],
          };
        });
      }
    },
    loadMore() {
      this.loading = true; // Show the loading effect

      // Simulate an API call (you can replace this with your actual API call)
      setTimeout(() => {
        // Increment the counter by 10
        this.itemsToShow += 10;

        // Use the updated counter in your API call
        this.handleGetBlog(this.itemsToShow);

        this.loading = false; // Hide the loading effect when done
      }, 1000); // Simulated API call duration (adjust as needed)
    },
  },
};
</script>

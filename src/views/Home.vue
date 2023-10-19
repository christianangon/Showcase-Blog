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
              <v-col
                v-for="i in visibleBlogList"
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
            <v-btn
              v-if="visibleBlogList.length < blogList.length"
              @click="loadMore"
              class="mx-auto mt-4"
              variant="plain"
              style="background-color: white"
              >Load more news</v-btn
            >
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
                      <v-img
                        :aspect-ratio="16 / 9"
                        class="elevation-2"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        :src="i.image"
                        style="border-radius: 16px"
                      >
                        <div class="d-flex justify-center align-center h-100">
                          <v-btn
                            class="w-100"
                            style="
                              background-color: #ca2020;
                              color: #ffffff;
                              border-radius: 0 10px 0 0;
                            "
                            to="category"
                          >
                            {{ i.category }}
                          </v-btn>
                        </div>
                      </v-img>

                      <v-card-text>
                        <div class="font-weight-light primary--text">
                          <h3>
                            {{ i.summary }}
                            {{ i.publishedAt }}
                          </h3>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
                <v-btn
                  class="py-8"
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
      itemsToShow: 12,
    };
  },
  mounted() {
    this.handleGetBlog();
  },
  computed: {
    visibleBlogList() {
      return this.blogList.slice(0, this.itemsToShow);
    },
  },
  methods: {
    async handleGetBlog() {
      const res = await getBlog();
      if (res.data) {
        const customImg = [
          "https://cdn.pixabay.com/photo/2014/11/13/15/24/minecraft-529462_1280.jpg",
          "https://cdn.pixabay.com/photo/2023/10/16/09/43/programing-8318813_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg",
          "https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_1280.jpg",
          "https://cdn.pixabay.com/photo/2020/05/02/16/22/iguanas-5122093_1280.jpg",
          "https://cdn.pixabay.com/photo/2014/03/10/16/03/tyrannosaurus-rex-284554_1280.jpg",
          "https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg",
        ];
        const customCategory = ["Games", "Crypto Currency"];
        const customSubCategory = ["Game Provider", "Crypto Provider"];
        this.blogList = res.data.data.map((item, index) => {
          const imageIndex = index % customImg.length;
          const categoryIndex = index % customCategory.length;
          const subcategoryIndex = index % customSubCategory.length;
          return {
            ...item,
            image: customImg[imageIndex],
            category: customCategory[categoryIndex],
            subcategory: customCategory[subcategoryIndex],
          };
        });
      }
    },
    loadMore() {
      this.itemsToShow += 12; // Increase the number of items to show
    },
  },
};
</script>

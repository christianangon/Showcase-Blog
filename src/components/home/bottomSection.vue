<template>
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
</template>

<script>
export default {
  name: "BottomSection",
  components: {
    sidebarNewsMiddle: () => import("@/components/details/sidebarNewsMiddle"),
  },
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

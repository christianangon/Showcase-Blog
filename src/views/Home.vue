<!--
 * @Description: 
 * @Author: Ian
 * @Date: 2023-10-19 17:29:19
 * @LastEditTime: 2023-10-20 12:57:37
 * @LastEditors: Ian
-->
<template>
  <div>
    <TopSection :blogList="blogList"></TopSection>
    <middleSection
      @loadmore="loadMore"
      :blogList="blogList"
      :blogListMeta="blogListMeta"
    />
    <BottomSection :blogList="blogList"></BottomSection>
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
    topSection: () => import("@/components/home/topSection"),
    middleSection: () => import("@/components/home/middleSection"),
    bottomSection: () => import("@/components/home/bottomSection"),
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

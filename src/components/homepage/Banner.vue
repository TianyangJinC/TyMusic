<template>
  <div>
    <el-carousel
      height="378.27px"
      direction="horizontal"
      :initial-index="0"
      :autoplay="true"
      :interval="3000"
      :loop="true"
      trigger="hover"
      arrow="hover"
      style="width: 1092px"
    >
      <el-carousel-item v-for="item in imglists" :key="item">
        <el-image
          :src="item"
          fit="fill"
          style="border-radius: 16px; width: 100%; height: 100%"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglists: [],
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/homepage/block/page")
      .then((res) => {
        for (let item of res.data.data.blocks[0].extInfo.banners) {
          this.imglists.push(item.pic);
        }
        // console.log(this.imglists);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
</style>
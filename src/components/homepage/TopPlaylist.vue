<template>
  <div>
    <el-carousel
      height="240px"
      direction="horizontal"
      :initial-index="0"
      :autoplay="true"
      :interval="3000"
      :loop="true"
      trigger="none"
      arrow="never"
      indicator-position="none"
      style="width: 240px; border-radius: 16px"
    >
      <el-carousel-item v-for="item in playlists" :key="item">
        <el-image :src="item.coverImgUrl" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlists: [],
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/top/playlist?limit=10")
      .then((res) => {
        console.log(res);
        for (let item of res.data.playlists) {
          this.playlists.push(item);
        }
        console.log(this.playlists);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
</style>
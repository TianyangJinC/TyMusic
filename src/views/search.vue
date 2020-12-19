<template>
  <div
    style="
      height: 100%;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(7, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
    "
  >
    <div style="grid-area: 1 / 1 / 8 / 2">
      <SideBar style="height: 100%" :index="index" />
    </div>
    <div style="grid-area: 1 / 2 / 2 / 8">
      <input type="text" class="searchInput" v-model="songKeyword" />
      <button class="searchButton" @click="searchSong(songKeyword)">
        <i class="el-icon-search"></i>
        搜索
      </button>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/homepage/SideBar";
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      index: "5",
      songKeyword: "",
    };
  },
  methods: {
    searchSong(songKeyword) {
      console.log(songKeyword);
      this.$axios
        .get("http://localhost:3000/cloudsearch", {
          params: {
            keywords: songKeyword,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.searchInput {
  width: 30%;
  height: 36px;
  border: none;
  border-radius: 16px 0 0 16px;
  margin-top: 16px;
  padding: 0 16px 0 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.searchInput:focus {
  outline: none;
}
.searchButton {
  height: 38px;
  border: none;
  background-color: #c20c0c;
  color: #fff;
  border-radius: 0 16px 16px 0;
  padding: 0 16px 0 16px;
  border-top: 1px solid #c20c0c;
  border-right: 1px solid #c20c0c;
  border-bottom: 1px solid #c20c0c;
  cursor: pointer;
}
.searchButton:focus {
  outline: none;
}
</style>
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
    <div style="grid-area: 1 / 2 / 4 / 6; margin-top: 16px">
      <Banner style="width: 1080px" />
    </div>
    <div style="grid-area: 1 / 6 / 4 / 8; margin-top: 16px; margin-right: 12px">
      <span style="font-size: 24px; font-weight: bold">每日推荐</span>
      <div style="background-color: #fff; border-radius: 16px; margin-top: 4px">
        <RecommendSongs @sendSong="play" @pauseMusic="pause" />
      </div>
    </div>

    <div style="grid-area: 7 / 2 / 8 / 8">
      <audio id="audio" :src="song.url" controls="controls"></audio>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/homepage/SideBar";
import Banner from "../components/homepage/Banner";
import RecommendSongs from "../components/homepage/RecommendSongs";
// import TopPlaylist from "../components/homepage/TopPlaylist";

export default {
  components: {
    SideBar,
    Banner,
    RecommendSongs,
    // TopPlaylist,
  },
  data() {
    return {
      index: "1-1",
      song: {},
      isPlaying: false,
    };
  },
  created() {
    this.$emit("index", this.index);
  },
  methods: {
    play(data) {
      let audio = document.querySelector("#audio");
      this.song = data;
      audio.load();
      setTimeout(() => {
        audio.play();
      }, 150);

      this.isPlaying = true;
    },
    pause() {
      let audio = document.querySelector("#audio");

      audio.pause();
      this.isPlaying = false;
    },
  },
};
</script>

<style>
audio {
  height: 32px;
  width: 1644px;
  position: absolute;
  bottom: 0;
}

audio:focus {
  outline: none;
}
</style>
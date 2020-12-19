<template>
  <div>
    <div class="container y">
      <div
        v-for="item in recommendSongs"
        :key="item.name"
        style="
          text-align: center;
          scroll-snap-align: center;
          flex: none;
          border-radius: 16px;
        "
        :style="{
          backgroundImage: 'url(' + item.pic + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
        }"
      >
        <div class="recommendSongsDiv">
          <div style="position: relative; top: 16px; z-index: 2; color: #fff">
            {{ item.name }}
          </div>
          <div
            style="
              position: relative;
              top: 32px;
              z-index: 2;
              font-size: 14px;
              color: #fff;
            "
          >
            {{ item.ar }} - {{ item.al }}
          </div>
          <img
            v-if="!isPlaying"
            src="../../assets/play.png"
            @click="sendSong(item)"
            style="cursor: pointer"
          />
          <img v-else src="../../assets/pause.png" @click="pauseMusic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendSongs: [],
      isPlaying: false,
    };
  },
  created() {
    console.log(this.$cookies.get("userCookie"));

    this.$axios
      .get("http://localhost:3000/recommend/songs", {
        params: {
          cookie: this.$cookies.get("userCookie"),
        },
      })
      .then((res) => {
        console.log(res);
        for (let item of res.data.data.dailySongs) {
          this.getSongUrl(item.id)
            .then((res) => {
              let url = res;

              let obj = {
                name: item.name,
                ar: item.ar[0].name,
                al: item.al.name,
                id: item.id,
                pic: item.al.picUrl,
                url: url,
              };

              this.recommendSongs.push(obj);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        console.log(this.recommendSongs);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    getSongUrl(id) {
      return new Promise((reslove, reject) => {
        this.$axios
          .get("http://localhost:3000/song/url", {
            params: {
              id: id,
            },
          })
          .then((res) => {
            reslove(res.data.data[0].url);
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    },
    sendSong(item) {
      this.$emit("sendSong", item);
      this.isPlaying = true;
    },
    pauseMusic() {
      this.$emit("pause");
      this.isPlaying = false;
    },
  },
};
</script>

<style>
.container {
  scroll-snap-type: y mandatory;
  display: flex;
  overflow: auto;
  flex: none;
  height: 343.27px;
  flex-flow: column nowrap;
}

.container::-webkit-scrollbar {
  width: 0;
}

.y.container > div {
  font-size: 24px;
  width: 100%;
  height: 343.27px;
}

.recommendSongsDiv {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  height: 88px;
  border-radius: 16px 16px 0 0;
  border: none;
}
</style>
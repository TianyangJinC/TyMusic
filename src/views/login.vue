<template>
  <div>
    <el-card
      shadow="always"
      :body-style="{ padding: '80px' }"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #f2f2f2;
        border-radius: 99px;
      "
    >
      <div style="display: flex; flex-direction: column">
        <input v-model="loginForm.phone" name="phone" />
        <input type="password" v-model="loginForm.password" name="password" />
        <button
          id="subBtn"
          :disabled="!loginForm.phone && !loginForm.password"
          @click="submit"
        >
          登录
        </button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    submit: function () {
      this.$axios
        .get("http://localhost:3000/login/cellphone", {
          params: {
            phone: this.loginForm.phone,
            password: this.loginForm.password,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.code !== 200 || !response) {
            this.$message.error(response.data.msg);
          } else {
            this.$message({
              message: "欢迎您，" + response.data.profile.nickname,
              type: "success",
            });
            this.$cookies.set("userCookie", response.data.cookie, 60 * 60 * 24);
            this.$router.push({
              path: "/recommend",
              query: {
                profile: response.data.profile,
              },
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message.error(error.response.data.msg);
        });
    },
  },
};
</script>

<style scoped>
input {
  height: 56px;
  width: 240px;
  border-radius: 99px;
  border: 1px solid #fff;
  background-color: #fff;
  text-align: center;
  font-size: 24px;
  color: #000;
  margin-bottom: 24px;
}
input:focus {
  outline: none;
}

#subBtn {
  height: 56px;
  background-color: #fff;
  border-radius: 99px;
  border: none;
  transition: 0.75s;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  color: #c20c0c;
}
#subBtn:hover {
  transition: 0.75s;
  background-color: #c20c0c;
  color: #fff;
  border: none;
}
#subBtn:focus {
  outline: 0;
}
</style>
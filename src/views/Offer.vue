<template>
  <h1>Offer 成功案例</h1>
  <div class="offer_main">
    <div
      class="card offer_item animate__animated animate__flipInX"
      v-for="item in offerData"
    >
      <div class="offer_logo"><img :src="item.logo" alt="" /></div>
      <div class="offer_text">
        <p><b>学生：</b>{{ item.username.charAt(0) }}同学</p>
        <p class="separator">|</p>
        <p><b>申上学校：</b>{{ item.name_cn }}</p>
        <p class="separator">|</p>
        <p><b>申请专业：</b>{{ item.major }}</p>
        <p class="separator">|</p>
        <p><b>本科均分：</b>{{ item.score }}</p>
      </div>
      <div class="offer_qs">{{ item.qs }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offerData: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      this.offerData = [
        {
          logo: "http://logo.compassedu.hk/288.png",
          name_cn: "悉尼大学",
          username: "黄诗颂",
          major: "软件工程",
          score: "90",
          qs: "38",
        },
        {
          logo: "http://logo.compassedu.hk/24.png",
          name_cn: "爱丁堡大学",
          username: "黄诗吟",
          major: "教育学",
          score: "90",
          qs: "20",
        },
        {
          logo: "http://logo.compassedu.hk/42.png",
          name_cn: "曼彻斯特大学",
          username: "曾中豪",
          major: "结构工程",
          score: "90",
          qs: "28",
        },
      ];
    },
  },
};
</script>

<style scoped>
.offer_main {
  display: flex;
  flex-wrap: wrap;
}
.offer_item {
  position: relative;
  width: calc(50% - 30px);
  margin: 15px;
  display: flex;
  padding: 20px;
}
.offer_text p {
  display: inline;
}
.offer_logo {
  height: 150px;
}
.offer_logo img {
  width: 145px;
  height: 145px;
}
.offer_text {
  margin-left: 20px;
}
.offer_qs {
  position: absolute;
  bottom: 10px;
  right: 20px;
  line-height: 50px;
  color: var(--ymts-card-border);
  font-style: italic;
  font-size: 50px;
  transition: 0.3s;
}
.offer_item:hover .offer_qs {
  color: var(--el-color-primary);
}
@media screen and (max-width: 768px) {
  .offer_item {
    position: relative;
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    padding: 10px;
  }
  .offer_logo img {
    width: 100px;
    height: 100px;
  }
  .offer_text {
    margin-left: 10px;
  }
  .offer_logo {
    height: 110px;
  }
  .offer_qs {
    font-size: 36px;
    bottom: 0px;
    right: 10px;
  }
}
</style>

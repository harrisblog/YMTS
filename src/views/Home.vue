<template>
  <!-- 导航栏 -->
  <Header />
  <div class="home">
    <!-- 首页轮播图 Swiper -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgs">
          <img :src="img" alt />
        </div>
      </div>
    </div>
    <!-- 分页器 Pagination -->
    <div class="swiper-pagination"></div>

    <!-- 大版彩色标题 -->
    <div class="colored_headline">
      <div class="aboutsiteTips">
        <h2>
          在这里，我们将提供
          <br />
          <div class="mask">
            <span data-show class="first-tips">免费咨询</span>
            <span>撰写文书</span>
            <span>免费申请</span>
            <span>留学规划</span>
          </div>
          服务
        </h2>
      </div>
      <img src="../assets/svg/home_bg.svg" alt style="width: 600px" />
    </div>

    <!-- 留学顾问 -->
    <!-- <el-divider border-style="dashed">
      <h1 id="nav1">留学顾问</h1>
    </el-divider> -->
    <!-- <div class="desc">“我们拥有强大的留学顾问团队，旨在帮助学生实现留学梦”</div>
    <div class="card_group">
      <div
        v-for="consultant in consultants"
        class="card card_consultant"
        @click="toConsultant(consultant.id)"
      >
        <div class="card_consultant_avatar">
          <img :src="consultant.avatar" alt />
        </div>
        <h2>{{ consultant.cname }}</h2>
        <p>{{ consultant.position }}</p>
      </div>

      <el-button
        type="primary"
        plain
        @click="this.$router.push('/front/consultant')"
        >点击了解更多</el-button
      >
    </div> -->

    <!-- 留学服务 -->
    <el-divider border-style="dashed">
      <h1 id="nav2">留学服务</h1>
    </el-divider>
    <!-- 侧边锚点导航 -->
    <el-affix :offset="200">
      <ul>
        <li v-for="item in nav_items" @click="anchor(item.id)">
          {{ item.title }}
        </li>
      </ul>
    </el-affix>
    <div class="desc">“多名资深留学顾问共同打造超值留学服务”</div>
    <div class="card_group">
      <div
        v-for="item in goods"
        class="card card_goods"
        @click="goToLink(item.url)"
      >
        <div class="card_goods_img">
          <img :src="item.imgsrc" />
        </div>
        <div class="card_goods_name" :title="item.gname">{{ item.gname }}</div>
      </div>
      <el-button
        type="primary"
        plain
        @click="
          goToLink(
            'https://shop216446134.taobao.com/?spm=a230r.7195193.1997079397.2.5a0c6a71yOckSw'
          )
        "
        >点击了解更多</el-button
      >
    </div>

    <!-- 成功案例 -->
    <el-divider border-style="dashed">
      <h1 id="nav3">成功案例</h1>
    </el-divider>
    <div class="desc">“优秀学子的背后往往有一个英曼天诗”</div>
    <div class="card_group">
      <div class="card card_offer" v-for="item in offerData">
        <div class="card_offer_logo">
          <img :src="item.logo" alt="" />
        </div>
        <div class="card_offer_school">{{ item.name_cn }}</div>
        <div class="card_offer_text">
          {{ item.username.charAt(0) }}同学 - {{ item.major }}
        </div>
      </div>
      <el-button type="primary" plain @click="this.$router.push('/front/offer')"
        >点击了解更多</el-button
      >
    </div>

    <!-- Why Us? -->
    <el-divider border-style="dashed">
      <h1 id="nav6">Why Us</h1>
    </el-divider>
    <div class="desc">“为什么选择英曼天诗？优势在哪里？”</div>
    <div class="card card_whyus">
      <div class="card_whyus_flex">
        <div class="card_whyus_item">
          <el-icon><Location /></el-icon>
          <div class="card_whyus_title">源自英国曼彻斯特</div>
          <div class="card_whyus_content">
            2021年成立于英国曼彻斯特，是目前国内为数不多的英国本土留学机构
          </div>
        </div>
        <div class="card_whyus_item">
          <el-icon><success-filled /></el-icon>
          <div class="card_whyus_title">多年名校经验</div>
          <div class="card_whyus_content">
            多年来专注高端名校申请，在世界前100大学申请上有丰富的案例经验
          </div>
        </div>
        <div class="card_whyus_item">
          <el-icon><edit-pen /></el-icon>
          <div class="card_whyus_title">留学生文创团队</div>
          <div class="card_whyus_content">
            配备留学生文书导师团队，名校背景的文书导师加持文书产品质量
          </div>
        </div>
        <div class="card_whyus_item">
          <el-icon><chat-dot-round /></el-icon>
          <div class="card_whyus_title">24h顾问服务</div>
          <div class="card_whyus_content">
            全天24小时留学顾问在线服务，为全国学生提供实时留学咨询和后续服务支持
          </div>
        </div>
        <div class="card_whyus_item">
          <el-icon><location-filled /></el-icon>
          <div class="card_whyus_title">全程跟踪服务</div>
          <div class="card_whyus_content">
            在申请服务各个阶段模块均配备了内部督导，全程持续完善服务体系
          </div>
        </div>
      </div>
      <el-button type="primary" @click="this.$router.push('/front/about')" plain
        >关于我们 About Us</el-button
      >
    </div>
  </div>
  <!-- 页脚 -->
  <Footer />
</template>

<script>
import "../static/css/colored_headline.css";
import Footer from "@/components/Footer.vue";
import Header from "../components/Header.vue";
import Swiper from "../static/js/swiper-bundle.min.js";
import {
  Location,
  ChatDotRound,
  EditPen,
  SuccessFilled,
  LocationFilled,
} from "@element-plus/icons-vue";
export default {
  components: {
    Header,
    Footer,
    Location,
    ChatDotRound,
    EditPen,
    SuccessFilled,
    LocationFilled,
  },
  data() {
    return {
      imgs: {},
      qsData: {},
      consultants: {},
      csData: {
        countries: [],
        school_level: "",
        score: 0,
      },
      nav_items: [
        {
          id: "nav2",
          title: "留学服务",
        },
        {
          id: "nav3",
          title: "成功案例",
        },
        {
          id: "nav6",
          title: "Why Us",
        },
      ],
      goods: [],
      offerData: [],
    };
  },
  methods: {
    // 首页轮播图数据
    showRotationMap() {
      this.imgs = [
        "https://jt.idp.cn/img/banner1119.jpg",
        "https://jt.idp.cn/img/spring_banner.jpg",
      ];
    },
    // 首页轮播图 Swiper
    showSwiper() {
      var swiper = new Swiper(".swiper", {
        autoplay: true,
        delay: 3000,
        width: window.innerWidth,
        direction: "vertical",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
    // QS前十条数据
    qs_ten() {
      // this.qsData
    },
    // 大版彩色标题
    showColoredHeadline() {
      setInterval(function () {
        const show = document.querySelector("span[data-show]");
        const next =
          show.nextElementSibling || document.querySelector(".first-tips");
        const up = document.querySelector("span[data-up]");
        if (up) {
          up.removeAttribute("data-up");
        }
        show.removeAttribute("data-show");
        show.setAttribute("data-up", "");
        next.setAttribute("data-show", "");
      }, 2000);
    },
    // 留学顾问数据
    showConsultant() {
      // this.consultants
    },
    // 跳转到留学顾问详情页面
    toConsultant(id) {
      this.$router.push("/front/consultant/detail?id=" + id);
    },
    // 侧边锚点导航跳转
    anchor(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
    },
    // 留学服务数据
    showGoods() {
      this.goods = [
        {
          gname: "出国留学文书撰写个人陈述订制PS推荐信修改润色英语写作硕博申请",
          imgsrc: require("../assets/goods/留学文书撰写.jpg"),
          url: "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-21900333989.2.2a21752bDdu2yV&id=655954544901",
        },
        {
          gname: "天诗留学 雅思大小作文批改 在英博士执笔 快速上7 首篇优惠",
          imgsrc: require("../assets/goods/雅思作文批改.jpg"),
          url: "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-21900333989.4.2a21752bDdu2yV&id=656712605373",
        },
        {
          gname: "英国美澳港 申请硕博士留学咨询 专业规划 方向选择",
          imgsrc: require("../assets/goods/留学咨询.jpg"),
          url: "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-21900333989.6.2a21752bDdu2yV&id=657504232806",
        },
        {
          gname: "天诗工作室硕博研究生出国留学申请 全套网申 英美澳新加坡香港",
          imgsrc: require("../assets/goods/留学申请.jpg"),
          url: "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-21900333989.8.2a21752bDdu2yV&id=657953465469",
        },
        {
          gname: "剑桥考试KET/PET英语培训口语一对一陪练辅导网课英国博士在读",
          imgsrc: require("../assets/goods/剑桥少儿.png"),
          url: "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-21900333989.10.2a21752bDdu2yV&id=673198174628",
        },
      ];
    },
    // Offer成功案例
    showOffer() {
      this.offerData = [
        {
          logo: "http://logo.compassedu.hk/288.png",
          name_cn: "悉尼大学",
          username: "黄诗颂",
          major: "软件工程",
        },
        {
          logo: "http://logo.compassedu.hk/24.png",
          name_cn: "爱丁堡大学",
          username: "黄诗吟",
          major: "教育学",
        },
        {
          logo: "http://logo.compassedu.hk/42.png",
          name_cn: "曼彻斯特大学",
          username: "曾中豪",
          major: "结构工程",
        },
      ];
    },
    // 跳转到外链
    goToLink(link) {
      window.open(link);
    },
  },
  created() {
    this.showRotationMap();
    this.qs_ten();
    this.showConsultant();
    this.showGoods();
    this.showOffer();
  },
  mounted() {
    this.showSwiper();
    this.showColoredHeadline();
  },
};
</script>

<style scoped>
/* 引入swipercss */
@import url("../static/css/swiper-bundle.min.css");
.home {
  margin: 61px auto 90px;
  min-height: calc(100vh - 520px);
}
.swiper {
  height: 510px;
  overflow: hidden;
}
.swiper img {
  width: 100vw;
  height: 510px;
  object-fit: cover;
}
.el-affix {
  padding-left: 80px;
  width: 0;
  height: 0;
}
.el-affix ul {
  background: white;
  width: 140px;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
  border: var(--ymts-border);
}
.el-affix li {
  list-style: none;
  cursor: pointer;
  text-align: center;
  padding: 6px 0;
  transition: 0.3s;
}
.el-affix li:not(:last-child) {
  border-bottom: var(--ymts-border);
}
.el-affix li:hover {
  background: var(--el-color-primary);
  color: white;
}
h1 {
  font-size: 40px;
}
.card_group {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 100px;
  width: 1330px;
}
.card_goods {
  width: calc(20% - 30px);
  height: 320px;
  margin: 15px;
  cursor: pointer;
}
.card_goods img {
  width: 236px;
  height: 236px;
  object-fit: cover;
  transition: 0.3s;
}
.card_goods:hover img {
  transform: scale(1.1);
}
.card_goods_img {
  width: 236px;
  height: 236px;
  overflow: hidden;
}
.card_goods_name {
  height: 82px;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card_offer {
  width: calc(20% - 30px);
  margin: 15px;
  text-align: center;
  padding: 20px 10px 10px 10px;
}
.card_offer img {
  width: 180px;
  height: 180px;
  object-fit: cover;
}
.card_offer_school {
  font-size: 20px;
  color: var(--el-color-primary);
}
.card > button,
.card_group > button {
  width: 100%;
  margin-top: 20px;
}
.card_whyus {
  width: 1280px;
  margin: 0 auto 100px;
  padding: 25px;
}
.card_whyus_flex {
  display: flex;
}
.card_whyus_item {
  width: calc(20% - 20px);
  margin: 15px;
  text-align: center;
}
.card_whyus_item .el-icon,
.card_whyus_item svg {
  width: 60px;
  height: 60px;
  color: var(--el-color-primary);
}
.card_whyus_title {
  color: var(--el-color-primary);
  font-size: 20px;
}
.card_whyus_content {
  color: var(--ymts-gray);
  font-size: 16px;
  margin-top: 10px;
}
.colored_headline {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
/* 移动端 */
@media screen and (max-width: 768px) {
  .swiper,
  .swiper img {
    height: 200px;
  }
  .aboutsiteTips + img {
    display: none;
  }
  .card_group {
    width: 100%;
  }
  .card_goods {
    height: 240px;
  }
  .card_goods:nth-child(odd) {
    width: calc(50% - 15px);
    margin: 0 5px 10px 10px;
  }
  .card_goods:nth-child(even) {
    width: calc(50% - 15px);
    margin: 0 10px 10px 5px;
  }
  .card_goods img,
  .card_goods_img {
    width: 172.5px;
    height: 172.5px;
  }
  .el-affix {
    display: none;
  }
  h1 {
    font-size: 32px;
  }
  .colored_headline {
    margin-bottom: 50px;
  }
  .card_goods_name {
    padding: 6px;
    height: 70px;
    font-size: 14px;
  }
  .card > button,
  .card_group > button {
    width: calc(100% - 20px);
    margin: 10px 10px 0 10px;
  }
  .card_offer {
    padding: 10px 8px 6px 8px;
    height: 240px;
  }
  .card_offer:nth-child(odd) {
    width: calc(50% - 15px);
    margin: 0 5px 10px 10px;
  }
  .card_offer:nth-child(even) {
    width: calc(50% - 15px);
    margin: 0 10px 10px 5px;
  }
  .card_offer img,
  .card_offer_logo {
    width: 156.5px;
    height: 156.5px;
  }
  .card_offer_school {
    font-size: 18px;
  }
  .card_whyus {
    width: 100%;
    padding: 10px;
    border-radius: 0;
    margin-bottom: 0;
  }
  .card_whyus_flex {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 10px;
  }
  .card_whyus_item {
    max-width: 140px;
    min-width: 140px;
    margin: 0 10px 0 0;
  }
  .card_whyus_item:last-child {
    margin: 0;
  }
  .card_whyus_item .el-icon,
  .card_whyus_item svg {
    width: 50px;
    height: 50px;
  }
  .card_whyus_title {
    font-size: 16px;
  }
  .card_whyus_content[data-v-fae5bece] {
    font-size: 14px;
    margin-top: 6px;
  }
}
</style>

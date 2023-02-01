<template>
  <footer>
    <div class="footer-groups">
      <div class="footer-group">
        <h3 align="center" class="footer-title">导航</h3>
        <div class="footer-links">
          <a
            class="footer-item"
            href="https://shop216446134.taobao.com/?spm=a230r.7195193.1997079397.2.5a0c6a71yOckSw"
            >淘宝网店</a
          >
          <a class="footer-item" href="/front/offer">成功案例</a>
        </div>
      </div>
      <div class="footer-group">
        <h3 align="center" class="footer-title">我们</h3>
        <div class="footer-links">
          <a class="footer-item" href="/front/about">关于我们</a>
          <a class="footer-item" href="mailto:hassanwong@qq.com">发送邮件</a>
        </div>
      </div>
      <div class="footer-group">
        <h3 align="center" class="footer-title">淘宝</h3>
        <el-image
          style="width: 150px; height: 150px"
          :src="require('../assets/img/taobao.png')"
          :preview-src-list="[require('../assets/img/taobao.png')]"
          fit="cover"
        />
      </div>
      <div class="footer-group">
        <h3 align="center" class="footer-title">微信</h3>
        <el-image
          style="width: 150px; height: 150px"
          :src="require('../assets/img/wechat.png')"
          :preview-src-list="[require('../assets/img/wechat.png')]"
          fit="cover"
        />
      </div>
    </div>
    <div id="footer-banner">
      <div class="footer-banner-links">
        <div class="footer-banner-left">
          <div id="footer-banner-tips"></div>
        </div>
        <div class="footer-banner-right">
          <p>Since 2021</p>
          <p class="separator">|</p>
          <p>萌ICP备20210809号</p>
          <p class="separator">|</p>
          <p>Designed and Developed by HarrisWong</p>
          <!-- <a class="footer-banner-link" href="https://blog.harriswong.top"
            >HarrisWong</a
          > -->
          <!-- <a
            class="footer-banner-link"
            href="https://icp.gov.moe/?keyword=20210809"
            >萌ICP备20210809号</a
          > -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Typed from "../static/js/typed.min.js";
export default {
  name: "Footer",
  methods: {
    typed_cursor() {
      var typed = new Typed("#footer-banner-tips", {
        strings: [
          "你离梦想，只差一个英曼天诗留学网",
          "You are only one step from your dream.",
        ],
        startDelay: 200,
        backDelay: 2e3,
        typeSpeed: 100,
        loop: !0,
        backSpeed: 20,
      });
    },
  },
  mounted() {
    this.typed_cursor();
  },
};
</script>

<style scoped>
footer {
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  border-top: var(--ymts-border);
  clear: both;
}
.footer-groups {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  margin: 1rem auto;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 0 1rem;
}
.footer-group {
  min-width: 120px;
}
.footer-title {
  color: var(--ymts-gray);
  font-size: 20px;
}
.footer-links {
  display: flex;
  flex-direction: column;
}
.footer-links a {
  color: var(--ymts-black);
  transition: 0.3s;
  margin: 0 auto;
}
.footer-links a:hover {
  color: var(--el-color-primary);
}
.footer-item {
  font-size: 18px;
  margin-right: auto;
}
#footer-banner {
  padding: 1rem;
  color: #fff;
  margin-top: 1rem;
  background: linear-gradient(270deg, #ff8840 0, rgb(236, 195, 61) 100%);
  display: flex;
  overflow: hidden;
}
#footer-banner .footer-banner-links {
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}
#footer-banner .footer-banner-left {
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
}
.footer-banner-right {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#footer-banner .footer-banner-link {
  margin: 0;
  color: white;
  font-size: 18px;
  white-space: nowrap;
  transition: 0.3s;
}
#footer-banner .footer-banner-link:hover {
  color: black;
}
#footer-banner p {
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  footer {
    height: 486px;
  }
  .separator {
    display: none;
  }
  #footer-banner {
    margin-top: 0;
  }
  #footer-banner p {
    margin: 0;
  }
  .footer-banner-right {
    justify-content: space-around;
  }
  #footer-banner-tips {
    font-size: 16px;
    margin-bottom: 10px;
  }
  #footer-banner .footer-banner-left {
    min-height: 42px;
  }
  .footer-groups {
    margin-top: 1rem;
  }
  .footer-title {
    font-size: 18px;
  }
  .footer-item {
    font-size: 16px;
  }
}
</style>

<template>
  <!-- 404页面（Rick&Morty） -->
  <div class="background-404">
    <div class="background-img">
      <div class="wrapper">
        <div class="img-wrapper">
          <span>44</span>
        </div>
        <p>页面丢失</p>
        <el-button type="primary" @click="$router.push('/')">HOME</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "404页面",
    };
  },
};
</script>

<style scoped>
* {
  font-family: Ubuntu, sans-serif;
}

.background-404 {
  margin: 0;
  padding: 0;
  background-color: #1e234d;
  height: 100vh;
}

html {
  height: 100%;
  overflow: hidden;
}

.wrapper {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  width: fit-content;
  text-align: center;
  z-index: 4;
}
.wrapper span {
  position: relative;
  color: #fff;
  font-weight: 900;
  font-size: 20.4em;
  display: block;
  overflow: hidden;
  width: fit-content;
  height: max-content;
  line-height: 666px;
}
.wrapper span:first-letter {
  letter-spacing: 12vmax;
}
.wrapper span:before {
  content: "";
  background-image: url("../assets/img/RickAndMorty.png");
  position: absolute;
  top: 70px;
  height: 80%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: rotateIn 0.5s ease-out;
}
.wrapper p {
  text-align: center;
  font-size: 50px;
  color: #fff;
  margin: 0 0 50px 0;
  line-height: 58px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes rotateIn {
  from {
    transform: rotate(0deg) scale(0.2);
    opacity: 0;
  }
  to {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}
</style>
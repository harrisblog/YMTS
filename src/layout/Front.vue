<template>
  <!-- 导航栏 -->
  <Header />
  <!-- 主体 -->
  <div class="content">
    <router-view />
  </div>
  <!-- 页脚 -->
  <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from "../components/Header.vue";
export default {
  components: { Header, Footer },
  name: "Front",
};
</script>

<style>
</style>
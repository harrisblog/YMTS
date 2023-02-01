<template>
  <el-row class="header">
    <div class="header_left" @click="$router.push('/')">
      <img
        src="../assets/logo.png"
        style="height: 45px; margin: auto 0 auto 10px"
        alt="公司图标"
      />
    </div>

    <div class="header_center"></div>

    <div class="header_right">
    </div>
  </el-row>
</template>

<script>
import {
  ArrowDown,
  Avatar,
  ShoppingCartFull,
  Back,
  SetUp,
  List,
} from "@element-plus/icons-vue";

export default {
  name: "Header",
  components: { ArrowDown, Avatar, ShoppingCartFull, Back, SetUp, List },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style></style>

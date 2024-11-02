<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <GlobalHeader :style="headerStyle" />
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <a href="https://github.com/TerkyTerky" target="_blank">
          By wulikunkun
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
import type { CSSProperties } from "vue";

const headerStyle: CSSProperties = {
  padding: "0px",
};

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  background: "linear-gradient(to right, #e66465, #9198e5)",
  // margin-bottom: "28pt",
  padding: "20px",
};

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#efefef",
  padding: "16px",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};
</script>

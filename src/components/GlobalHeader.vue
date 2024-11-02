<template>
  <a-row class="global-header">
    <a-col :span="20">
      <a-menu mode="horizontal" :selected-keys="selectKey" @click="doMenuClick">
        <a-menu-item>
          <img src="@/assets/gpt.svg" alt="Logo" />
          <span class="site-title">AI Application</span>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col>
      <a-avatar class="avatar" shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const doMenuClick = ({ key }: { key: string }) => {
  router.push({ path: key });
};

const selectKey = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectKey.value = [to.path];
});
</script>

<style scoped>
.global-header {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}

.site-title {
  font-size: 18px;
  margin-left: 16px;
}

.avatar {
  margin-left: auto;
}
</style>

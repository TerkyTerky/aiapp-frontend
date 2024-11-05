<template>
  <a-row class="global-header">
    <a-col :span="23">
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
    <a-col class="userLog" span="1" offset="0.4">
      <div v-if="loginUserStore.loginUser.id">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            {{ loginUserStore.loginUser.userName ?? "匿名用户" }}
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="">管理中心</a>
              </a-menu-item>
              <a-menu-item>
                <a href="">登出</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <div v-else>
        <a-button type="primary" href="/user/login">登录</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useLoginUserStore } from "@/store/userStore";
import { DownOutlined } from "@ant-design/icons-vue";

const loginUserStore = useLoginUserStore();
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
  background-color: white;
}

.site-title {
  font-size: 18px;
  margin-left: 16px;
}

.userLog {
  background-color: white;
}
</style>

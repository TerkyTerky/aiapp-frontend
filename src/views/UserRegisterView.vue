<template>
  <h2 style="margin-bottom: 16px">用户注册</h2>
  <a-form
    :model="formState"
    name="normal_register"
    class="register-form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="UserAccount"
      name="userAccount"
      :rules="[{ required: true, message: 'Please input your userAccount!' }]"
    >
      <a-input v-model:value="formState.userAccount">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="userPassword"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.userPassword">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item
      label="CheckPassword"
      name="checkPassword"
      :rules="[
        { required: true, message: 'Please input your password again!' },
      ]"
    >
      <a-input-password v-model:value="formState.checkPassword">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button
        :disabled="disabled"
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Register
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import API from "@/api";
import { useRouter } from "vue-router";
import { userRegisterUsingPost } from "@/api/userController";
import { message } from "ant-design-vue";

interface FormState {
  userAccount?: string;
  userPassword?: string;
  checkPassword?: string;
}

const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as API.UserRegisterRequest);

const router = useRouter();

const handleSubmit = async () => {
  const res = await userRegisterUsingPost(formState);
  if (res.data.code === 0) {
    message.success("注册成功");
    await router.push({ path: "/user/login", replace: true });
  } else {
    message.error("注册失败" + res.data.message);
  }
};

const disabled = computed(() => {
  return !(
    formState.userAccount &&
    formState.userPassword &&
    formState.checkPassword
  );
});
</script>

<style scoped></style>

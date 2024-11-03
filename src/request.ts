import axios from "axios";
import { message } from "ant-design-vue";

const myAxios = axios.create({
  baseURL: "http://localhost:8081/",
  timeout: 3000,
  withCredentials: true,
});

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    console.log(response);

    const { data } = response;

    if (data.code === 40100) {
      message.warning("未登录");
    }
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default myAxios;

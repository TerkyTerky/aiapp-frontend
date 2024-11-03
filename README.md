# aiapp-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Bug 记录

1 在切换不同视图的时候
```vue
<template v-if="route.path.startsWith('/user')">
  <router-view />
</template>
<template v-else>
  <BasicLayout />
</template>
```
这里上面不可以写UserLayout，具体原因需要后面再gpt一下完善

2 axios.withCredential = true 这会导致跨域问题，在后端需要在 controller 上 注解 CrossOrigin，同时这个注解需要注明接受请求的域，不可以是*，也就是不能所有都接受。
```java
@CrossOrigin(value = "http://localhost:8080", allowCredentials = "true")
```


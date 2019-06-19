# my-axios
- 内部封装了一个 `loading` 蒙层，可通过配置关闭蒙层
- 请求的接口来自 [easy-mock](https://easy-mock.com)

## 参数
参数名 | 是否必填 | 类型 | 默认值 | 描述
:----:|:------:|:----:|:-----:|---
url | 是 | String | - | 请求路径
params | 否 | Object | - | 参数，不区分 get/post 内部已做处理
options | 否 | Object | - | axios 支持的配置项
loading | 否 | Boolean | true | 是否启用 loading(需要自己封装)

## demo

```
get("aaa/bbb", { a: b }, { baseURL: "xxx", timeout: 2000 }, false)
post("aaa/bbb", { a: b }, { baseURL: "xxx", timeout: 2000 }, false)
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

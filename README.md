# my-axios
- 内部封装了一个 `loading` 蒙层，可通过配置关闭蒙层
- 请求的接口来自 [easy-mock](https://easy-mock.com)

## demo
```
/**
 * @description: 用法
 * @param {String} url 请求路径
 * @param {Object} params 参数  (直接传就行，内部已做处理)
 * @param {Object} options 配置项（可以覆盖默认值）
 * @param {Boolean} loading 是否启用 loading
 * @return: 
 */ 

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

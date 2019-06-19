import axios from 'axios'

/**
 * @description: 用法
 * @param {String} url 请求路径
 * @param {Object} params 参数  (直接传就行，内部已做处理)
 * @param {Object} options 配置项（可以覆盖默认值）
 * @param {Boolean} loading 是否启用 loading
 * @return: 
 */
// demo
// get(url, params, options, loading)
// get("aaa/bbb", { a: b }, { baseURL: "xxx", timeout: 2000 }, false)
// post("aaa/bbb", { a: b }, { baseURL: "xxx", timeout: 2000 }, false)


// 实例化默认设置
let axiosInstance = axios.create({
    timeout: 15000,
    baseURL: '',
    headers: {
        "content-type": "application/json;charset=utf-8"
    }
})

// 请求拦截(可以在这里添加每次请求都携带的参数)
axiosInstance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        return config
    },
    err => Promise.reject(err)
)

// 提取公共方法【3】
const common = (o, loading) => {
    if (loading === true) __LOADING__(true)
    return axiosInstance(o)
        // 状态码 2xx 此处为网络请求的状态码，后台返回的状态码在内层 res.data 中
        .then(res => {
            if (res.status === 200 && res.data.success === true) {
                return Promise.resolve(res)
            } else {
                // __MSG__(res.data.message || "请求失败")
                alert(res.data.message||"请求失败")
                return Promise.resolve(res)  //  注意这里是 resolve，如果是 reject ，则当请求进入这里后，由于 reject 需要 catch 捕获错误，而此处没有 catch ，则会进入到下面的 catch。现象就是【某次请求同时触发了 then 和 catch】
            }
        })
        //  状态码 !=2xx
        .catch(err => {
          alert("请求异常")
            // __MSG__("请求异常")
            return Promise.reject(err)
        }).finally(() => {
            if (loading === true) __LOADING__(false)
        })
}

// 核心处理 【2】
const core = method => {
    let o = null;
    if (method === "get") {
        return (url, params, options, loading = true) => {
            // 处理请求参数，get / post 方法区别在于 params 和 data 字段
            o = {
                url, method, params, ...options
            }
            // 传入请求相关参数 和 loading 开关
            return common(o, loading)
        }
    } else if (method === "post") {
        return (url, data, options, loading = true) => {
            o = {
                url, method, data: data || {}, ...options       //  这里灰常重要，axios 存在无法设置 content-type 的 bug，需要对 data 进行处理
            }
            return common(o, loading)
        }
    }
}
// 【1】
const get = core('get')
const post = core('post')

export { axiosInstance, get, post }

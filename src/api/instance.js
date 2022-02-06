//这是拦截器封装
import axios from 'axios'
/**
 * 生成基础axios对象，并对请求和响应做处理
 * 前后端约定接口返回解构规范
 * {
 *    code:0,
 *    data:"成功",
 *    message:""
 * }
 */
import axios from 'axios'
const service = axios.create({ 
    // 设置baseUr地址,这个地址会直接添加在请求的url上
    baseURL: process.env.ROPSTEN_URL,
    headers: {
       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    // 配置请求超时时间
    timeout: 5000, 
    // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
    withCredentials: true
});
// 请求拦截 在每次想后端发送请求时会触发这个拦截
service.interceptors.request.use(config => {
    // 自定义header，可添加项目token
    config.headers.token = 'token';
    return config;
});
// 返回拦截 每次请求返回值后会触发这个拦截 
//传入两个回调 第一个是成功接收的回调 第二个是接受失败的回调
service.interceptors.response.use((response)=>{
    // 获取接口返回结果
    const res = response.data;
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if(res.code === 0){
        return res;
    }else if(res.code === 10000){
        // 10000假设是未登录状态码 应该报出一个错误
        window.location.href = '/#/login';
        return res;
    }else{
        // 错误显示可在service中控制，因为某些场景我们不想要展示错误
        // Message.error(res.message);
        return res;
    }
},()=>{
    Message.error('网络请求异常，请稍后重试!');
});
export default service;
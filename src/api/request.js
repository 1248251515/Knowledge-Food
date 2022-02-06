//封装一个可以在大部分使用的请求函数 使用promise封装 其他的可以根据情况更改
//同时这里也可以控制组件加载状态和消息提示
import service from "./instance";
function request(url,params={},options=false,methon='get'){
  return new Promise((resolve,reject)=>{
    let data = {};
    if (methon === 'get') date = {params};
    if (methon === 'post') data = {data:params};
    service({url,method,...data}).then( res => {
      /**这个可以做一些其他的数据操作 */
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch( error => {
      console.log(error);
    })
  })
}

//封装get请求
function get(url,params,options) {
  return request(url,params,options,'get')
}

//封装post请求
function post(url,params,options) {
  return request(url,params,options,'post')
}

export default {
  get,
  post
}
//创建createStore对象
import { createStore,applyMiddleware } from "redux";
import countReducer from './reducer'
//引入redux-thunk 这个redux-thunk其实就是一个中间件将函数执行后返回 
//就需要在redux中引入applyMiddleware将thunk作为参数
import thunk from "redux-thunk";

/**
 * 通过Reducer创建Store对象
 */
const store = createStore(countReducer,applyMiddleware(thunk));
export default store
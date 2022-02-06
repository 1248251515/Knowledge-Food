/**
 * 
 * @param {上一次的状态，第一次执行时undefined} statr 
 * @param {动作对象里面有两个属性type，data} action 
 */
 let int_State = false
 function counterReducer(state = int_State,action){
   const {type,data} = action;
   switch(type) {
     case 'isLogin':
       return data + state
     case 'decrement':
       return state - data
     default:
       return state
   }
 }
 export default counterReducer
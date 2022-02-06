/**全局提示 */
import { message } from "antd";
let typeObj = {
  scs:message.success,
  err:message.error,
  warn:message.warning
}

function MessageSuccess(type,Msg,Delay=100,callback,className){
  if(!(typeObj[type])){
    console.error('类型不存在')
    return false
  }
  return (
    typeObj[type]({
      content: Msg,
      className: className,
    },Delay)
  )
};

export default MessageSuccess

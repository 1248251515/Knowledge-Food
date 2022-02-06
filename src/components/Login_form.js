/**登录表单组件 */
import { Form, Input, Button, Checkbox,message } from 'antd';
import UserIocn from './UserIocn'
import PassWordIcon from './passWordIcon';
import axios from 'axios';
import {withRouter,NavLink} from 'react-router-dom'
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Login_from = (props) => {
  let {history,setLogin} = props;
  //console.log('Login_from',props);
  //登录请求 
  const onFinish = (values) => {
    console.log(values);
    let {username,password} = values;
    let account = {account:username,password}

    axios.get('http://localhost:2000/Login',{params:JSON.stringify(account)}).then(resdata=>{
      let {regCode,regmas,data} = resdata.data;
      //let errobj = doce ? resultobj('登录成功',1,doce):resultobj('账号未注册',0,doce);
      if(regCode === 1){
        message.success(regmas,2,function() {
          history.push('/');
          localStorage.setItem("userID",JSON.stringify(data))
          setLogin()
        })
      }else{
        message.error(regmas,2)
      }
      console.log(data);
    })
  };
  //登录失败
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{remember: false}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    > 
      {/* 账号输入框 */}
      <Form.Item rules={[
        {required:true,message:'账号必须填写'},
        {min:8,message:'账号至少要是8-12位'},
        {max:12,message:'账号至少要是8-12位'},
        {pattern:/^[a-zA-Z0-9_.]+$/,message:'密码必须由a到z大小写_组成'}
        ]} 
        label="账号" 
        name="username" >
        <Input size="large" placeholder="请输入账号" prefix={<UserIocn />} />
      </Form.Item>
      {/* 密码输入框 */}
      <Form.Item rules={[
        {required:true,message:'密码必须填写'},
        {min:8,message:'密码至少要是8-12位'},
        {max:12,message:'密码至少要是8-12位'},
        {pattern:/^[a-zA-Z0-9_.]+$/,message:'密码必须由a到z大小写_组成'}
        ]} 
        label="密码" 
        name="password" >
        <Input.Password size="large" placeholder="请输入密码" prefix={<PassWordIcon />}/>
      </Form.Item>

      <Form.Item className='choose_box'  >
        <Form.Item className='check' valuePropName="checked" name="remember">
          <Checkbox>记住账号</Checkbox>
        </Form.Item>
        {/* 注册页面跳转 */}
        <NavLink className='register' to='/RegisterCom' >
          前往注册
        </NavLink>
      </Form.Item>
            
      <Form.Item >
        <Button className="Form_Btn" type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Login_from);
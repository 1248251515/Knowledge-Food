/**登录表单组件 */
import { Form, Input, Button,message, Select} from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import PrefixSelector from './PrefixSelector'
import {withRouter,NavLink} from "react-router-dom"
axios.defaults.headers.post['Content-Type'] = 'application/json';
const {Option} = Select;
const Registerform = (props) => {
  //验证码
  const [code,setCode] = useState('');
  const [isphont,setisphont] = useState(false);
  const {history} = props;
  const [form] = Form.useForm();
  console.log(props);
  //注册失败
  const onFinishFailed = (errorInfo) => {
    console.log('错误对象'+errorInfo);
  };
  /**表单布局 */
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 10,
      },
      sm: {
        span: 5,
      },
    }
  };
  /**国号下拉框*/
  const prefixSelector = (
    <Form.Item  rules={[{required:true,message:'请选择国号'}]}  name="gender" noStyle>
      <Select style={{ width: 90 }}  placeholder='请选择'>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  ); 

  /**验证码获取 四位随机数值合并的字符串代替*/ 
  const verifyCode = (e) => {
    let phoneNumber = form.getFieldValue("phoneNumber");
    axios.get('http://localhost:2000/isPhoneN',{params:phoneNumber}).then(resdata=>{
      let {regCode,regmas,data} = resdata.data;
      //手机号未注册的情况下生成随机数 并且设置验证码和可以注册的状态
      if(regCode === 0){
        message.success(regmas,2);
        let code = '';
        for (let inx = 0; inx < 4; inx++) {
          code += Math.floor(Math.random()*10).toString();
        }
        setCode({code});
        setisphont(true);
        alert(code);
      } else {
        message.error(regmas,2);
        setisphont(false);
      }
    })
    
  }
  /**验证表单 */
  const verifyFrom = (values)=> {
    let {verifyCode} = values;
    if(verifyCode === code.code){
      return true
    }
    return false
  }  
  //注册成功
  const onFinish = (values) => {
    console.log(code);
    if(verifyFrom(values) && isphont){
      let {username,password,phoneNumber,gender,account} = values;
      let userInfo = {username,password,phoneNumber,gender,account}
      axios.post('http://localhost:2000/register',{data:JSON.stringify(userInfo)}).then(resdata=>{
        let {regCode,regmas,data} = resdata.data;
        //注册成功需要将手机号验证状态重置还有验证码重置
        
        console.log(regCode);
        if(regCode === 0){
          setisphont(false);
          setCode({code:null});
          message.success(regmas,2,function() {
            history.push('/Login');
          })
        }else{
          message.error(regmas,2);
        }
        //if(regCode){
        //  history.push('/Login')
        //};
      })
    } else {
      message.error('验证码输入错误',2);
    }
  };
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{remember: false}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      {...formItemLayout}
    > 
    {/* 账号输入框 */}
      <Form.Item rules={[
        {required:true,message:'账号必须填写'},
        {min:8,message:'账号至少要是8-12位'},
        {max:12,message:'账号至少要是8-12位'},
        {pattern:/^[a-zA-Z0-9_.]+$/,message:'密码必须由a到z大小写_组成'}
        ]} 
        label="账号" 
        name="account" >
        <Input size="middle" placeholder="请输入账号"/>
      </Form.Item>
      {/* 用户名输入框 */}
      <Form.Item rules={[
        {required:true,message:'用户名必须填写'},
        {max:7,message:'用户名最多为7位'},
        ]} 
        label="用户名" 
        name="username" >
        <Input size="middle" placeholder="请输入用户名"/>
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
        <Input.Password size="middle" placeholder="请输入密码"/>
      </Form.Item>

      {/* 手机号输入框 */}
      <Form.Item rules={[
        {required:true,message:'手机号必须填写'},
        {min:11,message:'请输入正确的手机号'},
        {max:11,message:'请输入正确的手机号'},
        ]} 
        label="手机号" 
        name="phoneNumber" >
        {/** 国号开头 */}
        <Input addonBefore={prefixSelector} type="number" size="middle" placeholder="请输入手机号" />
      </Form.Item>

      {/* 验证码输入框*/}
      <Form.Item>
        <PrefixSelector style={{width:"100%",float:"right"}} onClick={verifyCode}/>
        <Form.Item rules={[
          {required:true,message:'验证码必须填写'},
          {max:4,message:'验证码最大为四位'},
          ]}
          label="验证码" 
          name="verifyCode"
          style={{margin:'0'}}>
          <Input style={{width:"100%",float:"left"}} type="number" size="middle" placeholder="请输入验证码"/>
        </Form.Item>
      </Form.Item>
      {/* 路由跳转 */}
      <Form.Item>
        <NavLink to="/" className="textleft">前往首页</NavLink>
        <NavLink to="/Login" className="textRight">前往登录</NavLink>
      </Form.Item>
      {/* 登录按钮 */}
      <Form.Item >
        <Button className="Form_Btn" type="primary" htmlType="submit">注册</Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Registerform);

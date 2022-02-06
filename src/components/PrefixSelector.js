/**国号码下拉选择框 这个要改为受控组件 由数据遍历的 之后返回给将选择值返回给父组件*/
import React from "react"; 
import {Button,Form} from 'antd'
const PrefixSelector = (props)=>{
  let {onClick} = props
  return (
    <>
      <Form.Item noStyle>
        <Button style={{width:"30%",float:"right",margin:"0"}} onClick={onClick} htmlType="button">获取验证码</Button>
      </Form.Item>
    </>
  )
}
export default PrefixSelector;

/**
 * 
 * <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 20,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>

    <Form.Item noStyle>
      <Button onClick={verifyCode} htmlType="button">获取验证码</Button>
    </Form.Item>
  );
 */
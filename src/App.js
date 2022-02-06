import Center from "./Center";
import React from "react";
import moment from 'moment';
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
moment.locale('zh-cn');

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin : false
    }
    this.setLogin = this.setLogin.bind(this)
  }
  componentWillMount(){
    this.setState({isLogin:localStorage.getItem('userID')?true:false})
  }
  setLogin(){
    this.setState((state)=>{
      return {
        isLogin:!state.isLogin
      }
    })
  }
  render(){
    let {isLogin} = this.state
    //console.log('登录状态',isLogin);
    return (
      <>
        <ConfigProvider locale={zhCN}>
          <Center isLogin={isLogin} setLogin={this.setLogin}/>
        </ConfigProvider>
      </>
    )
  }
}

export default App;
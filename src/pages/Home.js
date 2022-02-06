/**页面首页 */
import React from "react";
import SideNavigationMenu from "../components/homeMenu";
import UserOut from "../components/useroutLined";
import { Layout, } from 'antd';
import ContentCom from "../components/HotContent";
import CalendarToDo from "../components/Calenderdo";

const { Content, Sider,Footer } = Layout;

class Home extends React.Component{
  constructor(props){
    super(props);
    this.date = props.location.state ? props.location.state : {};
  }
  render(){
    let {isLogin} = this.props
    let userID = isLogin ? JSON.parse(localStorage.getItem('userID')) : {_id:null,userName:'未登录'}
    return (
    <Layout>
      <Sider width={230} className="site-layout-background">
        <UserOut userN={userID}/>
        {/**侧边导航栏 需要加入一个简化的用户显示*/}
        <SideNavigationMenu/>
      </Sider>
      <Layout style={{ padding: '0 8px 8px',backgroundColor:"white"}}>
        {/**页面主体 */}
        <Content
          className="site-layout-background"
          style={{
            paddingTop: 0,
            margin: 0,
            minHeight: 280,
          }}
        > 
          <ContentCom/>
        </Content>
      </Layout>
      <Sider width={260} className="site-layout-background">
        {/**侧边导航栏 需要加入一个简化的当前标签显示*/}
        <CalendarToDo/>
      </Sider>
    </Layout>
    )
  }
}
export default Home;


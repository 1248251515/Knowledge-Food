/**HOME页面导航栏组件 */
import React from 'react';
import { Menu } from 'antd';
import { NarBar,NarMap } from '../datas/data';
import Logo  from './Logo'
//由于这个不是路由组件 就需要引入withRouter将他转换为路由组件
import { withRouter } from 'react-router';
class HeadBer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : NarBar,
    }
    this.onclick = this.onclick.bind(this);
  }
  onclick(Item){
    let {history,isLogin,setLogin} = this.props;
    let { key } = Item;
    if(isLogin && NarMap.get(key)==='/Login'){
      localStorage.removeItem('userID')
      setLogin()
    }else{
      history.push(NarMap.get(key))
    }
  }
  render(){
    let date = this.state.data;
    let {isLogin} = this.props
    return (
      <>
        <Logo />
        <Menu 
          onClick={this.onclick} 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={[0]}
          >
          {date.map((name,indx)=>{
            if(isLogin && name==="个人中心"){
              console.log("依然是");
              return (
                <Menu.Item key={indx}>退出登录</Menu.Item>
              )
            }
            return (
              <Menu.Item key={indx}>{name}</Menu.Item>
            )
          })}
        </Menu>
      </>
    );
  }
}
export default withRouter(HeadBer)


//      <Route path="/About" component={About} />
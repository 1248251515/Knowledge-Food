import React, { Children } from "react";
import IconObj from "../Icon/Icon";
import { ClassifyData } from "../datas/data";
import {Menu} from 'antd';
const { SubMenu } = Menu;
//这个组件应该请求后台的用户数据 不应该写死的数据
class SideNavigationMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ItemKey : 0
    }
    this.chlid = this.chlid.bind(this);
    this.sbm = this.sbm.bind(this)
  }
  //将列表的key独立出来
  chlid(arr,bacl){
    if(arr.length >= 1) {
      return arr.map(element => {
        return (
          <Menu.Item key={bacl()} >{element.title}</Menu.Item>
        )
      });
    }
  }
  ItemKey(){
    let key = 0;
    return function() {
      key+=1
      return key
    }
  }
  sbm(Array){
    let tiet = this.ItemKey()
    return Array.map(element => {
      let {title,key,Icon,chlidren} = element
      return (
        <SubMenu key={key} icon={IconObj[Icon]()} title={title}>
          {this.chlid(chlidren,tiet)}
        </SubMenu>
      )
    });
  }
  render(){
    let title = this.sbm(ClassifyData)
    console.log(title)
    return (
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0, }}
      >
        {title}
      </Menu>
    )
  }
}
export default SideNavigationMenu
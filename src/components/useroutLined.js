import React from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../pageStyle/home.css'
class UserOut extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    let {userN} = this.props;
    let titlefh = "——————————";
    return(
      <>
        <div className="userlit">
          <Avatar size={59} icon={<UserOutlined/>}/>
          <div className="userN">{userN.userName}</div>
          {titlefh}
          <div className="gxtitle">
             总有人会回想起来的,而我们只需要等待
          </div>
          {titlefh}
        </div>
      </>
    )
  }
}
export default UserOut
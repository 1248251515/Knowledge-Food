//导航栏或者其他地方的 logo组件
import React from "react";
import logo from "../imgs/logo.jpg"
class Logo extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <>
        <div className='logo'>
          <img className="Logo" src={logo} />
          Knowledge Food
        </div>
      </>
    )
  }
}

export default Logo
import { Button } from 'antd';
import React from "react";
class Goout extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className="goOut">
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
export default Goout
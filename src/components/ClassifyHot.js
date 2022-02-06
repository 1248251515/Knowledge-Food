//热门内容模块
import React from "react";
import { Card, Avatar } from 'antd';
const { Meta } = Card;

class ClassifyHot extends React.Component{
  constructor(props){
    super(props)
    this.callback = this.callback.bind(this)
    this.Next = this.Next.bind(this)
  }
  callback(key){
    console.log(key);
  }
  Next(){
    /**
     * 会出现一个转换的特效 然后当前块更新内容
     */
    console.log('换一个');
  }
  render(){
    return(
      <div className="HotCont">
        <div className="HotTitle">
          <a className="title">热门系列</a>
          <div onClick={this.Next} className="HotBtn yes">
            随机换
          </div>
        </div>
        <div className="HotBlock">
            {Array(8).fill(null).map((index,value)=>{
              return (
                <span key={index+value} className="block">
                  <Card
                    style={{ width: 230 }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                  >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                  </Card>
                </span>
              )
            })}
        </div>
      </div>
    )
  }
}
export default ClassifyHot

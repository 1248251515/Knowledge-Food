/**首页热门页面 */
import React from "react";
import CarouselCom from './Carousel'
import { Layout } from 'antd';
import ClassifyHot from "./ClassifyHot"
const { Sider, Content,Footer } = Layout;
//热门组件要作为受控组件
class ContentCom extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
        <Layout>
          <div className="Carouse">
            {/**轮播图组件 */}
            <CarouselCom/>
            <ClassifyHot/>
            <ClassifyHot/>
            <ClassifyHot/>
          </div>
        </Layout>
      </>
    )
  }
}

export default ContentCom;
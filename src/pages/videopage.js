import React from "react";
import { Radio,Card } from 'antd';
import { deleteArrValue,arrPipei } from "../api/arrFn";
const { Meta } = Card;
class VideoPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      slanguagevalue:'all',
      categoryvalue:"all",
      specialarea:'all',
      videoData:[
        {
          title:'原型链的继承',
          imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          category:'text/chinese/knowledge',
          date:"2021/10/2",
          video:'视频连接 应该传递在视频主页中',
          Playvolume:1122,
          author:'橘色天空'
        },
        {
          title:'数组排序算法',
          imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          category:'text/chinese/knowledge',
          video:'视频连接 应该传递在视频主页中',
          date:"2014/2/5",
          Playvolume:1390,
          author:'js学习'
        },{
          title:'数组复制算法',
          imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          category:'video/english/knowledge',
          video:'视频连接 应该传递在视频主页中',
          date:"2012/7/24",
          Playvolume:130,
          author:'js学习'
        },{
          title:'黄赌毒的危害',
          imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          category:'video/japenese/popularscience/class/hot',
          video:'视频连接 应该传递在视频主页中',
          date:"2021/3/27",
          Playvolume:"1230万",
          author:'科普军'
        },{
          title:'维度空间是怎么样的',
          imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          category:'video/japenese/Life',
          video:'视频连接 应该传递在视频主页中',
          date:"2009/1/29",
          Playvolume:"1230万",
          author:'科普君'
        }
      ]
    }
    this.slanguage = this.slanguage.bind(this);
    this.category = this.category.bind(this);
    this.specialarea = this.specialarea.bind(this);
  }
  slanguage(e){
    console.log(e);
    this.setState({slanguagevalue:e.target.value});
  }
  category(e){
    this.setState({categoryvalue:e.target.value})
  }
  specialarea(e){
    this.setState({specialarea:e.target.value})
  }
  render(){
    let {slanguagevalue,categoryvalue,specialarea,videoData} = this.state;
    let carArr = [slanguagevalue,categoryvalue,specialarea];
    //为保证不变性原则 复制state中的videoData
    let newVDate = [].concat(videoData)
    let searchArr = deleteArrValue(carArr,'all')
    //数组算法 计算一个数组中是否存在另一个数组中的值
    if(searchArr.length >= 1){
      newVDate = deleteArrValue(newVDate.map((value,index)=>{
        let arr = value.category.split('/')
        //console.log(arr,carArr);
        if(arrPipei(arr,searchArr)){
          return value;
        }
        return 'all';
      }),'all');
    }
    
    //console.log(searchArr);
    return (
      <section className="HtmlMinWH Video-root-element">
        {/**
         * 视频分类 分类层级
         */}
        <div className="Video-Category ">
          <div className="video-Category-language resetborder">
           专区：
           <Radio.Group onChange={this.specialarea} value={specialarea}>
             <Radio className="Radioin" value={"all"}>全部</Radio>
             <Radio className="Radioin" value={"video"}>视频</Radio>
             <Radio className="Radioin" value={"text"}>文章</Radio>
           </Radio.Group>
          </div>
          <div className="video-Category-language resetborder">
            语言：
            <Radio.Group onChange={this.slanguage} value={slanguagevalue}>
              <Radio className="Radioin" value={"all"}>全部</Radio>
              <Radio className="Radioin" value={"chinese"}>中文</Radio>
              <Radio className="Radioin" value={"english"}>英文</Radio>
              <Radio className="Radioin" value={"japenese"}>日文</Radio>
              <Radio className="Radioin" value={"korean"}>韩文</Radio>
            </Radio.Group>
           </div>
           <div className="video-Category-category resetborder">
             类型：
           <Radio.Group onChange={this.category} value={categoryvalue}>
            <Radio className="Radioin" value={"all"}>全部</Radio>
             <Radio className="Radioin" value={"popularscience"}>科普</Radio>
             <Radio className="Radioin" value={"educate"}>教育</Radio>
             <Radio className="Radioin" value={"knowledge"}>知识</Radio>
             <Radio className="Radioin" value={"Life"}>生活</Radio>
             <Radio className="Radioin" value={"socialize"}>社交</Radio>
             <Radio className="Radioin" value={"entertainment"}>娱乐</Radio>
           </Radio.Group>
           </div>
        </div>
        {/**
         * 视频数据显示
         */}
        <div className="Video-center HtmlMinWH">
          <ul className="video-List">
            {newVDate.map((value,index)=>{
              return (
                <li className="video-Item" key={index+value.title}>
                    <Card
                      hoverable
                      style={{ width: 216 }}
                      cover={<img alt="example" src={value.imgUrl} />}
                    >
                      <Meta 
                        className="userM" 
                        title={value.title} 
                        description={
                          <div style={{display:"flex",flexDirection:'column',}}>
                            <div style={{flex:1,display:"flex",justifyContent:'space-between'}}>
                                <span >{value.author}</span>
                                <span >点击量:{value.Playvolume}</span>
                            </div>
                            <span style={{flex:1}}>{value.date}</span>
                          </div>
                        } />
                    </Card>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}
export default VideoPage;
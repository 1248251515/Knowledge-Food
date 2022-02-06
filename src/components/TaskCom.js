import React from "react";
import {Input} from 'antd'
import { Button } from "antd";
class TaskCom extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    //选中的时间 xzDate
    //任务对象 Todo
    //输入框回车事件 IptEnts决明子，干菊花，大青叶
    let {xzDate,Todo,IptEnts,taskok,taskDelete} = this.props
    return (
      <>
      <Input 
          placeholder="请添加任务(回车键添加任务)" 
          onPressEnter={IptEnts} 
          style={{marginTop:4,marginBottom:4}}
        />
        {Todo.map((value,index) => {
            if(value.Createdate === xzDate){
              return (
                <div key={index} className={value.isYes?"rwspan yes":"rwspan no"}>
                  <span className="Taskspan" >
                    {value.Task}
                  </span>
                  {/**
                   * 按钮布局需要在任务左侧占满
                   */}
                  <div className="YNBtn">
                      <Button type="primary" onClick={(event)=>taskok(event,index)} disabled={value.isYes} >{value.isYes ? "已完成" : "完成"}</Button>
                      <Button type="dashed" onClick={(event)=>taskDelete(event,index)} >删除</Button>
                  </div>
                </div>
              )
            }
          })}
          
      </>
    )
  }
}
export default TaskCom;
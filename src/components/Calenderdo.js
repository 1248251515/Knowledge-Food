/**页面首页的今日任务状态栏 */
import React from "react";
import TaskCom from "./TaskCom";
import MessageSuccess from "./notification";
import { Calendar,Button  } from 'antd';
/**
 * 我需要做到点击日期出现输入框并同时出现当天任务
 * 任务时以数组加对象储存的
 */
class CalendarToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Todo : [
        {
          Createdate:"2022 1 13",
          jzdate:"21:11",
          Task:'去公园走走',
          isYes:false,
          userID:null,
        },
        {
          Createdate:"2022 1 18",
          jzdate:"21:11",
          Task:'看完一部公益电影',
          isYes:false,
          userID:null,
        }
      ],
      xzDate:[new Date().getFullYear(),(new Date().getMonth() + 1),new Date().getDate()].join(' ')
    }
    this.side = this.side.bind(this);
    this.taskok = this.taskok.bind(this);
    this.IptEnts = this.IptEnts.bind(this);
    this.taskDelete = this.taskDelete.bind(this);
  }
  //完成任务
  taskok(event,index) {
      this.setState((state) => {
        let {Todo} = state;
        Todo[index].isYes = true;
        return {
          Todo: Todo
        }
      })
  }
  //删除任务
  taskDelete(event,index) {
    this.setState((state) => {
      let {Todo} = state;
      let newTodo = [];
      Todo.forEach((value,inx) => {
        if(inx !== index){
          newTodo.push(value)
        }
      })
      return {
        Todo : newTodo
      }
    })
    console.log('删除',event,index);
  }
  //切换时间任务
  side(event){
    let ad = [event.year(),(event.month()+1),event.date()].join(' ');
    this.setState({xzDate:ad})
  }
  //添加任务 需要在setState中生成对象
  IptEnts(event) {
    //输入框输入内容 需要判断
    let {target} = event;
    let {xzDate,Todo} = this.state;
    let taskStr = qkFn(Array.from(target.value))
    //输入框去空额
    function qkFn(arr) {
      let newArr = '';
      arr.forEach(element => {
        if(element !== " "){
          newArr += element;
        }
      });
      return newArr
    }
    if(taskStr.length){
      let TodoObj = {
        Createdate:xzDate,
        Task:taskStr,
        jzdate:'sdis',
        isYes:false,
        userID:null
      }
      this.setState({
        Todo:Todo.concat([TodoObj])
      })
      
    }else{
      MessageSuccess("err",'输入为空')
    }
  }
  render () {
    //时间数据 需要根据时间显示任务
    let date;
    date = [new Date().getFullYear(),(new Date().getMonth() + 1),new Date().getDate()].join(' ')
    let {xzDate,Todo} = this.state
    return (
      <>
        {/**
         * 当点击日历日期时触发 在日历下方出现输入框可以输入任务 确认后关闭
         * 学习目标功能
         *  可以选择指定日期添加日期任务
         *  任务列表布局需要不知道是多少所以外部不给宽高
         */}
        <Calendar onSelect={this.side} fullscreen={false} />
        <div className="exp" id="TaskList">
          <TaskCom taskDelete={this.taskDelete} Todo={Todo} taskok={this.taskok} IptEnts={this.IptEnts} xzDate={xzDate}/>
        </div>
      </>
    )
  }
}
export default CalendarToDo;


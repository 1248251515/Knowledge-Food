/**
 * 视图数据
 */
let NarBar = [ '首页','视频分类','讨论组','笔记','个人中心']
//单凭数组无法便于首页路由跳转 所以我们使用映射 来帮助首页路由开发 
/**
 * 分别以 路径名称 => 路由路径
 * 
 */
const NarMap = new Map([
  ['0','/'],
  ['1','/videopage'],
  ['2','/DiscussionGroup'],
  ['3','/'],
  ["4",'/Login'],
  ['5','/goOut']
])
//分类数据
const ClassifyData = [
  {
    title:'收藏',
    key:"collect",
    Icon:'computerIcon',
    chlidren:[]
  },
  {
    title:'收藏分类',
    key:"ItemClassify",
    Icon:'computerIcon',
    chlidren:[
      {
        title:'音乐',
        chlidren:[]
      },{
        title:'科技',
        chlidren:[]
      },{
        title:'新闻',
        chlidren:[]
      },{
        title:'热门',
        chlidren:[]
      }
    ]
  },
  {
    title:'消息',
    key:"massage",
    Icon:'massageIcon',
    chlidren:[
      {
        title:'私聊消息',
        chlidren:[]
      },{
        title:'公共消息',
        chlidren:[]
      }
    ]
  }
]
console.log(NarMap);
export {
  NarBar,
  NarMap,
  ClassifyData
}
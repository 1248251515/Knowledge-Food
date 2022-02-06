//数组删除指定元素
function deleteArrValue(arr,value) {
  let newArr = [];
  arr.forEach((element) => {
    if(element !== value){
      newArr.push(element)
    }
  });
  return newArr;
}
/**
 * 匹配两个数组中第一个数组是否完全包含第二个数组 
 *  两个数组 数组以第一个为准
 *  第一个数组可能会非常长 第二个数组会时刻变动
 *  我们不太可能循环全部第一个数组来对比，所以我们应该怎么做的？
 *  其实最简单的就是合并成一个数组后去重 然后根据索引判断是否完全包括
 *  例子:[1,2,3,4] , [1,2,7] = [1,1,2,2,3,4,7] = [1,2,3,4,7] 匹配失败 去重后与比原数组长度不一致说明匹配失败
 *  例子:[1,2,3,4], [1,2] = [1,1,2,2,3,4] = [1,2,3,4] 匹配成功 去重后与原数组长度相同说明匹配成功
 *  第一个数组必须完全包含第二个数组  
 *  但是第二个数组是会时刻变动的 
 *  只要第一个数组没有完全包含任意一个第二个数组的元素就应该为false
 * 
 *  计算执行效率 5 和 3 需要执行  15
 *  第二种 合并为8 需要执行 排序使用sort按照ASLLK码排序完成后 最多 9次
 *  1,12,12311,1,23
 */
function arrPipei(videoCat,userCat) {
  //最后的长度以videoCat为准
  let arr = videoCat.concat(userCat).sort();
  //数组去重
  /**
   * 目前三种方法 1.排序完成后去重 2.第二种方法暴力去重 3.第三种方法转为set(特性有去重)
   * 进阶方法 当数组非常大的情况下 需要使用 排序分组加二分查找 
   */
  let newArr = []
  //这种算法一定要排序
  arr.forEach((element,index)=>{
    if(element !== arr[index+1]){
      newArr.push(element);
    }
  })
  if(videoCat.length >= newArr.length){
    return true
  }
  return false
}
module.exports = {
  deleteArrValue,
  arrPipei
};

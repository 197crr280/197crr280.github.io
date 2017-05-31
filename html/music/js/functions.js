/*$函数
$(.list) 类名
$(#list) id名
$(div) 标签名
$(function(){})
获取--. # tag
添加--function
*/
'use strict';

// $('<div>') 创建 
//封装
 function $(selector,ranger=document){
   	let  type =typeof selector;
	if(type == 'string'){
    	let select = selector.trim();
    	let   sel = select.charAt(0);
    	if(sel == '.'){
   			//获取
   			return ranger.getElementsByClassName(select.substring(1));
        console.log(ranger);
   		}else if(sel == '#'){
   			return document.getElementById(select.substring(1));
   		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){//判断字符串是否是标签
   			return ranger.getElementsByTagName(select);
   		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
   		    return document.createElement(select.slice(1,-1));
        }	
    }else if(typeof  selector== 'function'){
    	//添加事件
     	/*window.onload=function(){
     		selector();  //运行
     	}*/
     	addEvent(window,'load',selector);

     }
 }

/*getChild()
1、获取制定元素的子元素节点
所有*/
function getChilds(obj){
  let childs=obj.childNodes;
  let arr=[];
  childs.forEach(function(value){
    if(value.nodeType==1){
      arr.push(value);
    }
  })
  return arr;
}


/*getChild()
1、获取制定元素的子元素节点
所有*/
function getChilds(obj){
  let childs=obj.childNodes;
  let arr=[];
  childs.forEach(function(value){
    if(value.nodeType==1){
      arr.push(value);
    }
  })
  return arr;
}

/*获取第一个元素节点firstChild
0 length-1
 */
function getFirst(obj,num=0){
    return getChilds(obj)[num];

}
function getLast(obj){
    return getChilds(obj)[getChilds(obj).length-1];

}

/*getNext
1、下一个兄弟节点a
2、判断，如果不是,a下一个兄弟节点b
3、如果不是，b下一个兄弟节点c*/
function getNext(obj){
   
  let a=obj.nextSibling;
    if(a===null){
   return false;
  }
  while(a.nodeType!=1){
   a=a.nextSibling;
      if(a===null){
      return false;
      }
   
  }
  return a;
}

function getPrev(obj){
   
  let a=obj.previousSibling;
    if(a===null){
   return false;
  }
  while(a.nodeType!=1){
   a=a.previousSibling;
      if(a===null){
      return false;
      }
   
  }
  return a;
}

//兼容性方法
  function getStyle(obj,attr){

    if(window.getComputedStyle){
      return getComputedStyle(obj,null)[attr]; 
      //var widths=getStyle(box,'width'); 字符串传入，访问属性需要[];
    }else{
      return obj.currentStyle[attr];
    }
  }
  //一个子元素插入到父元素
  Node.prototype.appendTo=function (parent) {
      parent.appendChild(this);
  }
  /*  addEvent
  * addevent(box,'click' ,move)
  * box.addEventListener('click',move,false)*/
  function addEvent(obj,type,fn) {
    obj.addEventListener(type,fn,false);
}

function mousewheel(obj,upFn,downFn){
  obj.addEventListener('mousewheel', fn,false);
  function fn(e){  
  let dir=e.wheelDelta;
  e.preventDefault();//屏蔽浏览器的默认行为
    if(dir==120 ||dir==150 ||dir==180 ){
      upFn.call(obj);
    }
     if(dir==-120 ||dir==-150 ||dir==-180 ){
      downFn.apply(obj);// //call,apply传参方式不同，apply是[1,2,2,4]
    }
  }
 
}

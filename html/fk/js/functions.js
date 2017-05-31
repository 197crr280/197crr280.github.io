/*$函数
$(.list) 类名
$(#list) id名
$(div) 标签名
$(function(){})
获取--. # tag
添加--function
*/
'use strict';


//封装
 function $(selector,ranger=document){
   	let  type =typeof selector;
	if(type == 'string'){
    	let select = selector.trim();
    	let   sel = select.charAt(0);
    	if(sel == '.'){
   			//获取
   			return ranger.getElementsByClassName(select.substring(1));
   		}else if(sel == '#'){
   			return document.getElementById(select.substring(1));
   		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){//判断字符串是否是标签
   			return ranger.getElementsByTagName(select);
   		}	
    }else if(type == 'function'){
    	//添加事件
     	window.onload=function(){
     		selector();  //运行
     	}

     }
 }


/*
* @Author: lenovo
* @Date:   2017-05-09 17:28:42
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-09 19:54:04
*/

$(function(){
	let text=$('textarea')[0];
	let span=$('span')[0];
	let limit=100;
	let button=$('button')[0];
	let comment=$('.comment')[0];
	text.onkeyup=function(){
	   let len=this.value.length;
	    span.innerText=limit-len;
	   if(len>=100){
	   this.value= this.value.slice(0,100);
	   }
	}
	button.onclick=function(){
		let ele=$('<li>'); 
		console.log(ele)
		text.value=text.value.trim();
		ele.innerText=text.value;
		if(ele.innerText.length==0){
			span.innerText=limit;
          return alert('评论内容不能为空,写点内容吧!');
		}
        comment.appendChild(ele);
        text.value='';
        span.innerText=limit;
 	}
 	text.onkeydown=function(e){
 		if(e.shiftKey && e.keyCode==13){
 		let ele=$('<li>'); 
		console.log(ele)
		text.value=text.value.trim();
		ele.innerText=text.value;
		if(ele.innerText.length==0){
			span.innerText=limit;
          return alert('评论内容不能为空,写点内容吧!');
		}
        comment.appendChild(ele);
        text.value='';	
 		}
 	}	
})
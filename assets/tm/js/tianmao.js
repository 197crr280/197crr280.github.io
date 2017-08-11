/*
* @Author: lenovo
* @Date:   2017-05-01 13:34:07
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-15 14:01:36
*/

'use strict';
//banner图
$(function(){
var banbottom=$('.banner-bottom')[0];
var bannerpic=$('.banner-pic');
var btpic=$('.btpic');
var bannerdian=$('.banner-dian');
var bannerdot=$('.banner-dot');
let index=0;
var tt;
tt=setInterval(move, 2000);
//移入停止动画
banbottom.onmouseenter=function(){
	clearInterval(tt);
}
banbottom.onmouseleave=function(){
	tt=setInterval(move, 2000);
}
//下面按钮点击
for(let i=0;i<bannerdot.length;i++){
		bannerdot[i].onclick=function(){
			for(let j=0;j<bannerdot.length;j++){
				btpic[j].style.display='none';
				bannerdot[j].className='banner-dot';
			}
			btpic[i].style.display='block';
				bannerdot[i].className='banner-dot banner-hot';

				index=i;
		}
	}
function move(){
	index++;
	if(index==bannerdot.length){
		index=0;
	}
	for(let i=0;i< bannerdot.length;i++){
      bannerdot[i].className='banner-dot ';
      btpic[i].style.display  ='none';
  }
    bannerdot[index].className='banner-dot banner-hot';
     btpic[index].style.display='block';
}
//顶部导航
  let dingbu=$('.dingbu')[0];
  let sidenav=document.querySelector('.side-nav');
  let xhdh=document.querySelector('.xiahuadaohang');
  let navli=document.querySelectorAll('.side-nav>li');
  let winheight=window.innerHeight;
  let sections=document.querySelectorAll('section');
  // console.log(sections)
  let secarr=[];
  let sliden_n=0;
  let flaglc=true;
  let tops;
 /* dingbu.onclick=function(){
  	tops=0;
  	console.log(tops);
   }*/

  //楼层点击
  for(let i=0;i<sections.length;i++){
  	secarr.push(sections[i].offsetTop-40);
  } 
  for(let i=0;i<navli.length;i++){
  	navli[i].onclick=function(){
  		flaglc=false;
  		for(let j=0;j<navli.length;j++){
  		 navli[j].classList.add('mml');
  		}
  		navli[i].classList.remove('mml');
  		
  		animate(document.body,{scrollTop:secarr[i]},function(){
  			flaglc=true;
  		});
  	}
  }
  let flagxh=true;
   let flagslide=true;
  window.onscroll=function(){
  	if(!flaglc){
  		return;
  	}
  	tops=document.body.scrollTop;
  	//全部为灰色
  
  	if(tops< 2000){
     for(let i=0;i<=secarr.length;i++){
     	 navli[i].classList.add('mml');
     	}

  	}

  	for(let i=0;i<secarr.length;i++){
  		if(tops+winheight >secarr[i]+150){
          // 图片按需加载
        let secimgs=$('img',sections[i]);
        // console.log(sections[i])
          // console.log(secimgs)
        for(let k=0;k<secimgs.length;k++){
        secimgs[k].src=secimgs[k].title;
        }


	  		for(let j=0;j<navli.length;j++){
	  		 navli[j].classList.add('mml');
	  		}
	  		navli[i].classList.remove('mml');
	  		}
        
      
  	}
    //侧边导航判断

    if(tops>=700){
    	if(flagslide){
       		animate(sidenav,{top:200,left:2});
       	flagslide=false;
  		}

  		
    }else if(tops < 700){
    	if(!flagslide){
      	flagslide=true;
       animate(sidenav,{top:400,left:-36});
        }
    }

    //顶部导航判断
  	if(tops>=900){
  		if(flagxh){
  			animate(xhdh,{top:0})
  			flagxh=false;
  		}

  	}else if(tops<=900){
      if(!flagxh){
      	flagxh=true;
      	animate(xhdh,{top:-50})

      }
  	}

  }
//侧边
 var navitem=$('.nav-item');
 var cxbox=$('.cx-box');

for(let i=0;i<navitem.length;i++){
	navitem[i].onmouseenter=function(){
		cxbox[i].style.display='block';
	}
	navitem[i].onmouseleave=function(){
		cxbox[i].style.display='none';
	}
}
//品牌街
   let pinpaileft=$('.pinpai-left')[0];
    let xiangzuo=$('.xiangzuo')[0];
   let xiangyou=$('.xiangyou')[0];
   let pinpaibox=$('.pinpai-box')[0];
   let pinpailis=$('li',pinpaibox);
   let pinpaitop=$('.pinpai-top')[0];
   let pinpaiimg=$('img',pinpaitop)[0]; 
   let ppimgs=document.querySelectorAll('.pinpai-box li>img');
   let spimg1=$('.sp-img1');
   let  ppwidth= 1/2*pinpaibox.offsetWidth;
   let pinptp,ppindex=0;
   pinptp=setInterval(ppve,2000);
   pinpaileft.onmouseenter=function(){
    clearInterval(pinptp);
   }
   pinpaileft.onmouseleave=function(){
     pinptp=setInterval(ppve,2000);
   }
   function ppve(){
     ppindex++;
     if(ppindex==spimg1.length){
      ppindex=0;
      pinpaibox.style.left='0';
     }
     if(ppindex==3){
      pinpaibox.style.left='-492px';
     }
   for(let i=0;i<pinpailis.length;i++){
      
      spimg1[i].className='sp-img1 hidden';
      
   }  
    pinpaiimg.src=ppimgs[ppindex].src;
   spimg1[ppindex].className='sp-img1 show';
   }
   xiangzuo.onclick=function(){
    animate(pinpaibox,{left:2},200);
   }
   xiangyou.onclick=function(){
 animate(pinpaibox,{left:-ppwidth},200);
 }
 //移入图片显示
  for(let i=0;i<pinpailis.length;i++){
  ppimgs[i].onmouseenter=function(){
      pinpaiimg.src=ppimgs[i].src;
      for(let j=0;j<pinpailis.length;j++){
         spimg1[j].className='sp-img1 hidden';
      }
     
      spimg1[i].className='sp-img1 show';
  }
  ppimgs[i].onmouseleave=function(){
      spimg1[i].className='sp-img1 ';
      ppindex=i;
  }

 }

 //品牌滚动
  let pinpailist=$('.pinpai-list')[0];
  let p1=$('.p1');
  let ppt,ppt1;
  ppt=setInterval(gd,2000);
  function gd(){
    animate(pinpailist,{top:-56},function(){
    clearInterval(ppt);
    ppt1=setInterval(gd1,1500);
    }) 
  }
  function gd1(){
      animate(pinpailist,{top:0},function(){
      clearInterval(ppt1);
      ppt=setInterval(gd,1500);
     });
  }
//美丽人生字幕滚动
let mlaside=$('.aside')[0];
let mlp=$('p',mlaside);
console.log(mlp);
let mheight=mlaside.offsetHeight;
console.log(mheight);
let mlt,mlnow=0,mlcurrent=0;
mlt=setInterval(mlgd,2000);
//初始化
 for(let i=0;i<mlp.length;i++){
  if(i==0){
    continue;
  }
  mlp[i].style.top=mheight+'px';
 }
function mlgd(){
  mlnow++;
  if(mlnow==mlp.length){
    mlnow=0;
  }
  mlp[mlnow].style.top=mheight+'px';
  animate(mlp[mlnow],{top:0});
  animate(mlp[mlcurrent],{top:-mheight});
  mlcurrent=mlnow;
  }
//潮店酷玩字幕滚动
let cdaside=$('.aside')[1];
let cdp=$('p',cdaside);
let cdheight=cdaside.offsetHeight;
// console.log(cdheight);
let cdt,cdnow=0,cdcurrent=0;
cdt=setInterval(cdgd,2000);
//初始化
 for(let i=0;i<cdp.length;i++){
  if(i==0){
    continue;
  }
  cdp[i].style.top=cdheight+'px';
 }
function cdgd(){
  cdnow++;
  if(cdnow==cdp.length){
    cdnow=0;
  }
  cdp[cdnow].style.top=cdheight+'px';
  animate(cdp[cdnow],{top:0});
  animate(cdp[cdcurrent],{top:-cdheight});
  cdcurrent=cdnow;
  }


//居家生活字幕滚动
let jjaside=$('.aside')[2];
let jjp=$('p',jjaside);
let jjheight=jjaside.offsetHeight;
// console.log(cdheight);
let jjt,jjnow=0,jjcurrent=0;
jjt=setInterval(jjgd,2000);
//初始化
 for(let i=0;i<jjp.length;i++){
  if(i==0){
    continue;
  }
  jjp[i].style.top=jjheight+'px';
 }
function jjgd(){
  jjnow++;
  if(jjnow==jjp.length){
    jjnow=0;
  }
  jjp[jjnow].style.top=jjheight+'px';
  animate(jjp[jjnow],{top:0});
  animate(jjp[jjcurrent],{top:-jjheight});
  jjcurrent=jjnow;
  }
//打造爱巢字幕滚动
let dzacaside=$('.aside')[3];
let dzacp=$('p',dzacaside);
let dzacheight=dzacaside.offsetHeight;
// console.log(cdheight);
let dzact,dzacnow=0,dzaccurrent=0;
dzact=setInterval(dzacgd,2000);
//初始化
 for(let i=0;i<dzacp.length;i++){
  if(i==0){
    continue;
  }
  dzacp[i].style.top=dzacheight+'px';
 }
function dzacgd(){
  dzacnow++;
  if(dzacnow==dzacp.length){
    dzacnow=0;
  }
  dzacp[dzacnow].style.top=dzacheight+'px';
  animate(dzacp[dzacnow],{top:0});
  animate(dzacp[dzaccurrent],{top:-dzacheight});
  dzaccurrent=dzacnow;
  }
  //户外出行
let hwaside=$('.aside')[4];
let hwp=$('p',hwaside);
let hwheight=hwaside.offsetHeight;
// console.log(cdheight);
let hwt,hwnow=0,hwcurrent=0;
hwt=setInterval(hwgd,2000);
//初始化
 for(let i=0;i<hwp.length;i++){
  if(i==0){
    continue;
  }
  hwp[i].style.top=hwheight+'px';
 }
function hwgd(){
  hwnow++;
  if(hwnow==hwp.length){
    hwnow=0;
  }
  hwp[hwnow].style.top=hwheight+'px';
  animate(hwp[hwnow],{top:0});
  animate(hwp[hwcurrent],{top:-hwheight});
  hwcurrent=hwnow;
  }
 //亲子时光
let qzaside=$('.aside')[5];
let qzp=$('p',qzaside);
let qzheight=qzaside.offsetHeight;
// console.log(cdheight);
let qzt,qznow=0,qzcurrent=0;
qzt=setInterval(qzgd,2000);
//初始化
 for(let i=0;i<qzp.length;i++){
  if(i==0){
    continue;
  }
  qzp[i].style.top=qzheight+'px';
 }
function qzgd(){
  qznow++;
  if(qznow==qzp.length){
    qznow=0;
  }
  qzp[qznow].style.top=qzheight+'px';
  animate(qzp[qznow],{top:0});
  animate(qzp[qzcurrent],{top:-qzheight});
  qzcurrent=qznow;
  }
 
})


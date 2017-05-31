 $(function(){

	// 购物车
	var shopblock=$('.shop-block');
	var topright1=$('.top-right1');
	var strongs=$('strong')
	topright1[0].onmouseenter=function(){
	shopblock[0].style.height='95px';
	
	}
	topright1[0].onmouseleave=function(){
  shopblock[0].style.height='0';
	

	}
	strongs[0].onmouseover=function(){
       this.style.color='#ff6700';
	}
	strongs[0].onmouseout=function(){
       strongs[0].style.color='#424242';
	}

	//下拉
	var logo1=$('.logo1')[0];
  var titleblock=$('.title-block');
	var navitem=$('li',logo1); 
  var navitem1=$('.nav-item1');
  var picjs=$('.pic-js');
   let n=0;
    logo1.onmouseenter=function(){
      titleblock[0].style.height='229px';
      picjs[0].style.borderTop='1px solid #E0E0E0' ; 
    }
    logo1.onmouseleave=function(){
      titleblock[0].style.height='0px';

    }
      for(let i=0;i<navitem.length;i++){
          navitem[i].onmouseenter=function(){
          picjs[n].className='pic-js hidden';
          picjs[i].className='pic-js show';
          n=i;
         }
      }
   for(let i=0;i<navitem1.length;i++){
      navitem1[i].onmouseenter=function(){
      titleblock[0].style.height='0';
      }
     navitem1[i].onmouseleave=function(){
     titleblock[0].style.height='229px';
     }
    }
	//输入框
  let sousuoblock=$('.sousuoblock')[0];
  let sousuo=$('.sousuo');
  let input=$('input');
  let  souright=$('. souright')[0];
  let inputfont=$('.inputfont')[0];
  input[0].onclick=function(){
    this.style.borderColor='#ff6700';
    souright.style.borderColor='#ff6700';
    sousuoblock.style.display='block';
    inputfont.style.display='none';
  }
   //banner图
   var banner=$('.banner')[0];
   var banleft=$('.ban-left',banner);
   var banright=$('.ban-right',banner);
   var btns=$('.banner-dot')[0];//点外面
   let lis=document.querySelectorAll('.banner-dot li');
   let imgBox=$('.bpic')[0]; //图片外面
   let imgs=$('li',imgBox);
   let current=0,next=0;
   let imgwidths=imgBox.offsetWidth;
   let t;
   let flag=true;
   t=setInterval(move, 2000);
   //初始化
    for(let i=0;i<imgs.length;i++){
      if(i==0){
      continue;
    }
    imgs[i].style.left=imgwidths+'px';
  }
   //移入动画停止
   banner.onmouseenter=function(){
    clearInterval(t);
   }
   banner.onmouseleave=function(){
    t=setInterval(move,2000);
   }
   //左右按钮


   banleft[0].onclick=function(){
    if(flag){
      flag=false;
      moveDown();
    }
    
   }
    banright[0].onclick=function(){
      if(!flag){
        return;
      }
      flag=false;
      move();
   }
   //下面按钮
  lis.forEach(function(value,index,obj){
    // next=index
    value.onclick=function(){
      lis[current].className='';
      lis[index].className='hot-dot';
      if(index==current){
        return;
      }
       if(index>current){ //右=>左
        imgs[index].style.left=imgwidths+'px';
        animate(imgs[index],{left:0});
        animate(imgs[current],{left:-imgwidths});
         }else if(index<current){
           imgs[index].style.left=-imgwidths+'px';
        animate(imgs[index],{left:0});
        animate(imgs[current],{left:imgwidths});
         }
        current=index;
    
     
    }
  })

   
   //自动轮换
   function move(){
	   next++;
     if(next==imgs.length){
      next=0;
     }

     //下面按钮自动切换
     lis[next].className='hot-dot';
     lis[current].className='';

   imgs[next].style.left=imgwidths+'px';
   animate(imgs[next],{left:0},function(){
    flag=true;
   });
   animate(imgs[current],{left:-imgwidths});
    current=next;
    
	}
  function moveDown(){
     next--;
     if(next<0){
      next=imgs.length-1;
     }

     //下面按钮自动切换
     lis[current].className='';
     lis[next].className='hot-dot';
     
     
   imgs[next].style.left=imgwidths+'px';
   animate(imgs[next],{left:0},function(){
    flag=true;});
   animate(imgs[current],{left:-imgwidths});
    current=next;
    
  }

  

  //banner左边
  var sides=$('.side');
  var selectblock=$('.select-block');
  var texts=$('.text');
  var ems=$('em');

  for(let i=0;i<sides.length;i++){
  	texts[i].onmouseenter=function(){
  		this.style.color='#ff6700';
  		
  	}
  	texts[i].onmouseleave=function(){
  		this.style.color='#333';
  		
  	}
  	
  	sides[i].onmouseenter=function(){
  		this.style.background='#FF6700';
    	selectblock[i].className='select-block show';

  	}
  	sides[i].onmouseleave=function(){
  		this.style.background='rgba(0, 0, 0,0.0)';
  		selectblock[i].className='select-block hidden';
  	}
    for(let i=0;i<ems.length;i++){
      ems[i].onmouseenter=function(){
      this.style.color='white';
      this.style.background='#ff6700'; 
    }
    ems[i].onmouseleave=function(){
      this.style.color='#ff6700';
      this.style.background='#fff';
    }
    }
    
  }
  //banner图下面
  var bott1=$('.bott1');
  var t1=$('.t1');
  var aS=$('.aa');
  for(let i=0;i<aS.length;i++){
   t1[i].onmouseenter=function(){
   aS[i].style.color='white';
    }
  }
  	for(let i=0;i<aS.length;i++){
   t1[i].onmouseleave=function(){
   aS[i].style.color='#CDCAC8';
  	 }
  }
  //小米明星单品
 let xmmx=$('.xmmingxing-box')[0];
 let box=$('.box')[0];
 let widths=box.offsetWidth;
 let gundong=$('.gundong');
  let ckmore=$('.ckmore')[0];
  let icon=document.querySelectorAll('.ckmore .iconfont');
    
 let current1=0,next1=0,flag11=true;
 let dpt;
//初始化
 for(let i=0;i<gundong.length;i++){
   if(i==0){
    continue;
   }
    gundong[i].style.left=widths+'px';
  }
  
  dpt=setInterval(qiehuan,4000);
  
  function qiehuan(){
    if(current1==0){
      moveleft();
    }else if(current1==1){
     moveright(); 
    }
  }
   
   
  
   //移入停止 移除
  xmmx.onmouseenter=function(){
    clearInterval(dpt);
  }
  xmmx.onmouseleave=function(){
    dpt=setInterval(qiehuan,4000);
  }

 icon.forEach(function(value,index,obj){
   value.onclick=function(){
   
   icon[index].classList.remove('iconleftl');
  icon[current1].classList.add('iconleftl');
    if(index==current1){
            return;
        }
    if(index>current1){
      gundong[index].style.left=widths+'px';
          animate(gundong[current1],{left:-widths});
          animate(gundong[index],{left:0});
          }else if(index<current1){
            //左->右
          gundong[index].style.left=-widths+'px';
          animate(gundong[current1],{left:widths});
          animate(gundong[index],{left:0});
          }
       current1=index;
      }
 })
    
  function moveleft(){
  next1++;
    if(next1==gundong.length){
      next1=0;
    }
  //按钮自动切换
  icon[next1].classList.remove('iconleftl');
  icon[current1].classList.add('iconleftl');
  gundong[next1].style.left=widths+'px';
  animate(gundong[current1],{left:-widths});
  animate(gundong[next1],{left:0},function(){
   flag11=true;
 });
  current1=next1;
 }
function moveright(){
  next1--;
    if(next1<0){
      next1=gundong.length-1;
    }
  //按钮自动切换
  icon[next1].classList.remove('iconleftl');
  icon[current1].classList.add('iconleftl');
  gundong[next1].style.left=-widths+'px';
  animate(gundong[current1],{left:+widths});
  animate(gundong[next1],{left:0},function(){
   flag11=true;

 });
  current1=next1;
 }


//视频
  let start=$('.start');
  let videobox=$('.video-box');
  for(let i=0;i<videobox.length;i++){
  	start[i].onmouseenter=function(){
  		start[i].style.background='#FF6700';
  		start[i].style.borderColor='#FF6700';
  	}
    start[i].onmouseleave=function(){
  		start[i].style.background='rgba(0,0,0,0.3)';
  		start[i].style.borderColor='white';
  	}
}
//内容
// let dian=$('.dian');
// let smdot=$('.smdot');
// for(let i=0;i<smdot.length;i++){

// 	smdot[i].onmouseover=function(){
// 		this.style.backgroundColor='#FF6700';
// 	}
// 	smdot[i].onmouseout=function(){
// 		this.style.backgroundColor='#B0B0B0';
// 	}
// }

//为你推荐
 let  tjbox=$('.tj-box')[0];
 let foryou=$('.foryou');
 let tjwidths=tjbox.offsetWidth;
 let moree=$('.moree')[0];
 let icon11=document.querySelectorAll('.moree .iconfont');
 let iconiconr=document.querySelector('.moree .icon-icon2');
  let iconiconl=document.querySelector('.moree .icon-icon1 ');
 let current2=0,next2=0,flag12=true;
for(let i=0;i<foryou.length;i++){
   if(i==0){
    continue;
   }
    foryou[i].style.left=tjwidths+'px';
  }
 iconiconl.onclick=function(){

   if(flag12==true){
    flag12=false;
   movelr();
  }
   
  
 
 }
 iconiconr.onclick=function(){
  if(flag12==true){
    flag12=false;
    moverl();
  }
  
 }
 function moverl(){
    next2++;
    if(next2==foryou.length){
      next2=0;
    }
    //下面按钮自动
    // icon11[next2].classList.add('iconleft2');
    // icon11[current2].classList.remove('iconleft2');
        //图片轮换
    foryou[next2].style.left=tjwidths+'px';
    animate(foryou[current2],{left:-tjwidths});
    animate(foryou[next2],{left:0},function(){
      flag12=true;});
    current2=next2;
  }

  function movelr(){
    next2--;
    if(next2<0){
      next2=foryou.length-1;
    }
    // icon11[next2].classList.remove('iconleft2');
    // icon11[current2].classList.add('iconleft2');


    foryou[next2].style.left=-tjwidths+'px';
    animate(foryou[next2],{left:0},function(){
      flag12=true;
    });
    animate(foryou[current2],{left:tjwidths});
    current2=next2;
  }


// 中间三块 
// 搭配
let dpselect=$('.dpselect')[0];
  let fl=$('.fl',dpselect)[0];
// console.log(fl);
let phot=$('p',fl);
// console.log(phot);
let znblock=$('.znblock', dpselect);
// console.log(znblock);
let ndp=0;
for(let i=0;i<phot.length;i++){
    phot[i].onmouseenter=function(){
      phot[ndp].classList.remove('hot');
      phot[i].classList.add('hot');
      ndp=i; 
      for(let j=0;j<znblock.length;j++){
        znblock[j].style.display='none';
    }
      znblock[i].style.display='block';
   }

   }
// 配件
 let peijianselect=$('.peijianselect')[0];
 let fl1=$('.fl', peijianselect)[0];
// console.log(fl);
let phot1=$('p',fl1);
// console.log(phot);
let znblock1=$('.znblock', peijianselect);
// console.log(znblock);
let ndp1=0;
for(let i=0;i<phot1.length;i++){
    phot1[i].onmouseenter=function(){
      phot1[ndp1].classList.remove('hot');
      phot1[i].classList.add('hot');
      ndp1=i; 
      for(let j=0;j<znblock1.length;j++){
        znblock1[j].style.display='none';
    }
      znblock1[i].style.display='block';
   }

   }

//生活周边
 let  zhoubianselect=$('.zhoubianselect')[0];
 let fl2=$('.fl', zhoubianselect)[0];
// console.log(fl);
let phot2=$('p',fl2);
// console.log(phot);
let znblock2=$('.znblock',zhoubianselect);
// console.log(znblock);
let ndp2=0;
for(let i=0;i<phot2.length;i++){
    phot2[i].onmouseenter=function(){
      phot2[ndp2].classList.remove('hot');
      phot2[i].classList.add('hot');
      ndp2=i; 
      for(let j=0;j<znblock2.length;j++){
        znblock2[j].style.display='none';
    }
      znblock2[i].style.display='block';
   }

   }

   //内容
   let contentitem1=$('.content-item1')[0];
   let moveselect=$('.move-select',contentitem1)[0];
   let nrlis=$('li',moveselect)
   let bnr= $('.btn')[0];
   let btnnl=$('.kj-left',bnr);
   let btnnr=$('.kj-right',bnr);
   let nrdot=$('.nr-dot')[0];
   let circle=$('.circle')[0];
   let lisn=document.querySelectorAll('.content-item1 .circle li');
   let flagn=true, nrr1=0;
   let widthnr=parseInt(getStyle(nrlis[0],'width'));;
  btnnl[0].onclick=function(){
     if(!flagn){
          return;
        }
        flagn=false;
        movenr();
      }
  btnnr[0].onclick=function(){
     if(!flagn){
          return;
        }
        flagn=false;
        movednr();
  }
  //下面按钮
  for(let i=0;i<lisn.length;i++){
     lisn[i].onclick=function(){
      if(i==nrr1){
        return;
      }
      if(nrr1>i){
        animate(moveselect,{left:-widthnr},function(){
      let first=getFirst(moveselect);
      moveselect.appendChild(first);
      moveselect.style.left=0;
      flagn=true;
    }) 
      }
      if(nrr1<i){
        let last=getLast(moveselect);
      let first=getFirst(moveselect);
      moveselect.insertBefore(last,first);
      moveselect.style.left=-widthnr+'px';
      animate(moveselect,{left:0},function(){
        flagn=true;
      })
      }
      for(let j=0;j<lisn.length;j++){
        lisn[j].className='';
      }
      lisn[i].className='nr-hot';
      nrr1=i; 
      }
   
  }
  // 下面按钮结束
  function movenr(){
    nrr1--;
      if(nrr1<0){
        nrr1=lisn.length-1;
      }
      for(let i=0;i<lisn.length;i++){
      lisn[i].classList.remove('nr-hot');
      } 
     lisn[nrr1].classList.add('nr-hot');
    animate(moveselect,{left:-widthnr},function(){
      let first=getFirst(moveselect);
      moveselect.appendChild(first);
      moveselect.style.left=0;
      flagn=true;
    })

}
    function  movednr(){
     nrr1++;
      if(nrr1==lisn.length){
        nrr1=0;
      }
      for(let i=0;i<lisn.length;i++){
      lisn[i].classList.remove('nr-hot');
      } 
     lisn[nrr1].classList.add('nr-hot');
      let last=getLast(moveselect);
      let first=getFirst(moveselect);
      moveselect.insertBefore(last,first);
      moveselect.style.left=-widthnr+'px';
      animate(moveselect,{left:0},function(){
        flagn=true;
      })
    }

    //neirong2
   let contentitem2=$('.content-item2')[0];
   let moveselect2=$('.move-select',contentitem2)[0];
   let nrlis2=$('li',moveselect2)
   let bnr2= $('.btn',contentitem2)[0];
   let btnnl2=$('.kj-left',bnr2);
   let btnnr2=$('.kj-right',bnr2);
   let nrdot2=$('.nr-dot',contentitem2)[0];
   let circle2=$('.circle',contentitem2)[0];
   let lisn2=document.querySelectorAll('.content-item2 .circle li');
   // console.log(lisn);
   let flagn2=true,nrr2=0;
   let widthnr2=parseInt(getStyle(nrlis2[0],'width'));;
  btnnl2[0].onclick=function(){
     if(!flagn2){
          return;
        }
        flagn2=false;
        movenr2();
      }
  btnnr2[0].onclick=function(){
     
     if(!flagn2){
          return;
        }
        flagn2=false;
        movednr2();
  }

  //下面按钮
  for(let i=0;i<lisn2.length;i++){
     lisn2[i].onclick=function(){
      if(i==nrr2){
        return;
      }
      if(nrr2>i){
        animate(moveselect2,{left:-widthnr2},function(){
      let first=getFirst(moveselect2);
      moveselect2.appendChild(first);
      moveselect2.style.left=0;
      flagn2=true;
    }) 
      }
      if(nrr2<i){
        let last=getLast(moveselect2);
      let first=getFirst(moveselect2);
      moveselect2.insertBefore(last,first);
      moveselect2.style.left=-widthnr2+'px';
      animate(moveselect2,{left:0},function(){
        flagn2=true;
      })
      }
      for(let j=0;j<lisn2.length;j++){
        lisn2[j].className='';
      }
      lisn2[i].className='nr-hot';
      nrr2=i; 
      }
   
  }
  // 下面按钮结束
  function movenr2(){
      nrr2--;
      if(nrr2<0){
        nrr2=lisn2.length-1;
      }
      for(let i=0;i<lisn2.length;i++){
      lisn2[i].classList.remove('nr-hot');
      } 
     lisn2[nrr2].classList.add('nr-hot');
      animate(moveselect2,{left:-widthnr2},function(){
      let first=getFirst(moveselect2);
      moveselect2.appendChild(first);
      moveselect2.style.left=0;
      flagn2=true;
    })

}
    function  movednr2(){
     nrr2++;
      if(nrr2==lisn2.length){
        nrr2=0;
      }
      for(let i=0;i<lisn2.length;i++){
      lisn2[i].classList.remove('nr-hot');
      } 
     lisn2[nrr2].classList.add('nr-hot');
      let last=getLast(moveselect2);
      let first=getFirst(moveselect2);
      moveselect2.insertBefore(last,first);
      moveselect2.style.left=-widthnr2+'px';
      animate(moveselect2,{left:0},function(){
        flagn2=true;
      })
    }
//neirong3
   let contentitem3=$('.content-item3')[0];
   let moveselect3=$('.move-select',contentitem3)[0];
   let nrlis3=$('li',moveselect3)
   let bnr3= $('.btn',contentitem3)[0];
   let btnnl3=$('.kj-left',bnr3);
   let btnnr3=$('.kj-right',bnr3);
   let nrdot3=$('.nr-dot',contentitem3)[0];
   let circle3=$('.circle',contentitem3)[0];
   let lisn3=document.querySelectorAll('.content-item3 .circle li');
   // console.log(lisn);
   let flagn3=true,nrr3=0;
   let widthnr3=parseInt(getStyle(nrlis3[0],'width'));;
  btnnl3[0].onclick=function(){
     if(!flagn3){
          return;
        }
        flagn3=false;
        movenr3();
      }
  btnnr3[0].onclick=function(){
     
     if(!flagn3){
          return;
        }
        flagn3=false;
        movednr3();
  }
  //下面按钮
  for(let i=0;i<lisn3.length;i++){
     lisn3[i].onclick=function(){
      if(i==nrr3){
        return;
      }
      if(nrr3>i){
        animate(moveselect3,{left:-widthnr3},function(){
      let first=getFirst(moveselect3);
      moveselect3.appendChild(first);
      moveselect3.style.left=0;
      flagn3=true;
    }) 
      }
      if(nrr3<i){
        let last=getLast(moveselect3);
      let first=getFirst(moveselect3);
      moveselect3.insertBefore(last,first);
      moveselect3.style.left=-widthnr3+'px';
      animate(moveselect3,{left:0},function(){
        flagn3=true;
      })
      }
      for(let j=0;j<lisn3.length;j++){
        lisn3[j].className='';
      }
      lisn3[i].className='nr-hot';
      nrr3=i; 
      }
   
  }
  // 下面按钮结束
  function movenr3(){
      nrr3--;
      if(nrr3<0){
          nrr3=lisn3.length-1;
      }
      for(let i=0;i<lisn3.length;i++){
      lisn3[i].classList.remove('nr-hot');
      } 
      lisn3[nrr3].classList.add('nr-hot');
      animate(moveselect3,{left:-widthnr3},function(){
      let first=getFirst(moveselect3);
      moveselect3.appendChild(first);
      moveselect3.style.left=0;
      flagn3=true;
    })

}
    function  movednr3(){
     nrr3++;
      if(nrr3==lisn3.length){
        nrr3=0;
      }
      for(let i=0;i<lisn3.length;i++){
      lisn3[i].classList.remove('nr-hot');
      } 
     lisn3[nrr3].classList.add('nr-hot');
      let last=getLast(moveselect3);
      let first=getFirst(moveselect3);
      moveselect3.insertBefore(last,first);
      moveselect3.style.left=-widthnr3+'px';
      animate(moveselect3,{left:0},function(){
        flagn3=true;
      })
    }

    //neirong2
   let contentitem4=$('.content-item4')[0];
   let moveselect4=$('.move-select',contentitem4)[0];
   let nrlis4=$('li',moveselect4)
   let bnr4= $('.btn',contentitem4)[0];
   let btnnl4=$('.kj-left',bnr4);
   let btnnr4=$('.kj-right',bnr4);

   let nrdot4=$('.nr-dot',contentitem4)[0];
   let circle4=$('.circle',contentitem4)[0];
   let lisn4=document.querySelectorAll('.content-item4 .circle li');
   console.log(lisn4);
   let flagn4=true,nrr4=0;
   let widthnr4=parseInt(getStyle(nrlis4[0],'width'));;
  btnnl4[0].onclick=function(){
     if(!flagn4){
          return;
        }
        flagn4=false;
        movenr4();
      }
  btnnr4[0].onclick=function(){
      
     if(!flagn4){
          return;
        }
        flagn4=false;

        movednr4();
  }
   //下面按钮
  for(let i=0;i<lisn4.length;i++){
     lisn4[i].onclick=function(){
      if(i==nrr4){
        return;
      }
      if(nrr4>i){
        animate(moveselect4,{left:-widthnr4},function(){
      let first=getFirst(moveselect4);
      moveselect4.appendChild(first);
      moveselect4.style.left=0;
      flagn4=true;
    }) 
      }
      if(nrr4<i){
        let last=getLast(moveselect4);
      let first=getFirst(moveselect4);
      moveselect4.insertBefore(last,first);
      moveselect4.style.left=-widthnr4+'px';
      animate(moveselect4,{left:0},function(){
        flagn4=true;
      })
      }
      for(let j=0;j<lisn4.length;j++){
        lisn4[j].className='';
      }
      lisn4[i].className='nr-hot';
      nrr4=i; 
      }
   
  }
  // 下面按钮结束
  function movenr4(){
      nrr4--;
      if(nrr4<0){
        nrr4=lisn4.length-1;
      }
      for(let i=0;i<lisn4.length;i++){
      lisn4[i].classList.remove('nr-hot');
      } 
     lisn4[nrr4].classList.add('nr-hot');
     animate(moveselect4,{left:-widthnr4},function(){
      let first=getFirst(moveselect4);
      moveselect4.appendChild(first);
      moveselect4.style.left=0;
      flagn4=true;
    })

}
    function  movednr4(){
      nrr4++;
      if(nrr4==lisn4.length){
        nrr4=0;
      }
      for(let i=0;i<lisn4.length;i++){
      lisn4[i].classList.remove('nr-hot');
      } 
     lisn4[nrr4].classList.add('nr-hot');

      let last=getLast(moveselect4);
      let first=getFirst(moveselect4);
      moveselect4.insertBefore(last,first);
      moveselect4.style.left=-widthnr4+'px';
      animate(moveselect4,{left:0},function(){
        flagn4=true;
      })
    }










   })
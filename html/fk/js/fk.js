/*
* @Author: lenovo
* @Date:   2017-05-01 22:19:14
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-02 00:25:11
*/

'use strict';
$(function(){
	var fengxiang=$('.fengxiang');
	var weipic=$('.wei-pic')
	var wei=$('.weix');
    weipic[0].onmouseenter=function(){
    	wei[0].className='weix show';
    }
    weipic[0].onmouseleave=function(){
    	wei[0].className='weix hidden';
    }

    let bannerright=$('.banner-right');
    let bannerleft=$('.banner-left');
    let lbd=$('.lbd');
    let index=0;
    let banp=$('.banp');
    

    let t=setInterval(move,3000);
    function move(){

     index++;

     if(index==lbd.length){

     	index=0;
     }
    for(let i=0;i<lbd.length;i++){
    	lbd[i].className='lbd ';
    	banp[i].style.display='none';
    	
    }
    lbd[index].className='lbd s-d';
    banp[index].style.display='block';
}


let lianjie=$('.lianjie');
  let mcategory=$('.m-category');
  let itemm=$('.item-m');
  for(let i=0;i<itemm.length;i++){
  	itemm[i].onmouseenter=function(){
  		lianjie[i].style.color='#B81B22';
  	 mcategory[i].style.height='128px';	
  	}
  	itemm[i].onmouseleave=function(){
  	 mcategory[i].style.height='0';	
  	 lianjie[i].style.color='#727171';
  	}
  }
})
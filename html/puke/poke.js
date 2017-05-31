$(function () {
    let poke=[];
    let color=['h','s','c','d'];
    let biao={};
    let btnl=$('.btnl');
    let btnr=$('.btnr');
    let close=$('.close');
    let refresh=$('.refresh');
    close.click(function () {
        window.close();
    })
    refresh.click(function () {
        $('.box').empty();
         play();
    })
//    h--红心 c-梅花 s--黑桃 d--方块
//    [{huase:'h',shuzi:5},{huase:'h',shuzi:5}]
/* biao: h_5:true*/


/*产生牌*/
/*for(let i=0;i<52;i++){
    let huase=color[Math.floor(Math.random()*4)];
    let shuzi=Math.floor(Math.random()*13+1);
    /!*去除重复*!/
    while (biao[huase+"_"+shuzi]){
       huase=color[Math.floor(Math.random()*4)];
       shuzi=Math.floor(Math.random()*13+1);
    }
    biao[huase+'_'+shuzi]=true;
    poke.push({huase,shuzi});
    // document.write(huase,shuzi+"---");
  }*/
    /*产生牌*/
    play();
    function play() {


    while(poke.length<52){
        let huase=color[Math.floor(Math.random()*4)];
        let shuzi=Math.floor(Math.random()*13+1);
        /*去除重复*/
        if(!(biao[huase+"_"+shuzi])){
            biao[huase+'_'+shuzi]=true;
            poke.push({huase,shuzi});
            // document.write(huase,shuzi+"---");
        }
    }
    /*发牌*//////////////////////////////////////////////////////////////
    let index=0   //记录当前发的第几张

    for(let i=0;i<7;i++){  /*发几层*/
        for(let j=0;j<=i;j++){    /*每层发对应的个数*/
            let item=poke[index];   /* 从数组里取第几张*/
            let src="url(img/"+item.huase+item.shuzi+".png)"
            $('<div>').addClass('poke')  /*添加类名和样式*/
                .css("backgroundImage",src)
                .data('num',item.shuzi)
                .prop('id',i+"_"+j)
                .delay(30*index)   /*延时*/

                .animate({
                    left:300-i*50+100*j,top:58*i,opacity:1
                })
                .appendTo('.box')

            index++;
        }
    }
//////////////////////////////////////////发剩余牌//////////////////////////////////////////////////

    for(;index<poke.length;index++){
        let item=poke[index];   /* 从数组里取第几张*/
        let src="url(img/"+item.huase+item.shuzi+".png)"
        $('<div>').addClass('poke zuo')  /*添加类名和样式*/
            .css("backgroundImage",src)
            .data('num',item.shuzi)
            .delay(40*index)   /*延时*/
            .animate({
                left:100,top:500,opacity:1
            })
            .appendTo('.box')
    }
    ///////////////////////////扑克牌操作//点击弹起///////////////////////////////////////////////
     let first=null;
    $('.poke').click(function () {
       /* 6,2   7,2  7,3
       * x,y x+1,y  x+1,y+1
       * 拆分  计算加1
       * 再拼接*/
       let coords=$(this).prop('id').split("_");
       // console.log(coords[0],coords[1])
      /* console.log(parseInt(coords[0])+1,parseInt(coords[1]));
       console.log(parseInt(coords[0])+1,parseInt(coords[1])+1);*/
       let ele=$(`#${parseInt(coords[0])+1}_${parseInt(coords[1])}`)
       let ele1=$(`#${parseInt(coords[0])+1}_${parseInt(coords[1])+1}`)
       // console.log(ele,ele1)
       if(ele.length==1 || ele1.length==1){
         return;
       }
       $(this).toggleClass('active')

      /* if(ele.length==0 || ele1.length==0){
           $(this).toggleClass('active')
       }else{
           return;
       }*/
    if($(this).hasClass('active')){
         $(this).animate({ top:'-=20' })

    } else{
        $(this).animate({ top:'+=20' })
    }
    /////////////////////////////// 相加求和为13--消除//////////////////////////////////
   // console.log($(this).data('num'))  显示展示牌的数字
    if(!first){
        first=this;//选中第一张
        let sum=$(first).data('num')
        if(sum == 13){
            $('.active').animate({left:600,top:0}).queue(function () {
                $(this).remove()
                first=null
            });
        }
    }else{
        //选择第二张
        let sum=$(first).data('num')+$(this).data('num')
        if(sum==13){
            /*$('.active').animate({left:600,top:0},function () {
               $(this).remove()
            });*/
            $('.active').animate({left:600,top:0}).queue(function () {
                $(this).remove()
            });
        }else{
            $('.active').animate({top:"+=20"}).removeClass('active')
        }
        first=null;
    }
   })
  //////////////////////////////左右按钮///////////////////////////////////////////////
   //////纸牌从左到右////////////////
    let z=1;
     btnr.click(function () {
        z++;
      $('.zuo:last')
          .removeClass('zuo')
          .addClass('you')
          .css("zIndex",z)
          .animate({left:"+=400"})
    })

    //////纸牌从右到左////////////////
    btnl.click(function () {
        let you=$('.you')
        if(you.length==0){
            return;
        }
        for(let i=you.length-1;i>=0;i--){
            $(you[i])
                .delay(200*i)
                .animate({left:"-=400"},function () {
                    $(this).css("zIndex",0)     //动画完成之后把所有的层级都变为0
                })
                 .removeClass('you')   //去除右边的类名，再加上左边
                .addClass('zuo')
        }
     })
    }
})


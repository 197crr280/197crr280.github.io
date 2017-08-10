/**
 * Created by lenovo on 2017/5/10.
 */
/* 属性
* a-z  个数 速度  分数 生命 时间 */
/*方法  产生 掉 消除 next 重新开始  checkPosition
* checkRepeat*/

function Game(){
  this.charArr=[['A','images/A.png'],
      ['B','images/B.png'],
      ['C','images/C.png'],
      ['D','images/D.png'],
      ['E','images/E.png'],
      ['F','images/F.png'],
      ['G','images/G.png'],
      ['H','images/H.png'],
      ['I','images/I.png'],
      ['J','images/J.png'],
      ['K','images/K.png'],
      ['L','images/L.png'],
      ['M','images/M.png'],
      ['N','images/N.png'],
      ['O','images/O.png'],
      ['P','images/P.png'],
      ['Q','images/Q.png'],
      ['R','images/R.png'],
      ['S','images/S.png'],
      ['T','images/T.png'],
      ['U','images/U.png'],
      ['V','images/V.png'],
      ['W','images/W.png'],
      ['X','images/X.png'],
      ['Y','images/Y.png'],
      ['Z','images/Z.png']];
  this.charlength=4;
  this.cw=window.innerWidth;
  this.currentEle=[];
  this.currentPos=[];
  this.speed=10;
  this.sm=10;
  this.fs=0;
  this.gq=1; //关卡
    this.smElement=document.querySelector('.sm1');
    this.fsElement=document.querySelector('.fs');
    this.gqElement=document.querySelector('.gq');


}
Game.prototype={
    start:function(){
        this.getElements(this.charlength);
        this.drop();
        this.key();
     },
    getElements:function(length){
        for(let i=0;i<length;i++){
            this.getChar();
        }
    },
    checkRepeat:function(text){
     return   this.currentEle.some(function(value){
         return   value.innerText==text;
        })
    },
    checkPosition:function(lefts){
       return  this.currentPos.some(function(value){
          return   value+100>lefts && lefts+100>value;
        })
    },
    getChar:function() {
        let num=Math.floor(Math.random()*this.charArr.length);
        /*   num this.charArr[num][0] this.current[i].innertext*/
        while(this.checkRepeat(this.charArr[num][0])){
            num=Math.floor(Math.random()*this.charArr.length);
        }

        let tops=100*Math.random();
        let lefts=Math.random()*(this.cw-200)+100;
        while(this.checkPosition(lefts)){
            lefts=Math.random()*(this.cw-200)+100;
        }
        let ele=document.createElement('div');
        ele.style.cssText=`width:100px;height:100px;background-image:url(${this.charArr[num][1]});
        background-position:center;background-size:cover;color:white;font-size:0px;
        text-align:center;line-height:50px;position:absolute;left:${lefts}px;top:${tops}px`;
        ele.innerText=this.charArr[num][0];
        document.body.appendChild(ele);
        this.currentEle.push(ele);
        this.currentPos.push(lefts);
    },
    drop:function(){
        let self=this;
        self.t=setInterval(function(){
            for(let i=0;i<self.currentEle.length;i++){
                let tops=self.currentEle[i].offsetTop+self.speed;
                self.currentEle[i].style.top=tops+'px';
                if(tops > 500){
                    //删除页面中
                    document.body.removeChild(self.currentEle[i]);
                    //从当前数组中删除
                    self.currentEle.splice(i,1);
                    self.currentPos.splice(i,1);//清空位置

                    self.sm--;
                    self.smElement.style.width=(self.sm/10)*100+'%';
                    /*self.smElement.innerText=self.sm;*/
                    /*//重新开始*/
                    if(self.sm < 0){
                        let flag=window.confirm('游戏结束，是否重新开始');
                        if(flag){
                            self.restart();
                        }else{
                            close();
                        }

                    }

                }
            }
            if(self.currentEle.length<self.charlength){
                self.getChar();
            }
        },500)
    },
    key:function () {
        document.body.onkeydown=function(e){
            //e.keycode 65 66 67 ele.innertext A B C
            let code=String.fromCharCode(e.keyCode);
            for(let i=0;i<this.currentEle.length;i++){
                if(code==this.currentEle[i].innerText){
                    document.body.removeChild(this.currentEle[i]);
                    this.currentEle.splice(i,1);
                     this.currentPos.splice(i,1);
                     this.fs++;
                     this.fsElement.innerText=this.fs;
                    //下一关
                    if(this.fs > 10*this.gq){
                        this.next();

                    }
                }
            }
            if(this.currentEle.length<this.charlength){
                this.getChar();
            }
        }.bind(this);
    },
    restart:function () {
        /* 初始状态
        停止掉   元素删除、数据清空
        * 生命 分数
        * start*/
        clearInterval(this.t);
        for(let i=0;i<this.currentEle.length;i++){
          document.body.removeChild(this.currentEle[i]);
        }
        this.currentEle=[];
        this.currentPos=[];
        this.sm=10;
        this.smElement.style.width=(this.sm/10)*100+'%';
        // this.smElement.innerText=this.sm;
        //分数清零
      /*  this.fs=0;
        this.fsElement.innerText=this.fs;*/
        this.start();
    },
     next:function(){
        clearInterval(this.t);
         for(let i=0;i<this.currentEle.length;i++){
             document.body.removeChild(this.currentEle[i]);
         }
         this.currentEle=[];
         this.currentPos=[];
         this.charlength++;
         if(this.charlength>8){
             this.charlength=8 ;
             this.speed+=1;
         }
         this.gq++;
         this.gqElement.innerText=this.gq;
         // this.gq+=1;
         this.start();


    }

}

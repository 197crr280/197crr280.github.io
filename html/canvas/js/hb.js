
/*线 铅笔 矩形 圆角矩形 圆 多边形  虚线
 * 撤销 新建 保存 裁切
  * 属性
  * 描述
  * 线宽 颜色 fill stroke*/
window.onload=function () {
  let canvas=document.querySelector('canvas') ;
  let ctx=canvas.getContext('2d');
  let line=document.querySelector('.icon-xiantiao');
  let pencil=document.querySelector('.icon-pencil');
  let yuan=document.querySelector('.icon-yuan');
  let juxing=document.querySelector('.icon-juxing');
  let duobianxing=document.querySelector('.icon-duobianxing');
  let yuanjiao=document.querySelector('.icon-yuanjiaofangkuang');
  let duojiaoxing=document.querySelector('.icon-wujiaoxingkong');
  let chexiao=document.querySelector('.icon-chexiao');
  let psave=document.querySelector('.icon-baocun-copy');
  let xiangpi=document.querySelector('.icon-xiangpi');
  let caiqie=document.querySelector('.icon-caijian');
  let clipBtn=document.querySelector('.clip');
  let label=document.getElementsByTagName('label');
  let img=document.querySelector('img');
  let fill=document.querySelector('.icon-tianchong');
  let xt=document.querySelector('.icon-xiantiao1');
  let newfile=document.querySelector('.icon-xinjian');
  let xuxian=document.querySelector('.icon-xuxian');
  let input=document.getElementsByTagName('input')[0];
  let input1=document.getElementsByTagName('input')[1];
  let eraserBtn=document.querySelector('.eraser');
  let mask=document.querySelector('.mask');
  let font1=document.querySelector('.icon-wenzi1');
  let fullscreen=document.querySelector('.icon-jinlingyingcaiwangtubiao44');
  let palette=new Palette(canvas,ctx,mask);

  input.onchange=function () {
      palette.fillStyle=this.value;
  }
  input1.onchange=function () {
        palette.strokeStyle=this.value;
    }
  fill.onclick=function () {
     palette.type='fill';
      fill.style.background='white';
      xt.style.background='';
  }
  xt.onclick=function () {
        palette.type='stroke';
      xt.style.background='white';
      fill.style.background='';

  }
  line.onclick=function () {
     palette.line();
     for(let i=0;i<label.length;i++){
         label[i].style.background='';
     }
      line.style.background='white';
  }
  pencil.onclick=function () {
        palette.pencil();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      pencil.style.background='white';
    }
  yuan.onclick=function () {
        palette.yuan();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      yuan.style.background='white';
    }
  duobianxing.onclick=function () {
     palette.n=prompt('请输入边数','5')
        palette.duobianxing(palette.n);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      duobianxing.style.background='white';
    }
  juxing.onclick=function () {
      palette.juxing();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      juxing.style.background='white';
    }
  yuanjiao.onclick=function () {
      palette.yuanjiao();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      yuanjiao.style.background='white';
    }
  duojiaoxing.onclick=function () {
        palette.n=prompt('请输入角数','5')
        palette.duojiaoxing(palette.n);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      duojiaoxing.style.background='white';
    }
  chexiao.onclick=function () {
        palette.chexiao();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      chexiao.style.background='white';
    }
  document.body.onkeydown=function (e) {
      if (e.ctrlKey && e.keyCode == 90) {
          palette.chexiao();
      }
  }
  psave.onclick=function () {
        palette.psave(canvas);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      psave.style.background='white';
    }
  xiangpi.onclick=function () {
      let w=prompt('请输入橡皮的尺寸','10');
      let h=w;
      palette.xiangpi(w,h,eraserBtn);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      xiangpi.style.background='white';
  }
  caiqie.onclick=function () {
        palette.caiqie(clipBtn);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      caiqie.style.background='white';
    }
  newfile.onclick=function () {
      palette.newfile(canvas);
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      newfile.style.background='white';
    }
 /* xuxian.onclick=function(){
      palette.xuxian();
    }*/
  font1.onclick=function () {
        palette.fontset();
      for(let i=0;i<label.length;i++){
          label[i].style.background='';
      }
      font1.style.background='white';
    }
    fullscreen.onclick=function () {
        palette.fullscreen();
    }
}

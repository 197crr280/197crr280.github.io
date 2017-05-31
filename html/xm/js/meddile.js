
$(function(){
  let dpselect=$('.dpselect');
   // console.log(dpselect);
  Array.from(dpselect).forEach(function(value,index){
      select(value);
     }) 
   let peijianselect=$('.peijianselect');
   // console.log(peijianselect);
  Array.from(peijianselect).forEach(function(value,index){
      select(value);
     }) 

     let  zhoubianselect=$('.zhoubianselect');
   // console.log(dpselect);
  Array.from(zhoubianselect).forEach(function(value,index){
      select(value);
     })  
function select(obj){
let fl=$('.fl', obj)[0];
// console.log(fl);
let phot=$('p',fl);
// console.log(phot);
let znblock=$('.znblock', obj);
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
}
})
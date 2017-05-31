$(function(){
    let audio=$('audio')[0];
    let song=$('.song')[0];
    let author=$('.author')[0];
    let lyrics=$('.lyrics')[0];
    let middle=$('.middle')[0];
    let prevBtn=$('.prev')[0];
    let playBtn=$('.play')[0];
    let nextBtn=$('.next')[0];
    let img=$('img',middle)[0];
    let info=$('.info')[0];
    let cTime=$('.cTime')[0];
    let dTime=$('.dTime')[0];
    let proson=$('.proson')[0];
    let  volumeBtn=$('.volumeBtn')[0];
    let  volumeC=$('.volumeC')[0];
    let  volume=$('.volume')[0];
    let sy=$('.sy')[0];
    let index=0;
    init(database[0]);
    //播放与暂停
        prevBtn.onclick=function() {

            index--;
            if (index < 0) {
                index = database.length-1;
            }
            init(database[index]);
            audio.play();
            playBtn.classList.toggle('icon-icon-bofang');
        }
        nextBtn.onclick=function(){
            index++;
            if(index>database.length-1){
                index=0;

            }
            init(database[index]);
        }


    playBtn.onclick=function(){
        if(audio.paused){
            audio.play();
            playBtn.classList.toggle('icon-icon-bofang');
         }else {
            audio.pause();
            playBtn.classList.toggle('icon-icon-bofang');
        }
    }

    let x=0;
    let i=x;

    audio.ontimeupdate=function () {
   let current = audio.currentTime; // 当前时长
   let duration = audio.duration; // 总时长
   let m =  Math.floor(current /60)<10 ?  '0'+Math.floor(current/60): Math.floor(current/60);
   let s =  Math.floor(current % 60) <10 ?  '0'+Math.floor(current% 60) : Math.floor(current % 60) ;
   cTime.innerText=`${m}:${s}`;
   dTime.innerText=database[index]['alltime'];
   proson.style.width= current/duration*100+'%';
   let string='';

        audio.addEventListener('ended',function(){
            index++;
            if(index>5){
                index=0;
            }
            init(database[index]);
          audio.play();
        },false);

        //歌词

        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,index){
            if(value.time== cTime.innerText){
                x = i = index;
            }
        })


        if(x<2){
          i=0;
        }else{
            i=x-2;
        }
          // console.log(i,x);
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
               string+=`
               <li class="hot">
               ${database[index]['lyrics'][j]['lyric']}
               </li>`;
            }else{
                string+=`<li>${database[index]['lyrics'][j]['lyric']}</li>`
            }

          }

          lyrics.innerHTML=string;
    }
    //初始化
    function init(obj) {
        let string='';
        song.innerText=obj.songs;
        author.innerText=obj.name;
        audio.src=obj.src;
        proson.style.width=0;
        //下面初始化
        info.innerText=`${obj.songs}-${obj.name}`;
        img.src=obj.photo;
        cTime.innerText = '00:00';
        dTime.innerText =obj.alltime;

        obj.lyrics.forEach(function(value,index){
            string+=`<li>${value.lyric}</li>`;
        })
        lyrics.innerHTML='';
        lyrics.innerHTML=string;
    }
    //声音控件
    let offsleft=volume.offsetLeft;
    volumeBtn.onmousedown=function (e) {
        let ox=e.offsetX;
        document.onmousemove=function(e){
            let cx=e.clientX;
            let lefts=cx-offsleft-ox;
            if(lefts<0){
                lefts=0;
            }
            if(lefts>94){
                lefts=94;
            }
            volumeBtn.style.left=lefts+'px';
            volumeC.style.width=lefts+'px';
            audio.volume=lefts/100;
        }
        volumeBtn.onmouseup=function () {
           document.onmousemove=null;
           volumeBtn.onmouseup=null;
        }
    }
    sy.onclick=function(){
        let n=0;
        n++;
        if(n%2==0){
            audio.volume=0;
            sy.classList.toggle('icon-jingyin1');
        }else{
            audio.volume=lefts/100;
            // audio.pause();
            sy.classList.toggle('icon-jingyin1');
        }




    }
})


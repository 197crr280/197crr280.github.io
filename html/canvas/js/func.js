function Palette(obj,ctx,mask) {
    //默认样式  填充样式 边 角
  this.lineWidth=2;
  this.fillStyle='#000';
  this.strokeStyle='#000';
  this.lineCap='round';
  // 默认绘图方式
  this.type='stroke';
  this.text='20px 苹方';
  this.textAlign='center';
  this.textBaseline='middle';
  //画板
  this.obj=obj;
  this.ctx=ctx;
  this.width=obj.width;
  this.height=obj.height;
  //历史记录
    this.history=[];
    this.mask=mask;
}
Palette.prototype= {
    init: function () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.lineCap = this.lineCap;

    },
  // 线
    line: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.closePath();
                self.ctx.stroke();

            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 铅笔
    pencil: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.lineTo(mx, my);

                self.ctx.stroke();

            }
            self.mask.onmouseup = function () {
                self.ctx.closePath();
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 圆
    yuan: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.beginPath();
                // self.ctx.moveTo(ox,oy);
                let radius = Math.sqrt((mx - ox) * (mx - ox) + (my - oy) * (my - oy))
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.arc(ox, oy, radius, 0, Math.PI * 2);
                self.ctx[self.type]();

            }
            self.mask.onmouseup = function () {
                self.ctx.closePath();
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 多边形
    duobianxing: function (n = 5) {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                let radius = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2))
                let angle = (360 / n) / 180 * Math.PI;
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox + radius, oy);
                for (let i = 0; i < n; i++) {
                    let x = radius * Math.cos(angle * i) + ox;
                    let y = radius * Math.sin(angle * i) + oy;
                    self.ctx.lineTo(x, y);
                }
                self.ctx.closePath();
                self.ctx[self.type]();


            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 矩形
    juxing: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);

                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                if (self.type == 'stroke') {
                    self.ctx.strokeRect(ox, oy, mx - ox, my - oy);
                } else if (self.type == 'fill') {
                    self.ctx.fillRect(ox, oy, mx - ox, my - oy);
                }
                self.ctx.closePath();
                self.ctx[self.type]();


            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 圆角矩形
    yuanjiao: function (r = 10) {
        /*以ox,oy为圆心画圆*/
        let self = this;

        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                let w = mx - ox, h = my - oy;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);

                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox - w + r, oy - h);
                self.ctx.lineTo(ox + w - r, oy - h);
                self.ctx.quadraticCurveTo(mx, oy - h, mx, r + oy - h);
                self.ctx.lineTo(mx, my - r);
                self.ctx.quadraticCurveTo(mx, my, ox + w - r, my);
                self.ctx.lineTo(ox + r - w, my);
                self.ctx.quadraticCurveTo(ox - w, my, ox - w, my - r);
                self.ctx.lineTo(ox - w, oy - h + r);
                self.ctx.quadraticCurveTo(ox - w, oy - h, ox - w + r, oy - h);
                self.ctx.closePath();
                self.ctx[self.type]();


            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 多角形
    duojiaoxing: function (n = 5) {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                let radius = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2))
                let radius1 = radius / 3;
                let angle = (360 / (n * 2)) / 180 * Math.PI;
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.beginPath();
                for (let i = 0; i < n * 2; i++) {
                    if (i % 2 == 0) {
                        let x = radius * Math.cos(angle * i) + ox;
                        let y = radius * Math.sin(angle * i) + oy;
                        self.ctx.lineTo(x, y);
                    } else {
                        let x = radius1 * Math.cos(angle * i) + ox;
                        let y = radius1 * Math.sin(angle * i) + oy;
                        self.ctx.lineTo(x, y);
                    }

                }
                self.ctx.closePath();
                self.ctx[self.type]();


            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 撤销
    chexiao: function () {
        let self = this;
        self.history.pop();
        if (self.history.length == 0) {
            self.ctx.clearRect(0, 0, self.width, self.height)
            return;
        }
        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);//当前信息放回到页面


    },

    psave: function (canvas) {
        let data = canvas.toDataURL('image/png').replace('data:image/png', 'data:stream/octet');
        location.href = data;
    },
    // 裁切
    caiqie: function (clipBtn) {
        let self = this;
        var minx, miny, w, h;
        self.init();
        self.clipBtn=clipBtn;
        self.mask.onmousedown = function (e) {
            let ox= e.offsetX,  oy= e.offsetY;
             self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                minx = mx >= ox ? ox : mx;
                miny = my >= oy ? oy : my;
                w = Math.abs(mx - ox);
                h = Math.abs(my - oy);
                self.clipBtn.style.cssText= ` width:${w}px;height:${h}px; border:1px dashed black;
                  position:absolute;left:${minx}px;top:${miny}px;`;

            }
            self.mask.onmouseup = function () {
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;

                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h);
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.ctx.putImageData(self.temp, minx, miny);
                self.drag(minx, miny, w, h, clipBtn);
            }
        }

    },
    // 裁切拖拽
    drag: function (x, y, w, h, clipBtn) {
        let self = this;

            self.mask.onmousemove = function (e) {
                let ox = e.offsetX, oy = e.offsetY;
                if(ox>x&&ox<w+x &&oy>y&& oy<h+y){
                    self.mask.style.cursor = "move";
                }else{
                    self.mask.style.cursor ="default";
                }
            }
            self.mask.onmousedown = function (e) {
                let ox = e.offsetX, oy = e.offsetY;
                let cx = ox-x, cy = oy-y;
                if(ox>x&&ox<w+x &&oy>y&& oy<h+y){
                    self.mask.style.cursor = "move";
                }else{
                    self.mask.style.cursor ="default";
                    return;
                }
                self.mask.onmousemove = function (e){
                    self.ctx.clearRect(0, 0, self.width, self.height);
                    if (self.history.length > 0) {
                       self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                    }
                    var endx = e.offsetX;
                    var endy = e.offsetY;
                    var left = endx - cx;
                    var top = endy - cy;
                    if(left<0){
                        left=0;
                    }
                    if(left>self.width-w){
                        left=self.width-w
                    }

                    if(top<0){
                        top=0;
                    }
                    if(top>self.height-h){
                        top=self.height-h
                    }
                    clipBtn.style.left= left+'px';
                    clipBtn.style.top=top+'px';
                    x=left;
                    y=top;
                    self.ctx.putImageData(self.temp, left, top);
                }
                self.mask.onmouseup = function () {
                    self.mask.onmouseup = null;
                    self.mask.onmousemove = null;
                   self.drag(x, y, w, h, clipBtn);
                    self.clipBtn.style.border='0px';
                }
            }


    },
    // 橡皮擦
    xiangpi: function (w, h, eraserBtn) {
        let self = this;
        self.mask.onmousedown = function () {
            eraserBtn.style.display = 'block';
            eraserBtn.style.width = `${w}px`;
            eraserBtn.style.height = `${h}px`;
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
            }
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX - w / 2, my = e.offsetY - h / 2;
                if (mx >= self.width - w) {
                    mx = self.width - w;
                }
                if (mx < 0) {
                    mx = 0;
                }
                if (my >= self.height - h) {
                    my = self.height - h;
                }
                if (my < 0) {
                    my = 0;
                }
                eraserBtn.style.left = mx + 'px';
                eraserBtn.style.top = my + 'px';
                self.ctx.clearRect(mx, my, w, h);

            }
            self.mask.onmouseup = function () {
                eraserBtn.style.display = 'none';
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },
    // 新建
    newfile: function (canvas) {
        let self = this;
        let flag = confirm("是否要保存图片？")
        if (flag) {
            let data = canvas.toDataURL('image/png').replace('data:image/png', 'data:stream/octet');
            location.href = data;
        }
        self.history = [];
        this.ctx.clearRect(0, 0, this.width, this.height);


    },
    //虚线
   /* xuxian: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0);
                }
                self.ctx.setLineDash([5, 10]);
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath();
                self.ctx.stroke();

            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;

            }
        }
    },*/
    //字体设置
    fontset: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            let div = document.createElement('div');
            div.style.cssText = `background:white;border:2px dashed #000;z-index:20;color:#000;font-size:12px;
         width:100px;min-height:50px;position:absolute;left:${ox}px;top:${oy}px;`;
            div.contentEditable = true;

            self.mask.appendChild(div);
            self.mask.onmousedown = null;
            self.area = div;
            self.area.onmousedown = function (e) {
                let ox = e.clientX - this.offsetLeft, oy = e.clientY - this.offsetTop;
                self.mask.onmousemove = function (e) {
                    let cx = e.clientX, cy = e.clientY;
                    let lefts = cx - ox;
                    let tops = cy - oy;
                    self.area.style.left =`${lefts}px`;
                    self.area.style.top = `${tops}px`;
                }
                self.area.onmouseup = function () {
                    self.mask.onmousemove = null;
                    self.area.onmouseup = null;
                }
            }
            self.area.onblur = function () {
                self.ctx.font = self.text;
                self.ctx.textAlign = self.textAlign;
                self.ctx.BaseLine = self.textBaseline;
                self.ctx.fillText(this.innerText, this.offsetLeft, this.offsetTop);
                this.parentNode.removeChild(this);
                self.area = null;
            }
        }
    },

    //全屏
    fullscreen:function () {
        if(document.documentElement.requestFullScreen){
            document.documentElement.requestFullScreen();
        }else if(document.documentElement.webkitRequestFullScreen){
            document.documentElement.webkitRequestFullScreen();
        }
    }

}

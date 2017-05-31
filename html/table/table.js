/**
 * Created by lenovo on 2017/5/10.
 */
/*更新  td 事件委派  td-> table*/
/*创建input
单元格内容->input
单元格清空
input->单元格

编辑
input.value保存
input->remove
input.value--->td
*/
$(function(){
    let table=$('tbody')[0];//默认补充tbody
    let add=$('#add');
   /* let student=[
        {'name':'张三','sex':'女','age':'18','tall':'123456789'},
        {'name':'李华','sex':'女','age':'18','tall':'123456789'},
        {'name':'王明','sex':'男','age':'22','tall':'987654321'}
    ];*/
   let student=JSON.parse(localStorage.student);
    student.forEach(function (value) {
        createTr(value);
    })
    // console.log(add);
    table.ondblclick=function(e){
        let obj=e.target;
        if(obj.nodeName=='TD'&&obj.className !='del'){
           let input=$('<input>');  //创建input
           let oldv=obj.innerText;  //获取单元格内容
           input.value=oldv;      //单元格内容赋值给表单
           obj.innerText='';    //清空单元格
           obj.appendChild(input);  //插入input
           input.onblur=function(){   //失去焦点时间
               let newv=input.value;   //新内容==input
              obj.removeChild(input);   //移除input
              obj.innerText=newv.trim()?newv.trim():oldv;  //新内容去空写回单元格
           }
        }else if(obj.nodeName=='BUTTON'){
            let tr=obj.parentNode.parentNode;
            table.removeChild(tr);

        }
    }
    add.onclick=function () {
        let tr=$('<tr>');
        tr.innerHTML=`
            <td>小华</td>
            <td>女</td>
            <td>18</td>
            <td>123456789</td>
            <td class="del"><button>删除</button></td>`
        table.appendChild(tr);
    }
    function createTr(obj){
      let tr=$('<tr>');
      tr.innerHTML=`
       <td> ${obj.name} </td>
       <td> ${obj.sex} </td>
       <td> ${obj.age} </td>
       <td> ${obj.tall} </td>
       <td class="del"><button>删除</button></td>`
        table.appendChild(tr);
    }

    })

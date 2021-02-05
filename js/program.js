'use strict';
// console.log("ok");

const add_btn=document.getElementById("add");
const content_text=document.getElementById("content_text");
const content_value=document.getElementById("content_value");
const table=document.getElementById("sum_table");
const sum=document.getElementById("sum_box");

var num=0;

add_btn.onclick= function add(){
  // console.log("test");
  if(content_text.value && content_value.value){
    // console.log("OK");
    var name=content_text.value;
    var value=content_value.value;
    // console.log(name+"\n"+value+"円");
    num++;
    // console.log(num);

    //trの作成
    var newele=document.createElement("tr");
    var newid="row"+num;
    newele.id=newid
    table.appendChild(newele);
    var newele_id=document.getElementById(newid);
    
    //tdのNo
    var new_num=document.createElement("td");
    var text1=document.createTextNode(num);
    new_num.appendChild(text1);
    newele_id.appendChild(new_num);

    //tdの商品名
    var new_num2=document.createElement("td");
    var text2=document.createTextNode(name);
    new_num2.appendChild(text2);
    newele_id.appendChild(new_num2);
    
    //tdの値段
    var new_num3=document.createElement("td");
    var text3=document.createTextNode(value);
    new_num3.appendChild(text3);
    newele_id.appendChild(new_num3);
    
    //tdの削除ボタン
    var new_num4=document.createElement("td");
    var text4=document.createElement("input");
    text4.value="削除"
    text4.type="button"
    new_num4.appendChild(text4);
    newele_id.appendChild(new_num4);

    var value_sum=sum.value;
    value_sum=Number(value_sum)+Number(value);
    sum.value=value_sum;
    content_text.value="";
    content_value.value="";
  }
}
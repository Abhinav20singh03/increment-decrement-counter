let ele = document.querySelector("#counter");
let plus = document.querySelector("#plus");
let minus =document.querySelector("#minus");
plus.addEventListener("click",function(){
    let value = parseInt(ele.textContent);
    value++;
    ele.textContent=value;
})
minus.addEventListener("click",function(){
    let value = parseInt(ele.textContent);
    value--;
    ele.textContent=value;
})
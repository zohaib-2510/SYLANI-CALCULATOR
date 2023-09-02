function sum(a){
document.getElementById('inp').value += a
}
function evl(){
    var a = document.getElementById('inp')
    a.value = eval(a.value).toFixed(2)
}
function clrall(){
    document.getElementById('inp').value= " "
}
function clr(){
    var c=document.getElementById('inp')
    c.value = c.value.slice(0,-1)
}
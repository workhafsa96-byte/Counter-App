let count = 0;
function increament(){
    count ++;
    document.getElementById('counter').innerHTML = count;
}
function decreament(){
    count --;
    document.getElementById('counter').innerHTML = count;
}
function Reset(){
    count = 0;
    document.getElementById('counter').innerHTML = count;
}

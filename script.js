let button = document.getElementById('btn1');
var index = 0;


button.addEventListener('click',function changeColor(){
    var colors = ["red","blue","green","orange","skyblue","white","purple","yellow"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if(index > colors.length-1){
        index = 0;
    }
});








var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#549DA0"]; // создаем массив с цветами фона
var i = 0; 

function changeColor(){
    document.getElementById("work").style.backgroundColor = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
};

$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
    });
});




// массив с цветами фона
var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#549DA0"];
var i = 0;

function changeColor() {
    document.getElementById("work").style.backgroundColor = colorArray[i];
    i++;
    if (i > colorArray.length - 1) {
        i = 0;
    }
};

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});


let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let slides = document.querySelectorAll("img");

btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    i++
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i - 1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i - 1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }

})
btnLeft.addEventListener("click", function () {
    // Уменьшаем переменную i
    i--
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block следующему слайду
        slides[i + 1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i + 1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#to_do__ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("to_do__ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
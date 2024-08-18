slideIndex = 0;

var slides = document.getElementsByClassName("slideshow");
var nextBtn = document.getElementsByClassName("nextbutton");
var prevBtn = document.getElementsByClassName("prevbutton");
slides[0].style.display = "block";
slides[0].style.transform = "translateX(0%)";



for(i = 0; i < nextBtn.length; i++) {
    displayButton(i);
}


function displayButton(x) {
    if (slideIndex == 0) {
        prevBtn[x].style.display = "none";
        nextBtn[x].style.display = "block";
    } else if (slideIndex > 0 && slideIndex < slides.length-1) {
        prevBtn[x].style.display = "block";
        nextBtn[x].style.display = "block";
    } else if (slideIndex == slides.length-1) {
        nextBtn[x].style.display = "none";
        prevBtn[x].style.display = "block";
    }
}

function nextSlide(x, y) {
    slideIndex += x;
    displayButton(y);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //display none
    }
    if (x == 1) { //next slide
        slideLeft(); //slide from right to left
        
    } else { //prev slide
        slideRight(); //slide from left to right
    }
}

function slideLeft() { //slide from right to left
    var s1 = slides[slideIndex-1].style; //first slide to move from middle to left
    var s2 = slides[slideIndex].style;  //second slide to move from right to middle

    s1.display = "inline-block";
    s1.transform = "translateX(0%)";
    s1.marginLeft = "0";
    s1.marginRight = "0";
    s2.display = "inline-block";
    s2.transform = "translateX(200%)";
    s2.marginLeft = "0";
    s2.marginRight = "0";

    let s1Pos = 0;
    let s2Pos = 200;
    var id = setInterval(frame, 5);

    function frame() {
      if (s1.transform == "translateX(-200%)") {
        clearInterval(id);
      } else {
        s1.transform = "translateX(" + s1Pos + "%)";
        s1Pos = s1Pos - 5;
      }

      if (s2.transform == "translateX(0%)") {
        clearInterval(id);
      } else {
        s2.transform = "translateX(" + s2Pos + "%)"
        s2Pos = s2Pos - 5;
      }
    }
    setTimeout(function(){s1.display = "none"; s2.display = "block"; s2.marginLeft = "auto"; s2.marginRight = "auto";}, 200);
}

function slideRight() { //slide from left to left
    var s1 = slides[slideIndex+1].style; //first slide to move from middle to right
    var s2 = slides[slideIndex].style;  //second slide to move from left to middle

    s1.display = "inline-block";
    s1.transform = "translateX(0%)";
    s1.marginLeft = "0";
    s1.marginRight = "0";
    s2.display = "inline-block";
    s2.transform = "translateX(-200%)";
    s2.marginLeft = "0";
    s2.marginRight = "0";

    let s1Pos = 0;
    let s2Pos = -200;
    var id = setInterval(frame, 5);

    function frame() {
      if (s1.transform == "translateX(200%)") {
        clearInterval(id);
      } else {
        s1.transform = "translateX(" + s1Pos + "%)";
        s1Pos = s1Pos + 5;
      }

      if (s2.transform == "translateX(0%)") {
        clearInterval(id);
      } else {
        s2.transform = "translateX(" + s2Pos + "%)"
        s2Pos = s2Pos + 5;
      }
    }
    setTimeout(function(){s1.display = "none"; s2.display = "block"; s2.marginLeft = "auto"; s2.marginRight = "auto";}, 200);
}

function setPage(x, y) {
    var pageNo = document.getElementsByClassName("pageNo");    
    var i = Number(pageNo[y].innerHTML);

    i += x;
    pageNo[y].innerHTML = i;
}

function upvote(y, x) {
    var vote = document.getElementsByClassName("count");
    var v = Number(vote[x].innerHTML);
    
    v += y;
    vote[x].innerHTML = v;
}
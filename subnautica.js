var slideIndex = 1;
showSlides(slideIndex);
showSeeMoreBtn(); //Show See more Button

function seeMore(index) {
    var content = document.getElementsByClassName("content");
    var seeMoreBtn = document.getElementsByClassName("seeMoreBtn");

    if (seeMoreBtn[index].innerHTML === "See More...") {
        content[index].style.maxHeight = "100%";
        seeMoreBtn[index].innerHTML = "See Less...";
    } else {
        content[index].style.maxHeight = "10em";
        seeMoreBtn[index].innerHTML = "See More...";
    }

}

function showSeeMoreBtn() {
    var content = document.getElementsByClassName("content");

    for (i = 0; i < content.length; i++) {
        if (checkOverflow(content[i])) {
            var seeMoreButton = document.getElementsByClassName("seeMoreBtn");
            
            seeMoreButton[i].style.display = "block";
        }
    }
}

function plusSlides(n) {
    var video = document.getElementsByClassName("videoslide");

    for (i = 0; i<video.length; i++) {
        video[i].pause();
        video[i].currentTime = 0;
        video[i].play();
        video[i].muted = true;
    }
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var video = document.getElementsByClassName("videoslide");
    var circle = document.getElementsByClassName("circle");
    if (n > video.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = video.length;
    }

    for (i = 0; i < video.length; i++) {
        video[i].style.display = "none";
        circle[i].style.background = "#5A5A5A";
    }
    video[slideIndex-1].style.display = "block";
    circle[slideIndex-1].style.background = "#d3d3d3";
}

function selectSlides(n) {
    var video = document.getElementsByClassName("videoslide");
    slideIndex = n;
    
    showSlides(n);

    for (i = 0; i<video.length; i++) {
        video[i].pause();
        video[i].currentTime = 0;
        video[i].play();
        video[i].muted = true;
    }
}

function checkOverflow(e) {
   return e.clientHeight < e.scrollHeight;;
}

function upvote(y, x) {
    var vote = document.getElementsByClassName("count");
    var v = Number(vote[x].innerHTML);
    
    v += y;
    vote[x].innerHTML = v;
}
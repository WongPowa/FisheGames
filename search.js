
var addToCartIndex = 0;
var searchItems = document.getElementById("searchlist").getElementsByTagName("li");

function search() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
   

    for(i = 0; i < searchItems.length; i++) {
        a = searchItems[i].getElementsByTagName("a")[0];
        txt = a.textContent || a.innerText;
        
        if (txt.toUpperCase().indexOf(filter) > -1) {
          searchItems[i].style.display = "block";
        } else {
          searchItems[i].style.display = "none";
        }
    }
}

function blurlist() {
    for (i = 0; i < searchItems.length; i++) {
        searchItems[i].style.display = "none";
    }
}

function typeInt() {
    var x = document.getElementById("navpage").getElementsByTagName("input");
    x[0].type = "input";
    x[0].style.width = "25px";
}

function blurType() {
    var x = document.getElementById("navpage").getElementsByTagName("input");
    x[0].type = "button";
    x[0].innerHTML ="...";
}

function addToCart(x, y) {
    var addCart = document.getElementsByClassName("addToCartBtn");
    addToCartIndex += y;
    
    if (addToCartIndex > 1) {
        addToCartIndex = 0;
    }

    if (addToCartIndex == 1) {
        addCart[x].value = "-";
    } else if (addToCartIndex == 0) {
        addCart[x].value = "+";
    }

    
}

function removedropdown(x) {

}
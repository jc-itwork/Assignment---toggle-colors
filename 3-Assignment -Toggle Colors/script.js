
let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar button");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let toggleNav = function() {
  
 if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "400px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
}

else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
}};


function color(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
    getSidebarUl.style.visibility = "hidden";
}

function myKey(event) {
    let x = event.key;
    if (x == "1") {
        document.body.style.backgroundColor="lightgrey";
    }
    if (x == "2") {
        document.body.style.backgroundColor="red";
    }
    if (x == "3") {
        document.body.style.backgroundColor="orange";
    }
    if (x == "4") {
        document.body.style.backgroundColor="purple";
    }
    if (x == "5") {
        document.body.style.backgroundColor="green";
    }
}




//animation on load
window.onload = function () {
  document.getElementById("cocount").style.animation = "moveLR 3s both";
  document.getElementById("koky").style.animation = "moveRL 3s both";
};
//add active class
var listItems = document.querySelectorAll(" .navbar ul li ");
// console.log(listItems);

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    var activeItem = document.querySelector("li.active");
    activeItem.classList.remove("active");
    this.classList.add("active");
  });
}

//toggle navbar

let navBarToggle = document.getElementById("navbar-toggle");

navBarToggle.addEventListener("click", function () {
  var x = document.getElementById("main-menu");
  if (x.className === "main-list") {
    x.className += " hagar";
  } else {
    x.className = "main-list";
  }
});

// sticky nav
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $("#navbar").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() < 20) {
      $("#navbar").removeClass("navbar-fixed");
    }
  });
});
// scroll to item
listItems.forEach((item) => {
  item.addEventListener("click", scrollItem);
});
function scrollItem() {
  document
    .getElementById(this.getAttribute("data-id"))
    .scrollIntoView({ behavior: "smooth" });
}

//scrol top
let myBtn = document.getElementById("my-btn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.opacity = "1";
  } else {
    myBtn.style.opacity = "0";
  }
};

myBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// fqa
// let listfqa = document.getElementsByClassName(" .answer");
// let elementList = document.querySelectorAll(".fqa-listing1 li");
// console.log(elementList);
// console.log(listfqa);

// // for (z = 0; z < elementList.length; z++) {
// //   elementList[z].addEventListener("click", function () {
// //     let right = document.getElementsByClassName(" .answer");
// //     right.classList.remove = "reply";
// //     right.classList.add = "reply";
// //   });
// // }

// elementList.addEventListener("click", function () {
//   if (listfqa.style.display === "none") {
//     listfqa.style.display === "block";
//   } else {
//     listfqa.style.display === "none";
//   }
// });

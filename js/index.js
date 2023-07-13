// for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const mobileListedItems = document.querySelector(".mobile-listed-items-container");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileListedItems.classList.toggle('toggle-nav')
});


//close the nav when li is clicked
const closeNavWhenLiIsClicked = () => {
    let all_li = document.querySelectorAll(".listed-item");
    all_li.forEach(function(li) {
        li.addEventListener("click", function() {
          hamburger.classList.toggle("is-active");
          mobileListedItems.classList.toggle('toggle-nav')
        });
    });
}
closeNavWhenLiIsClicked()


//function to scroll to top button
const scrollBtn = document.querySelector(".btn-style");
const btnVisibility = () => {
  if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

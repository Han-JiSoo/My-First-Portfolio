//스크롤 위로 올려주는 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

const toggleComments = document.querySelectorAll(".toggle-comment");
const comment = document.querySelector(".projects_comment");

toggleComments.forEach((toggleCommentButton) => {
  toggleCommentButton.addEventListener("click", () => {
    toggleCommentButton.classList.toggle("close-button");
  });
});

const hamburger = document.querySelector(".header_toggle-menu");
const navBar = document.querySelector(".header_navigation");
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamburger.classList.toggle("close");
});

const activePage = window.location.pathname;

const navigationLinks = document
  .querySelectorAll(".header_link")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active-link");
    }

    if (activePage === '/') {
      link.classList.replace('active-link', '');
    }
});



$(function() {
  $(".projects_gallery").bxSlider({
    auto:true,
    autoControls:false,
    pager:false,
    controls:false,
    pause: 2500
  });
});

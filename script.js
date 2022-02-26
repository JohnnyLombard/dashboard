const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// -------   Show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// ---------Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//-----------Dark theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
});

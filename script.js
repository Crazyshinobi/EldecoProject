const mobileNavbar = document.querySelector(".mobile-navbar");
const menuIcon = document.querySelector(".menu");

let flag = 0;

menuIcon.addEventListener("click", function () {
  if (flag == 0) {
    mobileNavbar.style.display = "flex";
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    flag = 1;
  } else {
    mobileNavbar.style.display = "none";
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    flag = 0;
  }
});

function closeMenu() {
  mobileNavbar.style.display = "none";
  menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}

// Add event listener for each link in mobile navbar
const mobileNavLinks = document.querySelectorAll('.mobile-navbar li');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
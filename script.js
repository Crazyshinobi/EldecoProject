const mobileNavbar = document.querySelector(".mobile-navbar");
const menuIcon = document.querySelector(".menu");
const body = document.querySelector("body"); // Select the body element

let flag = 0;

menuIcon.addEventListener("click", function () {
  if (flag == 0) {
    mobileNavbar.style.display = "flex";
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    body.classList.add("no-scroll"); // Add a class to body to disable scrolling
    flag = 1;
  } else {
    mobileNavbar.style.display = "none";
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    body.classList.remove("no-scroll"); // Remove the class to enable scrolling
    flag = 0;
  }
});

function closeMenu() {
  mobileNavbar.style.display = "none";
  menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  body.classList.remove("no-scroll"); // Remove the class to enable scrolling
}

// Add event listener for each link in mobile navbar
const mobileNavLinks = document.querySelectorAll(".mobile-navbar li");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function swapItems() {
  const item3 = document.getElementById("item-3");
  const item4 = document.getElementById("item-4");

  // Check if both item2 and item3 exist and screen size is below or equal to 643px
  if (item3 && item4 && window.innerWidth <= 643) {
    // Swap innerHTML
    const tempHTML = item3.innerHTML;
    item3.innerHTML = item4.innerHTML;
    item4.innerHTML = tempHTML;

    item3.id = "temp-id";
    item4.id = "item-3";
    document.getElementById("temp-id").id = "item-4";
  }
}

// Call the function initially to check the screen size
swapItems();

// Add event listener to detect screen size changes
window.addEventListener("resize", function (event) {
  // Call the function whenever the screen size changes
  swapItems();
});

// Select all buttons with the ID "callButton"
const callButtons = document.querySelectorAll("#callButton");

// Loop through each button and add the event listener
callButtons.forEach(button => {
  button.addEventListener("click", function () {
    // Replace '1234567890' with the desired phone number
    const phoneNumber = "9650524480";

    // Construct the tel URI
    const telUri = "tel:" + phoneNumber;

    // Open the dialer with the tel URI
    window.open(telUri);
  });
});


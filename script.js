// Ensure sidebar is hidden by default on page load
document.addEventListener("DOMContentLoaded", () => {
  const side = document.querySelector(".side-bar");
  side.style.display = "none"; // Ensure sidebar is hidden by default
});

// Show sidebar on hover or click
function sideBaron() {
  const side = document.querySelector(".side-bar");
  side.style.display = "flex";
}

// Hide sidebar
function sideBaroff() {
  const side = document.querySelector(".side-bar");
  side.style.display = "none";
}

// Toggle sidebar visibility on click
function toggleSidebar() {
  const side = document.querySelector(".side-bar");
  if (side.style.display === "flex") {
    side.style.display = "none";
  } else {
    side.style.display = "flex";
  }
}

// Hide sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  const side = document.querySelector(".side-bar");
  const menuIcon = document.querySelector(".menuSideBar img");

  // Check if the click happened outside the sidebar and menu icon
  if (!side.contains(event.target) && !menuIcon.contains(event.target)) {
    side.style.display = "none";
  }
});

// dark/light mode /dark/light mode /dark/light mode /dark/light mode/dark /light mode /dark/light mode
function toggleMode() {
  const body = document.body;

  // Toggle between dark and light mode classes
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Adjust the display of sun and moon icons
  const sunIcon = document.querySelector("#btn-dark-light .sun");
  const moonIcon = document.querySelector("#btn-dark-light .moon");

  if (body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }

  // Adjust the display of logos
  const darkLogo = document.querySelector(".dark-logo");
  const lightLogo = document.querySelector(".light-logo");

  if (body.classList.contains("dark-mode")) {
    darkLogo.style.display = "block";
    lightLogo.style.display = "none";
  } else {
    darkLogo.style.display = "none";
    lightLogo.style.display = "block";
  }

  // Update styles for other elements
  let swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach((swiperSlide) => {
    swiperSlide.style.color = body.classList.contains("dark-mode")
      ? "white"
      : "black";
  });

  let navBar = document.querySelector(".main-bar");
  navBar.style.backgroundColor = body.classList.contains("dark-mode")
    ? "rgb(11, 28, 50)"
    : "white";

  let navLinks = document.querySelectorAll(".main-bar .nav a");
  navLinks.forEach((link) => {
    link.style.color = body.classList.contains("dark-mode") ? "white" : "black";
  });
}

// Set default mode on page load
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Set dark mode as default
  body.classList.add("dark-mode");

  // Ensure correct icons are visible
  const sunIcon = document.querySelector("#btn-dark-light .sun");
  const moonIcon = document.querySelector("#btn-dark-light .moon");
  const darkLogo = document.querySelector(".dark-logo");
  const lightLogo = document.querySelector(".light-logo");

  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
  darkLogo.style.display = "block";
  lightLogo.style.display = "none";
});

// top button /top button /top button /top button /top button /top button /top button /top button /top button
let mybutton = document.querySelector("#myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// validation form /validation form /validation form /validation form /validation form /validation form /validation form
function validateform() {
  let name = document.myForm.name.value;
  let mail = document.myForm.email.value;
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let phone = document.myForm.phone.value;
  let date = document.myForm.date.value;
  let time = document.myForm.time.value;

  if (name == null || name == "") {
    alert("Please enter a name");
    return false;
  } else if (mail === null || mail === "" || !mailFormat.test(mail)) {
    alert("Invalid email format. Please enter a valid email address.");
    return false;
  } else if (phone.length != 10) {
    alert("please enter a phone number");
    return false;
  } else if (date == null || date == "") {
    alert("please choose a date");
    return false;
  } else if (time == null || time == "") {
    alert("please choose a time");
    return false;
  }
}
// contact us /contact us /contact us /contact us /contact us /contact us /contact us /contact us /contact us /contact us
function validateContact() {
  let contactName = document.contact.yourName.value;
  let contactMail = document.contact.yourEmail.value;
  let mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let message = document.contact.message.value;
  if (contactName == null || contactName == "") {
    alert("please enter a name");
    return false;
  } else if (
    contactMail === null ||
    contactMail === "" ||
    !mailForm.test(contactMail)
  ) {
    alert("Invalid email format. Please enter a valid email address.");
    return false;
  } else if (message == null || message == "") {
    alert("please enter a message");
    return false;
  }
}

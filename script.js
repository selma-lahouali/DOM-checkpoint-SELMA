// side bar // side bar // side bar // side bar
function sideBaron() {
  const side = document.querySelector(".side-bar");
  side.style.display = "flex";
}
function sideBaroff() {
  const side = document.querySelector(".side-bar");
  side.style.display = "none";
}
// dark/light mode /dark/light mode /dark/light mode /dark/light mode/dark /light mode /dark/light mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  let swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach((swiperSlide) => {
    swiperSlide.style.color = "white";
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

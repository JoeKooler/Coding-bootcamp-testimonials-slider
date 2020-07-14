const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const tanyaPic = document.querySelector(".profile-picture-tanya");
const johnPic = document.querySelector(".profile-picture-john");
const tanyaQuote = document.querySelector(".tanya-quote");
const johnQuote = document.querySelector(".john-quote");

const toLeft = () => {
  johnQuote.style.opacity = "0%";
  johnPic.style.opacity = "0%";
  tanyaQuote.style.opacity = "100%";
  tanyaPic.style.opacity = "100%";
};
const toRight = () => {
  tanyaQuote.style.opacity = "0%";
  tanyaPic.style.opacity = "0%";
  johnQuote.style.opacity = "100%";
  johnPic.style.opacity = "100%";
};

leftButton.addEventListener("click", toLeft);
rightButton.addEventListener("click", toRight);

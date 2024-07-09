function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  const imageContainer = document.querySelector(".home-tint1");
  const homeImage = document.querySelector(".home-image300");

  imageContainer.addEventListener("mouseover", () => {
    homeImage.style.display = "inline";
  });

  imageContainer.addEventListener("mouseout", () => {
    homeImage.style.display = "none";
  });
});

//
document.addEventListener("DOMContentLoaded", function () {
  var myButton = document.getElementById("myButton");
  var myPopup = document.getElementById("myPopup");
  var closePopup = document.getElementById("closePopup");

  myButton.addEventListener("click", function () {
    myPopup.style.display = "flex";
  });

  closePopup.addEventListener("click", function () {
    myPopup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
      myPopup.style.display = "none";
    }
  });
});

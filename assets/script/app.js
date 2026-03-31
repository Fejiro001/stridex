"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navActions = document.getElementById("nav-actions");
const allProducts = document.querySelectorAll(".product");

menuButton.addEventListener("click", () => {
  navActions.classList.toggle("show-nav");
  if (navActions.classList.contains("show-nav")) {
    menuButton.children[0].classList.remove("fa-bars-staggered");
    menuButton.children[0].classList.add("fa-x");
  } else {
    menuButton.children[0].classList.add("fa-bars-staggered");
    menuButton.children[0].classList.remove("fa-x");
  }
});

function createLinkButton() {
  const linkButton = document.createElement("div");
  linkButton.classList.add("product-link");
  return linkButton;
}

allProducts.forEach((productList) => {
  const productImage = productList.querySelector(".product-image");

  productList.addEventListener("mouseenter", () => {
    const linkButton = createLinkButton();
    productImage.appendChild(linkButton);
  });

  productList.addEventListener("mouseleave", () => {
    const linkButton = productImage.querySelector(".product-link");
    if (linkButton) {
      linkButton.remove();
    }
  });
});
const modal = document.getElementById("loginModal");
const loginBtns = document.querySelectorAll(".login-button"); 
const signinLink = document.querySelector(".login-btn");
const signupLink = document.querySelector(".signup-link");

loginBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

if (signupLink) {
  signupLink.onclick = function() {
    console.log("Sign up clicked! Closing modal..."); // This shows in F12 console
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}
if (signinLink) {
  signinLink.onclick = function() {
    console.log("Sign in clicked! Closing modal..."); // This shows in F12 console
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
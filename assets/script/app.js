"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navActions = document.getElementById("nav-actions");
const allProducts = document.querySelectorAll(".product");
const modal = document.getElementById("login-modal");
const loginBtns = document.querySelectorAll(".login-button");
const signinLink = document.querySelector(".login-btn");
const signupLink = document.querySelector(".signup-link");
const closeBtn = document.getElementById("closeBtn");
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "grid";
  } else {
    backToTop.style.display = "none";
  }
});

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

// Target login buttons in both desktop and mobile
loginBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

function closeModal() {
  modal.style.display = "none";
}

signupLink.addEventListener("click", () => {
  closeModal();
});

signinLink.addEventListener("click", () => {
  closeModal();
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Shoe Details Tabbed Information Display
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

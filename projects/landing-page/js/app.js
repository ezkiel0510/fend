/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isSectionInViewport(sec) {
  const box = sec.getBoundingClientRect();
  return (
    box.top >= 0 &&
    box.left >= 0 &&
    box.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    box.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function findLink(sec) {
  const secId = sec.getAttribute("id");
  const navLinks = document.getElementsByClassName("menu__link");
  for (const navLink of navLinks) {
    for (const aclass of navLink.classList) {
      if (aclass === secId) return navLink;
    }
  }
  return null;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the Navigation Menu
document.addEventListener("DOMContentLoaded", function createMenu() {
  const navMenu = document.getElementById("navbar__list");
  for (const section of sections) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = `${section.getAttribute("data-nav")}`;
    link.className = `menu__link ${section.getAttribute("id")}`;
    item.appendChild(link);
    navMenu.appendChild(item);
  }
});

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    // You can play with the values in the "if" condition to further make it more accurate.
    if (isSectionInViewport(section)) {
      // console.log(`${section.getAttribute("data-nav")} is in viewport`);
      section.classList.add("active");
      const menuItem = findLink(section);
      menuItem.classList.add("active");
    } else {
      // Remove active state from other section and corresponding Nav link.
      // console.log(`${section.getAttribute("data-nav")} isn't in viewport`);
      section.classList.remove("active");
      const menuItem = findLink(section);
      menuItem.classList.remove("active");
    }
  }
}

// Make sections active
document.addEventListener("scroll", function () {
  makeActive();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("click", function () {
  for (const section of sections) {
    console.log(
      `${section.getAttribute("id")}`,
      section.getBoundingClientRect()
    );
  }
});

// Scroll to section on link click

// Set sections as active

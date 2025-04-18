// MENU SHOW
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav_toggle", "nav_menu");

//ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  //Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

//SCROLL HOME
sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 150 });
sr.reveal(".home_img", { delay: 400 });
sr.reveal(".home_social-icon", { interval: 150 });

//SCROLL ABOUT
sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 150 });
sr.reveal(".about_text", { delay: 400 });

//SCROLL SKILLS
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", { delay: 150 });
sr.reveal(".skills_data", { interval: 150 });
sr.reveal(".skills_img", { delay: 400 });

//SCROLL PROJECT
sr.reveal(".project_img", { interval: 150 });

// SCROLL CONTACT
sr.reveal(".contact_input", { interval: 150 });
sr.reveal(".section-title", { interval: 150 });

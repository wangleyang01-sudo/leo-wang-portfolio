document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll("img[data-local-image]").forEach((image) => {
  const fallback = image.getAttribute("src");
  const localImage = image.dataset.localImage;

  if (!fallback || !localImage) {
    return;
  }

  image.addEventListener("error", () => {
    image.removeAttribute("data-local-image");
    image.src = fallback;
  }, { once: true });
  image.src = localImage;
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });
}

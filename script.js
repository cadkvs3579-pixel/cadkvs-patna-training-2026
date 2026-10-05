// Replace this with the institute's WhatsApp number in international format,
// without +, spaces, or punctuation. Example for India: 919876543210.
const WHATSAPP_NUMBER = "916200530488";

const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  primaryNav?.classList.toggle("is-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#enquiry-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    `Hello CAD KVS, my name is ${form.get("name")}.`,
    `Phone: ${form.get("phone")}.`,
    `Course of interest: ${form.get("course") || "Not sure yet"}.`,
    `Message: ${form.get("message") || "Please share course details."}`,
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const reviewCards = [...document.querySelectorAll(".review-card")];
let reviewOffset = 0;
function shiftReviews(direction) {
  if (reviewCards.length < 2) return;
  reviewOffset = (reviewOffset + direction + reviewCards.length) % reviewCards.length;
  reviewCards.forEach((card, index) => {
    card.style.order = String((index - reviewOffset + reviewCards.length) % reviewCards.length);
  });
}
document.querySelector("[data-review-prev]")?.addEventListener("click", () => shiftReviews(-1));
document.querySelector("[data-review-next]")?.addEventListener("click", () => shiftReviews(1));

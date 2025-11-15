document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger
const button = document.querySelector("#hamburger");
const nav = document.querySelector("#menu");

button.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  button.textContent = button.textContent === "☰" ? "✖" : "☰";
});

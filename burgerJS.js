const cart = [];
const cartItems = document.getElementById("cartItems");
const checkoutBtn = document.getElementById("checkoutBtn");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const loadingScreen = document.getElementById("loadingScreen");

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", e => {
    const name = e.target.closest(".card").querySelector(".card-title").textContent;
    cart.push(name);
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = cart.length
    ? cart.map(i => `<p>🍔 ${i}</p>`).join("")
    : `<p class="text-muted">Your cart is empty.</p>`;
}

checkoutBtn.addEventListener("click", () => {
  if (!cart.length) return alert("Your cart is empty!");
  alert("Thank you for your order!");
  cart.length = 0;
  updateCart();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  loadingScreen.style.display = "none";
});

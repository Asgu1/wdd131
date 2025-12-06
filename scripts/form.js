// PRODUCT ARRAY
const products = [
  { id: "p001", name: "Smart Speaker" },
  { id: "p002", name: "Wireless Headphones" },
  { id: "p003", name: "Gaming Keyboard" },
  { id: "p004", name: "Mechanical Mouse" }
];

// FILL SELECT OPTIONS
const select = document.querySelector("#product");

if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// COUNTER FUNCTION
if (document.querySelector("#counter")) {

  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);

  document.querySelector("#counter").textContent = count;
}

// FOOTER YEAR
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

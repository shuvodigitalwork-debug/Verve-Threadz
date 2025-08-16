window.onload = function() {
    alert("Welcome to Verve Threadz!");
};

// Modal logic
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close");
const orderBtns = document.querySelectorAll(".order-btn");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const orderForm = document.getElementById("order-form");

orderBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    productName.textContent = "Product: " + btn.dataset.product;
    productPrice.textContent = "Price: " + btn.dataset.price + "৳";
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
};

// Optional: handle form submission
orderForm.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your order has been received.");
  modal.style.display = "none";
  orderForm.reset();
});
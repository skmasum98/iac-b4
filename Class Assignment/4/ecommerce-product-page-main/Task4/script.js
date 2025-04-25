document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active"); // Toggle menu visibility
    });
  });
  



document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartDropdown = document.getElementById("cartDropdown");
  
    cartIcon.addEventListener("click", function () {
      cartDropdown.classList.toggle("active");
    });
  
    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target)) {
        cartDropdown.classList.remove("active");
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
        // Update the main image source
        const newSrc = this.getAttribute("data-full");
        mainImage.style.opacity = "0"; // Fade out effect
  
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = "1"; // Fade in effect
        }, 200);
  
        // Remove active class from all thumbnails
        thumbnails.forEach(img => img.classList.remove("active"));
  
        // Add active class to the clicked thumbnail
        this.classList.add("active");
      });
    });
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const quantityValue = document.getElementById("quantity-value");
  
    let quantity = 0;
  
    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantityValue.textContent = quantity;
    });
  
    decreaseBtn.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        quantityValue.textContent = quantity;
      }
    });
  });
  
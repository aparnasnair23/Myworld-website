const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetSection = document.getElementById(this.hash.substring(1)); // Extract ID from hash
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to target section
    }
  });
});

const productDetails = document.querySelectorAll('.product-details');
const productImages = document.querySelectorAll('.product img');
const cartItemsElement = document.getElementById('cart-items');

productImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Logic to add product to cart
    const productDetails = document.querySelector(`.product-details:nth-child(${index + 1})`); // Select corresponding details
    const productName = productDetails.querySelector('h4').textContent;
    const productPrice = productDetails.querySelector('p:nth-child(2)').textContent; // Assuming price is in the second paragraph
    const productImageSrc = image.src; // Get image source

    // Create a new element to represent the cart item
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item'); // Add a class for styling

    // Add content to the cart item element (you can customize this)
    cartItemElement.innerHTML = `
      <img src="${productImageSrc}" alt="${productName}" width="100px">
      <p>${productName}</p>
      <p>${productPrice}</p>
      <button>Remove</button>  `;

    cartItemsElement.appendChild(cartItemElement); // Add the item to the cart section

    // Hide the "No items in your cart yet" message (optional)
    const noItemsMessage = document.querySelector('#cart p:nth-child(2)');
    noItemsMessage.style.display = 'none';
  });
});


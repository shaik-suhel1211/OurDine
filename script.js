const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const menuImage = document.querySelectorAll('.menu-image'); 

menuOpenButton.addEventListener("click",()=>{
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",()=>{
  document.body.classList.remove("show-mobile-menu");
});
// Event listener for each menu item click
menuImage.forEach(item => {
  item.addEventListener('click', function() {
    const price = item.getAttribute('data-price');
    const name = item.getAttribute('alt'); 

    // Create a dialog box
    showDialogBox(name, price);
  });
});

// Function to show the dialog box with price calculation
function showDialogBox(itemName, itemPrice) {
  // Creating dialog box HTML structure dynamically
  const dialogBox = document.createElement('div');
  dialogBox.id = 'price-dialog';
  dialogBox.classList.add('dialog-box');

  // Adding content to the dialog box
  dialogBox.innerHTML = `
    <div class="dialog-content">
     <button id="close-btn" class="close-btn">X</button>
      <h2>${itemName}</h2>
      <p>Price: ${itemPrice}$</p>
      <p>Delivery:2$</p>
      <p>Total: ${parseInt(itemPrice)+2}$</p>
      <button id="order-btn">Order</button>
    </div>
  `;

  // Appending the dialog box to the body
  document.body.appendChild(dialogBox);

  // Adding event listener to the "Order" button
  const orderButton = document.getElementById('order-btn');
  orderButton.addEventListener('click', function() {
    alert("Sorry we are not currently delivering in your city! please contact us.");
  });

  // Adding an event listener to close the dialog box when clicked outside
  dialogBox.addEventListener('click', function(e) {
    if (e.target === dialogBox) {
      closeDialogBox();
    }
  });
  const closeButton = document.getElementById('close-btn');
  closeButton.addEventListener('click', function() {
    closeDialogBox();
  });
}

// Function to close the dialog box
function closeDialogBox() {
  const dialogBox = document.getElementById('price-dialog');
  if (dialogBox) {
    dialogBox.remove();
  }
}

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});
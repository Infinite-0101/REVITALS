// --- CONFIGURATION ---
// REPLACE THIS WITH YOUR OWN WHATSAPP NUMBER (Don't use +)
const myPhoneNumber = "919876543210"; 

// --- CART LOGIC ---
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartCount();
    alert(productName + " added to cart! ⚡");
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    // If modal is closed, open it and render items
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
        renderCartItems();
    } else {
        modal.style.display = "none";
    }
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total-price');
    cartContainer.innerHTML = ""; // Clear current list
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>₹${item.price}</span>
                    <span style="color:red; cursor:pointer;" onclick="removeFromCart(${index})">x</span>
                </div>
            `;
        });
    }
    totalContainer.innerText = "₹" + totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCartItems();
    updateCartCount();
}

// --- WHATSAPP CHECKOUT ---
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello ReVitals! I want to place an order:%0A"; // %0A is a line break
    let totalPrice = 0;

    cart.forEach(item => {
        message += `- ${item.name} (₹${item.price})%0A`;
        totalPrice += item.price;
    });

    message += `%0ATotal Price: ₹${totalPrice}`;
    message += "%0A%0APlease confirm my order.";

    // Redirect to WhatsApp
    const url = `https://wa.me/${myPhoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// --- PRIVACY POLICY ---
function openPrivacy() {
    document.getElementById('privacy-modal').style.display = "block";
}

function closePrivacy() {
    document.getElementById('privacy-modal').style.display = "none";
}

// Close modals if clicking outside content
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const privacyModal = document.getElementById('privacy-modal');
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
    if (event.target == privacyModal) {
        privacyModal.style.display = "none";
    }
}

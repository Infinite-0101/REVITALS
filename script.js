// --- 1. CONFIGURATION ---
const phoneNumber = "919920799976"; // REPLACE WITH YOUR NUMBER

// --- 2. DATABASE ---
// Make sure these image names match your files in the assets folder!
// If a file is missing, it will default to bottle-hero.png
const products = [
    { id: 0, name: "Electric Blue", price: 60, image: "assets/blue.png", desc: "Intense Blue Raspberry.", color: "#00e5ff" },
    { id: 1, name: "Crimson Punch", price: 60, image: "assets/red.png", desc: "Tropical Berry Blast.", color: "#ff0040" },
    { id: 2, name: "Citrus Charge", price: 60, image: "assets/orange.png", desc: "Zesty Orange Mango.", color: "#ff8c00" },
    { id: 3, name: "Gravity Grape", price: 60, image: "assets/purple.png", desc: "Deep Concord Grape.", color: "#800080" },
    { id: 4, name: "Lime Strike", price: 60, image: "assets/green.png", desc: "Sour Lemon Lime.", color: "#32cd32" },
    { id: 5, name: "Cherry Bomb", price: 60, image: "assets/cherry.png", desc: "Wild Cherry Explosion.", color: "#dc143c" },
    { id: 6, name: "Arctic Ice", price: 60, image: "assets/white.png", desc: "Frost Berry.", color: "#a5f2f3" },
    { id: 7, name: "Nebula Nectar", price: 60, image: "assets/pink.png", desc: "Mystery Flavor.", color: "#ff69b4" },
    { id: 8, name: "Solar Flare", price: 60, image: "assets/yellow.png", desc: "Peach Mango.", color: "#ffd700" },
    { id: 9, name: "Watermelon Wave", price: 60, image: "assets/melon.png", desc: "Sweet Melon.", color: "#ff6b6b" }
];

// --- 3. AUTO-REPAIR (Fixes the "Not Working" issue) ---
// This runs once to clear old broken data from your previous attempts.
if (!localStorage.getItem('revitals_v2_fix')) {
    localStorage.clear();
    localStorage.setItem('revitals_v2_fix', 'true');
    console.log("System Repaired: Old data cleared.");
}

// --- 4. CART SYSTEM ---
let cart = JSON.parse(localStorage.getItem('revitalsCart')) || [];
updateCartCount();

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem('revitalsCart', JSON.stringify(cart));
        updateCartCount();
        
        // Open Cart immediately
        const modal = document.getElementById('cart-modal');
        if(modal) {
            modal.style.display = "flex";
            renderCartItems();
        }
    }
}

function updateCartCount() {
    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => el.innerText = cart.length);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
        renderCartItems();
    }
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total-price');
    cartContainer.innerHTML = ""; 
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
                    <span class="remove-btn" onclick="removeFromCart(${index})">✕</span>
                </div>
            `;
        });
    }
    totalContainer.innerText = "₹" + totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('revitalsCart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let message = "⚡ *NEW ORDER* ⚡%0A%0A";
    let total = 0;
    cart.forEach((item) => {
        message += `- ${item.name}: ₹${item.price}%0A`;
        total += item.price;
    });
    message += `%0A*TOTAL: ₹${total}*`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// --- 5. PAGE LOADER ---
if (window.location.pathname.includes("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('p-image').src = product.image;
        document.getElementById('p-title').innerText = product.name;
        document.getElementById('p-desc').innerText = product.desc;
        document.getElementById('p-price').innerText = "₹" + product.price;
        document.getElementById('add-btn').onclick = function() { addToCart(product.id); };
        document.documentElement.style.setProperty('--theme-color', product.color);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

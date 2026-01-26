// --- 1. CONFIGURATION & DATABASE ---
const phoneNumber = "919920799976"; // ENTER YOUR NUMBER HERE (No +)

// The Database of your 10 Flavors
const products = [
    { id: 0, name: "Electric Blue", price: 60, image: "assets/blue.png", desc: "A shock to the system. Intense Blue Raspberry flavor with max electrolytes.", color: "#00e5ff" },
    { id: 1, name: "Crimson Punch", price: 60, image: "assets/red.png", desc: "Tropical Berry blast. The perfect recovery fuel after a heavy workout.", color: "#ff0040" },
    { id: 2, name: "Citrus Charge", price: 60, image: "assets/orange.png", desc: "Zesty Orange Mango. Packed with Vitamin C and potassium.", color: "#ff8c00" },
    { id: 3, name: "Gravity Grape", price: 60, image: "assets/purple.png", desc: "Deep Concord Grape. Hydration that pulls you back to earth.", color: "#800080" },
    { id: 4, name: "Lime Strike", price: 60, image: "assets/green.png", desc: "Sour Lemon Lime. A crisp, clean taste for hot days.", color: "#32cd32" },
    { id: 5, name: "Cherry Bomb", price: 60, image: "assets/cherry.png", desc: "Wild Cherry explosion. Sweet, tart, and energizing.", color: "#dc143c" },
    { id: 6, name: "Arctic Ice", price: 60, image: "assets/white.png", desc: "Frost Berry. Cool, refreshing, and crisp.", color: "#a5f2f3" },
    { id: 7, name: "Nebula Nectar", price: 60, image: "assets/pink.png", desc: "Mystery Flavor. Out of this world sweetness.", color: "#ff69b4" },
    { id: 8, name: "Solar Flare", price: 60, image: "assets/yellow.png", desc: "Peach Mango. Bright, sunny, and smooth.", color: "#ffd700" },
    { id: 9, name: "Watermelon Wave", price: 60, image: "assets/melon.png", desc: "Sweet Melon. Like biting into a fresh watermelon.", color: "#ff6b6b" }
];

// --- 2. CART SYSTEM (With Memory) ---
let cart = JSON.parse(localStorage.getItem('revitalsCart')) || [];
updateCartCount(); // Run immediately on load

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem('revitalsCart', JSON.stringify(cart)); // Save to memory
        updateCartCount();
        alert(`${product.name} added to cart! ⚡`);
    } else {
        console.error("Product ID not found:", id);
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
                    <img src="${item.image}" style="width:30px;">
                    <span>${item.name}</span>
                    <span>₹${item.price}</span>
                    <span style="color:red; cursor:pointer; font-weight:bold;" onclick="removeFromCart(${index})">X</span>
                </div>
            `;
        });
    }
    totalContainer.innerText = "₹" + totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('revitalsCart', JSON.stringify(cart)); // Update memory
    renderCartItems();
    updateCartCount();
}

// --- 3. WHATSAPP CHECKOUT ---
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let message = "⚡ *NEW ORDER FROM WEBSITE* ⚡%0A%0A";
    let total = 0;

    cart.forEach((item, i) => {
        message += `${i+1}. ${item.name} - ₹${item.price}%0A`;
        total += item.price;
    });

    message += `%0A*TOTAL TO PAY: ₹${total}*`;
    message += "%0A%0APlease confirm my order and send payment details.";

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// --- 4. PRODUCT PAGE LOADER ---
// This runs only if we are on 'product.html'
if (window.location.pathname.includes("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); // Get ID from URL
    
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('p-image').src = product.image;
        document.getElementById('p-title').innerText = product.name;
        document.getElementById('p-desc').innerText = product.desc;
        document.getElementById('p-price').innerText = "₹" + product.price;
        document.getElementById('add-btn').onclick = function() { addToCart(product.id); };
        
        // Change theme color based on product
        document.documentElement.style.setProperty('--theme-color', product.color);
    }
}

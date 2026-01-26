/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; // REPLACE WITH YOUR NUMBER

/* --- 1. PRODUCT DATABASE --- */
const products = [
    { id: 0, name: "Electric Blue", price: 60, img: "assets/blue.png", color: "#00e5ff", desc: "Intense Blue Raspberry flavor.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 1, name: "Crimson Punch", price: 60, img: "assets/red.png", color: "#ff0040", desc: "Tropical Berry Blast.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 2, name: "Citrus Charge", price: 60, img: "assets/orange.png", color: "#ff8c00", desc: "Zesty Orange Mango.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 3, name: "Gravity Grape", price: 60, img: "assets/purple.png", color: "#800080", desc: "Deep Concord Grape.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 4, name: "Lime Strike", price: 60, img: "assets/green.png", color: "#32cd32", desc: "Sour Lemon Lime.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 5, name: "Cherry Bomb", price: 60, img: "assets/cherry.png", color: "#dc143c", desc: "Wild Cherry Explosion.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 6, name: "Arctic Ice", price: 60, img: "assets/white.png", color: "#a5f2f3", desc: "Crisp Frost Berry.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 7, name: "Nebula Nectar", price: 60, img: "assets/pink.png", color: "#ff69b4", desc: "Mystery Flavor.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 8, name: "Solar Flare", price: 60, img: "assets/yellow.png", color: "#ffd700", desc: "Peach Mango.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." },
    { id: 9, name: "Watermelon Wave", price: 60, img: "assets/melon.png", color: "#ff6b6b", desc: "Sweet Melon.", ingredients: "Filtered Water, Coconut Water, Electrolytes, Stevia." }
];

/* --- 2. CART SYSTEM --- */
let cart = JSON.parse(localStorage.getItem('revitalsCart_Final')) || [];
updateCartCount();

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} added!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if(el) el.innerText = cart.length;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    // Toggle logic
    if (!modal.style.display || modal.style.display === 'none') {
        modal.style.display = 'flex';
        renderCart();
    } else {
        modal.style.display = 'none';
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color:#888;">Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <div style="font-weight:bold;">${item.name}</div>
                    <div style="color:#00e5ff;">₹${item.price}</div>
                    <span class="remove-btn" onclick="removeFromCart(${index})" style="color:red; cursor:pointer;">✕</span>
                </div>
            `;
        });
    }
    totalEl.innerText = '₹' + total;
}

/* --- 3. TOAST & WHATSAPP --- */
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Cart is empty!");
    let msg = "Hello ReVitals, I want to order:%0A";
    let total = 0;
    cart.forEach(item => { msg += `- ${item.name} (₹${item.price})%0A`; total += item.price; });
    msg += `%0ATotal: ₹${total}%0A%0APlease confirm.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
}

/* --- 4. SAFE IMAGE LOADER (Prevents Lag) --- */
function getSafeImage(imgName) {
    // If the image fails to load, we simply return a colored placeholder DIV instead of crashing the browser
    return imgName; 
}

/* --- 5. PAGE GENERATORS --- */
// SHOP PAGE
const shopContainer = document.getElementById('shop-container');
if (shopContainer) {
    shopContainer.innerHTML = products.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
            </a>
            <h3>${p.name}</h3>
            <span class="price">₹${p.price}</span>
            <button class="btn-main" onclick="addToCart(${p.id})">ADD</button>
        </div>
    `).join('');
}

// PRODUCT DETAIL PAGE
if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        document.getElementById('p-image').src = product.img;
        document.getElementById('p-name').innerText = product.name;
        document.getElementById('p-name').style.color = product.color;
        document.getElementById('p-price').innerText = '₹' + product.price;
        document.getElementById('p-desc').innerText = product.desc;
        document.getElementById('p-ingredients').innerText = product.ingredients;
        document.getElementById('add-btn').onclick = () => addToCart(product.id);
    }
}

// Close Modal logic
window.onclick = function(e) {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) modal.style.display = "none";
}

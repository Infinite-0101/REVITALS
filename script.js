/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; // REPLACE THIS

/* --- DATABASE: 10 PRODUCTS --- */
const products = [
    { id: 0, name: "Electric Blue", price: 60, img: "assets/blue.png", color: "#00e5ff", desc: "Intense Blue Raspberry flavor.", ingredients: "Filtered Water, Coconut Water, Natural Blue Spirulina, Electrolytes, Stevia." },
    { id: 1, name: "Crimson Punch", price: 60, img: "assets/red.png", color: "#ff0040", desc: "Tropical Berry Blast.", ingredients: "Filtered Water, Coconut Water, Beet Juice (Color), Electrolytes, Stevia." },
    { id: 2, name: "Citrus Charge", price: 60, img: "assets/orange.png", color: "#ff8c00", desc: "Zesty Orange Mango.", ingredients: "Filtered Water, Coconut Water, Turmeric Extract, Electrolytes, Stevia." },
    { id: 3, name: "Gravity Grape", price: 60, img: "assets/purple.png", color: "#800080", desc: "Deep Concord Grape.", ingredients: "Filtered Water, Coconut Water, Fruit & Veg Juice (Color), Electrolytes, Stevia." },
    { id: 4, name: "Lime Strike", price: 60, img: "assets/green.png", color: "#32cd32", desc: "Sour Lemon Lime.", ingredients: "Filtered Water, Coconut Water, Spirulina & Turmeric, Electrolytes, Stevia." },
    { id: 5, name: "Cherry Bomb", price: 60, img: "assets/cherry.png", color: "#dc143c", desc: "Wild Cherry Explosion.", ingredients: "Filtered Water, Coconut Water, Cherry Juice Concentrate, Electrolytes, Stevia." },
    { id: 6, name: "Arctic Ice", price: 60, img: "assets/white.png", color: "#a5f2f3", desc: "Crisp Frost Berry.", ingredients: "Filtered Water, Coconut Water, Natural Flavor, Electrolytes, Stevia." },
    { id: 7, name: "Nebula Nectar", price: 60, img: "assets/pink.png", color: "#ff69b4", desc: "Mystery Flavor.", ingredients: "Filtered Water, Coconut Water, Dragonfruit Extract, Electrolytes, Stevia." },
    { id: 8, name: "Solar Flare", price: 60, img: "assets/yellow.png", color: "#ffd700", desc: "Peach Mango.", ingredients: "Filtered Water, Coconut Water, Beta Carotene, Electrolytes, Stevia." },
    { id: 9, name: "Watermelon Wave", price: 60, img: "assets/melon.png", color: "#ff6b6b", desc: "Sweet Melon.", ingredients: "Filtered Water, Coconut Water, Watermelon Juice, Electrolytes, Stevia." }
];

/* --- CART SYSTEM --- */
// Using a unique key to prevent conflicts with your old code
let cart = JSON.parse(localStorage.getItem('revitalsCart_Final')) || [];
updateCartCount();

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    
    // Open Cart immediately
    document.getElementById('cart-modal').style.display = 'flex';
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if(el) el.innerText = cart.length;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        renderCart();
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
                    <span>${item.name}</span>
                    <span>₹${item.price}</span>
                    <span class="remove-btn" onclick="removeFromCart(${index})">✕</span>
                </div>
            `;
        });
    }
    totalEl.innerText = '₹' + total;
}

function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Cart is empty!");
    
    let msg = "⚡ *NEW ORDER* ⚡%0A";
    let total = 0;
    cart.forEach(item => {
        msg += `- ${item.name} (₹${item.price})%0A`;
        total += item.price;
    });
    msg += `%0A*TOTAL: ₹${total}*`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
}

/* --- PAGE LOADERS --- */

// 1. If on SHOP page, generate grid
const shopContainer = document.getElementById('shop-container');
if (shopContainer) {
    shopContainer.innerHTML = products.map(p => `
        <div class="product-card" style="--card-color:${p.color}">
            <a href="product.html?id=${p.id}">
                <img src="${p.img}" onerror="this.src='assets/bottle-hero.png'">
            </a>
            <h3>${p.name}</h3>
            <span class="price">₹${p.price}</span>
            <button class="btn-main" onclick="addToCart(${p.id})">ADD TO CART</button>
        </div>
    `).join('');
}

// 2. If on PRODUCT DETAILS page, load info
if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        document.getElementById('p-image').src = product.img;
        document.getElementById('p-name').innerText = product.name;
        document.getElementById('p-name').style.setProperty('--p-color', product.color);
        document.getElementById('p-price').innerText = '₹' + product.price;
        document.getElementById('p-desc').innerText = product.desc;
        document.getElementById('p-ingredients').innerText = product.ingredients;
        document.getElementById('add-btn').onclick = () => addToCart(product.id);
    } else {
        document.querySelector('.detail-right').innerHTML = "<h2>Product Not Found</h2><a href='shop.html'>Return to Shop</a>";
    }
}

// Close Modal on Click Outside
window.onclick = function(e) {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) modal.style.display = "none";
}

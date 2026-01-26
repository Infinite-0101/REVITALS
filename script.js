/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; // REPLACE WITH YOUR NUMBER

/* --- 1. RICH PRODUCT DATABASE (10 FLAVORS) --- */
const products = [
    { 
        id: 0, 
        name: "Electric Blue", 
        price: 60, 
        img: "assets/blue.png", 
        color: "#00e5ff", 
        desc: "A shock to the system. Intense Blue Raspberry flavor engineered for rapid hydration.",
        benefits: ["⚡ Boosts Reaction Time", "🧠 Mental Clarity", "💧 3x Electrolytes"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Blue Raspberry Flavor, Blue Spirulina Extract (Color), Sea Salt, Stevia Leaf Extract, Vitamin B-Blend."
    },
    { 
        id: 1, 
        name: "Crimson Punch", 
        price: 60, 
        img: "assets/red.png", 
        color: "#ff0040", 
        desc: "Tropical Berry blast. The perfect recovery fuel after a heavy workout.",
        benefits: ["❤️ Supports Muscle Recovery", "🔋 Sustained Energy", "🛡️ Antioxidant Rich"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Tropical Punch Flavor, Beet Juice Concentrate (Color), Potassium Citrate, Stevia Leaf Extract."
    },
    { 
        id: 2, 
        name: "Citrus Charge", 
        price: 60, 
        img: "assets/orange.png", 
        color: "#ff8c00", 
        desc: "Zesty Orange Mango. Packed with Vitamin C and potassium.",
        benefits: ["🍊 Vitamin C Boost", "☀️ Morning Energy", "💪 Cramp Prevention"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Orange & Mango Flavors, Turmeric Extract (Color), Magnesium Citrate, Stevia Leaf Extract."
    },
    { 
        id: 3, 
        name: "Gravity Grape", 
        price: 60, 
        img: "assets/purple.png", 
        color: "#800080", 
        desc: "Deep Concord Grape. Hydration that pulls you back to earth.",
        benefits: ["💤 Post-Workout Chill", "🍇 Natural Polyphenols", "🧘 Focus Aid"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Grape Flavor, Fruit and Vegetable Juice (Color), Himalayan Pink Salt, Stevia Leaf Extract."
    },
    { 
        id: 4, 
        name: "Lime Strike", 
        price: 60, 
        img: "assets/green.png", 
        color: "#32cd32", 
        desc: "Sour Lemon Lime. A crisp, clean taste for hot days.",
        benefits: ["🍋 Alkaline Balance", "🧊 Instant Cooling", "🏃‍♂️ Endurance Support"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Lemon Lime Flavor, Spirulina & Turmeric (Color), Zinc Gluconate, Stevia Leaf Extract."
    },
    { 
        id: 5, 
        name: "Cherry Bomb", 
        price: 60, 
        img: "assets/cherry.png", 
        color: "#dc143c", 
        desc: "Wild Cherry explosion. Sweet, tart, and energizing.",
        benefits: ["🍒 Joint Support", "🔥 Explosive Power", "🩸 Iron Absorption"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Cherry Flavor, Cherry Juice Concentrate, Sea Salt, Stevia Leaf Extract, Vitamin B12."
    },
    { 
        id: 6, 
        name: "Arctic Ice", 
        price: 60, 
        img: "assets/white.png", 
        color: "#a5f2f3", 
        desc: "Frost Berry. Cool, refreshing, and crisp mystery blend.",
        benefits: ["❄️ Core Temperature Control", "🧊 Pure Hydration", "🌬️ Breath Freshening"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Frost Berry Flavor, Electrolyte Blend, Stevia Leaf Extract."
    },
    { 
        id: 7, 
        name: "Nebula Nectar", 
        price: 60, 
        img: "assets/pink.png", 
        color: "#ff69b4", 
        desc: "Exotic Dragonfruit. Out of this world sweetness.",
        benefits: ["🌌 Mood Elevation", "🌸 Skin Hydration", "✨ Natural Glow"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Dragonfruit Flavor, Vegetable Juice (Color), Vitamin E, Stevia Leaf Extract."
    },
    { 
        id: 8, 
        name: "Solar Flare", 
        price: 60, 
        img: "assets/yellow.png", 
        color: "#ffd700", 
        desc: "Peach Mango. Bright, sunny, and smooth.",
        benefits: ["🍑 Immune Defense", "👀 Vision Support", "🌞 Daily Vitality"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Peach & Mango Flavor, Beta Carotene (Color), Potassium, Stevia Leaf Extract."
    },
    { 
        id: 9, 
        name: "Watermelon Wave", 
        price: 60, 
        img: "assets/melon.png", 
        color: "#ff6b6b", 
        desc: "Sweet Melon. Like biting into a fresh watermelon.",
        benefits: ["🍉 Citrulline Boost", "💓 Heart Health", "🌊 Maximum Thirst Quench"],
        ingredients: "Filtered Water, Coconut Water Concentrate (10%), Natural Watermelon Flavor, Watermelon Juice Concentrate, Magnesium, Stevia Leaf Extract."
    }
];

/* --- 2. CART SYSTEM (NO POP-UP LOGIC) --- */
let cart = JSON.parse(localStorage.getItem('revitalsCart_Final')) || [];
updateCartCount();

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    
    updateCartCount();
    showToast(`${product.name} added to cart!`);
    // NOTE: We do NOT open the modal here anymore.
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    renderCart(); // Re-render if modal is open
    updateCartCount();
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if(el) el.innerText = cart.length;
}

// Shows the cart sidebar
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        renderCart();
    }
}

// Renders items inside the sidebar
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
                    <img src="${item.img}" style="width:30px; margin-right:10px;">
                    <div>
                        <div style="font-weight:bold;">${item.name}</div>
                        <div style="font-size:0.9rem; color:#888;">₹${item.price}</div>
                    </div>
                    <span class="remove-btn" onclick="removeFromCart(${index})">✕</span>
                </div>
            `;
        });
    }
    totalEl.innerText = '₹' + total;
}

/* --- 3. TOAST NOTIFICATION (The "Pop-up" replacement) --- */
function showToast(message) {
    // Create toast element
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.innerText = message;
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

/* --- 4. WHATSAPP CHECKOUT (POLITE REQUEST STYLE) --- */
function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Cart is empty!");
    
    let msg = "Hello ReVitals Team,%0A%0A";
    msg += "I would like to make an order request. Here are the details:%0A%0A";
    
    let total = 0;
    // Group items to make list cleaner? (Simple list for now)
    cart.forEach(item => {
        msg += `▪️ ${item.name} (₹${item.price})%0A`;
        total += item.price;
    });
    
    msg += `%0A*Total Order Value: ₹${total}*%0A%0A`;
    msg += "Please confirm availability and share payment details.";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
}

/* --- 5. PAGE LOAD LOGIC --- */

// If on SHOP page, generate grid
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

// If on PRODUCT DETAILS page, load detailed info
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
        
        // Load Benefits List
        const benefitsList = document.getElementById('p-benefits');
        benefitsList.innerHTML = product.benefits.map(b => `<li>${b}</li>`).join('');

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

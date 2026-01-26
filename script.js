/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; 

/* --- PRODUCT DATABASE --- */
const products = [
    { 
        id: 0, name: "Electric Blue", price: 60, img: "assets/blue.png", color: "#00e5ff", 
        desc: "Intense Blue Raspberry flavor engineered for rapid hydration.",
        benefits: ["⚡ Boosts Reaction Time", "🧠 Mental Clarity", "💧 3x Electrolytes"],
        ingredients: "Filtered Water, Coconut Water (10%), Natural Blue Raspberry Flavor, Blue Spirulina, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Vegan Friendly"]
    },
    { 
        id: 1, name: "Crimson Punch", price: 60, img: "assets/red.png", color: "#ff0040", 
        desc: "Tropical Berry blast. The perfect recovery fuel.",
        benefits: ["❤️ Muscle Recovery", "🔋 Sustained Energy", "🛡️ Antioxidant Rich"],
        ingredients: "Filtered Water, Coconut Water (10%), Natural Punch Flavor, Beet Juice, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Gluten Free"]
    },
    { 
        id: 2, name: "Citrus Charge", price: 60, img: "assets/orange.png", color: "#ff8c00", 
        desc: "Zesty Orange Mango with Vitamin C.",
        benefits: ["🍊 Vitamin C Boost", "☀️ Morning Energy", "💪 Cramp Prevention"],
        ingredients: "Filtered Water, Coconut Water (10%), Orange & Mango Flavors, Turmeric, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Vitamin Fortified"]
    },
    { 
        id: 3, name: "Gravity Grape", price: 60, img: "assets/purple.png", color: "#ae00ff", 
        desc: "Deep Concord Grape hydration.",
        benefits: ["💤 Chill Mode", "🍇 Natural Polyphenols", "🧘 Focus Aid"],
        ingredients: "Filtered Water, Coconut Water (10%), Grape Flavor, Vegetable Juice, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Non-GMO"]
    },
    { 
        id: 4, name: "Lime Strike", price: 60, img: "assets/green.png", color: "#32cd32", 
        desc: "Sour Lemon Lime. Crisp and clean.",
        benefits: ["🍋 Alkaline Balance", "🧊 Instant Cooling", "🏃‍♂️ Endurance"],
        ingredients: "Filtered Water, Coconut Water (10%), Lemon Lime Flavor, Spirulina, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Keto Friendly"]
    },
    { 
        id: 5, name: "Cherry Bomb", price: 60, img: "assets/cherry.png", color: "#dc143c", 
        desc: "Wild Cherry explosion.",
        benefits: ["🍒 Joint Support", "🔥 Explosive Power", "🩸 Iron Absorption"],
        ingredients: "Filtered Water, Coconut Water (10%), Cherry Flavor, Sea Salt, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Caffeine Free"]
    },
    { 
        id: 6, name: "Arctic Ice", price: 60, img: "assets/white.png", color: "#a5f2f3", 
        desc: "Frost Berry mystery blend.",
        benefits: ["❄️ Core Temp Control", "🧊 Pure Hydration", "🌬️ Fresh Breath"],
        ingredients: "Filtered Water, Coconut Water (10%), Frost Berry Flavor, Electrolytes, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Clear Formula"]
    },
    { 
        id: 7, name: "Nebula Nectar", price: 60, img: "assets/pink.png", color: "#ff69b4", 
        desc: "Exotic Dragonfruit sweetness.",
        benefits: ["🌌 Mood Elevation", "🌸 Skin Hydration", "✨ Natural Glow"],
        ingredients: "Filtered Water, Coconut Water (10%), Dragonfruit Flavor, Vitamin E, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Exotic Blend"]
    },
    { 
        id: 8, name: "Solar Flare", price: 60, img: "assets/yellow.png", color: "#ffd700", 
        desc: "Bright Peach Mango.",
        benefits: ["🍑 Immune Defense", "👀 Vision Support", "🌞 Daily Vitality"],
        ingredients: "Filtered Water, Coconut Water (10%), Peach Mango Flavor, Beta Carotene, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Daytime Blend"]
    },
    { 
        id: 9, name: "Watermelon Wave", price: 60, img: "assets/melon.png", color: "#ff6b6b", 
        desc: "Sweet Melon refresh.",
        benefits: ["🍉 Citrulline Boost", "💓 Heart Health", "🌊 Thirst Quench"],
        ingredients: "Filtered Water, Coconut Water (10%), Watermelon Flavor, Magnesium, Stevia.",
        specs: ["500ml Bottle", "Zero Sugar", "Recovery Blend"]
    }
];

/* --- CART SYSTEM --- */
let cart = JSON.parse(localStorage.getItem('revitalsCart_Final')) || [];
updateCartCount();

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('revitalsCart_Final', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} Added!`); 
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
        container.innerHTML = '<p style="color:#888; text-align:center; margin-top:20px;">Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" style="width:40px; margin-right:10px;">
                    <div style="flex-grow:1;">
                        <div style="font-weight:bold; font-size:0.9rem;">${item.name}</div>
                        <div style="font-size:0.8rem; color:#888;">₹${item.price}</div>
                    </div>
                    <span class="remove-btn" onclick="removeFromCart(${index})">✕</span>
                </div>
            `;
        });
    }
    totalEl.innerText = '₹' + total;
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2500);
}

function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Cart is empty!");
    let msg = "Hello ReVitals Team,%0A%0AOrder Request:%0A";
    let total = 0;
    cart.forEach(item => {
        msg += `▪️ ${item.name} (₹${item.price})%0A`;
        total += item.price;
    });
    msg += `%0A*TOTAL: ₹${total}*%0A%0APlease confirm details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
}

/* --- PAGE GENERATORS --- */

// 1. SHOP PAGE GENERATOR
const shopContainer = document.getElementById('shop-container');
if (shopContainer) {
    shopContainer.innerHTML = products.map(p => `
        <div class="product-card" style="--theme-color: ${p.color}">
            <a href="product.html?id=${p.id}">
                <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
            </a>
            <h3>${p.name}</h3>
            <span class="price">₹${p.price}</span>
            <button class="btn-main" onclick="addToCart(${p.id})">ADD</button>
            <a href="product.html?id=${p.id}" class="view-link">View Specs</a>
        </div> 
    `).join(''); 
}


// 2. PRODUCT DETAIL PAGE
if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        document.querySelector('.product-detail').style.setProperty('--theme-color', product.color);
        document.getElementById('p-image').src = product.img;
        document.getElementById('p-name').innerText = product.name;
        document.getElementById('p-price').innerText = '₹' + product.price;
        document.getElementById('p-desc').innerText = product.desc;
        document.getElementById('p-benefits').innerHTML = product.benefits.map(b => `<li>${b}</li>`).join('');
        document.getElementById('p-specs').innerHTML = product.specs.map(s => `<li>${s}</li>`).join('');
        
        // Link the button to the NEW Specs Page
        document.getElementById('specs-btn').href = `specs.html?id=${product.id}`;
        document.getElementById('add-btn').onclick = () => addToCart(product.id);
    }
}

// 3. SPECS PAGE (NEW)
if (window.location.pathname.includes('specs.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        // Set Theme Color
        document.body.style.setProperty('--theme-color', product.color);
        
        document.getElementById('s-name').innerText = product.name;
        document.getElementById('s-image').src = product.img;
        document.getElementById('s-ingredients').innerText = product.ingredients;
        document.getElementById('buy-now-btn').onclick = () => {
            addToCart(product.id);
            toggleCart(); // Open cart on the specs page
        };
    }
}

// Close Modal
window.onclick = function(e) {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) modal.style.display = "none";
}

/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; 
const products = [
    {
        id: 0,
        name: "Refuel",
        price: 60,
        img: "assets/blue.png",
        color: "#00e5ff",
        desc: "The original classic. Blue Raspberry flavor engineered for rapid hydration and instant energy recovery.",
        benefits: ["⚡ Fast Absorption", "🌊 Electrolyte Surge", "🧠 Focus Boost"],
        ingredients: "Filtered Water, Coconut Water, Blue Raspberry Extract, Blue Spirulina, Potassium.",
        specs: ["500ml", "Zero Sugar", "Vegan"]
    },
    {
        id: 1,
        name: "Crimson Punch",
        price: 60,
        img: "assets/red.png",
        color: "#ff0040",
        desc: "A knockout blend of Strawberry and Dragonfruit. Designed to keep you fighting through the fatigue.",
        benefits: ["🥊 Stamina Kick", "❤️ Heart Health", "🛡️ Immunity Support"],
        ingredients: "Water, Strawberry Puree, Dragonfruit Extract, Beet Juice (Color), Vitamin B12.",
        specs: ["500ml", "Low Calorie", "Gluten Free"]
    },
    {
        id: 2,
        name: "Citrus Charge",
        price: 60,
        img: "assets/orange.png",
        color: "#ff9100",
        desc: "Zesty Orange and Tangerine fusion. A vitamin C powerhouse to jumpstart your morning or workout.",
        benefits: ["🍊 Vitamin C High", "☀️ Mood Elevator", "🔋 Sustained Energy"],
        ingredients: "Spring Water, Orange Juice Concentrate, Tangerine Extract, Turmeric, Sea Salt.",
        specs: ["500ml", "No Caffeine", "Paleo"]
    },
    {
        id: 3,
        name: "Gravity Grape",
        price: 65,
        img: "assets/purple.png",
        color: "#bf00ff",
        desc: "Defy gravity with this heavy-hitting Concord Grape flavor. Deep, rich, and incredibly refreshing.",
        benefits: ["🚀 Anti-Gravity Focus", "🍇 Antioxidant Rich", "💤 Recovery Aid"],
        ingredients: "Water, Concord Grape Juice, Acai Berry, Magnesium, Stevia Leaf.",
        specs: ["500ml", "Night-Time Mode", "Keto"]
    },
    {
        id: 4,
        name: "Arctic Ice",
        price: 70,
        img: "assets/ice.png",
        color: "#ccffff",
        desc: "A crisp blast of White Cherry and Glacier Mint. Cooling technology for the hottest days.",
        benefits: ["❄️ Core Cooling", "🌬️ Breath Freshener", "🧊 Inflammation Relief"],
        ingredients: "Glacier Water, White Cherry, Mint Essence, Electrolyte Salts, Zinc.",
        specs: ["500ml", "Extra Cold", "Zero Carbs"]
    },
    {
        id: 5,
        name: "Lime Strike",
        price: 60,
        img: "assets/green.png",
        color: "#aeff00",
        desc: "Sharp, sour, and electric. A Lemon-Lime shock to the system that wakes up your taste buds.",
        benefits: ["⚡ Instant Alertness", "🍋 Digestive Aid", "🟢 pH Balance"],
        ingredients: "Sparkling Water, Lime Juice, Lemon Zest, Green Coffee Bean, Agave.",
        specs: ["500ml", "Sour Hit", "Organic"]
    },
    {
        id: 6,
        name: "Nebula Nectar",
        price: 80,
        img: "assets/nebula.png",
        color: "#aa00ff",
        desc: "A cosmic mystery flavor. Tastes like a mix of berries from another galaxy. Limited Edition.",
        benefits: ["🌌 Cosmic Clarity", "✨ Rare Vitamins", "🛸 Zero Gravity Feel"],
        ingredients: "Starfruit, Blackberry, Hibiscus, L-Theanine, Butterfly Pea Flower.",
        specs: ["500ml", "Limited Edition", "Exotic"]
    },
    {
        id: 7,
        name: "Cherry Bomb",
        price: 65,
        img: "assets/cherry.png",
        color: "#880000",
        desc: "Explosive Black Cherry flavor. High caffeine content for when you need to blow past your limits.",
        benefits: ["💣 Explosive Power", "🍒 Muscle Recovery", "🔥 Metabolism Boost"],
        ingredients: "Water, Black Cherry Juice, Guarana Seed, Taurine, Red Beet.",
        specs: ["500ml", "High Caffeine", "Pre-Workout"]
    },
    {
        id: 8,
        name: "Solar Fire",
        price: 65,
        img: "assets/fire.png",
        color: "#ff4d00",
        desc: "Spicy Mango and Chili. A heat-infused tropical blend that activates your metabolism.",
        benefits: ["🔥 Thermogenic", "🌶️ Metabolism Spike", "🥭 Tropical Vibe"],
        ingredients: "Water, Mango Puree, Chili Extract, Ginger Root, Vitamin D3.",
        specs: ["500ml", "Spicy Kick", "Fat Burner"]
    },
    {
        id: 9,
        name: "Watermelon Wave",
        price: 60,
        img: "assets/watermelon.png",
        color: "#ff0066",
        desc: "Sweet, juicy watermelon with a hint of cucumber. The ultimate thirst quencher.",
        benefits: ["🌊 Max Hydration", "🍉 Skin Glow", "🥒 Cool & Calm"],
        ingredients: "Water, Watermelon Juice, Cucumber Essence, Pink Himalayan Salt, Aloe Vera.",
        specs: ["500ml", "Summer Edition", "Low Sugar"]
    }
];




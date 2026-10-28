const Products = [
    { id: 1, name: "MacBook Pro", description: "MacBook Pro 13-inch with M2 chip and 8-core CPU", price: 2000, quantity: 10, discount: 15, subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "black" },
    { id: 2, name: "Dell Monitor 27", price: 300, quantity: 20, discount: 10, description: "Crystal clear 27-inch 4K UHD monitor for professional work.", subSubCategoryId: "2", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/hp-zbook-firefly-14-g8-1.jpg", rate: 4, color: "black" },
    { id: 3, name: "Mechanical Keyboard", price: 120, quantity: 50, discount: 5, description: "High-performance mechanical keyboard with tactile switches.", subSubCategoryId: "3", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/logitech-mx-mini-tactile-quiet-1-600x686.jpg", rate: 4, color: "white" },
    { id: 4, name: "Logitech Mouse", price: 60, quantity: 40, discount: 20, description: "Ergonomic wireless mouse with precision tracking.", subSubCategoryId: "3", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/steelseries-sensei-ten-1.jpg", rate: 5, color: "silver" },

    { id: 5, name: "iPhone 15", price: 999, quantity: 25, discount: 0, description: "Latest model with A16 Bionic chip and advanced camera system.", subSubCategoryId: "5", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-iphone-13-pro-max-gold-5.jpg", rate: 5, color: "orchid" },
    { id: 6, name: "Apple Watch Series 9", price: 450, quantity: 30, discount: 0, description: "Smartwatch with advanced health features and always-on display.", subSubCategoryId: "6", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/samsung-galaxy-watch-5-1.jpg", rate: 5, color: "black" },

    { id: 7, name: "PlayStation 5", price: 500, quantity: 15, discount: 0, description: "Next-gen gaming console with ultra-high speed SSD.", subSubCategoryId: "7", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/playstation-5-1-212x242.jpg", rate: 5, color: "silver" },
    { id: 8, name: "Xbox Series X", price: 480, quantity: 18, discount: 0, description: "Fastest, most powerful Xbox ever designed for future of gaming.", subSubCategoryId: "8", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/xbox-series-x-hi-1-263x300.jpg", rate: 5, color: "white" },

    // باقي العناصر نفس الفكرة 👇 (كلهم discount: 0 ومحتفظين بكل البيانات)
    { id: 9, name: "MacBook Air M1", price: 1200, quantity: 12, discount: 0, description: "Lightweight laptop with Apple M1 chip and all-day battery.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },

    // ... كمل بنفس النمط لباقي المنتجات لحد 40
]

export default Products;
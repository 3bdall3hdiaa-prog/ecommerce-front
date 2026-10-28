import { ShoppingCart } from 'lucide-react'
import { Category, Subcategory, Subsubcategory, Product } from '../types/Product'
export const getProductData = (productId: string) => {
    const categories: Category[] = [
        {
            id: 1,
            name: "electronics",
            icon: ShoppingCart,
        }
    ]
    const subcategories = [
        {
            id: 1,
            name: "computers",
            categoryId: 1,
            image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Computers.jpg"
        },
        {
            id: 2,
            name: "phones",
            categoryId: 1,
            image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Phones.jpg"
        },
        {
            id: 3,
            name: "consoles",
            categoryId: 1,
            image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Gaming.jpg"
        }]
    const sub_subcategories: Subsubcategory[] = [
        // computers
        { id: 1, name: "laptops", subcategoryId: 1, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Laptops.jpg" },
        { id: 3, name: "peripherals", subcategoryId: 1, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Peripherals.jpg" },

        // phones
        { id: 5, name: "iphone", subcategoryId: 2, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/iPhone.jpg" },
        { id: 6, name: "watches", subcategoryId: 2, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/Phones-Parts.jpg" },

        // consoles
        { id: 7, name: "playstation", subcategoryId: 3, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/playstation-consoles.jpg.webp" },
        { id: 8, name: "xbox", subcategoryId: 3, image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/consoles-xbox-consoles.jpg.webp" }
    ]
    const products: Product[] = [
        { id: 1, name: "MacBook Pro", description: "MacBook Pro 13-inch with M2 chip and 8-core CPU", price: 2000, subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "black" },
        { id: 2, name: "Dell Monitor 27", price: 300, description: "Crystal clear 27-inch 4K UHD monitor for professional work.", subSubCategoryId: "2", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/hp-zbook-firefly-14-g8-1.jpg", rate: 3, color: "black" },
        { id: 3, name: "Mechanical Keyboard", price: 120, description: "High-performance mechanical keyboard with tactile switches.", subSubCategoryId: "3", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/logitech-mx-mini-tactile-quiet-1-600x686.jpg", rate: 2, color: "white" },
        { id: 4, name: "Logitech Mouse", price: 60, description: "Ergonomic wireless mouse with precision tracking.", subSubCategoryId: "3", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/steelseries-sensei-ten-1.jpg", rate: 1, color: "silver" },

        { id: 5, name: "iPhone 15", price: 999, description: "Latest model with A16 Bionic chip and advanced camera system.", subSubCategoryId: "5", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-iphone-13-pro-max-gold-5.jpg", rate: 5, color: "orchid" },
        { id: 6, name: "Apple Watch Series 9", price: 450, description: "Smartwatch with advanced health features and always-on display.", subSubCategoryId: "6", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/samsung-galaxy-watch-5-1.jpg", rate: 4, color: "black" },

        { id: 7, name: "PlayStation 5", price: 500, description: "Next-gen gaming console with ultra-high speed SSD.", subSubCategoryId: "7", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/playstation-5-1-212x242.jpg", rate: 3, color: "silver" },
        { id: 8, name: "Xbox Series X", price: 480, description: "Fastest, most powerful Xbox ever designed for future of gaming.", subSubCategoryId: "8", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/xbox-series-x-hi-1-263x300.jpg", rate: 2, color: "white" },
        { id: 9, name: "MacBook Air M1", price: 1200, description: "Lightweight laptop with Apple M1 chip and all-day battery.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },
        { id: 10, name: "Dell XPS 13", price: 1400, description: "Premium ultrabook with stunning InfinityEdge display.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 11, name: "HP Spectre x360", price: 1350, description: "Convertible laptop with sleek design and touchscreen.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "blue" },
        { id: 12, name: "Lenovo ThinkPad X1", price: 1500, description: "Business-class laptop known for durability and performance.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 13, name: "Asus ZenBook 14", price: 1100, description: "Slim and powerful laptop perfect for productivity.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "gray" },
        { id: 14, name: "Acer Swift 3", price: 900, description: "Affordable ultrabook with strong everyday performance.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },
        { id: 15, name: "MSI Stealth 15", price: 1600, description: "Gaming laptop with high refresh rate display.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 16, name: "Razer Blade 14", price: 2100, description: "High-end gaming laptop with powerful GPU.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 17, name: "Huawei MateBook X", price: 1250, description: "Elegant ultrabook with vibrant display.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },
        { id: 18, name: "LG Gram 16", price: 1700, description: "Ultra-light laptop with a large 16-inch display.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "white" },
        { id: 19, name: "Samsung Galaxy Book3", price: 1300, description: "Sleek laptop integrated with Samsung ecosystem.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "gray" },
        { id: 20, name: "Asus ROG Zephyrus G14", price: 1800, description: "Compact gaming laptop with powerful Ryzen processor.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 21, name: "Dell Inspiron 15", price: 850, description: "Reliable everyday laptop for work and study.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "silver" },
        { id: 22, name: "HP Pavilion 14", price: 780, description: "Balanced laptop with good performance and design.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "blue" },
        { id: 23, name: "Lenovo IdeaPad 5", price: 820, description: "Affordable laptop with solid build quality.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "gray" },
        { id: 24, name: "Acer Predator Helios 300", price: 1750, description: "Powerful gaming laptop with advanced cooling.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 25, name: "MacBook Pro 16", price: 2500, description: "Powerful laptop with M2 Pro chip for professionals.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "silver" },
        { id: 26, name: "Dell XPS 15", price: 1900, description: "High-end ultrabook with powerful Intel processor.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "black" },
        { id: 27, name: "HP Envy 14", price: 1200, description: "Elegant laptop designed for creators and professionals.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "gray" },
        { id: 28, name: "Lenovo Yoga 9i", price: 1450, description: "Convertible laptop with premium design and touchscreen.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "silver" },
        { id: 29, name: "Asus VivoBook 15", price: 700, description: "Affordable laptop perfect for daily tasks.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "blue" },
        { id: 30, name: "Acer Aspire 5", price: 650, description: "Reliable laptop with good battery life.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "black" },
        { id: 31, name: "MSI Modern 14", price: 900, description: "Lightweight laptop with modern design.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "gray" },
        { id: 32, name: "Razer Blade 15", price: 2200, description: "Premium gaming laptop with powerful GPU.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 33, name: "Samsung Galaxy Book Pro", price: 1350, description: "Thin and light laptop with AMOLED display.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },
        { id: 34, name: "Huawei MateBook D15", price: 800, description: "Affordable laptop with sleek metal body.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 3, color: "gray" },
        { id: 35, name: "LG Gram 14", price: 1500, description: "Ultra-light laptop with long battery life.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "white" },
        { id: 36, name: "Asus TUF Gaming F15", price: 1600, description: "Durable gaming laptop with high performance.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 37, name: "Acer Nitro 5", price: 1400, description: "Popular gaming laptop with powerful graphics.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "red" },
        { id: 38, name: "Lenovo Legion 5", price: 1700, description: "High performance gaming laptop with advanced cooling.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 5, color: "black" },
        { id: 39, name: "Dell Latitude 7420", price: 1550, description: "Business laptop with strong security features.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "silver" },
        { id: 40, name: "HP EliteBook 840", price: 1650, description: "Premium business laptop with elegant design.", subSubCategoryId: "1", image: "https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/03/apple-macbook-air-13-2020-gold-1.jpg", rate: 4, color: "gray" }

    ]
    const product: Product | any = products.find((product: any) => product.id === parseInt(productId))
    const sub_subcategory: Subsubcategory | undefined = sub_subcategories.find((sub_subcategory: any) => sub_subcategory.id === parseInt(product.subSubCategoryId))
    const subcategory: Subcategory | undefined = subcategories.find((subcategory: any) => subcategory.id === sub_subcategory?.subcategoryId)
    const category = categories.find((category: any) => category.id === subcategory?.categoryId)



    return { product, sub_subcategory, subcategory, category }
}
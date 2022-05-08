const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      onSale: true,
      product: "Socks",
      brand: "Vue Mastery",
      // image: "/Images/blue-socks.webp",
      selectedVariant: 0,
      // inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "/Images/green-socks.webp", quantity: 50 },
        { id: 2235, color: "blue", image: "/Images/blue-socks.webp", quantity: 0 },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteFromCart(){
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
  },
  computed: { // this property stores value in cache therefore boost performance
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].image
    },
    inStock(){
      return this.variants[this.selectedVariant].quantity
    },
    sale(){
      return this.brand + ' ' + this.product + ' is on sale' 
    }
  }
});


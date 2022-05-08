app.component("product-display", {
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1 v-if="onSale">{{sale}}</h1>
        <h1 v-else>{{ title }}</h1>
        <p v-if="inStock">In Stock</p> 
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant,index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle" :style="{backgroundColor: variant.color}"
          >
          <!-- {{ variant.color }} -->
        </div>
        <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
        <button class="button" :class="{disabledButton: cart == 0}" @click="deleteFromCart">Delete from Cart</button>
      </div>
    </div>
  </div>`,
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
        {
          id: 2234,
          color: "green",
          image: "/Images/green-socks.webp",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "/Images/blue-socks.webp",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteFromCart() {
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    // this property stores value in cache therefore boost performance
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      return this.brand + " " + this.product + " is on sale";
    },
  },
});

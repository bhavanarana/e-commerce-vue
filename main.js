const app = Vue.createApp({
  //we have acess vue through installation, create our vue app
  data() {
    // In argument we pass data property which is a function
    return {
      product: "Socks", // here we have store our data
      image: "/Images/blue-socks.webp",
      //   inStock: true
      productItem: 100,
      onSale: true
    };
  },
});

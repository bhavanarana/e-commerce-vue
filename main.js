const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      // details: ["cotton: 70", "woolen: 60"]
    };
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    },
    deleteCart(id){
      this.cart.pop(id)
    }
  }
});


const app = new Vue({
  el: "#app",
  data: {
    title: "Working with Vue :)",
    fruits: [
      // 'Apple', 'Watermelon', 'Pineapple'
      //object
      { name: "Apple", amount: 200 },
      { name: "Watermelon", amount: 900 },
      { name: "Pineapple", amount: 0 },
    ],

    newFruit: "",
    total: 0,
  },

  // Os metodos vão cobrir as fuções que precisamos dentro de vue
  methods: {
    addFruit() {
      // console.log('on in click');
      //Para add os dados no Arrey, devemos procesar a função, chamando o array <fruits>
      //Com this podemos aceder a todas as propiedades que estão dentro da nossa instância
      this.fruits.push({
        //para aceder a newFruit
        name: this.newFruit,
        amount: 0,
      });
      //Para reniciar o input para ficar vazio, temos que determiar  que  fique novamente  vazio, portanto temos que ensirir fora do push
      this.newFruit = "";
    },
  },

  computed: {
    countFruits() {
      this.total = 0;
      for (fruit of this.fruits) {
        this.total += fruit.amount;
      }
      return this.total;
    },
  },
});

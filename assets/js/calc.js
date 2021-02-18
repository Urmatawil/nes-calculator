Vue.createApp({
  el: "app",

  data() {
    return {
      keyInput: "",
      total: "",
      showTotal: false,
      operation: "",
      operators: ["/", "*", "-", "+"],
      keys: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      keyScr: "",
    };
  },

  computed: {
    showScreen: function () {
      if (this.showTotal) return this.total;
      else return this.keyInput === "" ? "0" : this.keyInput;
    },
  },

  methods: {
    numberScreen: function (e) {
      if (this.showTotal) this.showTotal = false;
      this.keyInput += e.target.value;
    },

    operationScreen: function (e) {
      this.operation = e.target.value;
      this.keyScr = this.keyInput;
      this.keyInput = "";
    },

    calculate: function (n1, op, n2) {
      switch (op) {
        case "+":
          return parseFloat(n1) + parseFloat(n2);
        case "-":
          return parseFloat(n1) - parseFloat(n2);
        case "*":
          return parseFloat(n1) * parseFloat(n2);
        case "/":
          return parseFloat(n1) / parseFloat(n2);
      }
    },

    equalFunction: function (e) {
      this.total = this.calculate(this.keyScr, this.operation, this.keyInput);
      this.operation = "";
      this.keyInput = "";
      this.showTotal = true;
    },

    clear: function () {
      this.keyInput = "";
      this.total = "";
      this.keyScr = "";
      this.operation = "";
      this.showTotal = false;
    },
  },
}).mount("#app");

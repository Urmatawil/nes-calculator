Vue.createApp({
  el: "app",

  data() {
    return {
      keyInput: "",
      operators: ["/", "*", "-", "+"],
      keys: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      result: "",
      showTotal: false,
    };
  },

  computed: {
    showScreen: function () {
      if (this.showTotal) return this.result;
      else return this.keyInput === "" ? "0" : this.keyInput;
    },
  },

  methods: {
    calculate: function (e) {
      this.keyInput += e.target.value;
    },

    equal: function () {
      parseFloat((this.result = eval(this.keyInput)));
      this.keyInput = "";
    },

    clear: function () {
      (this.keyInput = ""), (this.result = ""), (this.showTotal = false);
    },
  },
}).mount("#app");

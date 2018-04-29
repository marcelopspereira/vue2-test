import Vue from "vue";
import { Time } from "./time";

var app = new Vue({
  el: "#app",
  data: {
    times: [
      new Time("America PR", require("./assets/atletico-pr_60x60.png")),
      new Time("America MG", require("./assets/atletico_mg_60x60.png"))
    ],
    alfabeto: {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      e: "E"
    }
  }
});

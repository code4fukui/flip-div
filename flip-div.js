import { style } from "https://js.sabae.cc/css.js";

class FlipDIV extends HTMLElement {
  static init = false;
  constructor() {
    super();

    this.onclick = () => {
      this.classList.toggle("flip");
    };
    if (FlipDIV.init) {
      return;
    }
    FlipDIV.init = true;
    style({
      "flip-div": {
        position: "relative",
      },
      "flip-div *:first-child": {
        position: "relative",
        "backface-visibility": "hidden",
        transform: "rotateY(0deg)",
        transition: "all .2s ease",
      },
      "flip-div *:nth-child(2)": {
        position: "absolute",
        top: 0,
        left: 0,
        "backface-visibility": "hidden",
        transform: "rotateY(180deg)",
        transition: "all .2s ease",
      },
      "flip-div.flip *:first-child": {
        transform: "rotateY(180deg)",
      },
      "flip-div.flip *:nth-child(2)": {
        transform: "rotateY(0deg)",
      },
    });
  }
}

customElements.define("flip-div", FlipDIV);

export { FlipDIV };

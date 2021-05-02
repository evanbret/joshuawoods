// cd into root directory and then run:
// python -m SimpleHTTPServer

import { scenes } from "./storydata.js";

let freezeClic = true; // just modify that variable to disable all clics events

document.addEventListener("click", e => {
    if (freezeClic) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

let timeDelay = 0;

const tappity = (opt, text) => {
  opt.innerHTML = "";
  const textLen = text.split("").length;
  text.split("").map((char, i) => {
    setTimeout(() => {
      const currentText = i%2 != 0 ? opt.innerHTML.slice(0, -1) : opt.innerHTML;
      opt.innerHTML = currentText + char + (i == textLen - 1 || (i%2 != 0) ? "" : "_");
  }, timeDelay + (i * 100));
  })
  timeDelay += textLen * 100; 
}

window.onload = () => {
  const questionBox = document.querySelector("#questionbox");
  let currentScenario;
  let blinkCursor; 
  function resetScenario(option) {
    freezeClic = true;
    clearInterval(blinkCursor);
    timeDelay = 0;
    currentScenario = option ? scenes[currentScenario] && scenes[currentScenario][option] && scenes[currentScenario][option]["result"] : "aa";
    // only true if no options
    tappity(questionBox, scenes[currentScenario]["q"]);
    //questionBox.innerHTML = scenes[currentScenario]["q"];
    let lastOption;
    document.querySelectorAll(".option").forEach((opt, i) => {
      const optId = opt.getAttribute("id");
      const thisOption = scenes[currentScenario][optId];
      if (thisOption !== undefined) {
        lastOption = opt;
        tappity(opt, thisOption["text"]);
      } else {
        opt.innerHTML = "";
      }
      if (i == document.querySelectorAll(".option").length - 1) {
        setTimeout(() => {
          blinkCursor = setInterval(() => {
            const currentLast = lastOption.innerHTML; 
            lastOption.innerHTML = currentLast.substr(-1) == "_" ? currentLast.slice(0, -1) : currentLast + "_";
          }, 100);
          freezeClic = false;
        }, timeDelay + 100);
      }
    })
  }

  document.querySelectorAll(".option").forEach((opt) => {
    opt.addEventListener("click", function() {
      resetScenario(opt.getAttribute("id"));
    })
  })

  resetScenario();
}
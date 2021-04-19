// cd into root directory and then run:
// python -m SimpleHTTPServer

import { scenes } from "./storydata.js";

window.onload = () => {
  const questionBox = document.querySelector("#questionbox");
  let currentScenario;

  function resetScenario(option) {
    currentScenario = option ? scenes[currentScenario] && scenes[currentScenario][option] && scenes[currentScenario][option]["result"] : "aa";
    questionBox.innerHTML = scenes[currentScenario]["q"];
    document.querySelectorAll(".option").forEach((opt) => {
      const optId = opt.getAttribute("id");
      const thisOption = scenes[currentScenario][optId];
      if (thisOption !== undefined) {
          opt.innerHTML = thisOption["text"];
      } else {
        opt.innerHTML = "";
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
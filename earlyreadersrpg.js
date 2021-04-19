// cd into earlyreadersrpg directory and then run:
// python -m SimpleHTTPServer

import { scenes } from "./storydata.js";

window.onload = () => {
  let currentScenario = "aa";
  const questionBox = document.querySelector("#questionbox");

  function resetScenario(option) {
    currentScenario = scenes[currentScenario] && scenes[currentScenario][option] && scenes[currentScenario][option]["result"];
    questionBox.innerHTML = scenes[currentScenario]["q"];
    document.querySelectorAll(".option").forEach((opt) => {
      const optId = opt.getAttribute("id");
      const thisOption = scenes[currentScenario][optId];
      if (thisOption !== undefined) {
        opt.innerHTML = thisOption["text"];
      }
    })
  }

  document.querySelectorAll(".option").forEach((opt) => {
    opt.addEventListener("click", function() {
      resetScenario(opt.getAttribute("id"));
    })
  })
}
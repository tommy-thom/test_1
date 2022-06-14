import { test_1 } from "../../declarations/test_1";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with test_1 actor, calling the greet method
  const greeting = await test_1.greet(name);

  document.getElementById("greeting").innerText = greeting;
});

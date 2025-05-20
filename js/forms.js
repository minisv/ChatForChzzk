'use strict'

const chatBox = document.getElementById("chat");

let addMessage = (msg) => {
  const p = document.createElement("p");
  p.textContent = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

export { addMessage }
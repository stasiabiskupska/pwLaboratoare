const message = document.getElementById("message");

message.addEventListener("input", (event) => {
  console.log(event.target.value);
  localStorage.setItem("message", event.target.value);
});

function restoreMessage() {
  message.value =
    localStorage.getItem("message") !== null
      ? localStorage.getItem("message")
      : "Write your message";
}

document.onload = restoreMessage();

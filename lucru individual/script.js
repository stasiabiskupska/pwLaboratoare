const fetchButton = document.getElementById("fetchButton");

fetchButton.addEventListener("click", async () => {
  getUserAsync().then((data) =>
    setTimeout(() => log(`Fetched data: ${JSON.stringify(data)}`), 3000)
  );
  document.getElementById("message").innerText = "Waiting response...";
});

function log(message) {
  document.getElementById("message").innerText = message;
}

async function getUserAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
  return data;
}

(function connect() {
  let socket = io.connect("http://localhost:3000");

  function outputItem(item) {
    const div = document.createElement("div");

    div.innerHTML = `<div>
      <h2>${item.title}</h2>
      <img src="${item.enclosure?.url}" style="width:30%">
      <p>${item.content}</p>
      <p>Categories: ${item.categories}</p>
      <p>Creator: ${item.creator}</p>
    </div>
    <hr>`;
    document.querySelector(".items").prepend(div);
  }

  socket.on("feed", (item) => {
    outputItem(item);
  });
})();

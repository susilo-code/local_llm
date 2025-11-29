async function smart() {
  const query = document.getElementById("smart").value;

  // Tampilkan loading
  document.querySelector(".movie-container").innerHTML = `
    <div class="text-center">
      <div class="spinner-border" role="status"></div>
      <p>Generating response...</p>
    </div>
  `;

  const res = await fetch("http://localhost:11434/api/generate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "model": "llama3.2:3b",
      "prompt": query,
      "stream": false
    })
  });

  const data = await res.json();

  // Tampilkan dalam card
  document.querySelector(".movie-container").innerHTML = `
    <div class="card shadow p-3">
      <h5 class="card-title">Your Question:</h5>
      <p>${query}</p>
      <hr>
      <h5 class="card-title">LLM Response:</h5>
      <p>${data.response}</p>
    </div>
  `;
}


// smart()
const API_BASE = "http://localhost:4000"; // backend server

async function loadRecipes() {
  const res = await fetch(`${API_BASE}/recipes`);
  const data = await res.json();
  const container = document.getElementById("recipes");
  container.innerHTML = "";
  data.items.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${r.title}</h3>
      <p><strong>Ingredients:</strong> ${r.ingredients}</p>
      <p><strong>Steps:</strong> ${r.steps}</p>`;
    container.appendChild(card);
  });
}

document.getElementById("recipe-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const steps = document.getElementById("steps").value.trim();
  await fetch(`${API_BASE}/recipes`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ title, ingredients, steps })
  });
  e.target.reset();
  loadRecipes();
});

loadRecipes();

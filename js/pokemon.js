let pokemon = new Array(
  "Pikachu",
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
  "Snorlax",
  "Magikarp",
  "Eevee"
);

function habilidades() {
  for (let i = 0; i < pokemon.length; i++) {
    let habilidadAleatoria = Math.floor(Math.random() * 100); // Genera una habilidad aleatoria entre 0 y 99
    pokemon[i] += " - " + habilidadAleatoria;
  }
}

function promedio() {
  for (let i = 0; i < pokemon.length; i++) {
    let habilidad = parseInt(pokemon[i].split(" - ")[1]);
    if (habilidad >= 70) {
      pokemon[i] += " - Apto ✅";
    } else {
      pokemon[i] += " - No apto ❌";
    }
  }
}

habilidades();
promedio();

document.write(pokemon.join("<br>"));

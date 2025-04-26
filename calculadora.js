// Crear elementos básicos
const body = document.body;
body.style.background = "#111";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.fontFamily = "Arial, sans-serif";

// Contenedor
const calc = document.createElement("div");
calc.style.background = "#222";
calc.style.padding = "20px";
calc.style.borderRadius = "20px";
calc.style.boxShadow = "0 0 20px #0ff";
calc.style.width = "300px";
body.appendChild(calc);

// Pantalla
const pantalla = document.createElement("div");
pantalla.textContent = "0";
pantalla.style.background = "#000";
pantalla.style.color = "#0f0";
pantalla.style.fontSize = "2em";
pantalla.style.textAlign = "right";
pantalla.style.padding = "15px";
pantalla.style.borderRadius = "10px";
pantalla.style.marginBottom = "15px";
pantalla.style.overflowX = "auto";
calc.appendChild(pantalla);

// Botones
const botones = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
];

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "10px";
calc.appendChild(grid);

let operacion = "";

botones.forEach(boton => {
  const btn = document.createElement("button");
  btn.textContent = boton;
  btn.style.padding = "15px";
  btn.style.fontSize = "1.2em";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.cursor = "pointer";
  btn.style.background = boton === "=" ? "#0f0" : boton === "C" ? "#f00" : "#333";
  btn.style.color = boton === "=" ? "#000" : "#fff";
  
  btn.addEventListener("click", () => {
    if (boton === "C") {
      operacion = "";
      pantalla.textContent = "0";
    } else if (boton === "=") {
      try {
        operacion = eval(operacion).toString();
        pantalla.textContent = operacion;
      } catch (e) {
        pantalla.textContent = "Error";
        operacion = "";
      }
    } else {
      operacion += boton;
      pantalla.textContent = operacion;
    }
  });

  grid.appendChild(btn);
});

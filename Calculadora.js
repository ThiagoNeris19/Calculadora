let display = document.getElementById("display");

function inserir(valor) {
  if (display.innerText === "0" || display.innerText === "Erro") {
    display.innerText = valor;
  } else {
    display.innerText += valor;
  }
}

function limpar() {
  display.innerText = "0";
}

function calcular() {
  try {
    display.innerText = eval(
      display.innerText.replace(/×/g, "*").replace(/÷/g, "/")
    );
  } catch {
    display.innerText = "Erro";
  }
}

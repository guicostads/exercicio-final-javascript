let num = document.getElementById("numero");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let valores = [];
let btn = document.getElementById("btn");
let remover = document.getElementById("remover");
let reset = document.getElementById("reset");

// add elementos com o 'enter'
num.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});

// remover ultimo item da array e da lista com o botão
remover.addEventListener("click", clean);

// remove todos items da lista e do array
reset.addEventListener("click", resetAll);

function clean() {
  valores.splice(-1);
  lista.removeChild(lista.lastChild);
  res.innerHTML = "";
}

function resetAll() {
  valores.length = 0;
  let child = lista.lastElementChild;
  while (child) {
    lista.removeChild(child);
    child = lista.lastElementChild;
  }
  res.innerHTML = "";
}

// insere os números no array, mostra na lista e avisa se número não é válido.

function addNum() {
  if (
    num.value > 0 &&
    num.value <= 100 &&
    valores.indexOf(Number(num.value)) === -1
  ) {
    valores.push(Number(num.value));
    let opt = document.createElement("option");
    opt.innerText = `Número ${Number(num.value)} adicionado.`;
    lista.appendChild(opt);
    num.value = "";
  } else {
    window.alert(
      "Por favor, insira um número válido ou que ainda não foi adicionado a lista."
    );
  }
}

function result() {
  let max = Math.max(...valores);
  let min = Math.min(...valores);
  let soma = 0;
  let media = 0;

  for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
    media = soma / valores.length;
  }

  if (valores == 0) {
    alert("Por favor, adicione algum número válido na lista.");
  } else {
    res.innerHTML = `Ao todo temos ${valores.length} números cadastrados. <br><br>
    O maior valor informado foi ${max}. <br><br>
    O menor valor informado foi ${min}. <br><br>
    A soma dos valores informados é ${soma}. <br><br>
    A média dos valores informados é ${media}.`;
  }
}

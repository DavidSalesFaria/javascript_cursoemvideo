let lista_num = [];
const input_num = document.querySelector("input#txtnumero")
const selec_box = document.querySelector("select#selnum");
const addButt = document.querySelector("input#addbutt");
addButt.addEventListener("click", function () {
  adicionarNum(lista_num);
});
const finButt = document.querySelector("input#finbutt");
finButt.addEventListener("click", function () {
  finalizar(lista_num);
});
const resp = document.querySelector("div#resp");


function adicionarNum(lista) {
  input_num.setAttribute("class", "")
  val = Number(input_num.value);

  if ((val < 1 || val > 100)) {
    window.alert("ERRO! Digite um número entre 1 e 100");
    input_num.value = "";
    input_num.setAttribute("class", "erro")
  } 
  else if (lista.includes(val)) {
    window.alert("ERRO! Número já cadastrado");
    input_num.setAttribute("class", "erro");
  } 
  else {
    opt = document.createElement("option");
    opt.setAttribute("id", "opt");
    opt.innerText = `Valor ${val} adicionado`;
    selec_box.appendChild(opt);
    lista.push(val);
    input_num.value = "";
    input_num.focus();
  }
  
}

function finalizar(lista) {
  input_num.setAttribute("class", "");
  if (selec_box.querySelectorAll("option").length == 0) {
    window.alert("Insira valores antes de finalizar!");
    input_num.setAttribute("class", "erro");
  } else {

    let quant = 0
    // Quantifica os valores cadastrados
    for (i = 0; i < lista.length; i++) {
      quant++;
    }

    let maior = lista[0]
    let menor = lista[0]
    // Define o maior e o menor valor
    for (i = 0; i < lista.length; i++) {
      if (lista[i] > maior) {
        maior = lista[i];
      }
      if (lista[i] < menor){
        menor = lista[i]
      }
    }

    let soma = 0
    // Calcula a soma dos valores cadastrados
    for (i = 0; i < lista.length; i++) {
      soma += lista[i];
    }

    // Calcula a média dos valores cadastrados
    media = soma / quant;

    str_resp = ``
    str_resp += `<p> Ao todo temos ${quant} números cadastrados </p>`;
    str_resp += `<p> O maior valor informado foi ${maior} </p>`;
    str_resp += `<p> O menor valor informado foi ${menor} </p>`;
    str_resp += `<p> A soma de todos os valores é ${soma} </p>`;
    str_resp += `<p> A média dos valores é ${media} </p>`;
    resp.innerHTML = str_resp
  }
}
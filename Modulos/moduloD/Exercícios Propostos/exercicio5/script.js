function carregar(){
    lista_num = []
    // Selecionar elementos html
    //
    // Input
    input_num = document.querySelector("input#txtnumero");
    selec_box = document.querySelector("select#selnum");
    // Resposta
    resp = document.querySelector("div#resp");
}

function adicionarNum(){
    
    val = Number(input_num.value)
    opt = document.createElement("option")
    opt.setAttribute("id", "opt")
    opt.innerText = `Valor ${val} adicionado`
    selec_box.appendChild(opt)
    lista_num.push(val)
    input_num.value = "";
}

function finalizar(){

    // Quantidade de valores
    quant = 0
    // Maior valor
    maior = 0
    // Menor valor
    menor = 0
    // Somatório
    soma = 0
    // Média
    media = 0

    // Quantifica os valores cadastrados
    for (i=0; i<lista_num.length; i++){
        quant++
    }

    // Define o maior valor
    for (i=0; i<lista_num.length; i++){
        if (lista_num[i] > maior)
            maior = lista_num[i]
    }

    // Define o menor valor
    for (i=0; i<lista_num.length; i++){
        if (i == 0)
            menor = lista_num[i]
        else (lista_num[i] < menor)
            menor = lista_num[i]
    }

    // Calcula a soma dos valores cadastrados
    for (i=0; i<lista_num.length; i++){
        soma += lista_num[i]
    }

    // Calcula a média dos valores cadastrados
    media = soma/quant

    // Resposta
    str_resp = `
    <p> Ao todo temos ${quant} números cadastrados </p>
    <p> O maior valor informado foi ${maior} </p>
    <p> O menor valor informado foi ${menor} </p>
    <p> A soma de todos os valores é ${soma} </p>
    <p> A média dos valores é ${media} </p>
    `;

    resp.innerHTML = str_resp
}
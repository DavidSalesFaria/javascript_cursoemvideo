function gerar_tabuada(){
    // Caixa de seleção
    selec_box = document.querySelector("select#seltabu")
    // Input
    input_num = document.querySelector("input#txtnumero")
    // Extrair valor do input
    numero = Number(input_num.value)

    // Limpar a caixa de seleção
    selec_box.innerHTML = ""
    // Laço para preencher a caixa de seleção
    for (i=1; i<=10; i++){
        // String n1 x n2 = resultado
        str_tabuada = `${numero} x ${i} = ${numero * i}`
        // Cria uma tag <option>
        opt = document.createElement("option")
        // Insere atributos na na option
        opt.setAttribute("id", `linhatabu${i}`)
        opt.setAttribute("value", `linhatabu${i}`)
        opt.setAttribute("onclick", `exibir_resposta()`)
        // Insere a string de tabuada na option
        opt.innerHTML = str_tabuada
        // Insere a option na caixa de seleção
        selec_box.appendChild(opt)
    }
}
function exibir_resposta(){
    // Caixa de seleção
    selec_box = document.querySelector("select#seltabu")
    // Caixa lateral
    side_box = document.querySelector("aside.sidebox")
    // Option selecionada
    opt_selecionada = document.querySelector(`option#${selec_box.value}`)
    // Insere o alor da option selecionada no h1 da caixa lateral
    side_box.innerHTML = `<h1>${opt_selecionada.innerHTML}</h1>`
}

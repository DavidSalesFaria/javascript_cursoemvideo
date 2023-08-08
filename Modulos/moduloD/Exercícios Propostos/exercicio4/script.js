function gerar_tabuada(){
    
    selec_box = document.querySelector("select#seltabu")
    input_num = document.querySelector("input#txtnumero")
    numero = Number(input_num.value)

    selec_box.innerHTML = ">"
    for (i=1; i<=10; i++){
        str_tabuada = `${numero} x ${i} = ${numero * i}`
        opt = document.createElement("option")
        opt.setAttribute("id", `linhatabu${i}`)
        opt.setAttribute("value", `linhatabu${i}`)
        opt.setAttribute("onclick", `gerar_resposta()`)
        opt.innerHTML = str_tabuada
        selec_box.appendChild(opt)
    }
}

function gerar_resposta(){
    selec_box = document.querySelector("select#seltabu")
    side_box = document.querySelector("aside.sidebox")
    opt_selecionada = document.querySelector(`option#${selec_box.value}`)
    side_box.innerHTML = `<h1>${opt_selecionada.innerHTML}</h1>`
}


function gerar_tabuada(){
    
    resp_box = document.querySelector("div.scroll-box")
    input_num = document.querySelector("input#txtnumero")
    numero = Number(input_num.value)

    for (i=0; i<=10; i++){
        str_tabuada = `${numero} x ${i} = ${numero * i}`
        parag = document.createElement("p")
        parag.setAttribute("class", "linha_tabu")
        parag.innerHTML = str_tabuada
        resp_box.appendChild(parag)
    }
}

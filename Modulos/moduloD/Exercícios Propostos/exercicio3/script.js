
function contar(){
    // Div de resposta
    resp = document.querySelector("div#resp")

    // Extrai o valor dos imputs e converte para numérico
    input_ini = document.querySelector("input#txtinicio")
    val_ini = input_ini.value
    input_fim = document.querySelector("input#txtfim")
    val_fim = input_fim.value
    input_pas = document.querySelector("input#txtpasso")
    val_pas = input_pas.value

    if (val_ini.length == 0){
        window.alert("ERRO!!! Insira um valor no campo Inicio.")
    }
    else if (val_fim.length == 0){
        window.alert("ERRO!!! Insira um valor no campo Fim.")
    }
    else{
        if (val_pas.length == 0){
            window.alert("Não posso contar com PASSO=0, assumindo PASSO=1")
            val_pas = "1"
        }
        // Altera o html do elemento 'resp'
        resp.innerHTML = "Contar: <br>"

        // Verifica se a contagem será sucessiva ou regressiva
        //
        if (Number(val_ini) <= Number(val_fim)){
            // Preenche string de resposta
            for (i=Number(val_ini); i <= Number(val_fim); i += Number(val_pas)){

                if (i + Number(val_pas) <= Number(val_fim))
                    resp.innerHTML += `${i} \u{1F449} `
                else
                    resp.innerHTML += `${i} 🏁`
            }
        }
        else{
            // Preenche string de resposta
            for (i=Number(val_ini); i >= Number(val_fim); i += Number(val_pas)){

                if (i + Number(val_pas) >= Number(val_fim))
                    resp.innerHTML += `${i} \u{1F449} `
                else
                    resp.innerHTML += `${i} 🏁`
            }
        }

        }   
}

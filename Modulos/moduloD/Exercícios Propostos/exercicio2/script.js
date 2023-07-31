function verificar(){
    // Obter data atual
    data = new Date()
    // Extrair ano da tada
    ano_atual = data.getFullYear()

    // Obter valor do campo 'Ano Nascimento'
    form_ano = window.document.querySelector("input#txtano")
    // Obter valor dos campos de seleção retorna um Array[]
    form_sex = window.document.getElementsByName("radsex")

    // Obtem a div de resposta
    resp = window.document.querySelector("div#resp")

    // Validar campo 'Ano Nascimento'
    if (form_ano.value.length == 0 || form_ano.value > ano_atual){
        window.alert('[ERRO]: Insira um valor válido!')
    }
    else{
        // Calcular idade
        idade = ano_atual - Number(form_ano.value)
        sexo = ""
        tipo = ""
        img = window.document.createElement("img")
        img.setAttribute("id", "foto")
        
        
        // Verifica qual é o sexo marcado no formulário
        if (form_sex[0].checked){
            sexo = "homem"

        }
        else if (form_sex[1].checked){
            sexo = "mulher"
            
        }

        if (idade >=0 && idade < 15){
            tipo = "crianca"
        }
        else if (idade >= 15 && idade < 18){
            tipo = "adolescente"
        }
        else if (idade >= 18 && idade < 30){
            tipo = "jovem"
        }
        else if (idade >= 30 && idade < 49){
            tipo = "adulto"
        }
        else if (idade >=50 && idade < 59){
            tipo = "maduro"
        }
        else{
            tipo = "idoso"
        }

        
        resp.innerHTML = `Detectei ${sexo} de ${idade} anos.`
        resp.style.textAlign = "center"
        img.setAttribute("src", `imagens/foto-${sexo}-${tipo}.png`)
        resp.appendChild(img)
        
    }

}
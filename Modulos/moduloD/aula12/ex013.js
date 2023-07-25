data = new Date()
dia_num = data.getDay()
dia_nome = ""

switch(dia_num){
    case (0):
        dia_nome = "Domingo"
        break

    case (1):
        dia_nome = "Segunda"
        break

    case (2):
        dia_nome = "Terça"
        break

    case (3):
        dia_nome = "Quarta"
        break

    case (4):
        dia_nome = "Quinta"
        break

    case (5):
        dia_nome = "Sexta"
        break
    
    case (6):
        dia_nome = "Sábado"
        break


    default:
        console.log('ERRO: Dia da semana inválido!')
}

console.log(dia_nome)



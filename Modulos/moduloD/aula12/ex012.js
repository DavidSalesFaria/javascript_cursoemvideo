agora = new Date()
hora = agora.getHours()

console.log(`São ${hora} horas`)
if ((hora >= 18) || (hora < 1 && hora > -1)){
    console.log('Boa noite')
}
else if (hora >= 12){
    console.log('Boa tarde')
}
else{
    console.log('Bom dia')
}
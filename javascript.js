function carregar(){
    var horaatual = new Date().getHours()
    var minutos = new Date().getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos;
    
    var hora = window.document.getElementById('divhora')
    hora.innerHTML = horaatual
    

    var img = window.document.getElementById('imagem')


    if (horaatual > 0 && horaatual < 12){
        hora.innerHTML = `Bom dia! agora são ${horaatual}:${minutos}`
        img.src = 'manha.jpg'
        img.style.borderRadius = '50%'
        document.body.style.backgroundColor = '#FEE5B4'
    }

    else if (horaatual >= 12 && horaatual <= 18){
        hora.innerHTML = `Boa Tarde! agora são ${horaatual}:${minutos}`
        img.src = 'tarde.jpg'
        img.style.borderRadius = '50%'
        document.body.style.backgroundColor = '#7E90D4'
    }

    else {
        hora.innerHTML = `Boa noite! agora são ${horaatual}:${minutos}`
        img.src = 'noite.jpg'
        img.style.borderRadius = '50%'
        document.body.style.backgroundColor = '#071E3E'
    }
}

setInterval(carregar, 1000);
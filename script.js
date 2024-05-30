function sortear(){

    const categorias = ['HTML' ,'FuteBol' ,'Física' , 'Edu-Física', 'Raciocínio Lógico']
    const perguntas = {
        "HTML": "HTML.html",
        "FuteBol": "Futebol.html",
        "Física": "fisica.html",
        "Edu-Física": "edufisica.html",
        "Raciocínio Lógico": "raciocinio.html"
    }

    const sortear = Math.floor(Math.random() * categorias.length)
    let sorteado = categorias[sortear]
    const direcionar = perguntas[sorteado]
    document.querySelector('#resu').innerHTML = sorteado

    const botao = document.querySelector('#Direcionar');
    botao.style.display = 'block'
    botao.onclick = function(){
        window.location.href = direcionar
    }
}

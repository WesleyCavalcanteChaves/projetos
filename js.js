
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
    botao.onclick = function(){ window.location.href = direcionar}
    para()
    const novamente = document.querySelector('.botaoind_novamente')
    novamente.style.display = 'block'
    }
function para(){
const ind = document.querySelector('.botaoind')
const prox = document.querySelector('#Direcionar')
prox.style.display = 'block'
ind.style.display = 'none'
}


let pontuacao = 0

function mostra(){
    console.log(pontuacao)
}



function parar() {
    const certa = document.querySelector('#certa')
    const errada = document.querySelector('#errada')
    const errada2 = document.querySelector('#errada2')
    const errada3 = document.querySelector('#errada3')
    const errada4 = document.querySelector('#errada4')
    certa.disabled = true
    errada.disabled = true
    errada2.disabled = true
    errada3.disabled = true
    errada4.disabled = true
    onclick = passar()

}

function certa(test) {
    
    test.onclick = parar()
    test.style.background = 'green'
    test.style.color = 'white'
    pontuacao = pontuacao + 10
    mostra()
    

}

function errada(test) {
    
    const certa = document.querySelector('#certa')
    test.onclick = parar()
    test.style.background = 'red'
    certa.style.background = 'green'
    test.style.color = 'white'
    certa.style.color = 'white'
    pontuacao = pontuacao - 5
    mostra()
}





function passar() {

    setTimeout(function () {
        const per2 = document.querySelector('.per2')
        const per1 = document.querySelector('.per1')
        per2.style.display = 'block'
        per1.style.display = 'none'




    }, 1000)



}









function parar1() {
    const certa1 = document.querySelector('#certa1')
    const errada21 = document.querySelector('#errada21')
    const errada22 = document.querySelector('#errada22')
    const errada23 = document.querySelector('#errada23')
    const errada24 = document.querySelector('#errada24')
    certa1.disabled = true
    errada23.disabled = true
    errada21.disabled = true
    errada22.disabled = true
    errada24.disabled = true
    onclick = passar1()

}

function certa1(test) {
    
    test.onclick = parar1()
    test.style.background = 'green'
    test.style.color = 'white'
    pontuacao = pontuacao + 10
    mostra()
    

}

function errada1(test) {
    const certa1 = document.querySelector('#certa1')
    test.onclick = parar1()
    test.style.background = 'red'
    certa1.style.background = 'green'
    test.style.color = 'white'
    certa1.style.color = 'white'
    pontuacao = pontuacao - 5
    mostra()
}

function passar1() {

    setTimeout(function () {
        const per3 = document.querySelector('.per3')
        const per2 = document.querySelector('.per2')
        per3.style.display = 'block'
        per2.style.display = 'none'




    }, 1000)



}





function parar2() {
    const certa2 = document.querySelector('#certa2')
    const errada31 = document.querySelector('#errada31')
    const errada32 = document.querySelector('#errada32')
    const errada33 = document.querySelector('#errada33')
    const errada34 = document.querySelector('#errada34')
    certa2.disabled = true
    errada33.disabled = true
    errada31.disabled = true
    errada32.disabled = true
    errada34.disabled = true
    onclick = passar2()

}

function certa2(test) {
    
    test.onclick = parar2()
    test.style.background = 'green'
    test.style.color = 'white'
    pontuacao = pontuacao + 10
    mostra()

}

function errada2(test) {
    const certa2 = document.querySelector('#certa2')
    test.onclick = parar2()
    test.style.background = 'red'
    certa2.style.background = 'green'
    test.style.color = 'white'
    certa2.style.color = 'white'
    pontuacao = pontuacao - 5
    mostra()
}

function passar2() {

    setTimeout(function () {
        const per4 = document.querySelector('.per4')
        const per3 = document.querySelector('.per3')
        per4.style.display = 'block'
        per3.style.display = 'none'




    }, 1000)



}





function parar3() {
    const certa3 = document.querySelector('#certa3')
    const errada41 = document.querySelector('#errada41')
    const errada42 = document.querySelector('#errada42')
    const errada43 = document.querySelector('#errada43')
    const errada44 = document.querySelector('#errada44')
    certa3.disabled = true
    errada43.disabled = true
    errada41.disabled = true
    errada42.disabled = true
    errada44.disabled = true
    onclick = passar3()
    mostra()

}

function certa3(test) {
    
    test.onclick = parar3()
    test.style.background = 'green'
    test.style.color = 'white'
    pontuacao = pontuacao + 10
    mostra()

}

function errada3(test) {
    const certa3 = document.querySelector('#certa3')
    test.onclick = parar3()
    test.style.background = 'red'
    certa3.style.background = 'green'
    test.style.color = 'white'
    certa3.style.color = 'white'
    pontuacao = pontuacao - 5
    mostra()
}

function passar3() {

    setTimeout(function () {
        const per5 = document.querySelector('.per5')
        const per4 = document.querySelector('.per4')
        per5.style.display = 'block'
        per4.style.display = 'none'




    }, 1000)



}








function parar4() {
    const certa4 = document.querySelector('#certa4')
    const errada51 = document.querySelector('#errada51')
    const errada52 = document.querySelector('#errada52')
    const errada53 = document.querySelector('#errada53')
    const errada54 = document.querySelector('#errada54')
    certa4.disabled = true
    errada53.disabled = true
    errada51.disabled = true
    errada52.disabled = true
    errada54.disabled = true
    onclick = passar4()

}

function certa4(test) {
    
    test.style.background = 'green'
    test.style.color = 'white'
    test.onclick = parar4()
    pontuacao = pontuacao + 10
    mostra()

}

function errada4(test) {
    pontuacao = pontuacao - 5
    const certa4 = document.querySelector('#certa4')
    test.onclick = parar4()
    test.style.background = 'red'
    certa4.style.background = 'green'
    test.style.color = 'white'
    certa4.style.color = 'white'
    mostra()
    
    
    
    
}

function passar4() {
    setTimeout(function () {
    
    const per5 = document.querySelector('.per5')
    
    const pontua = document.querySelector('.pontuacao')
    
    per5.style.display = 'none'
    
    pontua.style.display = 'block'
    
    document.querySelector('#pontu').innerHTML = pontuacao
    
    
    if(pontuacao <= 20){
        document.querySelector('.status').innerHTML = 'Dá pra melhorar '
    }
    if(pontuacao >= 20 && pontuacao <= 35){
        document.querySelector('.status').innerHTML = 'Ainda dá pra melhorar'
    }
    if(pontuacao >= 40){
        document.querySelector('.status').innerHTML = 'Você sabe muito!'
    }
        setTimeout(function(){
            salvar()
            window.location.href = 'index.html'

        },3000)
    

    }, 1000)

}

function salvar(){
    localStorage.setItem('pontuacao', pontuacao)
    
}
function carregar(){
    if(localStorage.getItem('pontuacao')){
        document.querySelector('#historico').innerHTML = localStorage.getItem('pontuacao')
    }
}

window.onload = function(){
    carregar()
}

function voltarmenu(){
    pontuacao = 0
    window.location.href = 'index.html'


}

const bloco = document.querySelector('.bloco')

function pulo(){
    if(bloco.classList != 'pular'){
    bloco.classList.add('pular')}

    setTimeout(function(){
    bloco.classList.remove('pular')
    
    },1200)
}




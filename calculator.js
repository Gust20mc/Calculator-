const result = document.querySelector(' .result ');
const confirm = document.querySelector(' .equal ');

function insert( valor ){
    result.innerHTML += valor;
}
function clean(){
    result.innerHTML = ' ';
}
function del(){
    if(result.textContent){
        let resultado = document.getElementById("resultado").innerHTML
        result.innerHTML = resultado.substring(0, resultado.length - 1);
    }
}
function confirma(){
    if (result.textContent != 'Erro'){
        document.getElementById("resultado").innerHTML = eval(result.innerHTML)
    }
}
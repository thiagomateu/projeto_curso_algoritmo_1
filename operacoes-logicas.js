


var nome, nota01, nota02, passou;

passou = false;

nome = prompt("digite o nome do aluno: ")
nota01 = prompt("digite a  nota 01  do aluno: ")
nota02 = prompt ("digite   nota 02 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50)
    passou = true;

if(passou && media >= 70 && media <= 90)
    alert("aprovado!" + nome)
else 
    alert("reprovado!" + nome)
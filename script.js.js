console.log('Iniciou script!');

let nota = prompt('Qual foi sua nota?');

let entregouTudo = confirm('Você entregou todos os trabalhos?');

if (nota >=6 && !entregouTudo) {
    alert('Parabéns você foi aprovado, mas da próxima entregue os trabalhos ;)');
}

    else if (nota >=6 && entregouTudo) {
        alert('Parabéns você foi aprovado! Catchal!!!');
    }

    else if (nota >= 5.5 && entregouTudo){
        alert('Você foi aprovado, mas agradeça o computador');
    }

else  {
    alert('Que pena, você reprovou :(');
}

/*
    && = e

    true && true --> true
    true && false --> false
    false && false --> false

    || = ou

    true || true --> true
    true || false --> true
    false || false --> false

    ! = contrário

*/
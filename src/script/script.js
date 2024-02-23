var qtd = 2;
function Verify(){
   
       var nota1 = Number(document.getElementByid('aluno-1-nota-1').value); 
       var nota2 = Number(document.getElementByid('aluno-1-nota-2').value); 
       var nota3 = Number(document.getElementByid('aluno-1-nota-3').value); 
       var nota4 = Number(document.getElementByid('aluno-1-nota-4').value);
       var notaTotal = 0;
       notaTotal = nota1 + nota2 + nota3 + nota4;
       alert(notaTotal) 
   
}

function AddRow(){
    qtd++;
    pai = document.getElementsByTagName('tbody');
    linha = document.createElement('tr');
    numero = document.createElement('th');
    saida = document.createElement('output');
    media = document.createElement('td');
    resultado = document.createElement('td');

    entradaNome = document.createElement('input');
    entradaNome.placeholder = 'nome';
    entradaNome.setAttribute('class', 'form-control');

    entradaN1 = document.createElement('input');
    entradaN1.setAttribute('class', 'form-control');

    entradaN2 = document.createElement('input');
    entradaN2.setAttribute('class', 'form-control');

    entradaN3 = document.createElement('input');
    entradaN3.setAttribute('class', 'form-control');

    entradaN4 = document.createElement('input');
    entradaN4.setAttribute('class', 'form-control');

    dadoNome = document.createElement('td');
    dadoNota1 = document.createElement('td');
    dadoNota2 = document.createElement('td');
    dadoNota3 = document.createElement('td');
    dadoNota4 = document.createElement('td');

    numero.innerText = qtd;

    pai[0].appendChild(linha);
    linha.appendChild(numero)
    
    dadoNome.appendChild(entradaNome);
    linha.appendChild(dadoNome);
    
    dadoNota1.appendChild(entradaN1);
    linha.appendChild(dadoNota1);

    dadoNota2.appendChild(entradaN2);
    linha.appendChild(dadoNota2);

    dadoNota3.appendChild(entradaN3);
    linha.appendChild(dadoNota3);

    dadoNota4.appendChild(entradaN4);
    linha.appendChild(dadoNota4);

    linha.appendChild(media);
    linha.appendChild(resultado);
    media.appendChild(saida);
    resultado.appendChild(saida);

    console.log(pai[0]);
}
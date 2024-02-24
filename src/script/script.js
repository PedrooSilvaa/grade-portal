var qtd = 2;
var nota = 0;
var aluno;
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
    saidaMedia = document.createElement('output');
    saidaMedia.setAttribute('id', "aluno-" + qtd + "-media");
    saidaResultado = document.createElement('output');
    saidaResultado.setAttribute('id', "aluno-" + qtd + "-situacao");

    media = document.createElement('td');
    resultado = document.createElement('td');

    entradaNome = document.createElement('input');
    entradaNome.placeholder = 'nome';
    entradaNome.setAttribute('class', 'form-control');

    entradaN1 = document.createElement('input');
    entradaN1.setAttribute('class', 'form-control');
    nota++;
    aluno = "aluno-" + qtd  + "-nota-" + nota;
    entradaN1.setAttribute('id', aluno)

    entradaN2 = document.createElement('input');
    entradaN2.setAttribute('class', 'form-control');
    nota++;
    aluno = "aluno-" + qtd  + "-nota-" + nota;
    entradaN2.setAttribute('id', aluno)

    entradaN3 = document.createElement('input');
    entradaN3.setAttribute('class', 'form-control');
    nota++;
    aluno = "aluno-" + qtd  + "-nota-" + nota;
    entradaN3.setAttribute('id', aluno)

    entradaN4 = document.createElement('input');
    entradaN4.setAttribute('class', 'form-control');
    nota++;
    aluno = "aluno-" + qtd  + "-nota-" + nota;
    entradaN4.setAttribute('id', aluno)

    dadoNome = document.createElement('td');
    dadoNota1 = document.createElement('td');
    dadoNota2 = document.createElement('td');
    dadoNota3 = document.createElement('td');
    dadoNota4 = document.createElement('td');
   

    nota = 0;

    numero.innerText = qtd;
    nota++
    aluno = "aluno-" + qtd  + "-nota-" + nota;
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
    media.appendChild(saidaMedia);
    resultado.appendChild(saidaResultado);

    console.log(pai[0]);
}

function Verify(){
    console.log("verificador" + qtd + " ");

    for(y = 0; y <= qtd; y++){
        for(i = 0   ; i <= nota; i++){
            var notas = document.getElementById("aluno-" + y + "-nota-" + i).value;
            media = notas / i;
            document.getElementById("aluno-" + y + "-media").innerText = media;
            console.log(media + nota )
        }
    }
}
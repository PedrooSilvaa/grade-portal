var qtd = 2;
var nota = 4;
var aluno = 0;
var somaNotas = 0;
var media = 0;
var situacao = "";
var tempNota = 4;
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
    if(qtd < 10){
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
        resultado.setAttribute('id', `aluno-${qtd}-td-output`);

        entradaNome = document.createElement('input');
        entradaNome.placeholder = 'nome';
        entradaNome.setAttribute('class', 'form-control');

        nota = 0;

        entradaN1 = document.createElement('input');
        entradaN1.setAttribute('type', 'number');
        entradaN1.setAttribute('class', 'form-control');
        nota++;
        aluno = "aluno-" + qtd  + "-nota-" + nota;
        entradaN1.setAttribute('id', aluno);

        entradaN2 = document.createElement('input');
        entradaN2.setAttribute('type', 'number');
        entradaN2.setAttribute('class', 'form-control');
        nota++;
        aluno = "aluno-" + qtd  + "-nota-" + nota;
        entradaN2.setAttribute('id', aluno);

        entradaN3 = document.createElement('input');
        entradaN3.setAttribute('type', 'number')
        entradaN3.setAttribute('class', 'form-control');
        nota++;
        aluno = "aluno-" + qtd  + "-nota-" + nota;
        entradaN3.setAttribute('id', aluno);

        entradaN4 = document.createElement('input');
        entradaN4.setAttribute('type', 'number');
        entradaN4.setAttribute('class', 'form-control');
        nota++;
        aluno = "aluno-" + qtd  + "-nota-" + nota;
        entradaN4.setAttribute('id', aluno);
        
        dadoNome = document.createElement('td');
        dadoNota1 = document.createElement('td');
        dadoNota2 = document.createElement('td');
        dadoNota3 = document.createElement('td');
        dadoNota4 = document.createElement('td');

        numero.innerText = qtd;
        pai[0].appendChild(linha);
        linha.appendChild(numero);
        
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
        
        if(tempNota >= 5){
            entradaN5 = document.createElement('input');
            entradaN5.setAttribute('type', 'number');
            entradaN5.setAttribute('class', 'form-control');
            aluno = `aluno-${qtd}-nota-5`;
            entradaN5.setAttribute('id', aluno)
            nota++;
            dadoNota5 = document.createElement('td');
            dadoNota5.appendChild(entradaN5);
            linha.appendChild(dadoNota5);
        }if(tempNota >= 6){
            entradaN6 = document.createElement('input');
            entradaN6.setAttribute('type', 'number');
            entradaN6.setAttribute('class', 'form-control');
            aluno = `aluno-${qtd}-nota-6`;
            entradaN6.setAttribute('id', aluno)
            nota++;
            dadoNota6 = document.createElement('td');
            dadoNota6.appendChild(entradaN6);
            linha.appendChild(dadoNota6);
        }

        linha.appendChild(media);
        linha.appendChild(resultado);
        media.appendChild(saidaMedia);
        resultado.appendChild(saidaResultado);

        console.log(pai[0]);
        console.log("adicionar linha" + nota);

        console.log("antes " + tempNota)


        
    }else{
        alert("Quantidade de alunos esgotada!!");
    }
}

function AddColumn(){
    console.log("qtd "+ qtd)
    var tabela = document.getElementById("minha-tabela");
    tempNota += 1;
    var numeroDeLinhas = tabela.rows.length;
    if(tempNota == 5){
            var novoTh = document.createElement('th');
            novoTh.textContent = "Nota 5";
            novoTh.setAttribute('scope', "col")
            novoTitulo = tabela.rows[0].insertCell(6);
            novoTitulo.appendChild(novoTh);
            nota++;
            for (var i =  1; i <= qtd; i++) {
            var novaCelula = tabela.rows[i].insertCell(6);
            entradaN5 = document.createElement('input');
            entradaN5.setAttribute('type', 'number')
            entradaN5.setAttribute('class', 'form-control');
            aluno = `aluno-${i}-nota-5`;
            entradaN5.setAttribute('id', aluno)
            novaCelula.appendChild(entradaN5);
        }
    
    }else if(tempNota == 6) {
            var novoTh = document.createElement('th');
            novoTh.textContent = "Nota 6";
            novoTh.setAttribute('scope', "col")
            novoTitulo = tabela.rows[0].insertCell(7);
            novoTitulo.appendChild(novoTh);
            nota++;
        for (var i =  1; i <= qtd; i++) {
            var novaCelula = tabela.rows[i].insertCell(6);
            entradaN6 = document.createElement('input');
            entradaN6.setAttribute('type', 'number')
            entradaN6.setAttribute('class', 'form-control');
            aluno = `aluno-${i}-nota-6`;
            entradaN6.setAttribute('id', aluno)
            novaCelula.appendChild(entradaN6);
        }
    }else{
        alert("Limite de notas atingidas")
    }
}

function Verify() {
    for (y = 1; y <= qtd; y++) {
        for (let i = 1; i <= nota; i++) {
            somaNotas +=  parseInt(document.getElementById(`aluno-${y}-nota-${i}`).value);
        }
        media = somaNotas / nota;
        document.getElementById(`aluno-${y}-media`).value = media;
        
        if(media >= 70){
            situacao = "Aprovado"
            document.getElementById(`aluno-${y}-td-output`).style.backgroundColor = "green";
            document.getElementById(`aluno-${y}-situacao`).value = situacao;
        }else if(media > 50 && media < 70) {
            situacao = "Recuperação"
            document.getElementById(`aluno-${y}-td-output`).style.backgroundColor = "yellow";
            document.getElementById(`aluno-${y}-situacao`).value = situacao;
        }else{
            situacao = "Reprovado"
            document.getElementById(`aluno-${y}-td-output`).style.backgroundColor = "red";
            document.getElementById(`aluno-${y}-situacao`).value = situacao;
        }

        media = 0;
        somaNotas = 0;
    }
}
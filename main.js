const agenda = document.getElementById('form-agenda');
const contatos = [];
const numeros = [];

let linhas = '';

agenda.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    adicionaNumero();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contatos.includes(inputNomeContato.value)){
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else{
        contatos.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</td>'

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}
